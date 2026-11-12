// Fills the page from content/site.json and content/gallery.json.
// Edit those two files (or use the editor described in SETUP.md) to change the site.
// Everything is written with textContent, so pasted text can never inject code.

(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function load(path) {
    return fetch(path, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(path + " " + r.status);
      return r.json();
    });
  }

  function paragraphs(text) {
    return String(text || "")
      .split(/\n\s*\n/)
      .map(function (p) { return p.trim(); })
      .filter(Boolean);
  }

  function safeUrl(url, allowed) {
    try {
      var u = new URL(url, location.href);
      return allowed.indexOf(u.protocol) !== -1 ? u.href : "";
    } catch (e) {
      return "";
    }
  }

  function renderSite(s) {
    document.querySelectorAll("[data-text]").forEach(function (node) {
      var v = s[node.getAttribute("data-text")];
      if (v) node.textContent = v;
    });

    document.querySelectorAll("[data-paras]").forEach(function (node) {
      node.textContent = "";
      paragraphs(s[node.getAttribute("data-paras")]).forEach(function (p) {
        var para = el("p");
        var m = p.match(/^([^:]{1,30}:)\s+([\s\S]*)$/);
        if (node.id === "ahead-text" && m && /^coming soon:$/i.test(m[1])) {
          para.appendChild(el("strong", "", m[1]));
          para.appendChild(document.createTextNode(" " + m[2]));
        } else {
          para.textContent = p;
        }
        node.appendChild(para);
      });
    });

    var why = document.getElementById("why-list");
    why.textContent = "";
    (s.why || []).forEach(function (item) {
      var li = el("li");
      if (item.icon) li.setAttribute("data-icon", item.icon);
      li.appendChild(el("h3", "", item.title));
      li.appendChild(el("p", "", item.text));
      why.appendChild(li);
    });

    var facts = document.getElementById("facts-list");
    facts.textContent = "";
    (s.facts || []).forEach(function (f) {
      var row = el("div", "fact");
      row.appendChild(el("dt", "", f.label));
      row.appendChild(el("dd", "", f.value));
      facts.appendChild(row);
    });

    var contact = document.getElementById("contact-list");
    contact.textContent = "";
    function addContact(label, text, href) {
      if (!href) return;
      var li = el("li");
      li.appendChild(el("span", "", label));
      var a = el("a", "", text);
      a.href = href;
      if (href.indexOf("http") === 0) { a.rel = "noopener"; a.target = "_blank"; }
      li.appendChild(a);
      contact.appendChild(li);
    }
    if (s.contact_email) addContact("Email", s.contact_email, "mailto:" + s.contact_email.trim());
    if (s.contact_phone) addContact("Phone", s.contact_phone, "tel:" + s.contact_phone.replace(/[^\d+]/g, ""));
    if (s.facebook_url) addContact("Facebook", "Our Facebook group", safeUrl(s.facebook_url, ["https:", "http:"]));
    if (!contact.children.length) contact.hidden = true;

    if (s.name) document.title = s.name;
  }

  function renderGallery(g) {
    var photos = (g && g.photos) || [];
    var section = document.getElementById("gallery");
    var list = document.getElementById("gallery-list");
    list.textContent = "";
    if (!photos.length) { section.hidden = true; return; }

    if (g.title) document.getElementById("gallery-title").textContent = g.title;
    photos.forEach(function (p) {
      if (!p.image) return;
      var li = el("li");
      var fig = el("figure");
      var img = el("img");
      img.src = p.image;
      img.alt = p.alt || p.caption || "";
      img.loading = "lazy";
      fig.appendChild(img);
      if (p.caption) fig.appendChild(el("figcaption", "", p.caption));
      li.appendChild(fig);
      list.appendChild(li);
    });
    section.hidden = false;
    document.getElementById("nav-gallery").hidden = false;
  }

  load("content/site.json").then(renderSite).catch(function (e) {
    console.error("Could not load site content", e);
  });
  load("content/gallery.json").then(renderGallery).catch(function (e) {
    console.error("Could not load gallery", e);
  });
})();
