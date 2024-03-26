//Câu 1
let isCheck : boolean;
let role : number = 1;
let msg : string;
if ( role === 1){
    isCheck = true;
    msg = 'Admin';
    console.log(msg);
    
}else{
    msg = 'Không phải là admin';
    console.log(msg); 
};
let Personn: {id : number, name : string, address: string, birthday: string, phone : string};

 let Person1 =  Personn  = {id: 1, name: 'khai hoang', address: 'Can Tho', birthday: '26/09/2004', phone: '0326094031'};
console.log(Person1);
let Person2 =  Personn = {id: 1, name: ' hoang', address: 'Can Tho', birthday: '26/09/2004', phone: '0326094031'};
console.log(Person2);

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
           
            pokemonListElement.innerHTML += `
                <div class="col">
                <div class="p-3 card shadow-sm"><img src="${pokemon.image}"  alt=""></div>
            </div>
            `;
            
        });
    } else {
        console.error('Element with id "pokemonList" not found.');
    }
}

displayPokemon();
