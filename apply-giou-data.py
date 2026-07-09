#!/usr/bin/env python3
"""Apply content from data.json into coach-giou HTML + JS bundle.

Usage:
  1. Edit data.json
  2. Run: python3 apply-giou-data.py
  3. Refresh the site (or redeploy to Vercel)

For live preview while developing, data-loader.js also reads data.json
after page load — but always run this script before deploying.
"""

import json
import re
from pathlib import Path
from typing import Optional, Tuple
from urllib.parse import quote

ROOT = Path(__file__).parent
INDEX = ROOT / "index.html"
DATA_JSON = ROOT / "data.json"
JS_BUNDLE = ROOT / "_next/static/chunks/app/page-77f38f7782b59527.js"


def load_data() -> dict:
    with DATA_JSON.open(encoding="utf-8") as f:
        return json.load(f)


def flatten(data: dict) -> dict:
    """Normalize data.json into fields used by patch routines."""
    seo_keywords = data.get("seo", {}).get("keywords", [])
    if isinstance(seo_keywords, list):
        seo_keywords = ",".join(seo_keywords)

    hero_cta = data.get("hero", {}).get("cta", "CONTACT ↗")
    return {
        "name": data["identity"]["name"],
        "display_name_line1": data["identity"]["displayNameLine1"],
        "display_name_line2": data["identity"]["displayNameLine2"],
        "tagline": data["identity"]["tagline"],
        "profile_image": data["identity"].get("profileImage", "profile.jpg"),
        "hero_image": data["identity"].get("heroImage", "GB-transparent.png"),
        "seo_title": data["seo"]["title"],
        "seo_description": data["seo"]["description"],
        "seo_keywords": seo_keywords,
        "seo_url": data["seo"].get("url", "https://gioubellingan.com"),
        "hero_subtitle": data["hero"]["subtitle"],
        "hero_cta": hero_cta,
        "hero_cta_html": hero_cta.replace("↗", "&nearrow;").replace(" ↗", " &nearrow;"),
        "availability": data["contact"]["availability"],
        "email": data["contact"]["email"],
        "linkedin": data["social"]["linkedin"],
        "facebook": data["social"].get("facebook", ""),
        "github": data["social"].get("github", ""),
        "services_intro": data["services"]["intro"],
        "services": data["services"]["items"],
        "works": data["works"]["items"],
        "about_line1": data["about"]["headingLine1"],
        "about_line2": data["about"]["headingLine2"],
        "about_tagline": data["about"]["tagline"],
        "about_bio": data["about"]["bio"],
        "about_bio2": data["about"].get("bioParagraph2", ""),
        "skills_categories": data["skills"]["categories"],
        "skills": {
            category["name"]: category["items"]
            for category in data["skills"]["categories"]
        },
        "contact_form": data.get("contactForm", {}),
        "footer_copyright": data.get("footer", {}).get("copyright", data["identity"]["name"]),
        "raw": data,
    }


def char_spans(text: str, indent: str = "                  ") -> str:
    return "\n".join(
        f'{indent}<span class="inline-block" style="opacity: 0; transform: translateY(100%)">{ch}</span>'
        for ch in text
    )


def word_spans(text: str, indent: str = "                        ") -> str:
    return "\n".join(
        f'{indent}<span class="inline-block pr-2" style="opacity: 0; transform: translateY(100%)">{word}</span>'
        for word in text.split()
    )


def word_spans_multiline(text: str) -> str:
    return "\n".join(
        f'''                        <span
                          class="inline-block pr-2"
                          style="opacity: 0; transform: translateY(100%)"
                        >
                          {word}
                        </span>'''
        for word in text.split()
    )


def skill_item_html(name: str) -> str:
    return f"""                          <div
                            class="flex relative items-start gap-2 text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]"
                          >
                            <span
                              class="group relative block h-fit overflow-hidden font-medium select-none"
                            >
                              <span
                                class="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full"
                              >
                                <h1 class="font-mono cursor-default">{name}</h1>
                              </span>
                              <span
                                aria-hidden="true"
                                class="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                              >
                                <h1 class="font-mono cursor-default">{name}</h1>
                              </span>
                            </span>
                          </div>"""


def skills_column_html(category: dict) -> str:
    title = category["name"].replace("&", "&amp;")
    items = "\n".join(skill_item_html(item) for item in category["items"])
    return f"""                      <div
                        class="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start"
                      >
                        <h3 class="hidden md:flex text-xl font-semibold mb-4">
                          {title}
                        </h3>
                        <ul class="space-y-3 md:text-base">
{items}
                        </ul>
                      </div>"""


def skills_grid_html(categories: list) -> str:
    return "\n".join(skills_column_html(category) for category in categories)


def skills_js_object(categories: list) -> str:
    parts = []
    for category in categories:
        items = ",\n          ".join(f'"{item}"' for item in category["items"])
        parts.append(f'        "{category["name"]}": [\n          {items},\n        ]')
    return "let E = {\n" + ",\n".join(parts) + "\n      };"


DEFAULT_WORKS_MEDIA = [
    {
        "src": "6_jugckf",
        "muxid": "QpLBMxnNQMQHXri9nqPfg1nZLyJn5kg01vXlmX1auvEc",
        "blurDataUrl": "../../../../_external/res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325061/6_jugckf.webp",
    },
    {
        "src": "3_nzf5vb",
        "muxid": "ZV01irv5jPmaRLo6XEcm5o4QHrEd9g6Rr5GyqdMd1R6g",
        "blurDataUrl": "../../../../_external/res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325070/3_nzf5vb.jpg",
    },
    {
        "src": "2_frjjt5",
        "muxid": "viGHALwiNN7x4lw9K5ieeljgwL3z02KfplK56WNafF9k",
        "blurDataUrl": "../../../../_external/res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325060/2_frjjt5.webp",
    },
    {
        "src": "7_lfufd9",
        "muxid": "6XNHwd01zOc87HAEvIL44GrSDL5vNQv9WSo00o02aNEeRg",
        "blurDataUrl": "../../../../_external/res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325062/7_lfufd9.webp",
    },
    {
        "src": "1_phf5ng",
        "muxid": "KgB1H01cuYG14gDffVE1MPflRm4vG7z2YgTcsZN6Bplg",
        "blurDataUrl": "../../../../_external/res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325060/1_phf5ng.webp",
    },
]


def public_image_path(filename: str) -> str:
    if filename.startswith(("http://", "https://", "/")):
        return filename
    return "/" + filename.lstrip("./")


def replace_nth_word_span_block(html: str, new_text: str, n: int) -> str:
    pattern = re.compile(
        r'(<span class="">\s*)(?:(?:<span[^>]*class="inline-block pr-2"[^>]*>.*?</span>\s*)+)(</span>)',
        re.DOTALL,
    )
    matches = list(pattern.finditer(html))
    if n >= len(matches):
        return html
    match = matches[n]
    replacement = (
        f"{match.group(1)}{word_spans_multiline(new_text)}\n                      {match.group(2)}"
    )
    return html[: match.start()] + replacement + html[match.end() :]


def strip_work_video_overlay(chunk: str) -> str:
    return re.sub(
        r'<div[^>]*class="z-10 aspect-\[4/3\] w-full overflow-clip rounded-lg"[^>]*>\s*'
        r'<div[^>]*class="aspect-\[4/3\] w-full rounded-lg bg-gray-100 overflow-hidden"[^>]*>\s*</div>\s*'
        r"</div>",
        "",
        chunk,
        flags=re.DOTALL,
    )


def local_image_path(filename: str) -> str:
    if filename.startswith(("/", ".")):
        return filename
    encoded = "/".join(quote(part) for part in filename.split("/"))
    return f"../../../../{encoded}"


def resolve_work_media(index: int, project: dict) -> dict:
    """Build work media from defaults + explicit data.json overrides only."""
    defaults = DEFAULT_WORKS_MEDIA[index] if index < len(DEFAULT_WORKS_MEDIA) else {}
    media = {
        "src": defaults.get("src", ""),
        "muxid": "",
        "blurDataUrl": defaults.get("blurDataUrl", ""),
    }

    if project.get("image"):
        media["src"] = local_image_path(project["image"])

    if project.get("blurDataUrl"):
        media["blurDataUrl"] = project["blurDataUrl"]

    return media


def find_works_array_bounds(js: str) -> Optional[Tuple[int, int]]:
    markers = [
        'src: "6_jugckf"',
        'muxid: "QpLBMxnNQMQHXri9nqPfg1nZLyJn5kg01vXlmX1auvEc"',
        'name: "Acme Booking System"',
        'name: "UA Production System"',
    ]
    anchor = next((js.find(marker) for marker in markers if js.find(marker) != -1), -1)
    if anchor == -1:
        return None
    start = js.rfind("n = [", 0, anchor)
    end = js.find("];", anchor)
    if start == -1 or end == -1:
        return None
    return start, end + 2


def extract_works_media(js: str) -> list[dict]:
    bounds = find_works_array_bounds(js)
    if not bounds:
        return []
    block = js[bounds[0] : bounds[1]]
    entries = []
    for obj_match in re.finditer(
        r'src:\s*"([^"]*)",\s*muxid:\s*"([^"]*)",\s*type:\s*"([^"]*)",\s*name:\s*"([^"]*)",\s*link:\s*"([^"]*)",(?:\s*year:\s*"[^"]*",)?\s*blurDataUrl:\s*(?:"([^"]*)"|(?:\n\s*"([^"]*)"))',
        block,
        re.DOTALL,
    ):
        blur = obj_match.group(6) or obj_match.group(7) or ""
        entries.append(
            {
                "src": obj_match.group(1),
                "muxid": obj_match.group(2),
                "blurDataUrl": blur,
            }
        )
    return entries


def works_js_array(works_items: list, media_entries: list) -> str:
    objects = []
    for i, project in enumerate(works_items):
        media = resolve_work_media(i, project)
        name = project["name"].replace('"', '\\"')
        type_ = project["type"].replace('"', '\\"')
        link = project["link"].replace('"', '\\"')
        year = project.get("year", "").replace('"', '\\"')
        objects.append(
            f"""            {{
              src: "{media["src"]}",
              muxid: "{media["muxid"]}",
              type: "{type_}",
              name: "{name}",
              link: "{link}",
              year: "{year}",
              blurDataUrl:
                "{media["blurDataUrl"]}",
            }}"""
        )
    return "n = [\n" + ",\n".join(objects) + "\n          ];"


def js_escape(text: str) -> str:
    return text.replace("\\", "\\\\").replace('"', '\\"')


def patch_about_js(js: str, data: dict) -> str:
    """Replace About section body copy used by React hydration."""
    replacements = [
        (
            "I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.",
            data["about_tagline"],
        ),
        (
            "I help business owners turn manual work into digital systems that save time and support growth.",
            data["about_tagline"],
        ),
        (
            "I\u2019m a full-stack developer who builds fast, modern web applications mostly with Next.js and Tailwind CSS because they just work. I work with businesses and startups to turn ideas into reliable, user-friendly products built to scale. ",
            data["about_bio"],
        ),
        (
            "I'm a full-stack developer who builds fast, modern web applications mostly with Next.js and Tailwind CSS because they just work. I work with businesses and startups to turn ideas into reliable, user-friendly products built to scale. ",
            data["about_bio"],
        ),
        (
            "I build custom websites, dashboards, and automation tools designed around how your business actually works.",
            data["about_bio"],
        ),
        (
            "I've been building websites long enough to have strong opinions about things that don't matter to most people, like whether a transition should be 150ms or 200ms. (It's 150ms, btw). Build the thing, make it work, make it feel good. That's the gig.",
            data["about_bio2"],
        ),
        (
            "From landing pages to internal systems, I create practical, maintainable solutions that help you attract customers, streamline operations, and scale with confidence.",
            data["about_bio2"],
        ),
    ]
    seen = set()
    for old, new in replacements:
        if not old or not new or old == new or (old, new) in seen:
            continue
        seen.add((old, new))
        js = js.replace(f'text: "{js_escape(old)}"', f'text: "{js_escape(new)}"')
    return js


def patch_html(html: str, data: dict) -> str:
    # SEO / meta
    meta_pairs = [
        ("Zuned Aalim - Full Stack Developer", data["seo_title"]),
        ("Giou Bellingan — Full Stack Web Developer", data["seo_title"]),
        (
            "Portfolio website of Zuned Aalim showcasing projects, skills, and contact information.",
            data["seo_description"],
        ),
        (
            "Giou Bellingan builds custom websites and software systems for business owners who want to save time, get more customers, and scale with confidence.",
            data["seo_description"],
        ),
        (
            "Zuned Aalim,Full Stack Developer,Portfolio,Web Developer,React,Next.js",
            data["seo_keywords"],
        ),
        ('content="Zuned Aalim"', f'content="{data["name"]}"'),
        ('content="@ZunedAalim"', f'content="{data["name"]}"'),
        ("https://zunedaalim.com", data["seo_url"]),
        ("Zuned Aalim Portfolio", f'{data["name"]} Portfolio'),
        ("Web Developer &amp; Designer", data["tagline"]),
        ("Web Developer \\u0026 Designer", data["tagline"]),
        ("Web Systems for Growing Businesses", data["tagline"]),
    ]
    for old, new in meta_pairs:
        html = html.replace(old, new)

    profile_src = public_image_path(data["profile_image"])
    hero_src = public_image_path(data.get("hero_image", "GB-transparent.png"))

    # Keep About on the profile photo.
    html = html.replace('href="1.webp"', f'href="{profile_src}"')
    html = re.sub(
        r'(id="About"[\s\S]*?<img[\s\S]*?src=")[^"]+(")',
        rf'\1{profile_src}\2',
        html,
        count=1,
    )

    # Hero uses the logo (transparent GB mark).
    html = re.sub(
        r'(pointer-events-none h-\[15vh\][\s\S]*?<img[\s\S]*?src=")[^"]+(")',
        rf'\1{hero_src}\2',
        html,
        count=1,
    )
    html = html.replace('alt="Just an Image."', f'alt="{data["name"]}"')

    # Hero: text name on all breakpoints, hide SVG
    html = html.replace('class="hidden h-full w-full md:block"', 'class="hidden"')
    html = html.replace(
        'class="flex flex-col text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)] md:hidden"',
        'class="flex flex-col text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)]"',
    )

    hero_name_block = (
        f'<div class="overflow-hidden">\n                <span class="" style="opacity: 0">\n'
        f"{char_spans(data['display_name_line1'])}\n"
        f"                </span>\n              </div>\n              <div class=\"overflow-hidden\">\n                <span class=\"\" style=\"opacity: 0\">\n"
        f"{char_spans(data['display_name_line2'])}\n"
        f"                </span>\n              </div>"
    )
    html = re.sub(
        r'<span\s+class="flex flex-col text-\[length:var\(--text-heading-display\)\][^"]*">\s*'
        r'<div class="overflow-hidden">.*?</div>\s*'
        r'<div class="overflow-hidden">.*?</div>\s*'
        r"</span>",
        f'<span class="flex flex-col text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)]">\n              {hero_name_block}\n            </span>',
        html,
        count=1,
        flags=re.DOTALL,
    )

    html = re.sub(
        r'<span class="break-words">.*?</span>',
        f'<span class="break-words">\n{word_spans(data["hero_subtitle"])}\n                      </span>',
        html,
        count=1,
        flags=re.DOTALL,
    )

    html = html.replace("CONTACT &nearrow;", data["hero_cta_html"])
    html = html.replace('data-after="CONTACT &nearrow;"', f'data-after="{data["hero_cta_html"]}"')
    html = html.replace('data-after="LET\'S BUILD YOUR SYSTEM &nearrow;"', f'data-after="{data["hero_cta_html"]}"')
    html = html.replace("LET'S BUILD YOUR SYSTEM &nearrow;", data["hero_cta_html"])

    # Services intro
    services_idx = html.find("(Services)")
    if services_idx != -1:
        chunk = html[services_idx : services_idx + 12000]
        updated = re.sub(
            r'(<span class="">\s*)'
            r"(?:<span class=\"inline-block pr-2\"[^>]*>.*?</span>\s*)+"
            r"(</span>)",
            r"\1" + word_spans_multiline(data["services_intro"]) + r"\n                      \2",
            chunk,
            count=1,
            flags=re.DOTALL,
        )
        html = html[:services_idx] + updated + html[services_idx + 12000 :]

    # Service cards by number marker
    for service in data["services"]:
        marker = f"({service['number']})"
        idx = html.find(marker)
        if idx == -1:
            continue
        chunk = html[idx : idx + 5000]
        chunk = re.sub(r"(<h3[^>]*>)(.*?)(</h3>)", rf"\1\n                      {service['title']}\n                    \3", chunk, count=1, flags=re.DOTALL)
        chunk = re.sub(
            r'(<p class="max-w-\[40ch\][^"]*"[^>]*>)(.*?)(</p>)',
            rf"\1\n                        {service['description']}\n                      \3",
            chunk,
            count=1,
            flags=re.DOTALL,
        )
        for i, bullet in enumerate(service["bullets"]):
            chunk = re.sub(
                rf"(>\s*0\s*<!--\s*-->\s*{i + 1}\s*</span>\s*)([^<]+)(</span>)",
                rf"\1\n                          {bullet}\n                        \3",
                chunk,
                count=1,
                flags=re.DOTALL,
            )
        html = html[:idx] + chunk + html[idx + 5000 :]

    # Works
    for i, project in enumerate(data["works"]):
        card_marker = f'data-index="{i}"'
        idx = html.find(card_marker)
        if idx == -1:
            continue
        chunk = html[idx : idx + 2500]
        chunk = re.sub(
            r'<a\s+href="[^"]*"(?:\s+rel="noopener noreferrer"\s+target="_blank")?\s*>',
            f'<a\n                  href="{project["link"]}"\n                >',
            chunk,
            count=1,
            flags=re.DOTALL,
        )
        chunk = strip_work_video_overlay(chunk)
        headings = list(re.finditer(r"<h1 class=\"font-mono[^\"]*\">([^<]*)</h1>", chunk))
        if len(headings) >= 2:
            chunk = chunk[: headings[0].start(1)] + project["type"] + chunk[headings[0].end(1) :]
            headings = list(re.finditer(r"<h1 class=\"font-mono[^\"]*\">([^<]*)</h1>", chunk))
            if len(headings) >= 2:
                chunk = chunk[: headings[1].start(1)] + project["name"] + chunk[headings[1].end(1) :]
        if project.get("year") or project.get("type"):
            type_label = project.get("type", "Development")
            year_label = project.get("year", "")
            type_tag = f'<span class="tag"> {type_label} </span>'
            year_tag = (
                f'<span class="tag border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] '
                f'text-[var(--color-secondary-400)]">{year_label}</span>'
            )
            chunk = re.sub(
                r'<span class="tag">\s*[^<]*\s*</span>\s*'
                r'<span class="tag border-\[var\(--color-secondary-50\)\][^"]*"[^>]*>\s*[^<]*\s*</span>',
                f"{type_tag}\n                      {year_tag}",
                chunk,
                count=1,
                flags=re.DOTALL,
            )
        html = html[:idx] + chunk + html[idx + 2500 :]

    # About heading
    about_idx = html.find('id="About"')
    if about_idx != -1:
        about_chunk = html[about_idx : about_idx + 6000]
        new_about_heading = (
            f'<span>\n                  <div class="overflow-hidden">\n                    <span class="" style="opacity: 0">\n'
            f"{char_spans(data['about_line1'], indent='                      ')}\n"
            f'                    </span>\n                  </div>\n                </span>\n                <span>\n                  <div class="overflow-hidden">\n                    <span class="" style="opacity: 0">\n'
            f"{char_spans(data['about_line2'], indent='                      ')}\n"
            f'                    </span>\n                  </div>\n                </span>\n                <span>\n                  <div class="overflow-hidden">\n                    <span class="" style="opacity: 0">\n'
            f'{char_spans("/", indent="                      ")}\n'
            f"                    </span>\n                  </div>\n                </span>"
        )
        about_chunk = re.sub(
            r"<span>\s*<div class=\"overflow-hidden\">.*?</span>\s*"
            r"<span>\s*<div class=\"overflow-hidden\">.*?</span>\s*"
            r"<span>\s*<div class=\"overflow-hidden\">.*?</span>",
            new_about_heading,
            about_chunk,
            count=1,
            flags=re.DOTALL,
        )
        html = html[:about_idx] + about_chunk + html[about_idx + 6000 :]

        about_end = html.find('id="Contact"', about_idx)
        if about_end == -1:
            about_end = html.find("</section>", about_idx)
        if about_end != -1:
            about_body = html[about_idx:about_end]
            about_body = replace_nth_word_span_block(about_body, data["about_tagline"], 0)
            about_body = replace_nth_word_span_block(about_body, data["about_bio"], 1)
            about_body = replace_nth_word_span_block(about_body, data["about_bio2"], 2)
            html = html[:about_idx] + about_body + html[about_end:]

    # Skills grid — rebuild all columns from data.json
    skills_match = re.search(
        r'(<h2[^>]*>\s*Skills\s*</h2>\s*<div\s+class="grid grid-cols-3[^"]*"[^>]*>\s*)(.*?)(\s*</div>\s*</div>\s*</section>)',
        html,
        flags=re.DOTALL,
    )
    if skills_match:
        html = (
            html[: skills_match.start(2)]
            + skills_grid_html(data["skills_categories"])
            + html[skills_match.end(2) :]
        )

    # Contact form
    form = data["contact_form"]
    if form:
        html = re.sub(
            r"(<section[^>]*id=\"Contact\"[^>]*>[\s\S]*?<h2[^>]*>)(.*?)(</h2>)",
            rf"\1\n              {form.get('heading', 'Have a project in mind?')}\n              \3",
            html,
            count=1,
        )
        placeholders = form.get("placeholders", {})
        html = re.sub(r'placeholder="Your name"', f'placeholder="{placeholders.get("name", "Your name")}"', html)
        html = re.sub(r'placeholder="Your email address"', f'placeholder="{placeholders.get("email", "Your email address")}"', html)
        html = re.sub(
            r'placeholder="Tell me about your business or project"',
            f'placeholder="{placeholders.get("message", "Tell me about your business or project")}"',
            html,
        )
        if form.get("submitLabel"):
            html = re.sub(r"(<button[^>]*type=\"submit\"[^>]*>)(.*?)(</button>)", rf"\1\n                {form['submitLabel']}\n              \3", html, count=1, flags=re.DOTALL)

    # Social + email
    html = html.replace('href="https://www.linkedin.com/in/zunedaalim/"', f'href="{data["linkedin"]}"')
    html = html.replace('href="https://www.linkedin.com/in/giou-keannu-bellingan-94802827a/"', f'href="{data["linkedin"]}"')
    html = re.sub(r'href="mailto:[^"]*"', f'href="mailto:{data["email"]}"', html)
    html = re.sub(
        r'\s*<li>\s*<a[^>]*href="https://www\.instagram\.com/[^"]*"[^>]*>.*?</a>\s*</li>',
        "",
        html,
        flags=re.DOTALL,
    )
    if data.get("facebook"):
        html = re.sub(
            r'href="https://www\.facebook\.com/[^"]*"',
            f'href="{data["facebook"]}"',
            html,
        )
    if data.get("github"):
        html = re.sub(
            r'href="https://github\.com/[^"]*"',
            f'href="{data["github"]}"',
            html,
        )

    # Ensure runtime loader is wired
    loader_tag = '<script src="data-loader.js" defer></script>'
    if loader_tag not in html:
        html = html.replace("</body>", f"    {loader_tag}\n  </body>")

    return html


def patch_js(js: str, data: dict) -> str:
    services = data["services"]
    profile_src = public_image_path(data["profile_image"])
    hero_src = public_image_path(data.get("hero_image", "GB-transparent.png"))
    profile_alt = js_escape(data["name"])
    hero_alt = js_escape(f'{data["name"]} logo')

    # About photo (object-cover, no grayscale)
    js = re.sub(
        r'src:\s*"(?:/\.?\.?/?)*(?:profile\.jpg|1\.webp|GB-transparent\.png)",\s*'
        r'priority:\s*!0,\s*'
        r'alt:\s*"[^"]*",\s*'
        r'width:\s*\d+,\s*'
        r'height:\s*\d+,\s*'
        r'className:\s*"h-full w-full object-cover object-center"',
        f'src: "{profile_src}",\n'
        f'                          priority: !0,\n'
        f'                          alt: "{profile_alt}",\n'
        f'                          width: 1536,\n'
        f'                          height: 2040,\n'
        f'                          className: "h-full w-full object-cover object-center"',
        js,
        count=1,
    )

    # Hero logo (object-contain, no grayscale)
    js = re.sub(
        r'src:\s*"(?:/\.?\.?/?)*(?:profile\.jpg|1\.webp|GB-transparent\.png|GB\.png)",\s*'
        r'alt:\s*"[^"]*",\s*'
        r'width:\s*\d+,\s*'
        r'height:\s*\d+,\s*'
        r'priority:\s*!0,\s*'
        r'className:\s*"h-full w-full object-(?:cover|contain) object-center(?: grayscale)?"',
        f'src: "{hero_src}",\n'
        f'                                    alt: "{hero_alt}",\n'
        f'                                    width: 1254,\n'
        f'                                    height: 1254,\n'
        f'                                    priority: !0,\n'
        f'                                    className:\n'
        f'                                      "h-full w-full object-contain object-center"',
        js,
        count=1,
    )

    js = js.replace('src: "../../../../1.webp"', f'src: "{profile_src}"')
    js = js.replace('alt: "Just an Image."', f'alt: "{profile_alt}"')
    replacements = [
        ('text: "ZUNED"', f'text: "{data["display_name_line1"]}"'),
        ('text: "GIOU"', f'text: "{data["display_name_line1"]}"'),
        ('text: "AALIM"', f'text: "{data["display_name_line2"]}"'),
        ('text: "BELLINGAN"', f'text: "{data["display_name_line2"]}"'),
        ('className: "hidden h-full w-full md:block"', 'className: "hidden"'),
        ('text-[var(--color-secondary-400)] md:hidden', 'text-[var(--color-secondary-400)]'),
        (
            'text: "I build fast, modern websites that help businesses grow, available for freelance projects worldwide."',
            f'text: "{data["hero_subtitle"]}"',
        ),
        (
            f'text: "{data["hero_subtitle"]}"',
            f'text: "{data["hero_subtitle"]}"',
        ),
        ('text: "Available for work"', f'text: "{data["availability"]}"'),
        (
            'text: "I specialize in building fast, reliable, and user-friendly full-stack web applications. I help small businesses and startups turn ideas into high-quality websites and products that actually work and scale."',
            f'text: "{data["services_intro"]}"',
        ),
        ('children: "UI/UX & Frontend"', f'children: "{services[1]["title"]}"'),
        ('children: "System Consultant"', f'children: "{services[1]["title"]}"'),
        ('children: "Optimization"', f'children: "{services[2]["title"]}"'),
        ('children: "Business Website & Automation"', f'children: "{services[2]["title"]}"'),
        ('text: "DEVELOPER"', f'text: "{data["about_line1"]}"'),
        ('text: "BUSINESS"', f'text: "{data["about_line1"]}"'),
        ('text: "DESIGNER"', f'text: "{data["about_line2"]}"'),
        ('text: "SYSTEMS"', f'text: "{data["about_line2"]}"'),
        ('text: "CREATOR/"', 'text: "/"'),
        ('contact@zunedaalim.com', data["email"]),
        ('gioukeannu@gmail.com', data["email"]),
        ('href: "https://www.linkedin.com/in/zunedaalim/"', f'href: "{data["linkedin"]}"'),
        (
            'href: "https://www.linkedin.com/in/giou-keannu-bellingan-94802827a/"',
            f'href: "{data["linkedin"]}"',
        ),
        ('href: "https://www.instagram.com/zuned_aalim/"', f'href: "{data.get("facebook") or data["linkedin"]}"'),
        ('text: "Instagram"', 'text: "Facebook"'),
        ('href: "https://github.com/zunedaalim"', f'href: "{data.get("github") or "https://github.com/giouuuu"}"'),
        ('href: "https://github.com/giouuuu"', f'href: "{data.get("github") or "https://github.com/giouuuu"}"'),
    ]

    # Service descriptions + bullets (replace common old/new variants)
    for service in services:
        replacements.append((f'children: "{service["title"]}"', f'children: "{service["title"]}"'))
        for bullet in service["bullets"]:
            replacements.append((f'"{bullet}"', f'"{bullet}"'))

    # Map legacy service strings to current data
    legacy_desc = [
        "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
        "Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.",
        "I focus on building systems that stay reliable as things scale. From handling data efficiently to designing clean architecture, I apply core computer science principles to keep applications fast, stable, and future-ready.",
        services[0]["description"],
        services[1]["description"],
        services[2]["description"],
    ]
    legacy_bullets = [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman",
        "NextJs, TailwindCSS, GSAP",
        "Figma → Pixel-perfect code",
        "HTML, CSS, JavaScript",
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        "Scalable systems & data pipelines",
    ]
    for i, service in enumerate(services):
        replacements.append((f'"{legacy_desc[i]}"', f'"{service["description"]}"'))
        if i < len(services):
            replacements.append((f'"{services[i]["description"]}"', f'"{service["description"]}"'))
        for j, bullet in enumerate(service["bullets"]):
            if j + i * 3 < len(legacy_bullets):
                replacements.append((f'"{legacy_bullets[j + i * 3]}"', f'"{bullet}"'))
            replacements.append((f'"{bullet}"', f'"{bullet}"'))

    seen = set()
    for old, new in replacements:
        if old == new or (old, new) in seen:
            continue
        seen.add((old, new))
        js = js.replace(old, new)

    # Works array used by React hydration (scramble animation reads name from here)
    works_bounds = find_works_array_bounds(js)
    if works_bounds:
        start, end = works_bounds
        js = js[:start] + works_js_array(data["works"], []) + js[end:]

    # Skills object used by React hydration
    js = re.sub(
        r"let E = \{.*?\};",
        skills_js_object(data["skills_categories"]),
        js,
        count=1,
        flags=re.DOTALL,
    )

    js = patch_about_js(js, data)
    js = patch_work_card_links(js)

    return js


def patch_work_card_links(js: str) -> str:
    patched = """            children: (0, s.jsxs)("a", {
              href: i,
              ...("#" !== i && i ? { target: "_blank", rel: "noopener noreferrer" } : {}),
              onClick: (e) => {
                ("#" === i || !i) && e.preventDefault();
              },
              children: ["""
    original = """            children: (0, s.jsxs)("a", {
              href: i,
              target: "_blank",
              rel: "noopener noreferrer",
              children: ["""
    if patched in js:
        js = js.replace(patched, original)
    return js


def ensure_runtime_scripts(html: str) -> str:
    loader_tag = '<script src="data-loader.js?v=7" defer></script>'
    modal_tag = '<script src="works-modal.js?v=4" defer></script>'
    html = html.replace('\n      <script src="works-modal.js" defer></script>', "")
    html = html.replace('<script src="works-modal.js" defer></script>', "")
    html = html.replace('<script src="data-loader.js?v=6" defer></script>', "")
    html = html.replace('<script src="data-loader.js" defer></script>', "")
    html = html.replace('<script src="works-popup.js?v=3" defer></script>', "")
    html = html.replace('<script src="works-popup.js" defer></script>', "")
    html = html.replace(
        'src="_next/static/chunks/app/page-77f38f7782b59527.js?v=6"',
        'src="_next/static/chunks/app/page-77f38f7782b59527.js?v=7"',
    )
    html = html.replace(
        'src="_next/static/chunks/app/page-77f38f7782b59527.js"',
        'src="_next/static/chunks/app/page-77f38f7782b59527.js?v=7"',
    )
    if loader_tag not in html:
        html = html.replace("</body>", f"    {loader_tag}\n  </body>")
    if modal_tag not in html:
        html = html.replace(loader_tag, f"{loader_tag}\n      {modal_tag}")
    return html


def main() -> None:
    if not DATA_JSON.exists():
        raise SystemExit(f"Missing {DATA_JSON}")

    data = flatten(load_data())
    html = INDEX.read_text(encoding="utf-8")
    html = patch_html(html, data)
    html = ensure_runtime_scripts(html)
    INDEX.write_text(html, encoding="utf-8")
    print(f"Updated {INDEX.name} from data.json")

    if JS_BUNDLE.exists():
        js = JS_BUNDLE.read_text(encoding="utf-8")
        js = patch_js(js, data)
        JS_BUNDLE.write_text(js, encoding="utf-8")
        print(f"Updated {JS_BUNDLE.name} from data.json")

    print("Done. Refresh the site to see changes.")


if __name__ == "__main__":
    main()
