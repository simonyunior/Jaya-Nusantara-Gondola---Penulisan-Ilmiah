function validateForm(e) {
  const inputs = document.querySelectorAll("input[required], textarea[required]");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Mohon isi semua kolom yang diperlukan.");
      e.preventDefault();
      return false;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", validateForm);
  }

  const filter = document.getElementById("filterJenis");
  if (filter) {
    filter.addEventListener("change", () => {
      const jenis = filter.value.toLowerCase();
      document.querySelectorAll(".produk-item").forEach(item => {
        const tipe = item.dataset.jenis.toLowerCase();
        item.style.display = (jenis === "semua" || jenis === tipe) ? "block" : "none";
      });
    });
  }
});
