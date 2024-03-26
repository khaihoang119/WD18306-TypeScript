//Bắt lỗi form validate
function validateForm() {
    let playerName = document.getElementById("playerName").value.trim();
    let agreeCheckbox = document.getElementById("agreeCheckbox").checked;

    if (playerName == "") {
        document.getElementById("nameError").style.display = "block";
        return false;
    } else {
        document.getElementById("nameError").style.display = "none";
        // Lưu tên người chơi vào localStorage
        localStorage.setItem("playerName", playerName);
    }

    if (!agreeCheckbox) {
        document.getElementById("checkboxError").style.display = "block";
        return false;
    } else {
        document.getElementById("checkboxError").style.display = "none";
    }

    return true;
};

// Lấy tên người chơi từ localStorage và hiển thị trên trang
var playerName = localStorage.getItem("playerName");
if (playerName) {
    document.getElementById("playerName").textContent = playerName;
} else {
    // Nếu không có tên người chơi trong localStorage, chuyển hướng người dùng trở lại trang chính
    window.location.href = "login.component.html";
};
function loadPage() {
    alert("Image is loaded");
};

// Lấy tất cả các hình ảnh donut
const donutImages = document.querySelectorAll('.donut-image');

// Định nghĩa sự kiện click cho mỗi hình ảnh
donutImages.forEach(donutImage => {
    donutImage.addEventListener('click', () => {
        // Đổi màu background của hình ảnh
        donutImage.style.backgroundColor = getRandomColor();
    });
});

// Hàm để sinh màu ngẫu nhiên
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


