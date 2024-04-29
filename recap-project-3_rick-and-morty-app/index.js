import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";
let lastPage = false;

const fetchCharacters = async () => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  try {
    const response = await fetch(url);
    console.log("response", response);
    if (response.ok) {
      const { results, info } = await response.json();
      maxPage = info.pages;
      lastPage = info.next === null;
      console.log(info);
      console.log(results);
      const cards = results.map((result) => {
        const { image, name, status, type, episode } = result;
        return createCharacterCard(image, name, status, type, episode.length);
      });
      cardContainer.innerHTML = cards;
      pagination.textContent = `${page} / ${maxPage}`;
    }
  } catch (err) {
    console.error(err);
  }
};
fetchCharacters();

nextButton.addEventListener("click", () => {
  if (!lastPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
