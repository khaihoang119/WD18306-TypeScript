"use strict";
function loadPage() {
    alert("Image is loaded");
}
const donutImages = document.querySelectorAll('.donut-image');
// Mảng để lưu trữ id của các hình ảnh đã được click
let clickedImageIds = [];
// Function để xử lý khi click vào hình ảnh
function handleImageClick(event, id) {
    const clickedImage = event.currentTarget;
    // Kiểm tra xem hình ảnh đã được click trước đó chưa
    if (clickedImageIds.includes(id)) {
        // Làm cho cả 2 hình ảnh có cùng id trở thành màu xám
        const imagesWithSameId = document.querySelectorAll(`[data-id="${id}"]`);
        imagesWithSameId.forEach(image => {
            image.style.filter = 'grayscale(100%)';
        });
    }
    else {
        // Nếu chưa được click trước đó, thêm id vào mảng
        clickedImageIds.push(id);
    }
}
function displayImages() {
    fetch('../db.json')
        .then(response => response.json())
        .then(data => {
        const imageGallery = document.getElementById('imageGallery');
        shuffleArray(data);
        if (imageGallery) {
            let html = '';
            data.forEach((item) => {
                html += `
                <div class="col">
                    <div class="p-3 card shadow-sm">
                        <img src="./assets/images/${item.image}" alt="Image ${item.id}" data-id="${item.id}" onclick="handleImageClick(event, ${item.id})"    class="image" >
                    </div>
                </div>
                `;
            });
            imageGallery.innerHTML = html;
        }
        else {
            console.error('Không tìm thấy phần tử với id là "imageGallery" trong DOM.');
        }
    })
        .catch(error => {
        console.error('Đã xảy ra lỗi khi tải danh sách hình ảnh:', error);
    });
}
displayImages();
// Sử dụng hàm để hiển thị danh sách hình ảnh trong db.json
const filename = 'db.json';
// Hàm xáo trộn mảng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
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
