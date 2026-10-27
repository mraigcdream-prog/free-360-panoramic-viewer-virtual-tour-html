/* Vỏ trang: menu, ngôn ngữ, danh sách, form.
   Nội dung chữ (tên căn, mô tả, giá, tiện ích) nằm ở /data/site.js. */
(function () {
  const UI = {
    banner: {
      vi: "Nội dung minh họa. Tên dự án, diện tích, tiện ích và giá là chỗ dành sẵn — sửa trong data/site.js.",
      en: "Sample content. The project name, areas, amenities, and prices are placeholders — edit data/site.js."
    },
    skip: { vi: "Đi tới nội dung", en: "Skip to content" },
    menu: { vi: "Menu", en: "Menu" },
    close: { vi: "Đóng menu", en: "Close menu" },
    langToEn: { vi: "English", en: "English" },
    langToVi: { vi: "Tiếng Việt", en: "Tiếng Việt" },
    book: { vi: "Đặt lịch xem", en: "Book a viewing" },
    seeHomes: { vi: "Xem căn mẫu", en: "View sample homes" },
    seeTour: { vi: "Xem tour 360°", en: "Open the 360° tour" },
    priceCta: { vi: "Nhận bảng giá khi có", en: "Ask when prices are published" },
    nav: {
      overview: { vi: "Tổng quan", en: "Overview" },
      amenities: { vi: "Tiện ích", en: "Amenities" },
      location: { vi: "Vị trí", en: "Location" },
      gallery: { vi: "Thư viện", en: "Gallery" },
      pricing: { vi: "Bảng giá", en: "Pricing" },
      homes: { vi: "Căn hộ", en: "Homes" },
      contact: { vi: "Liên hệ", en: "Contact" }
    },
    listingTitle: { vi: "Căn hộ mẫu", en: "Sample homes" },
    listingLede: {
      vi: "Lọc theo số phòng ngủ, loại căn và trạng thái. Tất cả đều là dữ liệu mẫu.",
      en: "Filter by bedrooms, type, and status. Every record is sample data."
    },
    all: { vi: "Tất cả", en: "All" },
    beds: { vi: "Phòng ngủ", en: "Bedrooms" },
    type: { vi: "Loại căn", en: "Type" },
    status: { vi: "Trạng thái", en: "Status" },
    types: { apartment: { vi: "Căn hộ", en: "Apartment" }, penthouse: { vi: "Penthouse", en: "Penthouse" } },
    statuses: { open: { vi: "Đang mở xem mẫu", en: "Sample viewing open" }, held: { vi: "Giữ chỗ mẫu", en: "Sample hold" } },
    count: { vi: "căn mẫu", en: "sample homes" },
    empty: { vi: "Không có căn mẫu khớp bộ lọc.", en: "No sample home matches these filters." },
    reset: { vi: "Xóa bộ lọc", en: "Clear filters" },
    area: { vi: "Diện tích mẫu", en: "Sample area" },
    baths: { vi: "Phòng tắm", en: "Bathrooms" },
    floor: { vi: "Tầng", en: "Floor" },
    aspect: { vi: "Hướng", en: "Aspect" },
    price: { vi: "Giá", en: "Price" },
    unpublished: { vi: "Liên hệ — chưa công bố", en: "Ask — not published" },
    stops: { vi: "điểm nhìn", en: "viewpoints" },
    other: { vi: "Căn mẫu khác", en: "Other sample homes" },
    photoNote: {
      vi: "Ảnh 360° là tư liệu CC0 (Poly Haven) để demo cách dẫn tour. Không phải ảnh căn thật.",
      en: "The 360° photos are CC0 images (Poly Haven) demonstrating the tour. They are not photos of a real unit."
    },
    mapOpen: { vi: "Mở bản đồ lớn trên OpenStreetMap", en: "Open the larger map on OpenStreetMap" },
    mapTitle: { vi: "Bản đồ vị trí minh họa", en: "Illustrative location map" },
    noPhoto: { vi: "Chưa có ảnh", en: "No photo yet" },
    contactTitle: { vi: "Đăng ký xem nhà", en: "Request a viewing" },
    contactLede: {
      vi: "Để lại số điện thoại. Nếu chưa cấu hình địa chỉ nhận, nút gửi sẽ mở email trên máy bạn.",
      en: "Leave a phone number. Until a form endpoint is set, submit opens the email app on this device."
    },
    name: { vi: "Họ và tên", en: "Full name" },
    phone: { vi: "Số điện thoại", en: "Phone" },
    email: { vi: "Email (không bắt buộc)", en: "Email (optional)" },
    interest: { vi: "Quan tâm tới", en: "Interested in" },
    interestAny: { vi: "Tư vấn chung", en: "General advice" },
    interestPrice: { vi: "Bảng giá khi được công bố", en: "The price sheet once it is published" },
    message: { vi: "Lời nhắn", en: "Message" },
    consent: {
      vi: "Tôi hiểu đây là form mẫu và đồng ý để quầy tư vấn liên hệ lại bằng số điện thoại đã nhập.",
      en: "I understand this is a sample form and agree to be contacted on the phone number I entered."
    },
    send: { vi: "Gửi yêu cầu", en: "Send request" },
    sending: { vi: "Đang gửi…", en: "Sending…" },
    errName: { vi: "Nhập họ tên.", en: "Enter your name." },
    errPhone: { vi: "Nhập số điện thoại để được gọi lại.", en: "Enter a phone number so we can call back." },
    errEmail: { vi: "Email chưa đúng định dạng.", en: "That email does not look valid." },
    errConsent: { vi: "Cần đánh dấu đồng ý trước khi gửi.", en: "Tick the consent box before sending." },
    mailtoOk: {
      vi: "Đã soạn email trên máy bạn. Nếu cửa sổ thư không mở, dùng liên kết bên dưới hoặc chép nội dung.",
      en: "An email was drafted on this device. If no mail window opened, use the link below or copy the text."
    },
    openMail: { vi: "Mở email", en: "Open email" },
    sentOk: {
      vi: "Đã gửi. Quầy tư vấn sẽ phản hồi qua số điện thoại hoặc email bạn để lại.",
      en: "Sent. The desk will reply on the phone number or email you left."
    },
    sentBad: {
      vi: "Máy nhận form không trả lời thành công. Bạn vẫn có thể gửi bằng email.",
      en: "The form endpoint did not accept the message. You can still send it by email."
    },
    sampleMail: {
      vi: "Email nhận đang là địa chỉ mẫu (example.com). Hãy đổi contact.email trong data/site.js trước khi dùng thật.",
      en: "The inbox is still a sample address (example.com). Change contact.email in data/site.js before going live."
    },
    endpointHint: {
      vi: "Chưa gắn endpoint. Form sẽ mở mailto tới email cấu hình.",
      en: "No endpoint is set. The form opens a mailto to the configured address."
    },
    another: { vi: "Viết yêu cầu khác", en: "Write another request" },
    notFound: { vi: "Không thấy trang này.", en: "This page was not found." },
    notFoundLede: {
      vi: "Liên kết có thể đã đổi. Quay về trang chủ hoặc danh sách căn mẫu.",
      en: "The link may have changed. Go back to the home page or the sample homes."
    },
    missingHome: { vi: "Không có căn với mã này trong dữ liệu mẫu.", en: "No home with this id is in the sample data." },
    home: { vi: "Trang chủ", en: "Home" },
    builder: { vi: "Tạo tour 360°", en: "Create a 360° tour" },
    creditsTitle: { vi: "Nguồn", en: "Credits" },
    footerBlurb: {
      vi: "Trang giới thiệu tĩnh. Tour chạy bằng Pannellum. Công cụ tạo tour nằm ở trang Tạo tour.",
      en: "A static introduction site. Tours run on Pannellum. The builder is on the Create a tour page."
    }
  };

  let lang = "vi";
  const filters = { beds: "all", type: "all", status: "all" };

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function pick(value) {
    if (value && typeof value === "object") return value[lang] || value.vi || value.en || "";
    return value == null ? "" : String(value);
  }
  function t(node) { return esc(pick(node)); }

  function loadLang() {
    try {
      const saved = localStorage.getItem("sx-lang");
      if (saved === "en" || saved === "vi") lang = saved;
    } catch (err) { /* bỏ qua khi trình duyệt chặn storage */ }
  }
  function saveLang() {
    try { localStorage.setItem("sx-lang", lang); } catch (err) { /* bỏ qua */ }
  }

  function readFilters() {
    const params = new URLSearchParams(location.search);
    filters.beds = params.get("phong") || "all";
    filters.type = params.get("loai") || "all";
    filters.status = params.get("tt") || "all";
  }
  function writeFilters() {
    const params = new URLSearchParams(location.search);
    ["phong", "loai", "tt"].forEach(function (key) { params.delete(key); });
    if (filters.beds !== "all") params.set("phong", filters.beds);
    if (filters.type !== "all") params.set("loai", filters.type);
    if (filters.status !== "all") params.set("tt", filters.status);
    const qs = params.toString();
    history.replaceState({}, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
  }

  function page() { return document.body.dataset.page || "home"; }
  function homeLink(hash) {
    return (page() === "home" ? "" : "/") + "#" + hash;
  }
  function propertyUrl(slug) { return "/can-ho/" + encodeURIComponent(slug); }

  function findProperty(slug) {
    return (window.SITE.properties || []).find(function (item) { return item.slug === slug; });
  }
  function filteredProperties() {
    return SITE.properties.filter(function (item) {
      if (filters.beds !== "all" && String(item.beds) !== String(filters.beds)) return false;
      if (filters.type !== "all" && item.type !== filters.type) return false;
      if (filters.status !== "all" && item.status !== filters.status) return false;
      return true;
    });
  }

  function setTitle(text) {
    document.title = text;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pick(SITE.brand.tagline));
  }

  function chip(id, group, value, label, pressed) {
    return '<button type="button" class="chip" id="' + id + '" data-action="filter" data-filter="' + group + '" data-value="' + esc(value) + '" aria-pressed="' + (pressed ? "true" : "false") + '">' + esc(label) + "</button>";
  }

  function renderHeader() {
    const header = document.getElementById("header");
    const current = page();
    const nav = [
      ["overview", homeLink("tong-quan")],
      ["amenities", homeLink("tien-ich")],
      ["location", homeLink("vi-tri")],
      ["gallery", homeLink("thu-vien")],
      ["pricing", homeLink("bang-gia")],
      ["homes", "/can-ho"],
      ["contact", "/lien-he"]
    ];
    const links = nav.map(function (item) {
      const key = item[0];
      const href = item[1];
      const on = (key === "homes" && (current === "listing" || current === "property")) || (key === "contact" && current === "contact");
      return '<a href="' + href + '"' + (on ? ' aria-current="page"' : "") + ">" + t(UI.nav[key]) + "</a>";
    }).join("");
    header.innerHTML =
      '<div class="sample-banner"><strong>' + t(UI.banner) + "</strong></div>" +
      '<div class="site-header" id="site-header"><div class="header-inner">' +
        '<a class="logo" href="/"><span class="logo-mark">' + esc(SITE.brand.mark) + '</span><span class="logo-name">' + esc(SITE.brand.name) + "<small>Residence</small></span></a>" +
        '<button type="button" class="nav-toggle" data-action="toggle-nav" aria-expanded="false" aria-controls="site-nav">' + t(UI.menu) + "</button>" +
        '<nav class="site-nav" id="site-nav">' + links + "</nav>" +
        '<div class="header-actions">' +
          '<button type="button" class="lang-btn" data-action="set-lang" data-lang="' + (lang === "vi" ? "en" : "vi") + '" aria-label="' + (lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt") + '">' + (lang === "vi" ? "EN" : "VI") + "</button>" +
          '<a class="btn btn-primary header-cta" href="/lien-he">' + t(UI.book) + "</a>" +
        "</div></div></div>";
    const skip = document.getElementById("skip-link");
    if (skip) skip.textContent = pick(UI.skip);
  }

  function renderFooter() {
    const footer = document.getElementById("footer");
    footer.innerHTML =
      '<footer class="site-footer"><div class="wrap footer-grid">' +
        "<div><h2>" + esc(SITE.brand.name) + "</h2><p>" + t(UI.footerBlurb) + "</p><p>" + t(SITE.contact.desk) + " · " + esc(SITE.contact.phoneDisplay) + " · <a href=\"mailto:" + esc(SITE.contact.email) + "\">" + esc(SITE.contact.email) + "</a></p></div>" +
        "<div><h2>" + t(UI.nav.homes) + "</h2><ul class=\"footer-links\">" +
          '<li><a href="/">' + t(UI.home) + "</a></li>" +
          '<li><a href="/can-ho">' + t(UI.nav.homes) + "</a></li>" +
          '<li><a href="/lien-he">' + t(UI.nav.contact) + "</a></li>" +
          '<li><a href="/tao-tour">' + t(UI.builder) + "</a></li>" +
        "</ul></div>" +
        "<div><h2>" + t(UI.creditsTitle) + "</h2><ul class=\"footer-links\">" +
          '<li><a href="https://polyhaven.com/license" rel="noopener noreferrer">Poly Haven CC0</a></li>' +
          '<li><a href="https://pannellum.org/" rel="noopener noreferrer">Pannellum</a></li>' +
          '<li><a href="https://github.com/pausegui/free-360-panoramic-viewer-virtual-tour-html" rel="noopener noreferrer">Tour Builder · Pau Seguí</a></li>' +
        "</ul></div>" +
      "</div></footer>";
  }

  function heroHTML() {
    const h = SITE.hero;
    return '<section class="hero"><div class="wrap-l hero-grid">' +
      "<div><p class=\"kicker\">" + t(h.kicker) + "</p><h1>" + t(h.title) + "</h1><p class=\"lede\">" + t(h.lede) + "</p>" +
      '<div class="hero-actions"><a class="btn btn-primary" href="/can-ho">' + t(UI.seeHomes) + '</a><a class="btn btn-ghost" href="' + propertyUrl(SITE.properties[0].slug) + '">' + t(UI.seeTour) + "</a></div>" +
      '<div class="stat-row">' + SITE.stats.map(function (stat) {
        return "<div><strong>" + esc(stat.value) + "</strong><span>" + t(stat.label) + "</span></div>";
      }).join("") + "</div></div>" +
      '<div class="hero-photo"><img src="' + esc(h.image) + '" alt="' + t(h.imageAlt) + '" width="1800" height="1120"></div>' +
      "</div></section>";
  }

  function overviewHTML() {
    const block = SITE.overview;
    return '<section class="section" id="tong-quan"><div class="wrap split">' +
      '<img src="' + esc(block.image) + '" alt="' + t(block.imageAlt) + '" width="1400" height="1000">' +
      "<div><p class=\"kicker\">" + t(block.kicker) + "</p><h2>" + t(block.title) + "</h2>" +
      block.paragraphs.map(function (p) { return "<p class=\"muted\">" + t(p) + "</p>"; }).join("") +
      "</div></div></section>";
  }

  function amenitiesHTML() {
    const block = SITE.amenities;
    return '<section class="section" id="tien-ich"><div class="wrap">' +
      '<div class="section-head"><p class="kicker">' + t(block.kicker) + "</p><h2>" + t(block.title) + "</h2><p class=\"muted\">" + t(block.note) + "</p></div>" +
      '<div class="amenity-grid">' + block.items.map(function (item) {
        const media = item.image
          ? '<img src="' + esc(item.image) + '" alt="' + t(item.imageAlt) + '" width="400" height="400">'
          : '<div class="ph">' + t(UI.noPhoto) + "</div>";
        return '<article class="amenity">' + media + "<div><p class=\"no\">" + esc(item.no) + "</p><h3>" + t(item.title) + "</h3><p>" + t(item.text) + "</p></div></article>";
      }).join("") + "</div></div></section>";
  }

  function locationHTML() {
    const loc = SITE.location;
    const bbox = loc.bbox.join("%2C");
    const src = "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox + "&layer=mapnik&marker=" + loc.lat + "%2C" + loc.lng;
    const big = "https://www.openstreetmap.org/?mlat=" + loc.lat + "&mlon=" + loc.lng + "#map=16/" + loc.lat + "/" + loc.lng;
    return '<section class="section" id="vi-tri"><div class="wrap loc-grid">' +
      "<div><p class=\"kicker\">" + t(loc.kicker) + "</p><h2>" + t(loc.title) + "</h2><p>" + t(loc.address) + "</p><p class=\"muted\">" + t(loc.note) + "</p>" +
      "<ul class=\"nearby\">" + loc.nearby.map(function (item) { return "<li>" + t(item) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="map-frame"><iframe title="' + t(UI.mapTitle) + '" src="' + src + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
      '<p><a href="' + big + '" rel="noopener noreferrer">' + t(UI.mapOpen) + "</a></p></div></div></section>";
  }

  function galleryHTML() {
    const block = SITE.gallery;
    return '<section class="section" id="thu-vien"><div class="wrap">' +
      '<div class="section-head"><p class="kicker">' + t(block.kicker) + "</p><h2>" + t(block.title) + "</h2><p class=\"muted\">" + t(block.note) + "</p></div>" +
      '<div class="gallery">' + block.items.map(function (item) {
        return '<figure class="shot' + (item.wide ? " wide" : "") + '"><img src="' + esc(item.src) + '" alt="' + t(item.alt) + '" width="1400" height="900" loading="lazy"><figcaption>' + t(item.caption) + "</figcaption></figure>";
      }).join("") + "</div></div></section>";
  }

  function pricingHTML() {
    const block = SITE.pricing;
    return '<section class="section" id="bang-gia"><div class="wrap">' +
      '<div class="section-head"><p class="kicker">' + t(block.kicker) + "</p><h2>" + t(block.title) + "</h2><p class=\"muted\">" + t(block.note) + "</p></div>" +
      '<div class="table-scroll"><table class="price-table"><thead><tr><th>' + t(block.typeHeader) + "</th><th>" + t(block.areaHeader) + "</th><th>" + t(block.bedsHeader) + "</th><th>" + t(block.priceHeader) + "</th></tr></thead><tbody>" +
      block.rows.map(function (row) {
        return "<tr><td>" + t(row.type) + "</td><td>" + esc(row.area) + "</td><td>" + esc(row.beds) + '</td><td class="price-hold">' + t(row.price) + "</td></tr>";
      }).join("") +
      "</tbody></table></div>" +
      '<div class="cta-band" style="margin-top:22px"><div><h2>' + t(UI.book) + "</h2><p>" + t(UI.contactLede) + '</p></div><a class="btn btn-primary" href="/lien-he?chu-de=bang-gia">' + t(UI.priceCta) + "</a></div>" +
      "</div></section>";
  }

  function cardHTML(item) {
    return '<a class="card" href="' + propertyUrl(item.slug) + '">' +
      '<img src="' + esc(item.cover) + '" alt="' + t(item.coverAlt) + '" width="1200" height="900" loading="lazy">' +
      '<div class="card-body"><span class="badge' + (item.status === "held" ? " held" : "") + '">' + t(UI.statuses[item.status]) + "</span>" +
      "<h2>" + esc(item.code) + "</h2><p>" + t(item.name) + "</p>" +
      '<p class="meta">' + t(UI.types[item.type]) + " · " + item.beds + " " + pick(UI.beds).toLowerCase() + " · " + esc(item.area) + "</p>" +
      '<span class="card-go">' + pick(UI.seeTour) + "</span></div></a>";
  }

  function listingHTML() {
    const list = filteredProperties();
    const bedValues = ["all", "2", "3"];
    const typeValues = ["all", "apartment", "penthouse"];
    const statusValues = ["all", "open", "held"];
    const chips = function (group, values) {
      return values.map(function (value) {
        const label = value === "all" ? pick(UI.all) : (group === "beds" ? value : pick(UI[group === "type" ? "types" : "statuses"][value]));
        const id = "f-" + group + "-" + value;
        return chip(id, group, value, label, filters[group] === value);
      }).join("");
    };
    return '<section class="page-intro"><div class="wrap"><p class="kicker">' + t(SITE.brand.name) + "</p><h1>" + t(UI.listingTitle) + "</h1><p class=\"lede\">" + t(UI.listingLede) + "</p>" +
      '<div class="filters">' +
        '<div><span class="filter-label" id="label-beds">' + t(UI.beds) + '</span><div class="chips" role="group" aria-labelledby="label-beds">' + chips("beds", bedValues) + "</div></div>" +
        '<div><span class="filter-label" id="label-type">' + t(UI.type) + '</span><div class="chips" role="group" aria-labelledby="label-type">' + chips("type", typeValues) + "</div></div>" +
        '<div><span class="filter-label" id="label-status">' + t(UI.status) + '</span><div class="chips" role="group" aria-labelledby="label-status">' + chips("status", statusValues) + "</div></div>" +
      "</div>" +
      '<p class="result-count" aria-live="polite">' + list.length + " " + pick(UI.count) + "</p>" +
      (list.length
        ? '<div class="cards">' + list.map(cardHTML).join("") + "</div>"
        : '<div class="empty"><p>' + t(UI.empty) + '</p><button type="button" class="btn btn-ghost" data-action="reset-filters">' + t(UI.reset) + "</button></div>") +
      "</div></section>";
  }

  function propertyHTML() {
    const slug = document.body.dataset.slug;
    const item = findProperty(slug);
    if (!item) {
      return '<section class="page-intro"><div class="wrap"><h1>' + t(UI.missingHome) + '</h1><p><a href="/can-ho">' + t(UI.nav.homes) + "</a></p></div></section>";
    }
    const facts = [
      [UI.area, item.area],
      [UI.beds, String(item.beds)],
      [UI.baths, String(item.baths)],
      [UI.floor, pick(item.floor)],
      [UI.aspect, pick(item.aspect)],
      [UI.type, pick(UI.types[item.type])]
    ];
    const others = SITE.properties.filter(function (other) { return other.slug !== item.slug; });
    return '<article class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">' + t(UI.home) + '</a><span>/</span><a href="/can-ho">' + t(UI.nav.homes) + "</a><span>/</span><span>" + esc(item.code) + "</span></nav>" +
      '<div class="prop-top"><div><p class="kicker">' + t(UI.statuses[item.status]) + "</p><h1>" + t(item.name) + "</h1><p class=\"lede\">" + t(item.summary) + "</p>" +
      '<ul class="facts">' + facts.map(function (fact) {
        return "<li><span>" + t(fact[0]) + "</span>" + esc(fact[1]) + "</li>";
      }).join("") + '<li><span>Tour</span>' + item.tour.scenes.length + " " + pick(UI.stops) + "</li></ul></div>" +
      '<div class="price-box"><span>' + t(UI.price) + "</span><strong>" + t(UI.unpublished) + '</strong><a class="btn btn-primary" href="/lien-he?can=' + encodeURIComponent(item.slug) + '">' + t(UI.book) + "</a></div></div>" +
      '<div id="tour-host" class="tour-host"></div>' +
      '<div class="split"><div class="prose">' + item.description.map(function (para) { return "<p>" + t(para) + "</p>"; }).join("") + '</div><aside class="photo-note">' + t(UI.photoNote) + "</aside></div>" +
      "<section class=\"section\"><h2>" + t(UI.other) + '</h2><div class="cards">' + others.map(cardHTML).join("") + "</div></section></article>";
  }

  function contactHTML() {
    const options = '<option value="">' + t(UI.interestAny) + "</option>" +
      '<option value="bang-gia">' + t(UI.interestPrice) + "</option>" +
      SITE.properties.map(function (item) {
        return '<option value="' + esc(item.slug) + '">' + esc(item.code) + " — " + t(item.name) + "</option>";
      }).join("");
    const sample = /example\./i.test(SITE.contact.email);
    return '<section class="page-intro"><div class="wrap contact-grid">' +
      "<div><p class=\"kicker\">" + t(UI.nav.contact) + "</p><h1>" + t(UI.contactTitle) + "</h1><p class=\"lede\">" + t(UI.contactLede) + "</p>" +
      '<div class="panel"><p><strong>' + t(SITE.contact.desk) + "</strong></p><p>" + esc(SITE.contact.phoneDisplay) + "<br><a href=\"mailto:" + esc(SITE.contact.email) + "\">" + esc(SITE.contact.email) + "</a></p><p class=\"muted\">" + t(SITE.contact.hours) + "</p>" +
      (sample ? '<p class="field-error">' + t(UI.sampleMail) + "</p>" : "") +
      (!SITE.contact.endpoint ? '<p class="muted">' + t(UI.endpointHint) + "</p>" : "") +
      "</div></div>" +
      '<form class="panel" id="lead-form" novalidate>' +
        '<div class="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>' +
        '<div class="form-row"><label for="lead-name">' + t(UI.name) + '</label><input id="lead-name" name="name" type="text" autocomplete="name" maxlength="120" required></div>' +
        '<div class="form-row"><label for="lead-phone">' + t(UI.phone) + '</label><input id="lead-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required></div>' +
        '<div class="form-row"><label for="lead-email">' + t(UI.email) + '</label><input id="lead-email" name="email" type="email" autocomplete="email" maxlength="120"></div>' +
        '<div class="form-row"><label for="lead-interest">' + t(UI.interest) + '</label><select id="lead-interest" name="interest">' + options + "</select></div>" +
        '<div class="form-row"><label for="lead-message">' + t(UI.message) + '</label><textarea id="lead-message" name="message" maxlength="2000"></textarea></div>' +
        '<div class="form-row"><label class="check"><input id="lead-consent" name="consent" type="checkbox" value="yes"><span>' + t(UI.consent) + "</span></label></div>" +
        '<button class="btn btn-primary" type="submit">' + t(UI.send) + "</button>" +
        '<p class="form-status" id="form-status" role="status" aria-live="polite"></p>' +
      "</form></div></section>";
  }

  function notFoundHTML() {
    return '<section class="page-intro"><div class="wrap"><h1>' + t(UI.notFound) + "</h1><p class=\"lede\">" + t(UI.notFoundLede) + '</p><p><a class="btn btn-primary" href="/">' + t(UI.home) + '</a> <a class="btn btn-ghost" href="/can-ho">' + t(UI.nav.homes) + "</a></p></div></section>";
  }

  function renderMain(tourState) {
    const main = document.getElementById("content");
    const kind = page();
    if (kind === "home") {
      setTitle(SITE.brand.name + (lang === "en" ? " — sample residence" : " — trang mẫu"));
      main.innerHTML = heroHTML() + overviewHTML() + amenitiesHTML() + locationHTML() + galleryHTML() + pricingHTML();
    } else if (kind === "listing") {
      setTitle(pick(UI.listingTitle) + " — " + SITE.brand.name);
      main.innerHTML = listingHTML();
    } else if (kind === "property") {
      const item = findProperty(document.body.dataset.slug);
      setTitle((item ? pick(item.name) : pick(UI.missingHome)) + " — " + SITE.brand.name);
      main.innerHTML = propertyHTML();
      const host = document.getElementById("tour-host");
      if (host && item && window.SXTour) {
        SXTour.mount(host, item.tour, {
          lang: lang,
          resume: tourState,
          debug: new URLSearchParams(location.search).has("dat-hotspot")
        });
      }
    } else if (kind === "contact") {
      setTitle(pick(UI.contactTitle) + " — " + SITE.brand.name);
      main.innerHTML = contactHTML();
      const params = new URLSearchParams(location.search);
      const select = document.getElementById("lead-interest");
      const can = params.get("can");
      const topic = params.get("chu-de");
      if (select && can && findProperty(can)) select.value = can;
      else if (select && topic === "bang-gia") select.value = "bang-gia";
    } else {
      setTitle(pick(UI.notFound) + " — " + SITE.brand.name);
      main.innerHTML = notFoundHTML();
    }
  }

  function render(tourState) {
    document.documentElement.lang = lang;
    renderHeader();
    renderMain(tourState);
    renderFooter();
  }

  function interestLabel(value) {
    if (value === "bang-gia") return pick(UI.interestPrice);
    const item = findProperty(value);
    if (item) return item.code + " — " + pick(item.name);
    return pick(UI.interestAny);
  }

  function mailtoLink(data) {
    const body = [
      (lang === "en" ? "Name: " : "Họ tên: ") + data.name,
      (lang === "en" ? "Phone: " : "Điện thoại: ") + data.phone,
      "Email: " + (data.email || "—"),
      (lang === "en" ? "Interest: " : "Quan tâm: ") + data.interestLabel,
      (lang === "en" ? "Message: " : "Lời nhắn: ") + (data.message || "—")
    ].join("\n");
    return "mailto:" + SITE.contact.email + "?subject=" + encodeURIComponent(pick(SITE.contact.subject)) + "&body=" + encodeURIComponent(body);
  }

  function showFieldError(input, message) {
    const row = input.closest(".form-row");
    row.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    let note = row.querySelector(".field-error");
    if (!note) {
      note = document.createElement("p");
      note.className = "field-error";
      row.appendChild(note);
    }
    note.textContent = message;
    if (!input.hasAttribute("aria-describedby")) {
      note.id = input.id + "-error";
      input.setAttribute("aria-describedby", note.id);
    }
  }

  function clearErrors(form) {
    form.querySelectorAll(".has-error").forEach(function (row) { row.classList.remove("has-error"); });
    form.querySelectorAll("[aria-invalid]").forEach(function (input) { input.removeAttribute("aria-invalid"); });
    form.querySelectorAll(".field-error").forEach(function (node) { node.remove(); });
  }

  function validate(form) {
    clearErrors(form);
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      interest: form.interest.value,
      message: form.message.value.trim(),
      consent: form.consent.checked,
      website: form.website.value
    };
    let first = null;
    function fail(field, message) {
      showFieldError(form[field], message);
      if (!first) first = form[field];
    }
    if (data.name.length < 2) fail("name", pick(UI.errName));
    if (data.phone.replace(/\D/g, "").length < 8) fail("phone", pick(UI.errPhone));
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fail("email", pick(UI.errEmail));
    if (!data.consent) fail("consent", pick(UI.errConsent));
    if (first) first.focus();
    data.interestLabel = interestLabel(data.interest);
    return { ok: !first, data: data };
  }

  function confirmation(html, ok) {
    const form = document.getElementById("lead-form");
    form.innerHTML = '<p class="form-status ' + (ok ? "ok" : "bad") + '" role="status">' + html + '</p><button type="button" class="btn btn-ghost" data-action="reset-form">' + t(UI.another) + "</button>";
  }

  async function onSubmit(event) {
    const form = event.target;
    if (!form || form.id !== "lead-form") return;
    event.preventDefault();
    const result = validate(form);
    if (!result.ok) return;
    const data = result.data;
    if (data.website) {
      confirmation(t(UI.sentOk), true);
      return;
    }
    const status = document.getElementById("form-status");
    const button = form.querySelector('[type="submit"]');
    const mail = mailtoLink(data);
    if (!SITE.contact.endpoint) {
      const plain = [
        (lang === "en" ? "Name: " : "Họ tên: ") + data.name,
        (lang === "en" ? "Phone: " : "Điện thoại: ") + data.phone,
        "Email: " + (data.email || "—"),
        (lang === "en" ? "Interest: " : "Quan tâm: ") + data.interestLabel,
        (lang === "en" ? "Message: " : "Lời nhắn: ") + (data.message || "—")
      ].join("\n");
      confirmation(t(UI.mailtoOk) + '<br><a href="' + esc(mail) + '">' + t(UI.openMail) + '</a><pre class="copy-box">' + esc(plain) + "</pre>", true);
      window.location.href = mail;
      return;
    }
    button.disabled = true;
    button.textContent = pick(UI.sending);
    status.textContent = "";
    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, 15000);
    try {
      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        interest: data.interest,
        interestLabel: data.interestLabel,
        message: data.message,
        consent: "yes",
        lang: lang,
        page: location.pathname
      };
      let response;
      if (SITE.contact.format === "form") {
        const body = new FormData();
        Object.keys(payload).forEach(function (key) { body.append(key, payload[key]); });
        response = await fetch(SITE.contact.endpoint, { method: "POST", body: body, headers: { Accept: "application/json" }, signal: controller.signal });
      } else {
        response = await fetch(SITE.contact.endpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
      }
      if (!response.ok) throw new Error(String(response.status));
      confirmation(t(UI.sentOk), true);
    } catch (err) {
      button.disabled = false;
      button.textContent = pick(UI.send);
      status.className = "form-status bad";
      status.innerHTML = t(UI.sentBad) + ' <a href="' + esc(mail) + '">' + t(UI.openMail) + "</a>";
    } finally {
      clearTimeout(timer);
    }
  }

  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-action]");
    const header = document.getElementById("site-header");
    if (!button) {
      if (header && !header.contains(event.target)) header.classList.remove("nav-open");
      return;
    }
    const action = button.getAttribute("data-action");
    if (action === "toggle-nav") {
      const open = !header.classList.contains("nav-open");
      header.classList.toggle("nav-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.textContent = open ? pick(UI.close) : pick(UI.menu);
      return;
    }
    if (action === "set-lang") {
      const tourState = window.SXTour ? SXTour.capture() : null;
      lang = button.getAttribute("data-lang") === "en" ? "en" : "vi";
      saveLang();
      render(tourState);
      return;
    }
    if (action === "filter") {
      filters[button.getAttribute("data-filter")] = button.getAttribute("data-value");
      writeFilters();
      const focusId = button.id;
      renderMain();
      const again = document.getElementById(focusId);
      if (again) again.focus();
      return;
    }
    if (action === "reset-filters") {
      filters.beds = "all";
      filters.type = "all";
      filters.status = "all";
      writeFilters();
      renderMain();
      return;
    }
    if (action === "reset-form") renderMain();
  });

  document.addEventListener("submit", onSubmit);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const header = document.getElementById("site-header");
      if (header) header.classList.remove("nav-open");
    }
  });

  loadLang();
  readFilters();
  if (!window.SITE) {
    document.getElementById("content").textContent = "Thiếu /data/site.js";
    return;
  }
  render();
})();
