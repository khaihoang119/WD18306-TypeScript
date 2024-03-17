// Biến để lưu trữ id của hình ảnh đã được click trước đó
let previousClickedImageId: number | null = null;

// Function để xử lý khi click vào hình ảnh
function handleImageClick(event: Event, id: number): void {
    const clickedImage = event.currentTarget as HTMLElement;

    // Nếu hình ảnh đã được click trước đó và có cùng id với hình ảnh hiện tại
    if (previousClickedImageId !== null && id === previousClickedImageId) {
        // Làm cho cả 2 hình ảnh có cùng id trở thành màu xám
        const imagesWithSameId = document.querySelectorAll(`[data-id="${id}"]`);
        imagesWithSameId.forEach(image => {
            (image as HTMLElement).style.background = 'gray';
        });
    } else {
        // Nếu không, làm cho hình ảnh hiện tại trở thành màu đỏ
        clickedImage.style.background = 'red';

        

        // Lưu id của hình ảnh hiện tại vào biến previousClickedImageId
        previousClickedImageId = id;
    }
}




// Function để hiển thị hình ảnh
function displayImages(): void {
    fetch('../db.json')
        .then(response => response.json())
        .then(data => {
            const imageGallery = document.getElementById('imageGallery');
            shuffleArray(data);

            if (imageGallery) {
                let html = '';
                data.forEach((item: { id: number, image: string }) => {
                    html += `
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="./assets/images/${item.image}" alt="Image ${item.id}" data-id="${item.id}" onclick="handleImageClick(event, ${item.id})" class="image" >
                            </div>
                        </div>
                    `;
                });
                imageGallery.innerHTML = html;
            } else {
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
function shuffleArray<T>(array: T[]): T[] {
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
