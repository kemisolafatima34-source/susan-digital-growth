(function () {
  var C = window.SDG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  var ICONS = {
    youtube: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.900.5A3 3 0 0 0 1 7.200C.5 9.100.5 12 .5 12s0 2.900.5 4.800a3 3 0 0 0 2.100 2.100c1.900.5 8.900.5 8.900.5s7 0 8.900-.5a3 3 0 0 0 2.100-2.100c.5-1.900.5-4.800.5-4.800s0-2.900-.5-4.800zM9.700 15.500v-7l6 3.500-6 3.500z",
    twitch: "M4 2 2 6.500V20h5v3h3l3-3h4l5-5V2H4zm16 12-3 3h-5l-3 3v-3H6V4h14v10zm-3-7h-2v5h2V7zm-5 0h-2v5h2V7z",
    tiktok: "M16.500 2h-3.300v13.200a2.800 2.800 0 1 1-2.800-2.800c.3 0 .6 0 .8.100V9.100a6.200 6.200 0 1 0 5.300 6.100V8.700a7.800 7.800 0 0 0 4.500 1.400V6.800A4.600 4.600 0 0 1 16.500 2z",
    instagram: "M12 2.200c3.200 0 3.600 0 4.800.1 3.300.1 4.800 1.700 4.900 4.900.1 1.300.1 1.600.1 4.800s0 3.600-.1 4.800c-.1 3.200-1.700 4.800-4.900 4.900-1.300.1-1.600.1-4.800.1s-3.600 0-4.800-.1c-3.300-.1-4.800-1.700-4.900-4.900C2.200 15.600 2.200 15.200 2.200 12s0-3.600.1-4.800C2.400 3.900 4 2.400 7.200 2.300 8.400 2.200 8.800 2.200 12 2.200zM12 0C8.700 0 8.300 0 7.100.1 2.700.3.300 2.700.1 7.100 0 8.300 0 8.700 0 12s0 3.700.1 4.900c.2 4.400 2.600 6.800 7 7C8.300 24 8.700 24 12 24s3.700 0 4.900-.1c4.400-.2 6.800-2.600 7-7 .1-1.200.1-1.600.1-4.900s0-3.700-.1-4.900c-.2-4.400-2.600-6.800-7-7C15.700 0 15.300 0 12 0zm0 5.800a6.200 6.200 0 1 0 0 12.400 6.200 6.200 0 0 0 0-12.400zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.400-11.800a1.400 1.400 0 1 0 0 2.900 1.400 1.400 0 0 0 0-2.900z",
    facebook: "M24 12a12 12 0 1 0-13.900 11.900v-8.400H7.100V12h3V9.400c0-3 1.800-4.700 4.500-4.700 1.300 0 2.700.2 2.700.2v3h-1.500c-1.500 0-2 .9-2 1.900V12h3.400l-.5 3.500h-2.800v8.400A12 12 0 0 0 24 12z",
    x: "M18.200 2.300h3.300l-7.200 8.300 8.500 11.200h-6.700l-5.200-6.800-6 6.800H1.600l7.700-8.800L1.200 2.300H8l4.700 6.200 5.500-6.200zm-1.200 17.500h1.800L7 4.200H5.100l11.900 15.600z",
    linkedin: "M20.400 20.500h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.300V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100zM7.100 20.500H3.600V9h3.500v11.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.8 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z",
    fiverr: "M23 7.500h-2.800V6.300c0-.6.500-.9 1.100-.9H23V2.500h-2.200C18 2.500 16.700 4.100 16.700 6v1.500h-2.100V6c0-.6.300-.9.900-.9h.6V2.500h-2c-2.700 0-3.600 1.600-3.600 3.400v1.600H8.100v-.2c0-.6.300-.9.800-.9h.5V2.500H7.600C5.200 2.500 4 3.900 4 5.800v1.700H1V10.400h3V21.500h3.400V10.400h4.100V21.500H15V10.400h5.900l-.1 11.100H23z",
    upwork: "M18.600 13.400c-1.500 0-2.900-.6-4-1.500l.3-1.500.1-.1c.3-1.600 1-4.200 3.600-4.200 2 0 3.600 1.600 3.600 3.600s-1.600 3.700-3.600 3.700zm0-10.100c-3.400 0-5.900 2.200-6.700 5.900-1.300-1.900-2.300-5.100-2.900-7.500H5.600v6.200c0 2.100-.8 3.700-2.500 3.700S.7 15.300.7 13.200V1.700H-2.700V13.200c0 4 2.500 6.800 5.800 6.800 3.500 0 5.800-2.700 5.800-6.800v-1c.6 1.300 1.300 2.600 2.100 3.600l-1.700 8.200h3.500l1.200-5.900c1.100.7 2.400 1.200 3.900 1.200 3.900 0 6.900-3.100 6.900-7s-3.100-7-7-7z",
    whatsapp: "M17.500 14.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.100-.2.300-.8 1-1 1.200-.2.200-.4.200-.6.100-.3-.1-1.300-.5-2.400-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.5-.5c.1-.2.2-.3.300-.5.100-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3zM12 21.800c-1.800 0-3.500-.5-5-1.400l-3.600 1 1-3.500A9.800 9.800 0 1 1 12 21.800zM12 0C5.400 0 0 5.400 0 12c0 2.100.6 4.200 1.600 6L0 24l6.200-1.600A12 12 0 1 0 12 0z",
    chart: "M3 21V3h2v16h16v2H3zm4-4V9h3v8H7zm5 0V5h3v12h-3zm5 0v-6h3v6h-3z",
    target: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z",
    users: "M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.700 0-8 1.300-8 4v3h8v-3a5 5 0 0 1 1.500-3.500A11 11 0 0 0 8 13zm8 0c-3 0-9 1.500-9 4.500V20h18v-2.500c0-3-6-4.500-9-4.500z",
    spark: "M12 1l2.800 7.200L22 11l-7.200 2.800L12 21l-2.800-7.200L2 11l7.200-2.800L12 1z",
    chat: "M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z",
    shield: "M12 1 3 5v6c0 5.500 3.800 10.700 9 12 5.200-1.300 9-6.500 9-12V5l-9-4zm-1 15-4-4 1.400-1.400L11 13.200l5.600-5.600L18 9l-7 7z",
    brush: "M7 14c-1.700 0-3 1.300-3 3 0 1.200-1 2-2 2 1.100 1.300 2.700 2 4.500 2 2.500 0 4.500-2 4.500-4.500 0-1.400-1.100-2.500-2.500-2.500h-1.500zM20.700 3.300a1 1 0 0 0-1.400 0L9 13.600l1.400 1.400L20.700 4.700a1 1 0 0 0 0-1.400z",
    mail: "M2 4h20v16H2V4zm10 8L4 6.500V18h16V6.500L12 12zm0-2 8-5H4l8 5z"
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + (ICONS[n] || ICONS.spark) + '"/></svg>'; }
  window.SDG_icon = icon;

  var waNum = (C.whatsappNumber || "").replace(/\D/g, "");
  function waUrl(msg) {
    if (!waNum) return "contact.html";
    return "https://wa.me/" + waNum + "?text=" + encodeURIComponent(msg || C.whatsappMessage || "");
  }
  var money = function (n) { return "$" + Number(n).toLocaleString("en-US"); };

  /* ---------- header / footer ---------- */
  var pages = [["index.html", "Home"], ["about.html", "About"], ["services.html", "Services"], ["pricing.html", "Pricing"], ["portfolio.html", "Portfolio"], ["contact.html", "Contact"]];
  var current = (location.pathname.split("/").pop() || "index.html");
  var hEl = $("#site-header");
  if (hEl) {
    hEl.outerHTML = '<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap nav">' +
      '<a class="logo" href="index.html" aria-label="Susan Digital Growth home"><span class="logo-mark">S</span><span>SUSAN <b>DIGITAL</b> GROWTH</span></a>' +
      '<button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>' +
      '<ul id="menu">' + pages.map(function (p) {
        return '<li><a href="' + p[0] + '"' + (current === p[0] ? ' aria-current="page"' : "") + ">" + p[1] + "</a></li>";
      }).join("") + '</ul>' +
      '<a class="btn btn-gold btn-sm hide-m" href="contact.html">Work With Me</a></div></header>';
    var mb = $(".menu-btn"), menu = $("#menu");
    mb.addEventListener("click", function () {
      var o = menu.classList.toggle("open"); mb.setAttribute("aria-expanded", o);
    });
  }

  var SOCIAL_ORDER = [["fiverr", "Fiverr"], ["upwork", "Upwork"], ["linkedin", "LinkedIn"], ["instagram", "Instagram"], ["tiktok", "TikTok"], ["youtube", "YouTube"], ["twitch", "Twitch"], ["facebook", "Facebook"], ["x", "X"]];
  function socials(opts) {
    opts = opts || {};
    var L = C.links || {};
    var out = [];
    if (waNum) out.push('<a class="social" href="' + waUrl() + '" target="_blank" rel="noopener">' + icon("whatsapp") + (opts.compact ? "" : "WhatsApp") + "</a>");
    else if (!opts.compact) out.push('<span class="social off">' + icon("whatsapp") + "WhatsApp</span>");
    SOCIAL_ORDER.forEach(function (s) {
      var u = L[s[0]];
      if (u) out.push('<a class="social" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer" aria-label="' + s[1] + '">' + icon(s[0]) + (opts.compact ? "" : s[1]) + "</a>");
      else if (!opts.compact) out.push('<span class="social off">' + icon(s[0]) + s[1] + "</span>");
    });
    return out.join("");
  }

  var fEl = $("#site-footer");
  if (fEl) {
    fEl.outerHTML = '<footer class="site-footer"><div class="wrap"><div class="foot">' +
      '<div><a class="logo" href="index.html"><span class="logo-mark">S</span><span>SUSAN <b>DIGITAL</b> GROWTH</span></a>' +
      '<p style="margin-top:14px">Susan Digital Growth helps creators, streamers and businesses strengthen their online presence through strategic social media marketing, promotion and digital growth solutions.</p><p style="font-size:.85rem">Also known as Fatima on some platforms: same person, same services.</p></div>' +
      '<div><h4>Quick Links</h4><ul>' + pages.map(function (p) { return '<li><a href="' + p[0] + '">' + p[1] + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h4>Services</h4><ul><li><a href="services.html#youtube">YouTube Promotion</a></li><li><a href="services.html#twitch">Twitch Promotion</a></li><li><a href="services.html#tiktok">TikTok Marketing</a></li><li><a href="services.html#instagram">Instagram Marketing</a></li><li><a href="services.html#facebook">Facebook Marketing</a></li><li><a href="pricing.html">Pricing &amp; Packages</a></li></ul></div>' +
      '<div><h4>Contact</h4><ul>' +
      (C.email ? '<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" : "<li>Email: coming soon</li>") +
      (waNum ? '<li><a href="' + waUrl() + '" target="_blank" rel="noopener">WhatsApp us</a></li>' : "<li>WhatsApp: coming soon</li>") +
      (C.discord ? "<li>Discord: " + esc(C.discord) + "</li>" : "") +
      '<li><a href="contact.html">Start a project</a></li></ul>' +
      '<div class="socials" style="margin-top:14px">' + socials({ compact: true }) + "</div></div>" +
      '</div><div class="copy"><span>&copy; ' + new Date().getFullYear() + " Susan Digital Growth. All rights reserved.</span><span>Prices in USD. No guaranteed followers, views, subscribers, sales or engagement.</span></div></div></footer>" +
      (waNum ? '<a class="wa-float" href="' + waUrl() + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + icon("whatsapp") + "</a>" : "");
  }

  /* ---------- generic hooks ---------- */
  $$("[data-wa]").forEach(function (a) {
    a.href = waUrl(a.getAttribute("data-wa"));
    if (waNum) { a.target = "_blank"; a.rel = "noopener"; }
  });
  $$("[data-icon]").forEach(function (el) { el.innerHTML = icon(el.getAttribute("data-icon")); });
  $$("[data-socials]").forEach(function (el) { el.innerHTML = socials(); });
  $$("[data-discord]").forEach(function (el) { if (C.discord) el.textContent = C.discord; else el.closest("li").remove(); });
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  $$("[data-email]").forEach(function (el) {
    if (C.email) { el.innerHTML = '<a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a>"; } else { el.textContent = "Business email coming soon"; }
  });

  /* ---------- pricing ---------- */
  function tierCard(g, t) {
    var msg = "Hello, I'm interested in the " + t.name + " package (" + g.title + ", " + (t.prefix ? t.prefix + " " : "") + money(t.price) + " " + t.unit + ").";
    return '<article class="card price-card reveal' + (t.featured ? " featured" : "") + '">' +
      (t.featured ? '<span class="flag">Featured package</span>' : "") +
      '<div class="tier">' + esc(t.name) + "</div>" +
      '<div class="amount">' + (t.prefix ? '<span class="from">' + esc(t.prefix) + "</span>" : "") + money(t.price) + ' <small>' + esc(t.unit) + "</small></div>" +
      "<ul>" + t.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<div class="actions"><a class="btn btn-gold btn-block" href="contact.html?service=' + encodeURIComponent(g.title + " - " + t.name) + '#start">Get Started</a>' +
      '<a class="btn btn-line btn-block" data-wa="' + esc(msg) + '" href="' + waUrl(msg) + '"' + (waNum ? ' target="_blank" rel="noopener"' : "") + ">WhatsApp Inquiry</a></div></article>";
  }
  var COMPARE = {
    twitch: { cols: ["Basic", "Standard", "Premium"], rows: [
      ["Twitch channel promotion", 1, 1, 1], ["Streamer visibility strategy", 1, 1, 1], ["Campaign setup and execution", 1, 1, 1],
      ["Expanded promotional campaign", 0, 1, 1], ["Audience discovery strategy", 0, 1, 1], ["Campaign monitoring", 0, 1, 1],
      ["Comprehensive promotional strategy", 0, 0, 1], ["Multi-channel opportunities", 0, 0, 1], ["Detailed performance reporting", 0, 0, 1]] },
    management: { cols: ["Basic", "Standard", "Premium"], rows: [
      ["Platforms included", "1", "Up to 3", "Up to 5"], ["Content planning", 1, 1, 1], ["Content scheduling", 1, 1, 1],
      ["Account management", 0, 1, 1], ["Community engagement", 0, 1, 1], ["Comprehensive strategy", 0, 0, 1], ["Monthly performance report", 1, 1, 1], ["Monthly strategy review", 0, 0, 1]] }
  };
  function compareTable(id) {
    var c = COMPARE[id]; if (!c) return "";
    return '<div class="table-wrap"><table><caption class="sr" style="position:absolute;left:-9999px">Package comparison</caption><thead><tr><th scope="col">Feature</th>' +
      c.cols.map(function (x) { return '<th scope="col">' + x + "</th>"; }).join("") + "</tr></thead><tbody>" +
      c.rows.map(function (r) {
        return "<tr><th scope=\"row\" style=\"background:#fff;color:var(--ink);font-weight:500\">" + r[0] + "</th>" + r.slice(1).map(function (v) {
          return typeof v === "string" ? "<td>" + v + "</td>" : (v ? '<td class="y" aria-label="Included">&#10003;</td>' : '<td class="n" aria-label="Not included">&mdash;</td>');
        }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }
  $$("[data-render=pricing]").forEach(function (el) {
    var want = (el.getAttribute("data-groups") || "all").split(",");
    var compact = el.hasAttribute("data-compact");
    var html = "";
    (C.packages || []).forEach(function (g) {
      if (want[0] !== "all" && want.indexOf(g.id) < 0) return;
      html += '<div class="price-group" id="' + g.id + '"><header><h2>' + esc(g.title) + '</h2><span class="billing">' + esc(g.billing) + "</span></header>" +
        (compact ? "" : "<p style=\"color:var(--muted)\">" + esc(g.blurb) + "</p>") +
        '<div class="cards">' + g.tiers.map(function (t) { return tierCard(g, t); }).join("") + "</div>" +
        (compact ? "" : compareTable(g.id)) + "</div>";
    });
    el.innerHTML = html;
    $$("[data-wa]", el).forEach(function (a) { a.href = waUrl(a.getAttribute("data-wa")); });
  });

  /* ---------- portfolio / testimonials ---------- */
  var CATS = { youtube: "YouTube Promotion", twitch: "Twitch Promotion", tiktok: "TikTok Marketing", instagram: "Instagram Marketing", management: "Social Media Management", digital: "Digital Marketing", design: "Graphic Design" };
  var catsOf = function (p) { return [].concat(p.category || []); };
  $$("[data-render=portfolio]").forEach(function (el) {
    var items = C.portfolio || [];
    var fb = '<div class="filters" role="group" aria-label="Filter projects"><button aria-pressed="true" data-f="all">All</button>' +
      Object.keys(CATS).filter(function (k) { return !items.length || items.some(function (p) { return catsOf(p).indexOf(k) > -1; }); }).map(function (k) { return '<button aria-pressed="false" data-f="' + k + '">' + CATS[k] + "</button>"; }).join("") + "</div>";
    var body;
    if (items.length) {
      body = '<div class="cards" id="proj">' + items.map(function (p) {
        return '<article class="card project reveal" data-cat="' + esc(catsOf(p).join(" ")) + '">' + catsOf(p).map(function (c) { return '<span class="tag" style="margin-right:6px">' + esc(CATS[c] || "Project") + "</span>"; }).join("") +
          (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">' : "") +
          "<h3>" + esc(p.title) + "</h3>" +
          (p.objective ? "<p><b>Objective:</b> " + esc(p.objective) + "</p>" : "") +
          (p.description ? "<p>" + esc(p.description) + "</p>" : "") +
          (p.services ? '<p class="meta"><b>Services delivered:</b> ' + esc(p.services) + "</p>" : "") +
          (p.result ? '<p class="meta"><b>Result:</b> ' + esc(p.result) + "</p>" : "") +
          (p.feedback ? "<blockquote>&ldquo;" + esc(p.feedback) + "&rdquo;</blockquote>" : "") + "</article>";
      }).join("") + "</div>";
    } else {
      body = '<div class="cards" id="proj">' + Object.keys(CATS).map(function (k) {
        return '<article class="ph" data-cat="' + k + '"><div class="shot">Project screenshot</div><span class="tag">' + CATS[k] + "</span><h3>Your project here</h3>" +
          "<p>Add a real campaign: objective, services delivered, before-and-after results and client feedback. Edit <code>portfolio</code> in <code>site-config.js</code>.</p></article>";
      }).join("") + "</div>";
    }
    el.innerHTML = (el.hasAttribute("data-nofilter") ? "" : fb) + body;
    $$(".filters button", el).forEach(function (b) {
      b.addEventListener("click", function () {
        $$(".filters button", el).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        var f = b.getAttribute("data-f");
        $$("#proj > *", el).forEach(function (c) { c.style.display = (f === "all" || (c.getAttribute("data-cat") || "").split(" ").indexOf(f) > -1) ? "" : "none"; });
      });
    });
    if (el.hasAttribute("data-limit")) {
      $$("#proj > *", el).slice(+el.getAttribute("data-limit")).forEach(function (c) { c.remove(); });
    }
  });
  $$("[data-render=videos]").forEach(function (el) {
    var v = C.videos || [];
    if (!v.length) { el.closest("section").remove(); return; }
    el.innerHTML = '<div class="cards">' + v.map(function (x) {
      var src = x.youtubeId ? "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(x.youtubeId) : "https://drive.google.com/file/d/" + encodeURIComponent(x.driveId) + "/preview";
      var link = x.youtubeId ? "https://www.youtube.com/watch?v=" + encodeURIComponent(x.youtubeId) : "https://drive.google.com/file/d/" + encodeURIComponent(x.driveId) + "/view";
      var player = x.file
        ? '<video controls playsinline preload="metadata" aria-label="' + esc(x.title) + '"><source src="' + esc(x.file) + '" type="video/mp4">Your browser does not support video playback.</video>'
        : '<iframe src="' + src + '" title="' + esc(x.title) + '" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>';
      return '<article class="card reveal" style="grid-column:1/-1;max-width:820px;margin:0 auto;width:100%"><div class="vid' + (x.file ? " file" : "") + '">' + player + '</div><h3 style="margin-top:16px">' + esc(x.title) + "</h3>" +
        (x.description ? "<p>" + esc(x.description) + "</p>" : "") + (x.file ? "" : '<a class="btn btn-line btn-sm" href="' + link + '" target="_blank" rel="noopener">Open video in new tab</a>') + "</article>";
    }).join("") + "</div>";
  });
  $$("[data-render=testimonials]").forEach(function (el) {
    var t = (C.testimonials || []).slice(0, +el.getAttribute("data-limit") || undefined);
    var sum = (C.reviewSummary || []).map(function (s) {
      return '<a class="social" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.source) + ": " + esc(s.text) + "</a>";
    }).join("");
    el.innerHTML = (sum && t.length ? '<div class="socials" style="justify-content:center;margin-bottom:26px">' + sum + "</div>" : "") + '<div class="cards">' + (t.length ? t.map(function (x) {
      var stars = x.rating ? '<div class="stars" role="img" aria-label="' + x.rating + ' out of 5 stars">' + "★".repeat(Math.round(x.rating)) + "</div>" : "";
      return '<article class="card reveal">' + stars + '<blockquote>&ldquo;' + esc(x.quote) + '&rdquo;</blockquote><p class="meta" style="margin-top:auto"><b>' + esc(x.name) + "</b>" + (x.project ? "<br>" + esc(x.project) : "") + (x.source || x.date ? "<br>" + esc([x.source ? "via " + x.source : "", x.date].filter(Boolean).join(" · ")) : "") + "</p></article>";
    }).join("") : [1, 2, 3].map(function () {
      return '<article class="ph"><blockquote>&ldquo;Client feedback will appear here once genuine testimonials are added.&rdquo;</blockquote><p class="meta"><b>Client or business name</b><br>Project description</p></article>';
    }).join("")) + "</div>";
  });

  /* ---------- inquiry form ---------- */
  var form = $("#inquiry");
  if (form) {
    var q = new URLSearchParams(location.search).get("service");
    var sel = form.elements.service;
    if (q && sel) {
      var found = false;
      $$("option", sel).forEach(function (o) { if (o.value === q) { sel.value = q; found = true; } });
      if (!found) { var o = document.createElement("option"); o.value = q; o.textContent = q; sel.appendChild(o); sel.value = q; }
    }
    var msg = $("#form-msg");
    var show = function (cls, text) { msg.className = "form-msg show " + cls; msg.textContent = text; msg.focus && msg.focus(); };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.elements.website && form.elements.website.value) return; // honeypot
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var d = {}; new FormData(form).forEach(function (v, k) { if (k !== "website") d[k] = String(v).trim(); });
      var text = "New project inquiry\n\nName: " + d.name + "\nEmail: " + d.email + "\nBusiness/Channel: " + d.business + "\nService: " + d.service + "\nPlatform: " + d.platform + "\nBudget: " + (d.budget || "Not specified") + "\n\nProject:\n" + d.message;
      if (C.formEndpoint) {
        var btn = form.querySelector("button[type=submit]"); btn.disabled = true;
        fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) })
          .then(function (r) { if (!r.ok) throw 0; form.reset(); show("ok", "Thank you! Your inquiry has been sent. We'll reply by email soon."); })
          .catch(function () { show("err", "Sorry, something went wrong. Please try WhatsApp or email instead."); })
          .then(function () { btn.disabled = false; });
      } else if (waNum) {
        window.open(waUrl(text), "_blank", "noopener");
        show("ok", "Opening WhatsApp with your inquiry ready to send. Just press send.");
      } else if (C.email) {
        location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Project inquiry: " + d.service) + "&body=" + encodeURIComponent(text);
        show("ok", "Opening your email app with your inquiry ready to send.");
      } else {
        show("info", "The form is ready, but contact details have not been added yet. Add a WhatsApp number, email or form endpoint in site-config.js.");
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var rv = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .08 });
    rv.forEach(function (n) { io.observe(n); });
  } else { rv.forEach(function (n) { n.classList.add("in"); }); }
})();
