console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const imageElement = document.createElement("img");

    if (i <= filledStars) {
      imageElement.setAttribute("src", "assets/star-filled.svg");
    } else {
      imageElement.setAttribute("src", "assets/star-empty.svg");
    }

    imageElement.addEventListener("click", function () {
      renderStars(i);
    });

    starContainer.append(imageElement);
  }
}
renderStars();
