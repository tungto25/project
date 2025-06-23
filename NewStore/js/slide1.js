
// style
// classList

const listItem = document.querySelectorAll(".items"); // trả mảng 

const button = document.querySelector(".narrow"); // trả về 1 

const nav = document.querySelector(".navbar-nav");

button.addEventListener("click", () => {
    listItem.forEach(e =>  e.classList.toggle("d-none"));
    nav.classList.toggle("navbar-nav");
})






 