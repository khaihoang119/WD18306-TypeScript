interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

function shuffle(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function getPokemonList(): Promise<Pokemon[]> {
    const numberOfPokemon = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`);
    const data = await response.json();

    const pokemonList: Pokemon[] = [];

    for (const pokemonData of data.results) {
        const pokemonResponse = await fetch(pokemonData.url);
        const pokemonDetail = await pokemonResponse.json();

        const pokemon: Pokemon = {
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            image: pokemonDetail.sprites.front_default,
            type: pokemonDetail.types[0].type.name
        };

        pokemonList.push(pokemon);
    }

    return pokemonList;
}

async function displayPokemon(): Promise<void> {
    const pokemonList = await getPokemonList();
    shuffle(pokemonList);

    const pokemonListElement = document.getElementById('pokemonList');

    if (pokemonListElement) {
        pokemonList.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>ID: ${pokemon.id}</p>
                <p>Name: ${pokemon.name}</p>
                <p>Type: ${pokemon.type}</p>
                <img src="${pokemon.image}" alt="${pokemon.name}">
            `;
            pokemonListElement.appendChild(listItem);
        });
    } else {
        console.error('Element with id "pokemonList" not found.');
    }
}

displayPokemon();
