"use strict";
// Bắt lỗi form validate
function validateForm() {
    var playerNameInput = document.getElementById("playerName");
    var playerName = playerNameInput.value.trim();
    var agreeCheckbox = document.getElementById("agreeCheckbox").checked;
    if (playerName === "") {
        var nameErrorElement = document.getElementById("nameError");
        nameErrorElement.style.display = "block";
        return false;
    }
    else {
        var nameErrorElement = document.getElementById("nameError");
        if (nameErrorElement) {
            nameErrorElement.style.display = "none";
            // Lưu tên người chơi vào localStorage
            localStorage.setItem("playerName", playerName);
        }
    }
    var checkboxErrorElement = document.getElementById("checkboxError");
    if (checkboxErrorElement) {
        if (!agreeCheckbox) {
            checkboxErrorElement.style.display = "block";
            return false;
        }
        else {
            checkboxErrorElement.style.display = "none";
        }
    }
    return true;
}
// Lấy tên người chơi từ localStorage và hiển thị trên trang
var playerName = localStorage.getItem("playerName");
if (playerName) {
    document.getElementById("playerName").textContent = playerName;
}
else {
    // Nếu không có tên người chơi trong localStorage, chuyển hướng người dùng trở lại trang chính
    window.location.href = "login.component.html";
}
function loadPage() {
    alert("Image is loaded");
}
var donutImages = document.querySelectorAll('.donut-image');
donutImages.forEach(function (donutImage) {
    donutImage.addEventListener('click', function () {
        // Đổi màu background của hình ảnh
        donutImage.style.backgroundColor = getRandomColor();
    });
});
// Hàm để sinh màu ngẫu nhiên
var getRandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
