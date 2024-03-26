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
//Câu 1
let isCheck;
let role = 1;
let msg;
if (role === 1) {
    isCheck = true;
    msg = 'Admin';
    console.log(msg);
}
else {
    msg = 'Không phải là admin';
    console.log(msg);
}
;
let Personn;
let Person1 = Personn = { id: 1, name: 'khai hoang', address: 'Can Tho', birthday: '26/09/2004', phone: '0326094031' };
console.log(Person1);
let Person2 = Personn = { id: 1, name: ' hoang', address: 'Can Tho', birthday: '26/09/2004', phone: '0326094031' };
console.log(Person2);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function getPokemonList() {
    return __awaiter(this, void 0, void 0, function* () {
        const numberOfPokemon = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`);
        const data = yield response.json();
        const pokemonList = [];
        for (const pokemonData of data.results) {
            const pokemonResponse = yield fetch(pokemonData.url);
            const pokemonDetail = yield pokemonResponse.json();
            const pokemon = {
                id: pokemonDetail.id,
                name: pokemonDetail.name,
                image: pokemonDetail.sprites.front_default,
                type: pokemonDetail.types[0].type.name
            };
            pokemonList.push(pokemon);
        }
        return pokemonList;
    });
}
function displayPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemonList = yield getPokemonList();
        shuffle(pokemonList);
        const pokemonListElement = document.getElementById('pokemonList');
        if (pokemonListElement) {
            pokemonList.forEach(pokemon => {
                pokemonListElement.innerHTML += `
                <div class="col">
                <div class="p-3 card shadow-sm"><img src="${pokemon.image}"  alt=""></div>
            </div>
            `;
            });
        }
        else {
            console.error('Element with id "pokemonList" not found.');
        }
    });
}
displayPokemon();
