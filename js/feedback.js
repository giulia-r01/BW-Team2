document.addEventListener("DOMContentLoaded", function () {
  const starContainer = document.getElementById("starContainer");
  const ratingValue = document.getElementById("ratingValue");
  let rating = 0;

  for (let i = 1; i <= 10; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = "&#9733;"; // Stella ★
    star.dataset.value = i;

    star.addEventListener("click", function () {
      rating = parseInt(this.dataset.value);
      ratingValue.textContent = rating;
      updateStars(rating);
    });

    star.addEventListener("mouseenter", function () {
      updateStars(parseInt(this.dataset.value));
    });

    star.addEventListener("mouseleave", function () {
      updateStars(rating);
    });

    starContainer.appendChild(star);
  }

  function updateStars(value) {
    document.querySelectorAll(".star").forEach((star) => {
      star.classList.toggle("active", parseInt(star.dataset.value) <= value);
    });
  }
});
