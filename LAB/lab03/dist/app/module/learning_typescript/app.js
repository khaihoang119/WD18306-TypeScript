"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function fetchPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon");
        const data = yield response.json();
        const pokemons = data.results.slice(0, Math.floor(Math.random() * (20 - 10 + 1) + 10)).map((result, index) => ({
            id: index + 1,
            name: result.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
            type: "unknown" // Thể loại không được trả về trong danh sách cơ bản, có thể được mở rộng sau
        }));
        return pokemons;
    });
}
function displayPokemons(pokemons) {
    return __awaiter(this, void 0, void 0, function* () {
        const shuffledPokemons = shuffle(pokemons);
        const container = document.getElementById("pokemon-container");
        if (container) {
            let html = "";
            shuffledPokemons.forEach(pokemon => {
                html += `
            <div class="pokemon-card" onclick="changeCardColor(this)" data-name="${pokemon.name}">
            <img src="${pokemon.image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
            </div>
            `;
                // Gắn sự kiện click vào thẻ mới tạo
            });
            container.innerHTML = html;
        }
    });
}
const MAX_POKEMON = 20;
let remainingCards = MAX_POKEMON * 2;
(_a = document.getElementById('reset')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    location.reload();
});
let firstCard = null;
let secondCard = null;
function changeCardColor(card) {
    if (!firstCard) {
        // No card has been selected yet
        firstCard = card;
        firstCard.classList.add('selected');
    }
    else if (!secondCard) {
        // Second card is being selected
        secondCard = card;
        secondCard.classList.add('selected');
        // Check if the names of the two selected cards match
        if (firstCard.dataset.name === secondCard.dataset.name) {
            // Match found, change cards to green
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            setTimeout(() => {
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';
                firstCard = null;
                secondCard = null;
                remainingCards -= 2; // Giảm số thẻ còn lại khi ẩn đi
                if (remainingCards === 0) {
                    // Nếu không còn thẻ nào, hiển thị cảnh báo người chơi đã thắng
                    setTimeout(() => { alert("Bạn đã thắng!"); }, 2000);
                }
            }, 1000);
        }
        else {
            // No match, change cards to red
            firstCard.classList.add('unmatched');
            secondCard.classList.add('unmatched');
            // After a brief delay, reset unmatched cards to their normal state
            setTimeout(() => {
                firstCard.classList.remove('selected', 'unmatched');
                secondCard.classList.remove('selected', 'unmatched');
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const pokemons = yield fetchPokemons(); // Lấy danh sách Pokémon
    yield displayPokemons(pokemons); // Hiển thị Pokémon
    const container = document.getElementById("pokemon-container");
    if (container) {
        container.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("pokemon-card")) {
                const clickedImage = target.querySelector("img");
                if (clickedImage) {
                    const clickedPokemonName = clickedImage.alt;
                    const clickedPokemon = pokemons.find(pokemon => pokemon.name === clickedPokemonName);
                    if (clickedPokemon) {
                        // Xử lý khi một hình được nhấp
                    }
                }
            }
        });
    }
}));
