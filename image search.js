const searchBox = document.getElementById("searchBox");
const images = document.querySelectorAll(".image-item");
const noResult = document.getElementById("noResult");

function filterImages() {
  const query = searchBox.value.trim().toLowerCase();
  const keywords = query.split(/\s+/);
  let anyVisible = false;

  images.forEach(img => {
    const tags = (img.alt + " " + img.dataset.tags).toLowerCase();
    const matches = keywords.every(word => tags.includes(word));

    if (query !== "" && matches) {
      img.classList.add("show");
      anyVisible = true;
    } else {
      img.classList.remove("show");
    }
  });

  noResult.style.display = (!anyVisible && query !== "") ? "block" : "none";
}

// On load: hide all images
window.addEventListener("DOMContentLoaded", () => {
  filterImages();
});

// On typing
searchBox.addEventListener("input", filterImages);