/**
 * DỮ LIỆU MẪU — sửa file này khi thay nội dung thật.
 *
 * Mọi tên dự án, diện tích, hướng, tiện ích và giá trong file đều là chỗ dành sẵn.
 * Không điền giá bán giả. Cột giá đang là câu "chưa công bố".
 *
 * Thêm một căn và tour của căn:
 * 1. Copy một object trong `properties`.
 * 2. Đổi `slug` (chữ thường, không dấu, không khoảng trắng).
 * 3. Đặt ảnh equirectangular 2:1 vào /assets/panoramas/ và trỏ `tour.scenes[].image`.
 * 4. Nối phòng bằng `hotspots`: `target` là `id` của cảnh khác trong cùng tour.
 *    `pitch` / `yaw` là chỗ đặt mũi tên. `targetPitch` / `targetYaw` là hướng camera khi bước vào phòng đích.
 *    Thêm `info` cho điểm thông tin (nút i).
 * 5. Copy public/can-ho/a1.html thành public/can-ho/<slug>.html và sửa data-slug + <title>.
 * 6. Xem trước, mở /can-ho/<slug>?dat-hotspot=1 rồi bấm lên ảnh để đọc toạ độ pitch/yaw.
 *
 * Ảnh panorama đang dùng là HDRI tonemap của Poly Haven (CC0). Xem assets/CREDITS.md.
 */
window.SITE = {
  sample: true,
  brand: {
    name: "Sông Xanh Residence",
    mark: "SX",
    tagline: {
      vi: "Trang giới thiệu mẫu cho một khu căn hộ — xem nhà bằng tour 360° ngay trên trình duyệt.",
      en: "A sample residence site — walk each home in a 360° tour, right in the browser."
    }
  },
  hero: {
    image: "/assets/gallery/hero.jpg",
    imageAlt: {
      vi: "Ảnh minh họa sân thượng, cắt từ panorama CC0, không phải view thật của dự án.",
      en: "Illustrative terrace still, cropped from a CC0 panorama, not an actual project view."
    },
    kicker: { vi: "Dự án mẫu", en: "Sample project" },
    title: { vi: "Xem nhà trước khi đặt lịch.", en: "Walk the home before you book a visit." },
    lede: {
      vi: "Sông Xanh Residence là nội dung minh họa: tổng quan, tiện ích, vị trí, thư viện và ba căn mẫu. Mỗi căn gắn một tour 360° có mũi tên dẫn phòng, điểm thông tin, toàn màn hình, tự xoay và con quay trên điện thoại nếu máy hỗ trợ.",
      en: "Sông Xanh Residence is sample content: overview, amenities, location, gallery, and three demo homes. Each home has a 360° tour with room arrows, info points, fullscreen, auto-rotate, and phone gyro when the device supports it."
    }
  },
  stats: [
    { value: "03", label: { vi: "căn mẫu có tour", en: "sample homes with a tour" } },
    { value: "360°", label: { vi: "dẫn phòng bằng hotspot", en: "rooms linked by hotspots" } },
    { value: "—", label: { vi: "giá chưa công bố", en: "prices not published" } }
  ],
  overview: {
    image: "/assets/gallery/overview.jpg",
    imageAlt: {
      vi: "Ảnh minh họa phòng khách, cắt từ panorama CC0.",
      en: "Illustrative living room, cropped from a CC0 panorama."
    },
    kicker: { vi: "Tổng quan", en: "Overview" },
    title: { vi: "Một trang để khách tự xem, một tệp để bạn sửa.", en: "One page for visitors, one file for you to edit." },
    paragraphs: [
      {
        vi: "Trang này chạy tĩnh trên Firebase Hosting, không cần máy chủ riêng. Tour dùng cùng kiểu dữ liệu với công cụ tạo tour: mỗi cảnh là một ảnh cầu 2:1, mũi tên trỏ sang cảnh khác, điểm i hiện một đoạn chữ.",
        en: "This site is static on Firebase Hosting and needs no app server. Tours use the same kind of data as the tour builder: each scene is a 2:1 equirectangular photo, arrows open another scene, and an “i” point shows a short note."
      },
      {
        vi: "Tên căn, diện tích, số phòng, hướng và tiện ích bên dưới là số liệu mẫu. Hãy thay bằng hồ sơ thật trong public/data/site.js. Bảng giá cố ý không có số tiền.",
        en: "Unit names, areas, room counts, aspects, and amenities below are sample figures. Replace them with the real brochure in public/data/site.js. The price table intentionally has no amounts."
      }
    ]
  },
  amenities: {
    kicker: { vi: "Tiện ích", en: "Amenities" },
    title: { vi: "Danh sách tiện ích mẫu", en: "Sample amenity list" },
    note: {
      vi: "Các mục sau là chỗ dành sẵn. Mục nào chưa có ảnh thật thì chưa gán ảnh, để tránh gắn nhầm không gian.",
      en: "The items below are placeholders. Items without a real photo are not given a picture, so the wrong space is not implied."
    },
    items: [
      {
        no: "01",
        title: { vi: "Sảnh đón", en: "Lobby" },
        text: { vi: "Ảnh sảnh là tư liệu minh họa. Thay bằng ảnh sảnh thật khi có.", en: "The lobby still is illustrative stock. Swap in the real lobby when you have it." },
        image: "/assets/gallery/gallery-hall.jpg",
        imageAlt: { vi: "Sảnh minh họa", en: "Illustrative lobby" }
      },
      {
        no: "02",
        title: { vi: "Sân thượng / ban công", en: "Terrace / balcony" },
        text: { vi: "Dùng để khách thấy cách một không gian ngoài trời hiện trong tour.", en: "Shows how an outdoor space appears inside the tour." },
        image: "/assets/gallery/gallery-terrace.jpg",
        imageAlt: { vi: "Sân thượng minh họa", en: "Illustrative terrace" }
      },
      {
        no: "03",
        title: { vi: "Hồ bơi", en: "Pool" },
        text: { vi: "Tiện ích mẫu — chưa có ảnh. Thêm ảnh khi dự án có hồ bơi thật.", en: "Sample amenity — no photo yet. Add one when the project has a real pool." }
      },
      {
        no: "04",
        title: { vi: "Khu vui chơi trẻ em", en: "Children’s play area" },
        text: { vi: "Mô tả mẫu. Khoảng cách và quy mô cần số liệu thật.", en: "Sample description. Size and distance need real figures." }
      },
      {
        no: "05",
        title: { vi: "Hầm để xe", en: "Parking" },
        text: { vi: "Chỗ để xe: cập nhật số chỗ và cách tính phí.", en: "Parking: add the real stall count and fee rule." }
      },
      {
        no: "06",
        title: { vi: "An ninh", en: "Security" },
        text: { vi: "Nội dung mẫu. Ghi rõ hình thức kiểm soát ra vào khi chốt.", en: "Sample copy. State the real access control when it is decided." }
      }
    ]
  },
  location: {
    kicker: { vi: "Vị trí", en: "Location" },
    title: { vi: "Bản đồ minh họa, không cần khóa API", en: "An illustrative map, no API key" },
    image: "/assets/gallery/location.jpg",
    imageAlt: { vi: "Ban công minh họa nhìn ra cây xanh.", en: "Illustrative balcony facing trees." },
    address: {
      vi: "Địa chỉ mẫu — khu Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh. Đây chưa phải văn phòng giao dịch.",
      en: "Sample address — Thảo Điền, Thủ Đức, Ho Chi Minh City. This is not a sales office."
    },
    note: {
      vi: "Ghim trên bản đồ OpenStreetMap chỉ để demo. Kéo tọa độ trong file dữ liệu khi có ranh thật. Các khoảng cách xung quanh cố ý để trống.",
      en: "The OpenStreetMap pin is only a demo. Move the coordinates in the data file when the real boundary exists. Nearby distances are intentionally blank."
    },
    lat: 10.8142,
    lng: 106.7294,
    bbox: [106.712, 10.802, 106.748, 10.826],
    nearby: [
      { vi: "Công viên — khoảng cách cập nhật sau", en: "Park — distance to be added" },
      { vi: "Trường học — cập nhật sau", en: "School — to be added" },
      { vi: "Trung tâm thương mại — cập nhật sau", en: "Mall — to be added" },
      { vi: "Ga / metro — cập nhật sau", en: "Metro — to be added" }
    ]
  },
  gallery: {
    kicker: { vi: "Thư viện", en: "Gallery" },
    title: { vi: "Ảnh cắt từ tour mẫu", en: "Stills cropped from the sample tours" },
    note: {
      vi: "Mỗi ảnh ghi rõ là tư liệu CC0 dùng để dựng demo. Không phải ảnh nghiệm thu căn hộ.",
      en: "Each still is CC0 material used to build the demo. These are not handover photos of a unit."
    },
    items: [
      { src: "/assets/gallery/gallery-terrace.jpg", wide: true, alt: { vi: "Sân thượng minh họa", en: "Illustrative terrace" }, caption: { vi: "Sân thượng mẫu", en: "Sample terrace" } },
      { src: "/assets/gallery/gallery-wood.jpg", alt: { vi: "Phòng khách gỗ minh họa", en: "Illustrative timber living room" }, caption: { vi: "Phòng khách mẫu", en: "Sample living room" } },
      { src: "/assets/gallery/gallery-lounge.jpg", alt: { vi: "Phòng khách tối màu minh họa", en: "Illustrative dark living room" }, caption: { vi: "Phòng khách mẫu", en: "Sample living room" } },
      { src: "/assets/gallery/gallery-hall.jpg", alt: { vi: "Sảnh và cầu thang minh họa", en: "Illustrative hall and stair" }, caption: { vi: "Sảnh mẫu", en: "Sample hall" } },
      { src: "/assets/gallery/gallery-balcony.jpg", alt: { vi: "Ban công minh họa", en: "Illustrative balcony" }, caption: { vi: "Ban công mẫu", en: "Sample balcony" } },
      { src: "/assets/gallery/gallery-suite.jpg", alt: { vi: "Phòng kính minh họa, khung cảnh ngoài trời không thuộc dự án", en: "Illustrative glazed room; the outdoor scene is not the project" }, caption: { vi: "Phòng ngủ chính mẫu", en: "Sample primary bedroom" } }
    ]
  },
  pricing: {
    kicker: { vi: "Bảng giá", en: "Pricing" },
    title: { vi: "Chưa công bố giá", en: "Prices are not published" },
    note: {
      vi: "Bảng dưới đây chỉ giữ chỗ cho loại căn và diện tích mẫu. Cột giá không có số tiền. Khi có bảng giá thật, sửa mảng pricing trong data/site.js — đừng dán số tạm.",
      en: "The table only reserves rows for unit types and sample areas. The price column has no amounts. When a real sheet exists, edit the pricing array in data/site.js — do not paste temporary numbers."
    },
    rows: [
      { type: { vi: "Căn 2 phòng ngủ", en: "2-bedroom" }, area: "78 m²", beds: "2", price: { vi: "Liên hệ — chưa công bố", en: "Ask — not published" } },
      { type: { vi: "Căn 3 phòng ngủ", en: "3-bedroom" }, area: "102 m²", beds: "3", price: { vi: "Liên hệ — chưa công bố", en: "Ask — not published" } },
      { type: { vi: "Penthouse mẫu", en: "Sample penthouse" }, area: "156 m²", beds: "3", price: { vi: "Liên hệ — chưa công bố", en: "Ask — not published" } }
    ],
    areaHeader: { vi: "Diện tích mẫu", en: "Sample area" },
    bedsHeader: { vi: "Phòng ngủ", en: "Bedrooms" },
    priceHeader: { vi: "Giá", en: "Price" },
    typeHeader: { vi: "Loại căn", en: "Type" }
  },
  contact: {
    /* Để trống endpoint để dùng mailto. Điền URL HTTPS (Formspree, Apps Script, v.v.)
       để gửi POST. format: "json" hoặc "form". */
    endpoint: "",
    format: "json",
    email: "tu-van@example.com",
    phoneDisplay: "0900 000 000",
    hours: { vi: "Giờ làm việc: cập nhật sau", en: "Hours: to be added" },
    desk: { vi: "Quầy tư vấn mẫu", en: "Sample sales desk" },
    subject: { vi: "Đăng ký xem nhà mẫu", en: "Sample home viewing request" }
  },
  properties: [
    {
      slug: "s1",
      location: { lat: 20.99606, lng: 105.95447, zoom: 17, approx: true, label: { vi: "Phân khu Sao Biển 9A, Vinhomes Ocean Park 1, Gia Lâm, Hà Nội (vị trí gần đúng)", en: "Sao Bien 9A subdivision, Vinhomes Ocean Park 1, Gia Lam, Hanoi (approximate location)" } },
      code: "SB9A-SP12-16",
      type: "shophouse",
      deal: "rent",
      status: "open",
      beds: 3,
      baths: "-",
      area: "90 m²",
      floor: { vi: "4 tầng", en: "4 storeys" },
      aspect: { vi: "Căn góc 2 mặt tiền", en: "Corner unit, 2 frontages" },
      priceText: { vi: "30 triệu/tháng", en: "30 million VND/month" },
      phone: "0399 905 416",
      extraFacts: [
        { label: { vi: "Địa chỉ", en: "Address" }, value: { vi: "Phân khu Sao Biển 9A, Vinhomes Ocean Park 1, Gia Lâm, Hà Nội", en: "Sao Bien 9A, Vinhomes Ocean Park 1, Gia Lam, Hanoi" } },
        { label: { vi: "Phong cách", en: "Style" }, value: { vi: "Tân cổ điển", en: "Neoclassical" } },
        { label: { vi: "Hoàn thiện", en: "Finish" }, value: { vi: "Hoàn thiện cơ bản", en: "Basic finish" } },
        { label: { vi: "Liên hệ", en: "Contact" }, value: { vi: "0399 905 416", en: "0399 905 416" } }
      ],
      name: { vi: "Cho thuê shophouse căn góc SB9A-SP12-16", en: "Corner shophouse SB9A-SP12-16 for rent" },
      summary: {
        vi: "Shophouse căn góc tại phân khu Sao Biển 9A, Vinhomes Ocean Park 1, Gia Lâm, Hà Nội. Diện tích 90 m², 4 tầng, 2 mặt tiền rộng. Giá thuê 30 triệu/tháng.",
        en: "Corner shophouse in Sao Bien 9A, Vinhomes Ocean Park 1, Gia Lam, Hanoi. 90 m², 4 storeys, two wide frontages. Rent: 30 million VND/month."
      },
      description: [
        {
          vi: "Căn góc 2 mặt tiền rộng, phù hợp làm văn phòng hoặc kinh doanh. Nhà 4 tầng, diện tích 90 m², 3 phòng ngủ, phong cách tân cổ điển.",
          en: "Corner unit with two wide frontages, suited to an office or a business. 4 storeys, 90 m², 3 bedrooms, neoclassical style."
        },
        {
          vi: "Nhà hoàn thiện cơ bản. Giá thuê 30 triệu/tháng. Liên hệ: 0399 905 416.",
          en: "Basic finish. Rent: 30 million VND/month. Contact: 0399 905 416."
        }
      ],
      cover: "/assets/gallery/card-s1.jpg?v=20261030b",
      coverAlt: { vi: "Shophouse căn góc SB9A-SP12-16 nhìn từ góc phố", en: "Corner shophouse SB9A-SP12-16 seen from the street corner" },
      photos: [
        { src: "/assets/gallery/s1/photo-1.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-1-thumb.jpg?v=20261030b", caption: { vi: "Mặt tiền góc phố", en: "Street-corner frontage" }, alt: { vi: "Mặt tiền góc phố - shophouse SB9A-SP12-16", en: "Street-corner frontage - shophouse SB9A-SP12-16" } },
        { src: "/assets/gallery/s1/photo-2.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-2-thumb.jpg?v=20261030b", caption: { vi: "Mặt tiền tầng trệt", en: "Ground-floor frontage" }, alt: { vi: "Mặt tiền tầng trệt - shophouse SB9A-SP12-16", en: "Ground-floor frontage - shophouse SB9A-SP12-16" } },
        { src: "/assets/gallery/s1/photo-3.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-3-thumb.jpg?v=20261030b", caption: { vi: "Toàn cảnh căn góc", en: "Corner view" }, alt: { vi: "Toàn cảnh căn góc - shophouse SB9A-SP12-16", en: "Corner view - shophouse SB9A-SP12-16" } },
        { src: "/assets/gallery/s1/photo-4.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-4-thumb.jpg?v=20261030b", caption: { vi: "Toàn cảnh căn góc từ trên cao", en: "Corner view from above" }, alt: { vi: "Toàn cảnh căn góc từ trên cao - shophouse SB9A-SP12-16", en: "Corner view from above - shophouse SB9A-SP12-16" } },
        { src: "/assets/gallery/s1/photo-5.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-5-thumb.jpg?v=20261030b", caption: { vi: "Mặt tiền tầng trệt và ban công", en: "Ground-floor frontage and balcony" }, alt: { vi: "Mặt tiền tầng trệt và ban công - shophouse SB9A-SP12-16", en: "Ground-floor frontage and balcony - shophouse SB9A-SP12-16" } },
        { src: "/assets/gallery/s1/photo-6.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-6-thumb.jpg?v=20261030b", caption: { vi: "Lối vào góc phố", en: "Street-corner entrance" }, alt: { vi: "Lối vào góc phố - shophouse SB9A-SP12-16", en: "Street-corner entrance - shophouse SB9A-SP12-16" } },
        { src: "/assets/gallery/s1/photo-7.jpg?v=20261030b", thumb: "/assets/gallery/s1/photo-7-thumb.jpg?v=20261030b", caption: { vi: "Mặt tiền hai mặt phố", en: "Two street frontages" }, alt: { vi: "Mặt tiền hai mặt phố - shophouse SB9A-SP12-16", en: "Two street frontages - shophouse SB9A-SP12-16" } }
      ]
    },
    {
      slug: "n1",
      location: { lat: 20.97440, lng: 105.82194, zoom: 15, approx: true, label: { vi: "Khu vực Phường Đại Kim (vị trí gần đúng)", en: "Dai Kim ward area (approximate location)" } },
      code: "N1-01",
      type: "house",
      deal: "sale",
      status: "open",
      beds: "—",
      baths: "—",
      area: "129,2 m² (sử dụng riêng 59,3 m²)",
      extraFacts: [
        { label: { vi: "Địa chỉ", en: "Address" }, value: { vi: "Phường Đại Kim, quận Hoàng Mai, Hà Nội", en: "Dai Kim Ward, Hoang Mai District, Hanoi" } },
        { label: { vi: "Pháp lý", en: "Legal status" }, value: { vi: "Sổ đỏ (Sở TN&MT Hà Nội cấp năm 2017)", en: "Land use rights certificate (issued by Hanoi DONRE, 2017)" } },
        { label: { vi: "Thời hạn sử dụng", en: "Land use term" }, value: { vi: "Lâu dài", en: "Long-term" } },
        { label: { vi: "Nhà ở", en: "House" }, value: { vi: "Nhà chưa cập nhật trên sổ", en: "House not yet recorded on the certificate" } }
      ],
      floor: { vi: "Cập nhật sau", en: "To be added" },
      aspect: { vi: "Cập nhật sau", en: "To be added" },
      name: { vi: "Bán nhà gần đường vành đai 2.5", en: "House for sale near Ring Road 2.5" },
      summary: {
        vi: "Nhà rao bán tại phường Đại Kim, quận Hoàng Mai, Hà Nội, gần đường Vành đai 2.5. Diện tích đất 129,2 m² (sử dụng riêng 59,3 m²), có sổ đỏ. Giá: Liên hệ.",
        en: "House for sale in Dai Kim Ward, Hoang Mai District, Hanoi, near Ring Road 2.5. Land area 129.2 m² (59.3 m² private use), with a land use rights certificate. Price: contact us."
      },
      description: [
        {
          vi: "Vị trí: phường Đại Kim, quận Hoàng Mai, Hà Nội, gần đường Vành đai 2.5.",
          en: "Location: Dai Kim Ward, Hoang Mai District, Hanoi, near Ring Road 2.5."
        },
        {
          vi: "Diện tích đất 129,2 m², gồm 59,3 m² sử dụng riêng (30,0 m² đất ở tại đô thị + 29,3 m² đất vườn) và 69,9 m² đất vườn sử dụng chung (ngõ đi chung). Mục đích sử dụng: đất ở tại đô thị 30,0 m², đất vườn 99,2 m². Thời hạn: lâu dài.",
          en: "Land area 129.2 m²: 59.3 m² private use (30.0 m² urban residential land + 29.3 m² garden land) and 69.9 m² shared-use garden land (shared alley). Land use purpose: urban residential land 30.0 m², garden land 99.2 m². Term: long-term."
        },
        {
          vi: "Pháp lý: có sổ đỏ (giấy chứng nhận quyền sử dụng đất) do Sở Tài nguyên và Môi trường Hà Nội cấp năm 2017. Nguồn gốc: nhận chuyển nhượng quyền sử dụng đất được công nhận như Nhà nước giao đất có thu tiền sử dụng đất 30,0 m², không thu tiền sử dụng đất 99,2 m². Nhà ở chưa được cập nhật trên sổ.",
          en: "Legal status: land use rights certificate (sổ đỏ) issued by the Hanoi Department of Natural Resources and Environment in 2017. Origin: transferred land use rights, recognized as state-allocated land with land use fee paid for 30.0 m² and without fee for 99.2 m². The house is not yet recorded on the certificate."
        },
        {
          vi: "Tour 360° hiện có phòng khách tầng 1, phòng bếp và phòng giặt phơi. Các ảnh đã được dàn dựng nội thất bằng kỹ thuật số, có thể khác thực tế.",
          en: "The 360° tour currently shows the ground-floor living room, the kitchen and the laundry & drying room. The photos have been digitally staged and may differ from reality."
        }
      ],
      cover: "/assets/gallery/card-n1.jpg?v=20261029e",
      coverAlt: { vi: "Phòng khách tầng 1 nhà gần Vành đai 2.5", en: "Ground-floor living room of the house near Ring Road 2.5" },
      photos: [
        { src: "/assets/gallery/n1/photo-1.jpg?v=20261029e", thumb: "/assets/gallery/n1/photo-1-thumb.jpg?v=20261029e", caption: { vi: "Phòng tầng trên", en: "Upstairs room" }, alt: { vi: "Phòng tầng trên - nhà gần Vành đai 2.5", en: "Upstairs room - house near Ring Road 2.5" } },
        { src: "/assets/gallery/n1/photo-3.jpg?v=20261029e", thumb: "/assets/gallery/n1/photo-3-thumb.jpg?v=20261029e", caption: { vi: "Phòng ngủ", en: "Bedroom" }, alt: { vi: "Phòng ngủ - nhà gần Vành đai 2.5", en: "Bedroom - house near Ring Road 2.5" } },
        { src: "/assets/gallery/n1/photo-4.jpg?v=20261029e", thumb: "/assets/gallery/n1/photo-4-thumb.jpg?v=20261029e", caption: { vi: "Giếng trời", en: "Skylight" }, alt: { vi: "Giếng trời - nhà gần Vành đai 2.5", en: "Skylight - house near Ring Road 2.5" } }
      ],
      tour: {
        first: "living",
        scenes: [
          {
            id: "living",
            name: { vi: "Phòng khách tầng 1", en: "Ground-floor living room" },
            image: "/assets/panoramas/n1-livingroom.jpg?v=20261029e",
            pitch: -6,
            yaw: -140,
            hotspots: [
              { pitch: -6, yaw: 178, target: "balcony", targetPitch: 0, targetYaw: 0, text: { vi: "Phòng giặt phơi", en: "Laundry & drying room" } },
              { pitch: -4, yaw: -30, target: "kitchen", targetPitch: -6, targetYaw: -60, text: { vi: "Phòng bếp", en: "Kitchen" } },
              { pitch: 8, yaw: -100, text: { vi: "Ảnh đã được dàn dựng nội thất bằng kỹ thuật số, có thể khác thực tế.", en: "This photo has been digitally staged and may differ from reality." } }
            ],
            info: []
          },
          {
            id: "kitchen",
            name: { vi: "Phòng bếp", en: "Kitchen" },
            image: "/assets/panoramas/n1-kitchen.jpg?v=20261029e",
            pitch: -6,
            yaw: -60,
            hotspots: [
              { pitch: -6, yaw: 120, target: "living", targetPitch: -6, targetYaw: -140, text: { vi: "Phòng khách tầng 1", en: "Ground-floor living room" } },
              { pitch: -2, yaw: 140, target: "balcony", targetPitch: 0, targetYaw: 0, text: { vi: "Phòng giặt phơi", en: "Laundry & drying room" } },
              { pitch: 8, yaw: -100, text: { vi: "Ảnh đã được dàn dựng nội thất bằng kỹ thuật số, có thể khác thực tế.", en: "This photo has been digitally staged and may differ from reality." } }
            ],
            info: []
          },
          {
            id: "balcony",
            name: { vi: "Phòng giặt phơi", en: "Laundry & drying room" },
            image: "/assets/panoramas/n1-balcony.jpg?v=20261029s",
            pitch: 0,
            yaw: 0,
            hotspots: [
              { pitch: -6, yaw: 180, target: "living", targetPitch: -6, targetYaw: -140, text: { vi: "Phòng khách tầng 1", en: "Ground-floor living room" } },
              { pitch: -6, yaw: 160, target: "kitchen", targetPitch: -6, targetYaw: -60, text: { vi: "Phòng bếp", en: "Kitchen" } }
            ],
            info: []
          }
        ]
      }
    },
    {
      slug: "a1",
      code: "A1-08",
      type: "apartment",
      status: "open",
      beds: 2,
      baths: 2,
      area: "78 m²",
      floor: { vi: "Tầng mẫu 12", en: "Sample floor 12" },
      aspect: { vi: "Đông Nam (mẫu)", en: "Southeast (sample)" },
      name: { vi: "Căn hộ mẫu A1-08", en: "Sample apartment A1-08" },
      summary: {
        vi: "Tour bốn điểm: phòng khách, phòng ngủ, phòng tắm và ban công. Diện tích và hướng là số mẫu.",
        en: "A four-stop tour: living room, bedroom, bathroom, and balcony. Area and aspect are sample figures."
      },
      description: [
        {
          vi: "Bấm mũi tên trên ảnh để sang phòng. Bấm nút i để đọc ghi chú. Ảnh lấy từ thư viện CC0 nhằm cho thấy cách dẫn tour, không phải hiện trạng căn A1-08.",
          en: "Use the arrows to change rooms and the “i” buttons for notes. The photos are CC0 library images so the tour flow can be demonstrated; they are not the real condition of unit A1-08."
        },
        {
          vi: "Khi có ảnh 360° của căn, giữ nguyên id cảnh nếu được, chỉ đổi đường dẫn image và chỉnh lại pitch/yaw cho khớp cửa đi.",
          en: "When the real 360° photos arrive, keep the scene ids if you can, replace the image paths, and retune pitch/yaw so arrows sit on the real doors."
        }
      ],
      cover: "/assets/gallery/card-a1.jpg",
      coverAlt: { vi: "Phòng khách mẫu của căn A1-08", en: "Sample living room for unit A1-08" },
      tour: {
        first: "living",
        scenes: [
          {
            id: "living",
            name: { vi: "Phòng khách", en: "Living room" },
            image: "/assets/panoramas/a1-living.jpg",
            pitch: -6,
            yaw: 15,
            hotspots: [
              { pitch: -12, yaw: 48, target: "bed", targetPitch: -10, targetYaw: 20, text: { vi: "Phòng ngủ", en: "Bedroom" } },
              { pitch: -10, yaw: -18, target: "bath", targetPitch: -8, targetYaw: 0, text: { vi: "Phòng tắm", en: "Bathroom" } },
              { pitch: -4, yaw: 18, target: "balcony", targetPitch: -8, targetYaw: 10, text: { vi: "Ban công", en: "Balcony" } }
            ],
            info: [
              { pitch: 2, yaw: 0, text: { vi: "Lò sưởi trong ảnh là chi tiết minh họa của tư liệu gốc, không phải nội thất bàn giao.", en: "The fireplace belongs to the source photo. It is not a handover finish." } }
            ]
          },
          {
            id: "bed",
            name: { vi: "Phòng ngủ", en: "Bedroom" },
            image: "/assets/panoramas/a1-bed.jpg",
            pitch: -10,
            yaw: 20,
            hotspots: [
              { pitch: -10, yaw: 52, target: "living", targetPitch: -6, targetYaw: 15, text: { vi: "Phòng khách", en: "Living room" } },
              { pitch: -8, yaw: -12, target: "bath", targetPitch: -8, targetYaw: 0, text: { vi: "Phòng tắm", en: "Bathroom" } }
            ],
            info: [
              { pitch: -16, yaw: 25, text: { vi: "Giường và cửa sổ mẫu. View ngoài cửa sổ không thuộc dự án.", en: "Sample bed and window. The view outside is not the project." } }
            ]
          },
          {
            id: "bath",
            name: { vi: "Phòng tắm", en: "Bathroom" },
            image: "/assets/panoramas/a1-bath.jpg",
            pitch: -8,
            yaw: 0,
            hotspots: [
              { pitch: -8, yaw: 36, target: "living", targetPitch: -6, targetYaw: -18, text: { vi: "Phòng khách", en: "Living room" } },
              { pitch: -8, yaw: -28, target: "bed", targetPitch: -10, targetYaw: 20, text: { vi: "Phòng ngủ", en: "Bedroom" } }
            ],
            info: [
              { pitch: -6, yaw: -8, text: { vi: "Khu lavabo mẫu. Thiết bị vệ sinh trong ảnh không phải danh mục bàn giao.", en: "Sample vanity. The fittings in the photo are not a handover list." } }
            ]
          },
          {
            id: "balcony",
            name: { vi: "Ban công", en: "Balcony" },
            image: "/assets/panoramas/a1-balcony.jpg",
            pitch: -8,
            yaw: 10,
            hotspots: [
              { pitch: -8, yaw: 42, target: "living", targetPitch: -6, targetYaw: 15, text: { vi: "Vào phòng khách", en: "Back to the living room" } }
            ],
            info: [
              { pitch: -4, yaw: 15, text: { vi: "Ban công minh họa. Cây xanh trong ảnh là phong cảnh của tư liệu CC0.", en: "Illustrative balcony. The trees are part of the CC0 source photo." } }
            ]
          }
        ]
      }
    },
    {
      slug: "b2",
      code: "B2-15",
      type: "apartment",
      status: "open",
      beds: 3,
      baths: 2,
      area: "102 m²",
      floor: { vi: "Tầng mẫu 15", en: "Sample floor 15" },
      aspect: { vi: "Đông (mẫu)", en: "East (sample)" },
      name: { vi: "Căn hộ mẫu B2-15", en: "Sample apartment B2-15" },
      summary: {
        vi: "Tour ba điểm: sảnh, phòng khách và phòng ngủ. Căn được ghi là 3 phòng ngủ trong số liệu mẫu; tour chỉ dựng các không gian đã có ảnh.",
        en: "A three-stop tour: hall, living room, and bedroom. The sample sheet lists 3 bedrooms; the tour only includes spaces that have a photo."
      },
      description: [
        {
          vi: "Từ sảnh có thể sang phòng khách hoặc phòng ngủ. Mỗi chiều đều có mũi tên quay lại, nên khách không bị kẹt ở một cảnh.",
          en: "From the hall you can open the living room or the bedroom. Every link has a way back, so a visitor is not stuck in one scene."
        },
        {
          vi: "Số phòng ngủ trên thẻ căn là số mẫu để thử bộ lọc. Khi thay dữ liệu thật, sửa cho khớp mặt bằng.",
          en: "The bedroom count on the card is a sample figure so the filter can be tried. Match it to the real plan when you replace the data."
        }
      ],
      cover: "/assets/gallery/card-b2.jpg",
      coverAlt: { vi: "Phòng khách mẫu của căn B2-15", en: "Sample living room for unit B2-15" },
      tour: {
        first: "entry",
        scenes: [
          {
            id: "entry",
            name: { vi: "Sảnh", en: "Hall" },
            image: "/assets/panoramas/b2-entry.jpg",
            pitch: -4,
            yaw: 0,
            hotspots: [
              { pitch: -10, yaw: 38, target: "living", targetPitch: -2, targetYaw: -15, text: { vi: "Phòng khách", en: "Living room" } },
              { pitch: -10, yaw: -32, target: "bed", targetPitch: -6, targetYaw: 5, text: { vi: "Phòng ngủ", en: "Bedroom" } }
            ],
            info: [
              { pitch: 6, yaw: -5, text: { vi: "Cầu thang và cửa trong ảnh là sảnh mẫu, không phải lõi thang của dự án.", en: "The stair and door are a sample hall, not the project core." } }
            ]
          },
          {
            id: "living",
            name: { vi: "Phòng khách", en: "Living room" },
            image: "/assets/panoramas/b2-living.jpg",
            pitch: -2,
            yaw: -15,
            hotspots: [
              { pitch: -8, yaw: 22, target: "entry", targetPitch: -4, targetYaw: 0, text: { vi: "Sảnh", en: "Hall" } },
              { pitch: -8, yaw: -48, target: "bed", targetPitch: -6, targetYaw: 5, text: { vi: "Phòng ngủ", en: "Bedroom" } }
            ],
            info: [
              { pitch: -4, yaw: 0, text: { vi: "Bàn ghế minh họa. Không phải gói nội thất đang bán.", en: "Illustrative furniture. Not a furniture package on sale." } }
            ]
          },
          {
            id: "bed",
            name: { vi: "Phòng ngủ", en: "Bedroom" },
            image: "/assets/panoramas/b2-bed.jpg",
            pitch: -6,
            yaw: 5,
            hotspots: [
              { pitch: -8, yaw: 40, target: "living", targetPitch: -2, targetYaw: -15, text: { vi: "Phòng khách", en: "Living room" } },
              { pitch: -8, yaw: -28, target: "entry", targetPitch: -4, targetYaw: 0, text: { vi: "Ra sảnh", en: "Back to the hall" } }
            ],
            info: [
              { pitch: 0, yaw: 15, text: { vi: "Cửa sổ lớn trong ảnh mẫu. Hướng nhìn thật của căn cần chụp lại.", en: "Large window in the sample photo. The real aspect needs its own shoot." } }
            ]
          }
        ]
      }
    },
    {
      slug: "p1",
      code: "P1-01",
      type: "penthouse",
      status: "held",
      beds: 3,
      baths: 3,
      area: "156 m²",
      floor: { vi: "Tầng mẫu áp mái", en: "Sample top floor" },
      aspect: { vi: "Tây Nam (mẫu)", en: "Southwest (sample)" },
      name: { vi: "Penthouse mẫu P1-01", en: "Sample penthouse P1-01" },
      summary: {
        vi: "Tour phòng khách, phòng ngủ chính và sân thượng. Trạng thái “giữ chỗ” cũng là nhãn mẫu để thử bộ lọc.",
        en: "A tour of the living room, primary bedroom, and terrace. The “held” status is also a sample label so the filter can be tried."
      },
      description: [
        {
          vi: "Phòng ngủ chính dùng một ảnh kính lớn. Khung cảnh bên ngoài là của tư liệu gốc — hotspot i trên cửa kính nói rõ điều đó.",
          en: "The primary bedroom uses a glazed interior photo. The outdoors belong to the source image — the info point on the glass says so."
        },
        {
          vi: "Sân thượng nối ngược về phòng khách. Nút tự xoay bật sẵn để khách thấy không gian; tắt nếu họ muốn tự kéo.",
          en: "The terrace links back to the living room. Auto-rotate starts on so the space reads quickly; visitors can turn it off and drag."
        }
      ],
      cover: "/assets/gallery/card-p1.jpg",
      coverAlt: { vi: "Phòng khách mẫu của penthouse P1-01", en: "Sample living room for penthouse P1-01" },
      tour: {
        first: "living",
        scenes: [
          {
            id: "living",
            name: { vi: "Phòng khách", en: "Living room" },
            image: "/assets/panoramas/p1-living.jpg",
            pitch: -6,
            yaw: 10,
            hotspots: [
              { pitch: -10, yaw: 46, target: "suite", targetPitch: 0, targetYaw: 0, text: { vi: "Phòng ngủ chính", en: "Primary bedroom" } },
              { pitch: -10, yaw: -24, target: "terrace", targetPitch: -8, targetYaw: 35, text: { vi: "Sân thượng", en: "Terrace" } }
            ],
            info: [
              { pitch: 4, yaw: -20, text: { vi: "Trần và sàn gỗ trong ảnh là minh họa, không phải spec vật liệu.", en: "The timber ceiling and floor illustrate the viewer. They are not a material spec." } }
            ]
          },
          {
            id: "suite",
            name: { vi: "Phòng ngủ chính", en: "Primary bedroom" },
            image: "/assets/panoramas/p1-suite.jpg",
            pitch: 0,
            yaw: 0,
            hotspots: [
              { pitch: -10, yaw: 36, target: "living", targetPitch: -6, targetYaw: 10, text: { vi: "Phòng khách", en: "Living room" } }
            ],
            info: [
              { pitch: 8, yaw: 0, text: { vi: "Cửa kính mẫu. Khung cảnh ngoài trời không thuộc dự án Sông Xanh.", en: "Sample glazing. The outdoor scene is not Sông Xanh Residence." } }
            ]
          },
          {
            id: "terrace",
            name: { vi: "Sân thượng", en: "Terrace" },
            image: "/assets/panoramas/p1-terrace.jpg",
            pitch: -8,
            yaw: 35,
            hotspots: [
              { pitch: -10, yaw: 68, target: "living", targetPitch: -6, targetYaw: 10, text: { vi: "Vào nhà", en: "Back inside" } }
            ],
            info: [
              { pitch: -12, yaw: 40, text: { vi: "Sân thượng minh họa. Vườn trong ảnh thuộc tư liệu CC0 Poly Haven.", en: "Illustrative terrace. The garden is from a Poly Haven CC0 photo." } }
            ]
          }
        ]
      }
    }
  ]
};
