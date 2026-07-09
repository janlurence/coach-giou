/**
 * Runtime content loader — reads data.json and applies it after React hydration.
 * Edit data.json, refresh the page. For production deploys, also run:
 *   python3 apply-giou-data.py
 */
(function () {
  const APPLY_DELAYS = [500, 1500, 3000, 5000, 8000, 12000];
  let worksObserver = null;

  function applyWorksData(worksSection, items) {
    if (!worksSection || !items?.length) return;

    items.forEach((project, index) => {
      const card =
        worksSection.querySelector(`[data-index="${index}"]`) ||
        worksSection.querySelectorAll("aside .\\@container, aside [data-index]")[index];
      if (!card) return;

      const link = card.querySelector("a");
      if (link && project.link) {
        link.href = project.link;
      }

      if (project.image) {
        const imageSrc =
          project.image.startsWith("http") || project.image.startsWith("/")
            ? project.image
            : `/${encodeURI(project.image.replace(/^\.\//, ""))}`;
        card.querySelectorAll("img").forEach((img) => {
          img.src = imageSrc;
          img.srcset = "";
          img.removeAttribute("srcset");
          if (img.getAttribute("alt") === "background" || !img.alt) {
            img.alt = project.name || "Project preview";
          }
        });
      }

      const headings = card.querySelectorAll("h1.font-mono");
      if (headings[0] && project.type) {
        headings[0].textContent = project.type;
      }
      if (headings[1] && project.name) {
        headings[1].textContent = project.name;
      }

      const tags = card.querySelectorAll("span.tag");
      if (tags[0] && project.type) {
        tags[0].textContent = project.type;
      }
      if (tags[1] && project.year) {
        tags[1].textContent = project.year;
      }
    });
  }

  function watchWorksLabels(worksSection, items) {
    if (!worksSection || worksObserver) return;

    let timer = null;
    worksObserver = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => applyWorksData(worksSection, items), 250);
    });

    worksObserver.observe(worksSection, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  function charSpans(text) {
    return text
      .split("")
      .map(
        (ch) =>
          `<span class="inline-block" style="opacity: 1; transform: translateY(0)">${ch}</span>`,
      )
      .join("");
  }

  function wordSpans(text) {
    return text
      .split(/\s+/)
      .map(
        (word) =>
          `<span class="inline-block pr-2" style="opacity: 1; transform: translateY(0)">${word}</span>`,
      )
      .join("");
  }

  function skillItemHtml(name) {
    return `<div class="flex relative items-start gap-2 text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]">
      <span class="group relative block h-fit overflow-hidden font-medium select-none">
        <span class="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
          <h1 class="font-mono cursor-default">${name}</h1>
        </span>
        <span aria-hidden="true" class="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">
          <h1 class="font-mono cursor-default">${name}</h1>
        </span>
      </span>
    </div>`;
  }

  function skillsColumnHtml(category) {
    const items = category.items.map(skillItemHtml).join("");
    return `<div class="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start">
      <h3 class="hidden md:flex text-xl font-semibold mb-4">${category.name}</h3>
      <ul class="space-y-3 md:text-base">${items}</ul>
    </div>`;
  }

  function setMeta(name, content, attr = "name") {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function applyData(data) {
    const seoKeywords = Array.isArray(data.seo?.keywords)
      ? data.seo.keywords.join(",")
      : data.seo?.keywords;

    document.title = data.seo?.title || document.title;
    setMeta("description", data.seo?.description);
    setMeta("keywords", seoKeywords);
    setMeta("creator", data.identity?.name);
    setMeta("og:title", data.seo?.title, "property");
    setMeta("og:description", data.seo?.description, "property");
    setMeta("og:site_name", `${data.identity?.name} Portfolio`, "property");
    const ogImage = data.seo?.ogImage || `${(data.seo?.url || window.location.origin).replace(/\/$/, "")}/og-image.jpg?v=3`;
    setMeta("og:image", ogImage, "property");
    setMeta("twitter:image", ogImage);

    const headerTagline = document.querySelector("header span.block.w-fit");
    if (headerTagline && data.identity?.tagline) {
      headerTagline.textContent = data.identity.tagline;
    }

    const heroName = document.querySelector("h1 .flex.flex-col");
    if (heroName && data.identity) {
      heroName.innerHTML = `
        <div class="overflow-hidden"><span class="" style="opacity: 1">${charSpans(data.identity.displayNameLine1)}</span></div>
        <div class="overflow-hidden"><span class="" style="opacity: 1">${charSpans(data.identity.displayNameLine2)}</span></div>
      `;
    }

    const heroSubtitle = document.querySelector("h1 ~ div .break-words, h1 + div .break-words");
    if (heroSubtitle && data.hero?.subtitle) {
      heroSubtitle.innerHTML = wordSpans(data.hero.subtitle);
    }

    const toPublicSrc = (path) => {
      if (!path) return "";
      if (path.startsWith("http") || path.startsWith("/")) return path;
      return `/${encodeURI(path.replace(/^\.\//, ""))}`;
    };

    const heroImageSrc = toPublicSrc(
      data.identity?.heroImage || "GB-transparent.png",
    );
    const aboutImageSrc = toPublicSrc(
      data.identity?.profileImage || "profile.jpg",
    );

    const heroImg =
      document.querySelector('img[alt="Giou Bellingan logo"]') ||
      document.querySelector(
        'div.pointer-events-none.h-\\[15vh\\] img, div.md\\:h-\\[50vh\\] img',
      );
    if (heroImg && heroImageSrc) {
      heroImg.src = heroImageSrc;
      heroImg.removeAttribute("srcset");
      heroImg.alt = `${data.identity?.name || "Giou Bellingan"} logo`;
      heroImg.classList.remove("object-cover", "grayscale");
      heroImg.classList.add("object-contain");
    }

    const aboutImg = document.querySelector("#About img");
    if (aboutImg && aboutImageSrc) {
      aboutImg.src = aboutImageSrc;
      aboutImg.removeAttribute("srcset");
      aboutImg.alt = data.identity?.name || "Giou Bellingan";
    }

    document.querySelectorAll('[data-after]').forEach((el) => {
      if (data.hero?.cta) {
        const ctaHtml = data.hero.cta.replace("↗", "↗").replace("↗", "&nearrow;").replace(" ↗", " &nearrow;");
        el.setAttribute("data-after", ctaHtml);
        const label = el.querySelector("span span");
        if (label) label.textContent = data.hero.cta;
      }
    });

    const servicesSection = document.getElementById("Services");
    if (servicesSection && data.services) {
      const intro = servicesSection.querySelector(".max-w-\\[35ch\\] .overflow-hidden span");
      if (intro && data.services.intro) {
        intro.innerHTML = wordSpans(data.services.intro);
      }

      const cards = servicesSection.querySelectorAll(".sticky.border-t");
      data.services.items?.forEach((service, index) => {
        const card = cards[index];
        if (!card) return;

        const title = card.querySelector("h3");
        if (title) title.textContent = service.title;

        const description = card.querySelector("p.max-w-\\[40ch\\]");
        if (description) description.textContent = service.description;

        const bulletRows = card.querySelectorAll(
          ".divide-y > span, .divide-y > span.flex",
        );
        service.bullets?.forEach((bullet, bulletIndex) => {
          const row = bulletRows[bulletIndex];
          if (!row) return;
          const nodes = Array.from(row.childNodes);
          const textNode = nodes.find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
          if (textNode) {
            textNode.textContent = bullet;
          } else {
            row.appendChild(document.createTextNode(bullet));
          }
        });
      });
    }

    const worksSection = document.getElementById("Works");
    if (worksSection && data.works?.items) {
      applyWorksData(worksSection, data.works.items);
      watchWorksLabels(worksSection, data.works.items);
    }

    const aboutSection = document.getElementById("About");
    if (aboutSection && data.about) {
      const aboutHeading = aboutSection.querySelector("h2.section-heading");
      if (aboutHeading) {
        aboutHeading.innerHTML = `
          <span><div class="overflow-hidden"><span style="opacity:1">${charSpans(data.about.headingLine1)}</span></div></span>
          <span><div class="overflow-hidden"><span style="opacity:1">${charSpans(data.about.headingLine2)}</span></div></span>
          <span><div class="overflow-hidden"><span style="opacity:1">${charSpans("/")}</span></div></span>
        `;
      }

      const aboutTexts = aboutSection.querySelectorAll(
        '.max-w-\\[39ch\\] .break-words, .max-w-\\[38ch\\] .break-words, .max-w-\\[39ch\\] span span, .max-w-\\[38ch\\] span span',
      );
      const wordBlocks = Array.from(aboutTexts).filter((el) => el.closest(".overflow-hidden"));
      if (data.about.tagline && wordBlocks[0]) {
        wordBlocks[0].innerHTML = wordSpans(data.about.tagline);
      }
      if (data.about.bio && wordBlocks[1]) {
        wordBlocks[1].innerHTML = wordSpans(data.about.bio);
      }
      if (data.about.bioParagraph2 && wordBlocks[2]) {
        wordBlocks[2].innerHTML = wordSpans(data.about.bioParagraph2);
      }
    }

    const skillsSection = aboutSection?.querySelector(".max-w-6xl");
    if (skillsSection && data.skills?.categories) {
      const grid = skillsSection.querySelector(".grid.grid-cols-3");
      if (grid) {
        grid.innerHTML = data.skills.categories.map(skillsColumnHtml).join("");
      }
    }

    const contactSection = document.getElementById("Contact");
    if (contactSection && data.contactForm) {
      const heading = contactSection.querySelector("h2");
      if (heading) heading.textContent = data.contactForm.heading;

      const fields = data.contactForm.placeholders || {};
      const nameInput = contactSection.querySelector('input[name="name"]');
      const emailInput = contactSection.querySelector('input[name="email"]');
      const messageInput = contactSection.querySelector('textarea[name="message"]');
      const submitBtn = contactSection.querySelector('button[type="submit"]');

      if (nameInput && fields.name) nameInput.placeholder = fields.name;
      if (emailInput && fields.email) emailInput.placeholder = fields.email;
      if (messageInput && fields.message) messageInput.placeholder = fields.message;
      if (submitBtn && data.contactForm.submitLabel) {
        submitBtn.textContent = data.contactForm.submitLabel;
      }
    }

    document.querySelectorAll('a[href*="linkedin.com"]').forEach((link) => {
      if (data.social?.linkedin) {
        link.href = data.social.linkedin;
      }
    });

    document.querySelectorAll('a[href*="facebook.com"]').forEach((link) => {
      if (data.social?.facebook) {
        link.href = data.social.facebook;
      }
    });

    document.querySelectorAll('a[href*="github.com"]').forEach((link) => {
      if (data.social?.github) {
        link.href = data.social.github;
      }
    });

    if (data.contact?.email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
        link.href = `mailto:${data.contact.email}`;
        link.textContent = data.contact.email;
      });
    }
  }

  async function init() {
    try {
      const response = await fetch("/data.json", { cache: "no-store" });
      if (!response.ok) return;
      const data = await response.json();
      APPLY_DELAYS.forEach((delay) => setTimeout(() => applyData(data), delay));
    } catch (error) {
      console.warn("[data-loader] Could not load data.json", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
