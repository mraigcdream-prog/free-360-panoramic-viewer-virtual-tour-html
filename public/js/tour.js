/* Trình xem 360° cho trang căn hộ.
   Cùng hình dạng dữ liệu với công cụ tạo tour: scenes[].hotspots (mũi tên)
   và scenes[].info (điểm thông tin). Ảnh là file equirectangular, không nhúng base64. */
(function () {
  let active = null;

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function pick(value, lang) {
    if (value && typeof value === "object") return value[lang] || value.vi || value.en || "";
    return value == null ? "" : String(value);
  }

  function destroy() {
    if (active && active.onFull) document.removeEventListener("fullscreenchange", active.onFull);
    if (active && active.viewer && typeof active.viewer.destroy === "function") {
      active.viewer.destroy();
    }
    active = null;
  }

  function capture() {
    if (!active || !active.viewer) return null;
    let scene = active.sceneId;
    let pitch = 0;
    let yaw = 0;
    try {
      scene = active.viewer.getScene() || scene;
      pitch = active.viewer.getPitch();
      yaw = active.viewer.getYaw();
    } catch (err) {
      /* viewer đang hủy */
    }
    return { scene: scene, pitch: pitch, yaw: yaw, rotating: active.rotating, gyro: active.gyro };
  }

  function mount(host, tour, options) {
    options = options || {};
    const lang = options.lang === "en" ? "en" : "vi";
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    destroy();
    host.innerHTML = "";
    host.classList.remove("is-ready");

    if (!tour || !tour.scenes || !tour.scenes.length) {
      host.innerHTML = '<p class="tour-fallback">' + (lang === "en" ? "This sample home has no tour yet." : "Căn mẫu này chưa có tour.") + "</p>";
      return;
    }
    if (typeof pannellum === "undefined") {
      host.innerHTML = '<p class="tour-fallback">' + (lang === "en" ? "The 360° viewer failed to load." : "Không tải được trình xem 360°.") + "</p>";
      return;
    }

    const ui = {
      rotate: lang === "en" ? "Auto-rotate" : "Tự xoay",
      gyro: lang === "en" ? "Gyro" : "Con quay",
      full: lang === "en" ? "Fullscreen" : "Toàn màn hình",
      exit: lang === "en" ? "Exit fullscreen" : "Thoát toàn màn hình",
      help: lang === "en"
        ? "Drag to look around. Choose an arrow to change rooms, or “i” for a note."
        : "Kéo để nhìn quanh. Chọn mũi tên để sang phòng, hoặc nút i để đọc ghi chú.",
      gyroNo: lang === "en"
        ? "This device does not expose a gyroscope to the page."
        : "Máy này không cung cấp con quay cho trang web.",
      gyroOn: lang === "en" ? "Gyro is on. Move the phone to look around." : "Đã bật con quay. Nghiêng máy để nhìn quanh.",
      loading: lang === "en" ? "Loading panorama…" : "Đang tải ảnh cầu…",
      missing: lang === "en" ? "That room is missing from this tour." : "Tour không có phòng này.",
      debug: lang === "en"
        ? "Hotspot placement: click the photo and copy pitch / yaw into data/site.js."
        : "Đặt hotspot: bấm lên ảnh rồi chép pitch / yaw vào data/site.js.",
      loadError: lang === "en" ? "The panorama could not be loaded." : "Không tải được ảnh cầu."
    };

    const shell = document.createElement("div");
    shell.className = "tour-shell";
    shell.innerHTML =
      '<div class="tour-stage">' +
        '<p class="tour-loading">' + esc(ui.loading) + "</p>" +
        '<div class="tour-pano" id="tour-pano"></div>' +
        '<p class="tour-scene-label" id="tour-scene-label"></p>' +
      "</div>" +
      '<div class="tour-bar">' +
        '<div class="tour-scenes" role="tablist" aria-label="' + (lang === "en" ? "Rooms" : "Các phòng") + '"></div>' +
        '<div class="tour-actions">' +
          '<button type="button" class="tour-btn" data-act="rotate" aria-pressed="false">' + esc(ui.rotate) + "</button>" +
          '<button type="button" class="tour-btn" data-act="gyro" aria-pressed="false">' + esc(ui.gyro) + "</button>" +
          '<button type="button" class="tour-btn" data-act="full" aria-pressed="false">' + esc(ui.full) + "</button>" +
        "</div>" +
      "</div>" +
      '<p class="tour-help" id="tour-help">' + esc(ui.help) + "</p>" +
      '<p class="tour-note" id="tour-note" aria-live="polite"></p>';
    host.appendChild(shell);

    const panoEl = shell.querySelector("#tour-pano");
    const labelEl = shell.querySelector("#tour-scene-label");
    const scenesEl = shell.querySelector(".tour-scenes");
    const noteEl = shell.querySelector("#tour-note");
    const rotateBtn = shell.querySelector('[data-act="rotate"]');
    const gyroBtn = shell.querySelector('[data-act="gyro"]');
    const fullBtn = shell.querySelector('[data-act="full"]');

    const resume = options.resume;
    const startId = (resume && tour.scenes.some(function (s) { return s.id === resume.scene; })) ? resume.scene : (tour.first || tour.scenes[0].id);
    const wantRotate = resume ? !!resume.rotating : !reduced;

    const state = {
      viewer: null,
      sceneId: startId,
      rotating: wantRotate,
      gyro: false,
      lang: lang
    };
    active = state;

    function sceneById(id) {
      return tour.scenes.find(function (s) { return s.id === id; });
    }

    function setLabel(id) {
      const scene = sceneById(id);
      labelEl.textContent = scene ? pick(scene.name, lang) : "";
      scenesEl.querySelectorAll("[data-scene]").forEach(function (btn) {
        const on = btn.getAttribute("data-scene") === id;
        btn.setAttribute("aria-selected", on ? "true" : "false");
        btn.tabIndex = on ? 0 : -1;
      });
    }

    function navRenderer(hotSpotDiv, args) {
      const text = args.text || "";
      hotSpotDiv.classList.add("sx-hotspot", "sx-hotspot-nav");
      hotSpotDiv.innerHTML =
        '<button type="button" class="sx-hotspot-btn" aria-label="' + esc(text) + '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5l7 8h-4v6h-6v-6H5l7-8z" fill="currentColor"/></svg>' +
          '<span class="sx-hotspot-label">' + esc(text) + "</span>" +
        "</button>";
      const button = hotSpotDiv.querySelector("button");
      button.addEventListener("mousedown", function (event) { event.stopPropagation(); });
      button.addEventListener("touchstart", function (event) { event.stopPropagation(); }, { passive: true });
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!state.viewer || !args.target || !sceneById(args.target)) {
          noteEl.textContent = ui.missing;
          return;
        }
        state.viewer.loadScene(args.target, args.targetPitch || 0, args.targetYaw || 0, 100);
      });
    }

    function infoRenderer(hotSpotDiv, args) {
      const text = args.text || "";
      hotSpotDiv.classList.add("sx-hotspot", "sx-hotspot-info");
      hotSpotDiv.innerHTML =
        '<button type="button" class="sx-info-btn" aria-expanded="false" aria-label="' + esc(text) + '">i</button>' +
        '<div class="sx-info-pop" hidden>' + esc(text) + "</div>";
      const button = hotSpotDiv.querySelector("button");
      const pop = hotSpotDiv.querySelector(".sx-info-pop");
      button.addEventListener("mousedown", function (event) { event.stopPropagation(); });
      button.addEventListener("touchstart", function (event) { event.stopPropagation(); }, { passive: true });
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        const open = pop.hidden;
        host.querySelectorAll(".sx-info-pop").forEach(function (node) { node.hidden = true; });
        host.querySelectorAll(".sx-info-btn").forEach(function (node) { node.setAttribute("aria-expanded", "false"); });
        pop.hidden = !open;
        button.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    const scenes = {};
    tour.scenes.forEach(function (scene) {
      const hotSpots = [];
      (scene.hotspots || []).forEach(function (spot) {
        hotSpots.push({
          pitch: spot.pitch,
          yaw: spot.yaw,
          cssClass: "sx-hotspot-base",
          createTooltipFunc: navRenderer,
          createTooltipArgs: {
            text: pick(spot.text, lang),
            target: spot.target,
            targetPitch: spot.targetPitch,
            targetYaw: spot.targetYaw
          }
        });
      });
      (scene.info || []).forEach(function (spot) {
        hotSpots.push({
          pitch: spot.pitch,
          yaw: spot.yaw,
          cssClass: "sx-hotspot-base",
          createTooltipFunc: infoRenderer,
          createTooltipArgs: { text: pick(spot.text, lang) }
        });
      });
      scenes[scene.id] = {
        type: "equirectangular",
        panorama: scene.image,
        autoLoad: true,
        pitch: scene.pitch || 0,
        yaw: scene.yaw || 0,
        hfov: 100,
        hotSpots: hotSpots
      };
    });

    const first = sceneById(startId) || tour.scenes[0];
    const viewer = pannellum.viewer(panoEl, {
      default: {
        firstScene: first.id,
        sceneFadeDuration: 700,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        autoRotate: wantRotate ? -2 : 0,
        autoRotateInactivityDelay: wantRotate ? 2500 : -1,
        showFullscreenCtrl: false,
        showZoomCtrl: true,
        compass: false,
        friction: 0.2
      },
      scenes: scenes
    });
    state.viewer = viewer;
    if (resume && typeof resume.pitch === "number" && typeof resume.yaw === "number") {
      viewer.setPitch(resume.pitch, 0);
      viewer.setYaw(resume.yaw, 0);
    }

    tour.scenes.forEach(function (scene) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tour-scene";
      btn.setAttribute("role", "tab");
      btn.setAttribute("data-scene", scene.id);
      btn.textContent = pick(scene.name, lang);
      btn.addEventListener("click", function () {
        viewer.loadScene(scene.id, scene.pitch || 0, scene.yaw || 0, 100);
      });
      scenesEl.appendChild(btn);
    });
    setLabel(first.id);
    rotateBtn.setAttribute("aria-pressed", wantRotate ? "true" : "false");
    rotateBtn.classList.toggle("is-on", wantRotate);
    if (options.debug) noteEl.textContent = ui.debug;

    viewer.on("load", function () {
      host.classList.add("is-ready");
    });
    viewer.on("scenechange", function (id) {
      state.sceneId = id;
      setLabel(id);
      host.querySelectorAll(".sx-info-pop").forEach(function (node) { node.hidden = true; });
    });
    viewer.on("error", function () {
      noteEl.textContent = ui.loadError;
    });
    if (options.debug) {
      viewer.on("mousedown", function (event) {
        const coords = viewer.mouseEventToCoords(event);
        if (!coords) return;
        noteEl.textContent = "pitch: " + coords[0].toFixed(1) + ", yaw: " + coords[1].toFixed(1);
      });
    }

    rotateBtn.addEventListener("click", function () {
      state.rotating = !state.rotating;
      if (state.rotating) {
        if (state.gyro) stopGyro();
        viewer.startAutoRotate(-2);
      } else {
        viewer.stopAutoRotate();
      }
      rotateBtn.setAttribute("aria-pressed", state.rotating ? "true" : "false");
      rotateBtn.classList.toggle("is-on", state.rotating);
    });

    function stopGyro() {
      if (state.viewer && state.gyro) state.viewer.stopOrientation();
      state.gyro = false;
      gyroBtn.setAttribute("aria-pressed", "false");
      gyroBtn.classList.remove("is-on");
    }

    gyroBtn.addEventListener("click", function () {
      if (!viewer.isOrientationSupported()) {
        noteEl.textContent = ui.gyroNo;
        return;
      }
      if (state.gyro) {
        stopGyro();
        return;
      }
      if (state.rotating) {
        viewer.stopAutoRotate();
        state.rotating = false;
        rotateBtn.setAttribute("aria-pressed", "false");
        rotateBtn.classList.remove("is-on");
      }
      viewer.startOrientation();
      state.gyro = !!viewer.isOrientationActive();
      gyroBtn.setAttribute("aria-pressed", state.gyro ? "true" : "false");
      gyroBtn.classList.toggle("is-on", state.gyro);
      noteEl.textContent = state.gyro ? ui.gyroOn : ui.gyroNo;
    });

    function syncFullButton() {
      const on = document.fullscreenElement === shell;
      fullBtn.setAttribute("aria-pressed", on ? "true" : "false");
      fullBtn.classList.toggle("is-on", on);
      fullBtn.textContent = on ? ui.exit : ui.full;
      setTimeout(function () { viewer.resize(); }, 60);
    }

    fullBtn.addEventListener("click", function () {
      if (document.fullscreenElement === shell) {
        document.exitFullscreen();
        return;
      }
      const request = shell.requestFullscreen || shell.webkitRequestFullscreen;
      if (!request) {
        noteEl.textContent = lang === "en" ? "Fullscreen is not available in this browser." : "Trình duyệt này không vào được toàn màn hình.";
        return;
      }
      Promise.resolve(request.call(shell)).catch(function () {
        noteEl.textContent = lang === "en" ? "Fullscreen was blocked." : "Trình duyệt đã chặn toàn màn hình.";
      });
    });
    document.addEventListener("fullscreenchange", syncFullButton);
    state.onFull = syncFullButton;

    if (resume && resume.gyro && viewer.isOrientationSupported()) {
      viewer.startOrientation();
      state.gyro = !!viewer.isOrientationActive();
      gyroBtn.setAttribute("aria-pressed", state.gyro ? "true" : "false");
      gyroBtn.classList.toggle("is-on", state.gyro);
    }
  }

  window.SXTour = {
    mount: mount,
    capture: capture,
    destroy: function () {
      if (active && active.onFull) document.removeEventListener("fullscreenchange", active.onFull);
      destroy();
    }
  };
})();
