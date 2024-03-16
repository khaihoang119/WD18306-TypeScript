
function loadPage(): void {
    alert("Image is loaded");
}

const donutImages = document.querySelectorAll('.donut-image') as NodeListOf<HTMLElement>;

donutImages.forEach((donutImage: HTMLElement) => {
    donutImage.addEventListener('click', () => {
        // Đổi màu background của hình ảnh
        donutImage.style.backgroundColor = getRandomColor();
    });
});


// Hàm để sinh màu ngẫu nhiên
const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
const fs = require('fs');



interface Donut{
    id: number;
    url:string;
}

function shuffleImages(filename: string): void{
    try{
        //Đọc dữ liệu từ json
        const data:  Donut[] = JSON.parse(fs.readFileSync(filename, 'utf-8'));
    
    // Xáo trộn danh sách hình ảnh
    const shuffledData = shuffleArray(data);

    // Ghi dữ liệu đã xáo trộn vào tệp JSON
    fs.writeFileSync(filename, JSON.stringify(shuffledData, null, 2));
         // Tạo các phần tử img và thêm chúng vào imageGallery
         data.forEach(image => {
            const img = document.createElement('img');
            img.src = image.url;
            img.alt = `Image ${image.id}`;
            imageGallery.appendChild(img);
        });
    console.log('Đã xáo trộn danh sách hình ảnh thành công!');
    } catch (error) {
    console.error('Đã xảy ra lỗi khi xáo trộn danh sách hình ảnh:', error);
}

// Hàm xáo trộn mảng
function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
}

// Sử dụng hàm để xáo trộn danh sách hình ảnh trong db.json
const filename = 'db.json';
shuffleImages(filename);

// interface Pokemon {
//     id: number;
//     name: string;
//     image: string;
//     type: string;
// }

// function shuffle(array: any[]): void {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// async function getPokemonList(): Promise<Pokemon[]> {
//     const numberOfPokemon = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
//     const response = await fetch(`../${db}?limit=${numberOfPokemon}`);
//     const data = await response.json();

//     const pokemonList: Pokemon[] = [];

//     for (const pokemonData of data) {
//         const pokemonResponse = await fetch(pokemonData.url);
//         const pokemonDetail = await pokemonResponse.json();

//         const pokemon: Pokemon = {
//             id: pokemonDetail.id,
//             name: pokemonDetail.name,
//             image: pokemonDetail.sprites.front_default,
//             type: pokemonDetail.types[0].type.name
//         };

//         pokemonList.push(pokemon);
//     }

//     return pokemonList;
// }

// async function displayPokemon(): Promise<void> {
//     const pokemonList = await getPokemonList();
//     shuffle(pokemonList);

//     const pokemonListElement = document.getElementById('pokemonList');

//     if (pokemonListElement) {
//         pokemonList.forEach(pokemon => {
           
//             pokemonListElement.innerHTML += `
//                 <div class="col">
//                 <div class="p-3 card shadow-sm"><img src="${pokemon.image}"  alt=""></div>
//             </div>
//             `;
            
//         });
//     } else {
//         console.error('Element with id "pokemonList" not found.');
//     }
// }

// displayPokemon();
