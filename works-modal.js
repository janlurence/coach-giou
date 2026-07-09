/**
 * Work project modal — reads descriptions from data.json.
 * Capture-phase document listener so React/Next link handlers cannot win.
 */
(function () {
  const STYLE_ID = "works-modal-styles";
  const DEFAULT_CLOUDINARY_SRC = [
    "6_jugckf",
    "3_nzf5vb",
    "2_frjjt5",
    "7_lfufd9",
    "1_phf5ng",
  ];

  let projects = [];
  let modal = null;
  let bound = false;

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .works-modal {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.25rem;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.35s ease, visibility 0.35s ease;
      }

      .works-modal.is-open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .works-modal__backdrop {
        position: absolute;
        inset: 0;
        background: rgba(10, 10, 10, 0.72);
        backdrop-filter: blur(6px);
      }

      .works-modal__panel {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: min(920px, 100%);
        max-height: min(92vh, 920px);
        overflow: hidden;
        border-radius: 1rem;
        background: var(--color-secondary-400, #111);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
        transform: translateY(24px) scale(0.94);
        opacity: 0;
        transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
      }

      .works-modal.is-open .works-modal__panel {
        transform: translateY(0) scale(1);
        opacity: 1;
      }

      .works-modal__close {
        position: absolute;
        top: 0.85rem;
        right: 0.85rem;
        z-index: 2;
        width: 2.5rem;
        height: 2.5rem;
        border: 0;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.55);
        color: #fff;
        font-size: 1.35rem;
        line-height: 1;
        cursor: pointer;
      }

      .works-modal__image-wrap {
        position: relative;
        flex: 0 0 auto;
        overflow: hidden;
        border-radius: 1rem 1rem 0 0;
        background: var(--color-secondary-300, #1a1a1a);
        min-height: min(42vh, 420px);
        max-height: min(52vh, 480px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .works-modal__image-bg {
        position: absolute;
        inset: -12%;
        width: 124%;
        height: 124%;
        object-fit: cover;
        filter: blur(28px) saturate(1.15) brightness(0.72);
        pointer-events: none;
      }

      .works-modal__image-scrim {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.35));
        pointer-events: none;
      }

      .works-modal__image-stage {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1rem;
      }

      .works-modal__image {
        display: block;
        width: 100%;
        max-height: min(52vh, 520px);
        object-fit: contain;
        filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.35));
      }

      .works-modal__content {
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1.25rem 1.5rem 1.5rem;
      }

      .works-modal__type {
        flex: 0 0 auto;
        margin-bottom: 0.35rem;
        font-family: var(--font-montreal-mono, monospace);
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--color-secondary-50, #ccc);
      }

      .works-modal__title {
        flex: 0 0 auto;
        margin: 0 0 0.75rem;
        width: 100%;
        font-size: clamp(1.35rem, 2.5vw, 1.85rem);
        font-weight: 600;
        color: var(--color-accent-400, #f5f5f5);
      }

      .works-modal__description-wrap {
        flex: 1 1 auto;
        min-height: 0;
        width: 100%;
        overflow-y: auto;
        overscroll-behavior: contain;
      }

      .works-modal__description {
        margin: 0;
        width: 100%;
        line-height: 1.65;
        color: var(--color-secondary-50, #d4d4d4);
        white-space: pre-wrap;
      }

      #Works [data-index],
      #Works [data-index] a {
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  }

  function createModal() {
    injectStyles();
    const existing = document.querySelector(".works-modal");
    if (existing) return existing;

    const el = document.createElement("div");
    el.className = "works-modal";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = `
      <div class="works-modal__backdrop" data-close></div>
      <div class="works-modal__panel">
        <button type="button" class="works-modal__close" aria-label="Close">&times;</button>
        <div class="works-modal__image-wrap">
          <img class="works-modal__image-bg" alt="" aria-hidden="true" />
          <div class="works-modal__image-scrim" aria-hidden="true"></div>
          <div class="works-modal__image-stage">
            <img class="works-modal__image" alt="" />
          </div>
        </div>
        <div class="works-modal__content">
          <span class="works-modal__type"></span>
          <h3 class="works-modal__title"></h3>
          <div class="works-modal__description-wrap">
            <p class="works-modal__description"></p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(el);

    const close = () => closeModal(el);
    el.querySelector(".works-modal__close").addEventListener("click", close);
    el.querySelector("[data-close]").addEventListener("click", close);
    el.addEventListener("click", (event) => {
      if (event.target === el) close();
    });
    return el;
  }

  function resolveImage(project, card, index) {
    const fromData = project?.modalImage || project?.image;
    if (fromData) {
      return fromData.startsWith("http") || fromData.startsWith("/")
        ? fromData
        : `/${fromData.replace(/^\.\//, "")}`;
    }

    const img = card?.querySelector?.("img[src]");
    if (img?.src) return img.currentSrc || img.src;

    const cloudinarySrc =
      project?.cloudinarySrc || DEFAULT_CLOUDINARY_SRC[index] || "";
    if (cloudinarySrc) {
      return `https://res.cloudinary.com/dnocsf5bq/image/upload/q_auto,f_auto/${cloudinarySrc}.webp`;
    }

    return null;
  }

  function getProjectFromCard(card) {
    const headings = card.querySelectorAll("h1.font-mono, h1");
    const img = card.querySelector("img[alt], img[src]");

    return {
      type: headings[0]?.textContent?.trim() || "Project",
      name: headings[1]?.textContent?.trim() || "Project details",
      description:
        "Project details coming soon. Edit the description in data.json.",
      image: img?.getAttribute("src") || "",
    };
  }

  function openModal(project, card, index) {
    if (!modal) modal = createModal();

    const imageUrl = resolveImage(project, card, index);
    const imageWrap = modal.querySelector(".works-modal__image-wrap");
    const imageBgEl = modal.querySelector(".works-modal__image-bg");
    const imageEl = modal.querySelector(".works-modal__image");

    imageEl.alt = project.name || "Project preview";
    if (imageUrl) {
      imageWrap.style.display = "";
      imageEl.src = imageUrl;
      imageBgEl.src = imageUrl;
    } else {
      imageWrap.style.display = "none";
      imageEl.removeAttribute("src");
      imageBgEl.removeAttribute("src");
    }

    modal.querySelector(".works-modal__type").textContent = project.type || "";
    modal.querySelector(".works-modal__title").textContent = project.name || "";
    modal.querySelector(".works-modal__description").textContent =
      project.description ||
      "Project details coming soon. Edit the description in data.json.";

    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(el) {
    const target = el || modal;
    if (!target) return;
    target.classList.remove("is-open");
    target.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function findWorksCard(node) {
    if (!(node instanceof Element)) return null;
    const section = document.getElementById("Works");
    if (!section) return null;

    // Prefer explicit data-index cards, but also accept any Works project link.
    const byIndex = node.closest("#Works [data-index]");
    if (byIndex && section.contains(byIndex)) return byIndex;

    const link = node.closest("#Works aside a");
    if (link && section.contains(link)) {
      return link.closest("[data-index]") || link.parentElement || link;
    }

    return null;
  }

  function onWorksClick(event) {
    const card = findWorksCard(event.target);
    if (!card) return;

    const indexAttr = card.getAttribute("data-index");
    const index = indexAttr != null ? Number(indexAttr) : -1;
    const project =
      (index >= 0 && projects[index]) || getProjectFromCard(card);

    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }

    openModal(project, card, index >= 0 ? index : 0);
  }

  function bindClicks() {
    if (bound) return;
    bound = true;
    // Capture phase + stopImmediatePropagation beats React synthetic handlers.
    document.addEventListener("click", onWorksClick, true);
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape" && modal?.classList.contains("is-open")) {
          closeModal(modal);
        }
      },
      true,
    );
  }

  async function loadProjects() {
    try {
      const response = await fetch("/data.json", { cache: "no-store" });
      if (!response.ok) return;
      const data = await response.json();
      projects = data.works?.items || [];
    } catch (error) {
      console.warn("[works-modal] Could not load data.json", error);
    }
  }

  function init() {
    modal = createModal();
    bindClicks();
    loadProjects();
  }

  // Bind as early as possible — do not wait for data.json.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
