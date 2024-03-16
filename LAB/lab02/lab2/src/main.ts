// Bắt lỗi form validate
function validateForm(): boolean {
    const playerNameInput = document.getElementById("playerName") as HTMLInputElement;
    const playerName = playerNameInput.value.trim();
    const agreeCheckbox = (document.getElementById("agreeCheckbox") as HTMLInputElement).checked;

    if (playerName === "") {
        const nameErrorElement = document.getElementById("nameError") as HTMLElement;
        nameErrorElement.style.display = "block";

        return false;
    } else {
        const nameErrorElement = document.getElementById("nameError") as HTMLElement | null;
        if (nameErrorElement) {
            nameErrorElement.style.display = "none";
            // Lưu tên người chơi vào localStorage
            localStorage.setItem("playerName", playerName);
        }
        
    }

    const checkboxErrorElement = document.getElementById("checkboxError") as HTMLElement | null;
if (checkboxErrorElement) {
    if (!agreeCheckbox) {
        checkboxErrorElement.style.display = "block";
        return false;
    } else {
        checkboxErrorElement.style.display = "none";
    }
}

    return true;
}

// Lấy tên người chơi từ localStorage và hiển thị trên trang
const playerName = localStorage.getItem("playerName");
if (playerName) {
    (document.getElementById("playerName") as HTMLElement).textContent = playerName;
} else {
    // Nếu không có tên người chơi trong localStorage, chuyển hướng người dùng trở lại trang chính
    window.location.href = "login.component.html";
}

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
