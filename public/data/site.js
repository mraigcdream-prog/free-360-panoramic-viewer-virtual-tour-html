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
      slug: "4d7a6d64-89d8-439a-a601-d896202e76ea",
      code: "Vành đai 2.5",
      type: "house",
      status: "open",
      beds: "—",
      baths: "—",
      area: "—",
      floor: { vi: "Cập nhật sau", en: "To be added" },
      aspect: { vi: "Cập nhật sau", en: "To be added" },
      name: { vi: "Bán nhà gần đường vành đai 2.5", en: "House for sale near Ring Road 2.5" },
      summary: {
        vi: "Nhà rao bán tại Hà Nội, gần đường Vành đai 2.5. Giá: Liên hệ. Diện tích, số phòng và hướng sẽ cập nhật sau.",
        en: "House for sale in Hanoi, near Ring Road 2.5. Price: contact us. Area, rooms and aspect to be added."
      },
      description: [
        {
          vi: "Vị trí: Hà Nội, gần đường Vành đai 2.5. Địa chỉ chi tiết cập nhật sau.",
          en: "Location: Hanoi, near Ring Road 2.5. Exact address to be added."
        },
        {
          vi: "Tour 360° hiện có cảnh ban công. Ảnh đã được làm gọn bằng AI nên chi tiết có thể khác thực tế một chút.",
          en: "The 360° tour currently shows the balcony. The photo was tidied with AI, so details may differ slightly from reality."
        }
      ],
      cover: "/assets/gallery/card-vd25.jpg",
      coverAlt: { vi: "Ban công nhà gần Vành đai 2.5", en: "Balcony of the house near Ring Road 2.5" },
      tour: {
        first: "balcony",
        scenes: [
          {
            id: "balcony",
            name: { vi: "Ban công", en: "Balcony" },
            image: "/assets/panoramas/vd25-balcony.jpg",
            pitch: 0,
            yaw: 0,
            hotspots: [],
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
