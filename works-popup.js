/**
 * Simple Works popup:
 * 1) click a card with data-index
 * 2) look up that index in data.json
 * 3) show image + description in a modal
 */
(function () {
  console.log("[works-popup] script file loaded");

  const FALLBACK_IMAGES = [
    "UA Enterprise.png",
    "kp.png",
    null,
    "FSA.png",
    null,
  ];

  let items = [];
  let modal = null;
  let listenersBound = false;

  function ensureModal() {
    // Reuse if still in the document; otherwise recreate (React can wipe body nodes).
    if (modal && document.body.contains(modal)) return modal;

    modal = document.createElement("div");
    modal.id = "works-popup";
    modal.setAttribute("aria-hidden", "true");
    // Inline styles so visibility never depends on a stylesheet surviving React.
    modal.style.cssText = [
      "position:fixed",
      "inset:0",
      "z-index:2147483647",
      "display:none",
      "align-items:center",
      "justify-content:center",
      "padding:20px",
      "background:rgba(0,0,0,0.72)",
      "backdrop-filter:blur(6px)",
      "-webkit-backdrop-filter:blur(6px)",
      "box-sizing:border-box",
    ].join(";");

    modal.innerHTML = `
      <div style="position:relative;width:min(920px,100%);max-height:92vh;overflow:auto;border-radius:16px;background:#111;border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 80px rgba(0,0,0,.45);color:#ddd;">
        <button type="button" data-close aria-label="Close" style="position:absolute;top:12px;right:12px;z-index:2;width:40px;height:40px;border:0;border-radius:999px;background:rgba(0,0,0,.55);color:#fff;font-size:22px;cursor:pointer;line-height:1;">&times;</button>
        <div data-media style="min-height:220px;max-height:48vh;display:flex;align-items:center;justify-content:center;background:#1a1a1a;overflow:hidden;">
          <img alt="" style="display:block;width:100%;max-height:48vh;object-fit:contain;" />
        </div>
        <div style="padding:20px 24px 28px;">
          <span data-type style="display:block;margin-bottom:6px;font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:#bbb;"></span>
          <h3 data-title style="margin:0 0 12px;font-size:clamp(22px,3vw,30px);color:#f5f5f5;"></h3>
          <p data-desc style="margin:0;line-height:1.65;white-space:pre-wrap;color:#d4d4d4;"></p>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    console.log("[works-popup] modal DOM created/appended to body");

    modal.querySelector("[data-close]").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      close();
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });

    return modal;
  }

  function imageUrl(item, index) {
    const raw = item.image || item.modalImage || FALLBACK_IMAGES[index];
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw) || raw.startsWith("/")) return raw;
    return "/" + encodeURI(raw.replace(/^\.\//, ""));
  }

  function open(item, index) {
    console.log("[works-popup] open()", {
      index,
      name: item.name,
      image: item.image,
    });

    const root = ensureModal();
    // Always re-append so React remounts cannot leave us detached.
    if (root.parentNode !== document.body) {
      document.body.appendChild(root);
      console.log("[works-popup] re-appended modal to body");
    }

    const media = root.querySelector("[data-media]");
    const img = root.querySelector("[data-media] img");
    const src = imageUrl(item, index);

    root.querySelector("[data-type]").textContent = item.type || "";
    root.querySelector("[data-title]").textContent = item.name || "Project";
    root.querySelector("[data-desc]").textContent =
      item.description || "No description yet. Add one in data.json.";

    if (src) {
      media.style.display = "flex";
      img.src = src;
      img.alt = item.name || "Project preview";
      console.log("[works-popup] image src set to", src);
    } else {
      media.style.display = "none";
      img.removeAttribute("src");
      img.alt = "";
      console.log("[works-popup] no image for this item");
    }

    // Force visible with inline style (do not rely on CSS classes).
    root.style.display = "flex";
    root.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const computed = window.getComputedStyle(root);
    console.log("[works-popup] modal visibility check", {
      inDocument: document.body.contains(root),
      inlineDisplay: root.style.display,
      computedDisplay: computed.display,
      computedVisibility: computed.visibility,
      computedOpacity: computed.opacity,
      computedZIndex: computed.zIndex,
      rect: root.getBoundingClientRect(),
    });
  }

  function close() {
    if (!modal) return;
    console.log("[works-popup] close()");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function handle(e) {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;

    const inWorks = !!el.closest("#Works");
    if (inWorks) {
      console.log("[works-popup] " + e.type + " inside #Works", {
        tag: el.tagName,
        className: el.className,
      });
    }

    if (el.closest("#works-popup")) return;

    const card = el.closest("#Works [data-index]");
    if (!card) {
      if (inWorks) {
        console.log(
          "[works-popup] click was in #Works but NO [data-index] ancestor found",
        );
      }
      return;
    }

    const index = Number(card.getAttribute("data-index"));
    console.log("[works-popup] matched card data-index =", index);

    if (!Number.isInteger(index) || index < 0) {
      console.warn("[works-popup] invalid index", card.getAttribute("data-index"));
      return;
    }

    const item = items[index];
    if (!item) {
      console.warn(
        "[works-popup] no data.json item for index",
        index,
        "items length =",
        items.length,
      );
      return;
    }

    console.log("[works-popup] found item:", item.name);
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    open(item, index);
  }

  async function load() {
    console.log("[works-popup] fetching /data.json ...");
    const res = await fetch("/data.json", { cache: "no-store" });
    console.log("[works-popup] data.json status", res.status);
    if (!res.ok) throw new Error("Failed to load data.json");
    const data = await res.json();
    items = Array.isArray(data.works?.items) ? data.works.items : [];
    console.log(
      "[works-popup] loaded items:",
      items.length,
      items.map((i) => i.name),
    );
  }

  function bindListeners() {
    if (listenersBound) return;
    listenersBound = true;
    document.addEventListener("pointerdown", handle, true);
    document.addEventListener("click", handle, true);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
    console.log("[works-popup] click listeners bound (capture phase)");
  }

  async function init() {
    console.log("[works-popup] init() start", {
      readyState: document.readyState,
    });
    ensureModal();
    bindListeners();

    try {
      await load();
    } catch (err) {
      console.warn("[works-popup] load failed", err);
    }

    console.log(
      "[works-popup] init() done. Cards found:",
      document.querySelectorAll("#Works [data-index]").length,
    );
  }

  if (document.readyState === "loading") {
    console.log("[works-popup] waiting for DOMContentLoaded");
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
