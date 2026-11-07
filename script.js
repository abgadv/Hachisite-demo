/* =========================================================
   HACHIKO — interactions
   Vanilla, dependency-free, and deliberately restrained.
   ========================================================= */

(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  const WHATSAPP_NUMBER = "201282400616";

  const recipes = {
    puppy: {
      name: "Puppy",
      index: "01",
      kicker: "For dogs · 2–12 months",
      detail: "+40% protein · 2–12 months",
      img: "Assets/img/pack-puppy.webp",
      imgSm: "Assets/img/pack-puppy-sm.webp",
      alt: "Hachiko Puppy fresh food pack, 500 grams",
      species: "dog",
      stage: "puppy",
      tint: "#FBEAD3",
      recCopy: "Higher protein and a higher pour of olive oil for the months when everything is growing at once.",
      proteins: {
        chicken: {
          label: "Chicken",
          base: "+30% chicken meat",
          proteinLabel: "Chicken meat",
          proteinValue: "+30%",
          proteinWidth: 30,
          price: 50,
          ingredients: [
            ["Chicken meat", 30],
            ["Soybean", 10],
            ["Sweet potato", 34],
            ["Carrot", 9],
            ["Zucchini", 5],
            ["White rice", 12],
            ["Olive oil", "to finish"]
          ]
        },
        "beef-liver": {
          label: "Beef liver",
          base: "+30% beef liver",
          proteinLabel: "Beef liver",
          proteinValue: "+30%",
          proteinWidth: 30,
          price: 75,
          ingredients: [
            ["Beef liver", 30],
            ["Soybean", 10],
            ["Sweet potato", 34],
            ["Carrot", 9],
            ["Zucchini", 5],
            ["White rice", 12],
            ["Olive oil", "to finish"]
          ]
        },
        mixed: {
          label: "Chicken & beef liver",
          base: "+30% chicken & beef liver",
          proteinLabel: "Chicken & beef liver",
          proteinValue: "+30%",
          proteinWidth: 30,
          price: 50,
          ingredients: [
            ["Chicken & beef liver", 30],
            ["Soybean", 10],
            ["Sweet potato", 34],
            ["Carrot", 9],
            ["Zucchini", 5],
            ["White rice", 12],
            ["Olive oil", "to finish"]
          ]
        }
      }
    },

    adult: {
      name: "Adult",
      index: "02",
      kicker: "For dogs · 1–7 years",
      detail: "+30% protein · 1–7 years",
      img: "Assets/img/pack-adult.webp",
      imgSm: "Assets/img/pack-adult-sm.webp",
      alt: "Hachiko Adult fresh food pack, 500 grams",
      species: "dog",
      stage: "adult",
      tint: "#DCEDE8",
      recCopy: "Balanced protein for the steady, ordinary, excellent adult years.",
      proteins: {
        chicken: {
          label: "Chicken",
          base: "+20% chicken meat",
          proteinLabel: "Chicken meat",
          proteinValue: "+20%",
          proteinWidth: 20,
          price: 45,
          ingredients: [
            ["Chicken meat", 20],
            ["Soybean", 10],
            ["Sweet potato", 39],
            ["Carrot", 9],
            ["Zucchini", 7],
            ["White rice", 15],
            ["Olive oil", "to finish"]
          ]
        },
        "beef-liver": {
          label: "Beef liver",
          base: "+20% beef liver",
          proteinLabel: "Beef liver",
          proteinValue: "+20%",
          proteinWidth: 20,
          price: 50,
          ingredients: [
            ["Beef liver", 20],
            ["Soybean", 10],
            ["Sweet potato", 39],
            ["Carrot", 9],
            ["Zucchini", 7],
            ["White rice", 15],
            ["Olive oil", "to finish"]
          ]
        },
        fish: {
          label: "Fish",
          base: "+20% fish",
          proteinLabel: "Fish",
          proteinValue: "+20%",
          proteinWidth: 20,
          price: 65,
          ingredients: [
            ["Fish", 20],
            ["Soybean", 10],
            ["Sweet potato", 39],
            ["Carrot", 9],
            ["Zucchini", 7],
            ["White rice", 15],
            ["Olive oil", "to finish"]
          ]
        },
        mixed: {
          label: "Chicken & beef liver",
          base: "+20% chicken & beef liver",
          proteinLabel: "Chicken & beef liver",
          proteinValue: "+20%",
          proteinWidth: 20,
          price: 45,
          ingredients: [
            ["Chicken & beef liver", 20],
            ["Soybean", 10],
            ["Sweet potato", 39],
            ["Carrot", 9],
            ["Zucchini", 7],
            ["White rice", 15],
            ["Olive oil", "to finish"]
          ]
        }
      }
    },

    senior: {
      name: "Senior",
      index: "03",
      kicker: "For dogs · over 7 years",
      detail: "+20% protein · over 7 years",
      img: "Assets/img/pack-senior.webp",
      imgSm: "Assets/img/pack-senior-sm.webp",
      alt: "Hachiko Senior fresh food pack, 500 grams",
      species: "dog",
      stage: "senior",
      tint: "#E8E6DF",
      recCopy: "Less protein, more carbohydrate support, and the same minerals and vitamins for the gentler years.",
      proteins: {
        chicken: {
          label: "Chicken",
          base: "+10% chicken meat",
          proteinLabel: "Chicken meat",
          proteinValue: "+10%",
          proteinWidth: 10,
          price: 40,
          ingredients: [
            ["Chicken meat", 10],
            ["Soybean", 10],
            ["Sweet potato", 40],
            ["Carrot", 9],
            ["Zucchini", 6],
            ["White rice", 25],
            ["Olive oil", "to finish"]
          ]
        },
        "beef-liver": {
          label: "Beef liver",
          base: "+10% beef liver",
          proteinLabel: "Beef liver",
          proteinValue: "+10%",
          proteinWidth: 10,
          price: 45,
          ingredients: [
            ["Beef liver", 10],
            ["Soybean", 10],
            ["Sweet potato", 40],
            ["Carrot", 9],
            ["Zucchini", 6],
            ["White rice", 25],
            ["Olive oil", "to finish"]
          ]
        },
        mixed: {
          label: "Chicken & beef liver",
          base: "+10% chicken & beef liver",
          proteinLabel: "Chicken & beef liver",
          proteinValue: "+10%",
          proteinWidth: 10,
          price: 40,
          ingredients: [
            ["Chicken & beef liver", 10],
            ["Soybean", 10],
            ["Sweet potato", 40],
            ["Carrot", 9],
            ["Zucchini", 6],
            ["White rice", 25],
            ["Olive oil", "to finish"]
          ]
        }
      }
    },

    cats: {
      name: "Cats",
      index: "04",
      kicker: "For cats · 2 months +",
      detail: "+55% protein · 2 months +",
      img: "Assets/img/pack-cats.webp",
      imgSm: "Assets/img/pack-cats-sm.webp",
      alt: "Hachiko Cats fresh food pack, 500 grams",
      species: "cat",
      stage: "adult",
      tint: "#F4DEDC",
      recCopy: "65% pure animal protein, 35% vegetables, and olive oil — for cats from two months up.",
      proteins: {
        chicken: {
          label: "Chicken",
          base: "+55% chicken",
          proteinLabel: "Chicken",
          proteinValue: "+55%",
          proteinWidth: 55,
          price: 80,
          ingredients: [
            ["Chicken", 55],
            ["Sweet potato", 22],
            ["Carrot", 9],
            ["Zucchini", 9],
            ["Soybean", 5],
            ["Olive oil", "to finish"]
          ]
        },
        "chicken-liver": {
          label: "Chicken liver",
          base: "+50% chicken liver, +5% chicken meat",
          proteinLabel: "Chicken liver + chicken",
          proteinValue: "+55%",
          proteinWidth: 55,
          price: 95,
          ingredients: [
            ["Chicken liver", 50],
            ["Chicken meat", 5],
            ["Sweet potato", 22],
            ["Carrot", 9],
            ["Zucchini", 9],
            ["Soybean", 5],
            ["Olive oil", "to finish"]
          ]
        },
        fish: {
          label: "Fish",
          base: "+55% fish",
          proteinLabel: "Fish",
          proteinValue: "+55%",
          proteinWidth: 55,
          price: 95,
          ingredients: [
            ["Fish", 55],
            ["Sweet potato", 22],
            ["Carrot", 9],
            ["Zucchini", 9],
            ["Soybean", 5],
            ["Olive oil", "to finish"]
          ]
        },
        mixed: {
          label: "Chicken & liver mix",
          base: "+50% chicken & chicken liver, +5% fish",
          proteinLabel: "Chicken, liver & fish",
          proteinValue: "+55%",
          proteinWidth: 55,
          price: 90,
          ingredients: [
            ["Chicken & chicken liver", 50],
            ["Fish", 5],
            ["Sweet potato", 22],
            ["Carrot", 9],
            ["Zucchini", 9],
            ["Soybean", 5],
            ["Olive oil", "to finish"]
          ]
        }
      }
    }
  };

  const stageLabels = {
    puppy: "puppy",
    adult: "adult",
    senior: "senior"
  };

  function formatPrice(value) {
    return `${value} EGP`;
  }

  function currentRecipe() {
    const key = builderState.species === "cat" ? "cats" : builderState.stage;
    return recipes[key] || recipes.adult;
  }

  function currentVariant() {
    const recipe = currentRecipe();
    return recipe.proteins[builderState.protein] || recipe.proteins.chicken;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

  function orderItemTitle(recipe, variant) {
    return `${recipe.name} · ${variant.label}`;
  }

  /* The WhatsApp message on purpose carries no prices — only who, where and what. */
  function orderMessage({ name, location, items }) {
    const safeItems = items.filter((item) => item && item.packs > 0);
    const totalPacks = safeItems.reduce((sum, item) => sum + item.packs, 0);
    const specials = Array.from(
      new Set(safeItems.map((item) => (item.special || "").trim()).filter(Boolean))
    );

    const lines = [
      "Hello Hachiko! I’d like to place an order.",
      "",
      `Name: ${name.trim()}`,
      `Location: ${location.trim()}`,
      "",
      "Order:"
    ];

    safeItems.forEach((item) => {
      lines.push(`• ${item.packs} × ${item.title} (500 g pack)`);
      if (item.pet) lines.push(`   ${item.pet}`);
    });

    lines.push("", `Packs: ${totalPacks}`);
    lines.push(`Special conditions: ${specials.length ? specials.join("; ") : "none"}`);
    lines.push("", "Please confirm availability and delivery. Thank you!");
    return lines.join("\n");
  }

  function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  /* ------------------------- Toast ------------------------- */

  const toast = $("#toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-open");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-open");
    }, 2800);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      /* The fallback below still gets a chance. */
    }

    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand("copy");
      area.remove();
      return copied;
    } catch (error) {
      return false;
    }
  }

  /* ------------------------- Header / mobile nav ------------------------- */

  const header = $("#site-header");
  const navToggle = $("#nav-toggle");
  const mobileNav = $("#mobile-nav");
  const navToggleLabel = $(".nav-toggle-label", navToggle);
  const main = $("#main");
  const footer = $("#footer");

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  function openNav() {
    if (!mobileNav || !navToggle) return;
    mobileNav.hidden = false;
    document.body.classList.add("nav-open");
    navToggle.setAttribute("aria-expanded", "true");
    if (navToggleLabel) navToggleLabel.textContent = "Close";
    if (main) main.inert = true;
    if (footer) footer.inert = true;
    const firstLink = $("a", mobileNav);
    if (firstLink) {
      window.setTimeout(() => firstLink.focus(), 30);
    }
  }

  function closeNav(returnFocus) {
    if (!mobileNav || !navToggle) return;
    mobileNav.hidden = true;
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    if (navToggleLabel) navToggleLabel.textContent = "Menu";
    if (main) main.inert = false;
    if (footer) footer.inert = false;
    if (returnFocus) navToggle.focus();
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      if (mobileNav.hidden) {
        openNav();
      } else {
        closeNav(true);
      }
    });

    $$("a", mobileNav).forEach((link) => {
      link.addEventListener("click", () => closeNav(false));
    });

    document.addEventListener("click", (event) => {
      if (mobileNav.hidden) return;
      if (!header.contains(event.target)) closeNav(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && !mobileNav.hidden) closeNav(false);
    });
  }

  /* ------------------------- Active chapter ------------------------- */

  const navLinks = $$(".nav-link[data-nav]");
  const chapterSections = ["menu", "bowl", "ritual", "story", "why", "faq"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      const match = link.dataset.nav === id;
      if (match) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && chapterSections.length) {
    const chapterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    chapterSections.forEach((section) => chapterObserver.observe(section));
  }

  /* ------------------------- Reveal on scroll ------------------------- */

  const revealItems = $$(".reveal");

  if (revealItems.length) {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      revealItems.forEach((item) => revealObserver.observe(item));
    }
  }

  /* ------------------------- Hero pack wheel ------------------------- */

  const heroName = $("#hero-name");
  const heroDetail = $("#hero-detail");
  const heroIndex = $("#hero-index");
  const packChoices = $$(".pack-slide");
  const packWheel = $("#pack-wheel");
  const packStage = $("#pack-wheel-stage");
  const packPrev = $("#pack-prev");
  const packNext = $("#pack-next");
  let activePackKey = "adult";

  function packIndex(key) {
    return packChoices.findIndex((button) => button.dataset.pack === key);
  }

  function syncPackWheel(key) {
    const total = packChoices.length;
    const current = packIndex(key);
    if (current < 0) return;

    packChoices.forEach((button, index) => {
      const offset = (index - current + total) % total;
      button.classList.toggle("is-active", offset === 0);
      button.classList.toggle("is-right", offset === 1);
      button.classList.toggle("is-back", offset === 2);
      button.classList.toggle("is-left", offset === 3);
      button.setAttribute("aria-pressed", String(offset === 0));
      button.tabIndex = offset === 0 ? 0 : -1;
    });
  }

  function selectPack(key) {
    const product = recipes[key];
    if (!product || key === activePackKey) return;

    activePackKey = key;

    syncPackWheel(key);

    if (heroName) heroName.textContent = product.name;
    if (heroDetail) heroDetail.textContent = product.detail;
    if (heroIndex) heroIndex.textContent = product.index;
  }

  function stepWheel(direction, steps = 1) {
    if (!packChoices.length) return null;
    const total = packChoices.length;
    const current = Math.max(0, packIndex(activePackKey));
    const next = (((current + direction * steps) % total) + total) % total;
    const target = packChoices[next];
    if (!target) return null;
    selectPack(target.dataset.pack);
    return target;
  }

  syncPackWheel(activePackKey);

  packChoices.forEach((button) => {
    button.addEventListener("click", () => selectPack(button.dataset.pack));
  });

  if (packPrev) packPrev.addEventListener("click", () => stepWheel(-1));
  if (packNext) packNext.addEventListener("click", () => stepWheel(1));

  if (packStage) {
    const wheelKeyTarget = packWheel || packStage;

    wheelKeyTarget.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      let target = null;

      if (event.key === "ArrowRight") {
        target = stepWheel(1);
      } else if (event.key === "ArrowLeft") {
        target = stepWheel(-1);
      } else if (event.key === "Home") {
        target = packChoices[0];
        if (target) selectPack(target.dataset.pack);
      } else if (event.key === "End") {
        target = packChoices[packChoices.length - 1];
        if (target) selectPack(target.dataset.pack);
      } else {
        return;
      }

      event.preventDefault();
      if (target) target.focus();
    });

    let dragOrigin = null;
    let dragDelta = 0;
    let pressTarget = null;
    let suppressClickUntil = 0;

    packStage.addEventListener("dragstart", (event) => event.preventDefault());

    packStage.addEventListener(
      "click",
      (event) => {
        if (performance.now() < suppressClickUntil) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );

    packStage.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragOrigin = event.clientX;
      dragDelta = 0;
      pressTarget = event.target.closest(".pack-slide");
      packStage.classList.add("is-dragging");
      if (packStage.setPointerCapture) packStage.setPointerCapture(event.pointerId);
    });

    packStage.addEventListener("pointermove", (event) => {
      if (dragOrigin === null) return;
      dragDelta = event.clientX - dragOrigin;
      packStage.style.setProperty("--drag", `${dragDelta}px`);
    });

    function finishDrag(commit) {
      if (dragOrigin === null) return;

      const delta = dragDelta;
      const target = pressTarget;
      dragOrigin = null;
      dragDelta = 0;
      pressTarget = null;
      packStage.classList.remove("is-dragging");
      packStage.style.removeProperty("--drag");

      if (!commit) return;

      if (Math.abs(delta) <= 6) {
        if (target) selectPack(target.dataset.pack);
        return;
      }

      if (Math.abs(delta) <= 36) return;

      suppressClickUntil = performance.now() + 320;
      const steps = Math.min(
        packChoices.length - 1,
        Math.max(1, Math.round(Math.abs(delta) / 110))
      );
      stepWheel(delta < 0 ? 1 : -1, steps);
    }

    packStage.addEventListener("pointerup", (event) => {
      if (
        packStage.hasPointerCapture &&
        packStage.hasPointerCapture(event.pointerId)
      ) {
        packStage.releasePointerCapture(event.pointerId);
      }
      finishDrag(true);
    });

    packStage.addEventListener("pointercancel", () => finishDrag(false));
  }

  /* ------------------------- Menu filters ------------------------- */

  const filterButtons = $$(".filter");
  const productCards = $$(".product-card");
  const menuCount = $("#menu-count");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));

      let visible = 0;
      productCards.forEach((card) => {
        const show = filter === "all" || card.dataset.kind === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (menuCount) {
        menuCount.textContent = `Showing ${visible} ${visible === 1 ? "recipe" : "recipes"}`;
      }

      if (!reduceMotion.matches) {
        productCards.forEach((card) => {
          if (card.hidden || typeof card.animate !== "function") return;
          card.animate(
            [
              { opacity: 0, transform: "translateY(8px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 280, easing: "ease-out" }
          );
        });
      }
    });
  });

  /* ------------------------- Bowl builder ------------------------- */

  const builderForm = $("#builder-form");
  const proteinRow = $("#protein-row");
  const stageField = $("#stage-field");
  const catStageNote = $("#cat-stage-note");
  const specialCheck = $("#special");
  const specialDetailWrap = $("#special-detail-wrap");
  const specialDetail = $("#special-detail");
  const bowlPanel = $("#bowl-panel");
  const bowlTag = $("#bowl-tag");
  const recPack = $("#rec-pack");
  const recTitle = $("#rec-title");
  const recCopy = $("#rec-copy");
  const recPrice = $("#rec-price");
  const proteinLabel = $("#protein-label");
  const proteinValue = $("#protein-value");
  const meterFill = $("#meter-fill");
  const packMinus = $("#pack-minus");
  const packPlus = $("#pack-plus");
  const packCountEl = $("#pack-count");
  const orderTotal = $("#order-total");
  const orderWhatsapp = $("#order-whatsapp");
  const addToCartButton = $("#add-to-cart");
  const addCartPacks = $("#add-cart-packs");
  const builderLive = $("#builder-live");
  const bowlTitle = $("#bowl-title");

  /* Cart + order form elements */
  const cartLayer = $("#cart-layer");
  const cartDrawer = $("#cart-drawer");
  const cartBackdrop = $("#cart-backdrop");
  const cartClose = $("#cart-close");
  const cartEmpty = $("#cart-empty");
  const cartItemsEl = $("#cart-items");
  const cartPacksEl = $("#cart-packs");
  const cartTotalEl = $("#cart-total");
  const cartWhatsapp = $("#cart-whatsapp");
  const cartClear = $("#cart-clear");
  const cartFab = $("#cart-fab");
  const cartFabCount = $("#cart-fab-count");
  const cartFabTotal = $("#cart-fab-total");
  const addCartCount = $("#add-cart-count");
  const orderDialog = $("#order-dialog");
  const orderForm = $("#order-form");
  const orderName = $("#order-name");
  const orderLocation = $("#order-location");
  const orderSummary = $("#order-summary");
  const orderDialogClose = $("#order-dialog-close");
  const orderDialogCancel = $("#order-dialog-cancel");

  const builderState = {
    species: "dog",
    stage: "adult",
    protein: "chicken",
    special: false
  };

  let packCount = 1;

  function renderProteinRow() {
    if (!proteinRow) return;
    const recipe = currentRecipe();
    const options = Object.entries(recipe.proteins);

    if (!recipe.proteins[builderState.protein]) {
      builderState.protein = options[0][0];
    }

    proteinRow.innerHTML = options
      .map(
        ([value, option]) => `
          <input class="sr-only" type="radio" name="protein" id="protein-${value}" value="${value}" ${
            builderState.protein === value ? "checked" : ""
          }>
          <label class="chip" for="protein-${value}">${option.label}</label>
        `
      )
      .join("");
  }

  function currentSpecialDetail() {
    if (!specialCheck || !specialCheck.checked) return "";
    return specialDetail && specialDetail.value.trim()
      ? specialDetail.value.trim()
      : "details to follow";
  }

  function renderOrder() {
    const recipe = currentRecipe();
    const variant = currentVariant();

    if (packCountEl) packCountEl.textContent = String(packCount);
    if (packMinus) packMinus.disabled = packCount <= 1;
    if (packPlus) packPlus.disabled = packCount >= 99;
    if (orderTotal) orderTotal.textContent = formatPrice(variant.price * packCount);
    if (addCartPacks) addCartPacks.textContent = `${packCount} ${packCount === 1 ? "pack" : "packs"}`;

    if (orderWhatsapp) {
      orderWhatsapp.setAttribute(
        "aria-label",
        `Open the WhatsApp order form for ${packCount} ${packCount === 1 ? "pack" : "packs"} of ${recipe.name} ${variant.label}`
      );
    }
  }

  function renderBuilder(announce) {
    const recipe = currentRecipe();
    const variant = currentVariant();
    const isCat = builderState.species === "cat";
    const stageText = isCat ? "all ages" : stageLabels[builderState.stage];

    if (stageField) stageField.hidden = isCat;
    if (catStageNote) catStageNote.hidden = !isCat;

    if (recTitle) recTitle.textContent = `${recipe.name} · ${variant.label}`;
    if (recCopy) recCopy.textContent = recipe.recCopy;
    if (recPrice) {
      recPrice.innerHTML = `${formatPrice(variant.price)} <span>/ 500 g pack</span>`;
    }
    if (bowlTag) bowlTag.textContent = `For a ${isCat ? "cat" : "dog"} · ${stageText}`;

    if (proteinLabel) proteinLabel.textContent = variant.proteinLabel;
    if (proteinValue) proteinValue.textContent = variant.proteinValue;
    if (meterFill) meterFill.style.width = `${variant.proteinWidth}%`;

    if (recPack && recPack.getAttribute("src") !== recipe.imgSm) {
      recPack.setAttribute("src", recipe.imgSm);
      recPack.setAttribute("alt", `Hachiko ${recipe.name} pack`);
    }

    if (announce && builderLive) {
      const special = builderState.special ? " A special recipe is requested." : "";
      builderLive.textContent = `${recipe.name}, ${variant.label}. ${variant.proteinValue} ${variant.proteinLabel.toLowerCase()}. ${formatPrice(variant.price)} per pack.${special}`;
    }

    renderOrder();
  }

  function syncBuilderControls() {
    const speciesInput = $(`input[name="species"][value="${builderState.species}"]`);
    if (speciesInput) speciesInput.checked = true;

    if (builderState.species === "dog") {
      const stageInput = $(`input[name="stage"][value="${builderState.stage}"]`);
      if (stageInput) stageInput.checked = true;
    }

    if (specialCheck) specialCheck.checked = builderState.special;
    if (specialDetailWrap) specialDetailWrap.hidden = !builderState.special;
  }

  function setPackCount(next) {
    packCount = Math.max(1, Math.min(99, next));
    renderOrder();
  }

  function useRecipe(recipe, proteinKey) {
    builderState.species = recipe.species;
    if (recipe.species === "dog") builderState.stage = recipe.stage;
    builderState.protein = recipe.proteins[proteinKey] ? proteinKey : Object.keys(recipe.proteins)[0];

    syncBuilderControls();
    renderProteinRow();
    renderBuilder(false);

    if (bowlPanel) {
      bowlPanel.classList.add("is-highlighted");
      window.setTimeout(() => bowlPanel.classList.remove("is-highlighted"), 1700);
    }

    const bowlSection = $("#bowl");
    if (bowlSection) {
      bowlSection.scrollIntoView({
        behavior: reduceMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }
    if (bowlTitle) {
      window.setTimeout(
        () => bowlTitle.focus({ preventScroll: true }),
        reduceMotion.matches ? 0 : 420
      );
    }
  }

  if (builderForm) {
    builderForm.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;

      if (target.name === "species") {
        builderState.species = target.value;
        renderProteinRow();
        renderBuilder(true);
      } else if (target.name === "stage") {
        builderState.stage = target.value;
        renderProteinRow();
        renderBuilder(true);
      } else if (target.name === "protein") {
        builderState.protein = target.value;
        renderBuilder(true);
      } else if (target.name === "special") {
        builderState.special = target.checked;
        if (specialDetailWrap) specialDetailWrap.hidden = !builderState.special;
        renderBuilder(true);
      }
    });

    builderForm.addEventListener("input", (event) => {
      if (event.target === specialDetail) renderOrder();
    });

    builderForm.addEventListener("submit", (event) => event.preventDefault());

    renderProteinRow();
    renderBuilder(false);
  }

  /* ------------------------- Cart ------------------------- */

  const cart = [];
  let cartUid = 0;
  let cartReturnFocus = null;

  function recipeKeyForState() {
    return builderState.species === "cat" ? "cats" : builderState.stage;
  }

  function petLabel(recipe) {
    return recipe.species === "cat"
      ? "Cat · all ages from two months"
      : `Dog · ${stageLabels[recipe.stage]}`;
  }

  function packLabel(count) {
    return `${count} ${count === 1 ? "pack" : "packs"}`;
  }

  function cartItemData(item) {
    const recipe = recipes[item.recipeKey] || recipes.adult;
    const variant = recipe.proteins[item.proteinKey] || recipe.proteins.chicken;
    return { recipe, variant, price: variant.price * item.packs };
  }

  function renderCart() {
    const totalPacks = cart.reduce((sum, item) => sum + item.packs, 0);
    const totalPrice = cart.reduce((sum, item) => sum + cartItemData(item).price, 0);
    const empty = cart.length === 0;

    if (cartPacksEl) cartPacksEl.textContent = packLabel(totalPacks);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(totalPrice);
    if (cartWhatsapp) cartWhatsapp.disabled = empty;
    if (cartClear) cartClear.disabled = empty;
    if (cartEmpty) cartEmpty.hidden = !empty;
    if (cartItemsEl) cartItemsEl.hidden = empty;

    if (addCartCount) {
      addCartCount.hidden = empty;
      addCartCount.textContent = String(totalPacks);
    }

    if (cartFab) {
      cartFab.hidden = empty;
      if (cartFabCount) cartFabCount.textContent = String(totalPacks);
      if (cartFabTotal) cartFabTotal.textContent = formatPrice(totalPrice);
    }

    document.body.classList.toggle("has-cart", !empty);

    if (!cartItemsEl || empty) {
      if (cartItemsEl) cartItemsEl.innerHTML = "";
      return;
    }

    cartItemsEl.innerHTML = cart
      .map((item) => {
        const { recipe, variant, price } = cartItemData(item);
        const title = orderItemTitle(recipe, variant);

        return `
          <li class="cart-item" data-uid="${item.uid}">
            <div class="cart-item-head">
              <p class="cart-item-title">${title}</p>
              <button class="cart-item-remove" type="button" data-cart-action="remove" aria-label="Remove ${title} from the cart">Remove</button>
            </div>
            <p class="cart-item-meta">${petLabel(recipe)} · 500 g pack</p>
            ${item.special ? `<p class="cart-item-special">Special: ${escapeHtml(item.special)}</p>` : ""}
            <div class="cart-item-foot">
              <div class="pack-count-control">
                <button class="pack-step" type="button" data-cart-action="dec" aria-label="Remove one pack of ${title}">−</button>
                <output class="cart-item-count">${item.packs}</output>
                <button class="pack-step" type="button" data-cart-action="inc" aria-label="Add one pack of ${title}">+</button>
              </div>
              <span class="cart-item-price">${formatPrice(price)}</span>
            </div>
          </li>
        `;
      })
      .join("");
  }

  function addToCart({ recipeKey, proteinKey, packs, special }) {
    const safePacks = Math.max(1, Math.min(99, packs));
    const existing = cart.find(
      (item) =>
        item.recipeKey === recipeKey &&
        item.proteinKey === proteinKey &&
        item.special === special
    );

    if (existing) {
      existing.packs = Math.min(99, existing.packs + safePacks);
    } else {
      cart.push({
        uid: ++cartUid,
        recipeKey,
        proteinKey,
        packs: safePacks,
        special
      });
    }

    renderCart();
  }

  function openCart(trigger) {
    if (!cartLayer || !cartDrawer) return;
    cartReturnFocus = trigger || document.activeElement;
    cartLayer.hidden = false;
    document.body.classList.add("dialog-open");
    window.requestAnimationFrame(() => cartLayer.classList.add("is-open"));
    window.setTimeout(() => {
      if (cartClose) cartClose.focus({ preventScroll: true });
    }, reduceMotion.matches ? 0 : 90);
  }

  function closeCart() {
    if (!cartLayer || cartLayer.hidden) return;
    cartLayer.classList.remove("is-open");
    document.body.classList.remove("dialog-open");

    const hide = () => {
      if (cartLayer && !cartLayer.classList.contains("is-open")) cartLayer.hidden = true;
    };

    if (reduceMotion.matches) {
      hide();
    } else {
      window.setTimeout(hide, 320);
    }

    if (cartReturnFocus && typeof cartReturnFocus.focus === "function") {
      cartReturnFocus.focus({ preventScroll: true });
    }
    cartReturnFocus = null;
  }

  /* ------------------------- WhatsApp order form ------------------------- */

  let orderItems = [];
  let orderReturnFocus = null;

  function openOrderDialog(items, trigger) {
    if (!orderDialog || typeof orderDialog.showModal !== "function") return;
    orderItems = items.filter((item) => item && item.packs > 0);
    if (!orderItems.length) return;

    orderReturnFocus = trigger || document.activeElement;

    if (orderSummary) {
      const totalPacks = orderItems.reduce((sum, item) => sum + item.packs, 0);
      const specials = Array.from(
        new Set(orderItems.map((item) => (item.special || "").trim()).filter(Boolean))
      );

      orderSummary.innerHTML = `
        <p class="order-summary-label">What travels to WhatsApp</p>
        <ul class="order-summary-list">
          ${orderItems
            .map(
              (item) => `
                <li>
                  <span>${item.packs} × ${escapeHtml(item.title)}</span>
                  <small>500 g pack${item.pet ? ` · ${escapeHtml(item.pet)}` : ""}</small>
                </li>
              `
            )
            .join("")}
        </ul>
        <p class="order-summary-foot">
          <span>${packLabel(totalPacks)}</span>
          <span>${specials.length ? escapeHtml(specials.join("; ")) : "No special conditions"}</span>
        </p>
      `;
    }

    orderDialog.showModal();
    document.body.classList.add("dialog-open");

    if (orderName && !orderName.value.trim()) {
      orderName.focus({ preventScroll: true });
    }
  }

  if (orderDialog && typeof orderDialog.showModal === "function") {
    if (orderForm) {
      orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (typeof orderForm.reportValidity === "function" && !orderForm.reportValidity()) {
          return;
        }

        const name = orderName ? orderName.value.trim() : "";
        const location = orderLocation ? orderLocation.value.trim() : "";
        if (!name || !location || !orderItems.length) return;

        const message = orderMessage({ name, location, items: orderItems });
        window.open(whatsappLink(message), "_blank", "noopener");
        orderDialog.close();
        showToast("WhatsApp is opening with your order. Press send there.");
      });
    }

    if (orderDialogClose) orderDialogClose.addEventListener("click", () => orderDialog.close());
    if (orderDialogCancel) orderDialogCancel.addEventListener("click", () => orderDialog.close());

    orderDialog.addEventListener("click", (event) => {
      if (event.target === orderDialog) orderDialog.close();
    });

    orderDialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      if (orderReturnFocus && typeof orderReturnFocus.focus === "function") {
        orderReturnFocus.focus({ preventScroll: true });
      }
      orderReturnFocus = null;
    });
  }

  if (packMinus) {
    packMinus.addEventListener("click", () => setPackCount(packCount - 1));
  }
  if (packPlus) {
    packPlus.addEventListener("click", () => setPackCount(packCount + 1));
  }

  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      addToCart({
        recipeKey: recipeKeyForState(),
        proteinKey: builderState.protein,
        packs: packCount,
        special: currentSpecialDetail()
      });
      setPackCount(1);
      openCart(addToCartButton);
    });
  }

  if (orderWhatsapp) {
    orderWhatsapp.addEventListener("click", () => {
      const recipe = currentRecipe();
      const variant = currentVariant();
      openOrderDialog(
        [
          {
            title: orderItemTitle(recipe, variant),
            packs: packCount,
            special: currentSpecialDetail(),
            pet: petLabel(recipe)
          }
        ],
        orderWhatsapp
      );
    });
  }

  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);
  if (cartFab) cartFab.addEventListener("click", () => openCart(cartFab));

  if (cartItemsEl) {
    cartItemsEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-cart-action]");
      if (!button) return;

      const row = button.closest("[data-uid]");
      if (!row) return;

      const index = cart.findIndex((item) => item.uid === Number(row.dataset.uid));
      if (index === -1) return;

      const action = button.dataset.cartAction;
      const item = cart[index];

      if (action === "inc") {
        item.packs = Math.min(99, item.packs + 1);
      } else if (action === "dec") {
        item.packs -= 1;
        if (item.packs < 1) cart.splice(index, 1);
      } else if (action === "remove") {
        cart.splice(index, 1);
      }

      renderCart();

      const nextRow = cartItemsEl.querySelector(`[data-uid="${row.dataset.uid}"]`);
      const nextButton =
        (nextRow && nextRow.querySelector(`[data-cart-action="${action === "remove" ? "inc" : action}"]`)) ||
        (cartItemsEl.querySelector("[data-cart-action]")) ||
        cartClose;

      if (nextButton) nextButton.focus({ preventScroll: true });
    });
  }

  if (cartClear) {
    cartClear.addEventListener("click", () => {
      if (!cart.length) return;
      cart.length = 0;
      renderCart();
      showToast("The cart is empty again.");
    });
  }

  if (cartWhatsapp) {
    cartWhatsapp.addEventListener("click", () => {
      if (!cart.length) return;

      const items = cart.map((item) => {
        const { recipe, variant } = cartItemData(item);
        return {
          title: orderItemTitle(recipe, variant),
          packs: item.packs,
          special: item.special,
          pet: petLabel(recipe)
        };
      });

      const trigger = cartWhatsapp;
      closeCart();
      openOrderDialog(items, trigger);
    });
  }

  renderCart();

  /* ------------------------- Recipe explorer ------------------------- */

  const recipeDialog = $("#recipe-dialog");
  const recipeDialogClose = $("#recipe-dialog-close");
  const recipeDialogPack = $("#recipe-dialog-pack");
  const recipeDialogKicker = $("#recipe-dialog-kicker");
  const recipeDialogTitle = $("#recipe-dialog-title");
  const recipeDialogCopy = $("#recipe-dialog-copy");
  const recipeProteinRow = $("#recipe-proteins");
  const recipeBase = $("#recipe-base");
  const recipePrice = $("#recipe-price");
  const recipeIngredients = $("#recipe-ingredients");
  const recipeOpeners = $$("[data-explore]");

  let activeRecipeKey = null;
  let activeExploreProtein = "chicken";

  function renderRecipeDialog() {
    const recipe = recipes[activeRecipeKey];
    if (!recipe) return;

    const proteinKeys = Object.keys(recipe.proteins);
    if (!recipe.proteins[activeExploreProtein]) activeExploreProtein = proteinKeys[0];
    const variant = recipe.proteins[activeExploreProtein];

    if (recipeDialogKicker) recipeDialogKicker.textContent = recipe.kicker;
    if (recipeDialogTitle) recipeDialogTitle.textContent = recipe.name;
    if (recipeDialogCopy) recipeDialogCopy.textContent = recipe.recCopy;

    if (recipeDialogPack) {
      recipeDialogPack.src = recipe.img;
      recipeDialogPack.srcset = `${recipe.imgSm} 480w, ${recipe.img} 900w`;
      recipeDialogPack.alt = recipe.alt;
    }

    if (recipeProteinRow) {
      recipeProteinRow.innerHTML = proteinKeys
        .map(
          (key) => `
            <button class="recipe-protein" type="button" data-protein="${key}" aria-pressed="${
              key === activeExploreProtein ? "true" : "false"
            }">${recipe.proteins[key].label}</button>
          `
        )
        .join("");
    }

    if (recipeBase) recipeBase.textContent = variant.base;
    if (recipePrice) recipePrice.textContent = formatPrice(variant.price);

    if (recipeIngredients) {
      recipeIngredients.innerHTML = variant.ingredients
        .map(
          ([name, amount]) =>
            `<li><span>${name}</span><strong>${amount === "to finish" ? "to finish" : `${amount}%`}</strong></li>`
        )
        .join("");
    }

    if (recipeDialog) {
      recipeDialog.style.setProperty("--recipe-tint", recipe.tint);
    }
  }

  function openRecipeDialog(key) {
    if (!recipeDialog || !recipes[key]) return;
    activeRecipeKey = key;
    activeExploreProtein = Object.keys(recipes[key].proteins)[0];
    renderRecipeDialog();
    recipeDialog.showModal();
    document.body.classList.add("dialog-open");
  }

  recipeOpeners.forEach((button) => {
    button.addEventListener("click", () => openRecipeDialog(button.dataset.explore));
  });

  if (recipeProteinRow) {
    recipeProteinRow.addEventListener("click", (event) => {
      const button = event.target.closest("[data-protein]");
      if (!button) return;
      activeExploreProtein = button.dataset.protein;
      renderRecipeDialog();
    });
  }

  if (recipeDialog) {
    if (recipeDialogClose) {
      recipeDialogClose.addEventListener("click", () => recipeDialog.close());
    }

    recipeDialog.addEventListener("click", (event) => {
      if (event.target === recipeDialog) recipeDialog.close();
    });

    recipeDialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
    });
  }

  /* ------------------------- Ritual steps ------------------------- */

  const stepTriggers = $$(".step-trigger");

  function setStepExpanded(trigger, expanded) {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    trigger.setAttribute("aria-expanded", String(expanded));
    if (panel) panel.hidden = !expanded;
  }

  stepTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const willExpand = trigger.getAttribute("aria-expanded") !== "true";

      stepTriggers.forEach((item) => {
        setStepExpanded(item, item === trigger ? willExpand : false);
      });
    });
  });

  /* ------------------------- Gift note preview ------------------------- */

  const giftForm = $("#gift-form");
  const giftNameInput = $("#gift-name-input");
  const giftNoteInput = $("#gift-note-input");
  const giftName = $("#gift-name");
  const giftNote = $("#gift-note");
  const giftCount = $("#gift-count");
  const giftCopy = $("#gift-copy");
  const defaultName = "someone patient";
  const defaultNote = "Because they wait by the door.";

  function updateGiftPreview() {
    if (!giftNameInput || !giftNoteInput) return;
    const name = giftNameInput.value.trim();
    const note = giftNoteInput.value.trim();
    if (giftName) giftName.textContent = name || defaultName;
    if (giftNote) giftNote.textContent = note || defaultNote;
    if (giftCount) giftCount.textContent = `${giftNoteInput.value.length} / 90`;
  }

  if (giftForm) {
    giftForm.addEventListener("submit", (event) => event.preventDefault());
    if (giftNameInput) giftNameInput.addEventListener("input", updateGiftPreview);
    if (giftNoteInput) giftNoteInput.addEventListener("input", updateGiftPreview);
    updateGiftPreview();
  }

  if (giftCopy) {
    giftCopy.addEventListener("click", async () => {
      const name = giftNameInput && giftNameInput.value.trim() ? giftNameInput.value.trim() : defaultName;
      const note = giftNoteInput && giftNoteInput.value.trim() ? giftNoteInput.value.trim() : defaultNote;
      const copied = await copyText(`For ${name} — “${note}” — A gift of fresh Hachiko dinners.`);
      showToast(copied ? "Gift note copied." : "Couldn’t copy automatically. You can still send it to us on Facebook.");
    });
  }

  /* ------------------------- Photo dialog ------------------------- */

  const photoDialog = $("#photo-dialog");
  const photoClose = $("#photo-dialog-close");
  const photoOpeners = $$("[data-open-photo]");

  if (photoDialog && typeof photoDialog.showModal === "function") {
    photoOpeners.forEach((button) => {
      button.addEventListener("click", () => {
        photoDialog.showModal();
        document.body.classList.add("dialog-open");
      });
    });

    if (photoClose) {
      photoClose.addEventListener("click", () => photoDialog.close());
    }

    photoDialog.addEventListener("click", (event) => {
      if (event.target === photoDialog) photoDialog.close();
    });

    photoDialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
    });
  }

  /* ------------------------- Keyboard escape ------------------------- */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (mobileNav && !mobileNav.hidden) {
        closeNav(true);
      }
      if (cartLayer && !cartLayer.hidden) {
        closeCart();
      }
      return;
    }

    if (event.key !== "Tab" || !cartLayer || cartLayer.hidden || !cartDrawer) return;

    const focusables = $$(
      "button:not(:disabled), a[href], input, textarea, select, [tabindex]:not([tabindex='-1'])",
      cartDrawer
    ).filter((element) => element.offsetParent !== null);

    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ------------------------- Footer year ------------------------- */

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
