const listItem = document.querySelectorAll(".items"); // trả mảng 

const button = document.querySelector(".narrow"); // trả về 1 

const nav = document.querySelector(".navbar-nav");

button.addEventListener("click", () => {
    listItem.forEach(e => e.classList.toggle("d-none"));
    nav.classList.toggle("navbar-nav");
})
// ------ menu  -------

const listNav = document.querySelectorAll(".nav-link");
const content = document.querySelectorAll("section");

listNav.forEach((elemnt, index) => {
    elemnt.addEventListener("click", () => {
        content.forEach(e => e.style.display = "none");
        content[index].style.display = "block";
    })
})
const buttonSearch = document.querySelector(".search");

const inputSearch = document.querySelector(".inputsearch");

buttonSearch.addEventListener("click", () => {
    inputSearch.classList.toggle("d-none");
    buttonSearch.classList.toggle("d-none");
})




