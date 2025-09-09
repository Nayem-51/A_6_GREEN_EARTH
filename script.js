const API = {
  allPlants: "https://openapi.programming-hero.com/api/plants",
  categories: "https://openapi.programming-hero.com/api/categories",
  category: (id) => `https://openapi.programming-hero.com/api/category/${id}`,
  plant: (id) => `https://openapi.programming-hero.com/api/plant/${id}`,
};

const dom = {
  categoryList: document.getElementById("categoryList"),
  cardsContainer: document.getElementById("cardsContainer"),
  loading: document.getElementById("loading"),
  cartContainer: document.getElementById("cartContainer"),
  cartContainerMobile: document.getElementById("cartContainerMobile"),
  cartTotal: document.getElementById("cartTotal"),
  modal: document.getElementById("plantModal"),
  modalContent: document.getElementById("modalContent"),
  year: document.getElementById("year"),
  plantForm: document.getElementById("plantForm"),
};

const state = {
  categories: [
    { id: "all", label: "All Trees" },
    { id: "fruit", label: "Fruit Trees" },
    { id: "flowering", label: "Flowering Trees" },
    { id: "shade", label: "Shade Trees" },
    { id: "medicinal", label: "Medicinal Trees" },
    { id: "timber", label: "Timber Trees" },
    { id: "evergreen", label: "Evergreen Trees" },
    { id: "ornamental", label: "Ornamental Plants" },
    { id: "bamboo", label: "Bamboo" },
    { id: "climbers", label: "Climbers" },
    { id: "aquatic", label: "Aquatic Plants" },
  ],
  activeCategoryId: "all",
  cartItems: [],
  allPlants: [],
  lastAddedId: null,
};

function formatPrice(value) {
  const n = Number(value ?? 0);
  return `$${n.toFixed(2)}`;
}

function showLoading(isLoading) {
  if (!dom.loading) return;
  dom.loading.classList.toggle("hidden", !isLoading);
}

async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return { error: true };
  }
}

function getSafeImageUrl(url) {
  const placeholder = "https://picsum.photos/seed/green-earth/600/400";
  if (!url || typeof url !== "string") return placeholder;
  let u = url.trim();
  if (!u) return placeholder;
  u = u.replace(/\bi\.ibb\.co\.com\b/g, "i.ibb.co");
  if (u.startsWith("//")) u = `https:${u}`;
  if (/^i\.ibb\.co\//i.test(u)) u = `https://${u}`;
  if (/^\/?assets\//.test(u)) return u;
  try {
    const parsed = new URL(u, window.location.origin);
    return parsed.href;
  } catch {
    return placeholder;
  }
}