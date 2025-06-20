var card1 = [
    {
        number: "5",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "6",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "7",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "8",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "9",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "10",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "11",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    },
    {
        number: "12",
        src: "/NewStore/img/table1.png",
        icon: `<i class="fa-regular fa-calendar-plus"></i>`,
        button: "BOOKING",
    }
]
const b = document.querySelector(".bbb")

card1.forEach(e=>{
    b.innerHTML += 
    `<div class="col">
                    <div class="order-card bg-white rounded-2 p-3">
                        <div class="number">${e.number}</div>
                        <img src="${e.src}" alt="" class="mt-2">
                        <div class="d-flex justify-content-center align-items-center mt-2">
                            <button type="button" class="btn btn-warning d-flex align-items-center gap-2">${e.icon}${e.button}</button>
                        </div>
                    </div>
                </div>`
});


// style
// classList

const listItem = document.querySelectorAll(".items"); // trả mảng 

const button = document.querySelector(".narrow"); // trả về 1 

const nav = document.querySelector(".navbar-nav");

button.addEventListener("click", () => {
    listItem.forEach(e =>  e.classList.toggle("d-none"));
    nav.classList.toggle("navbar-nav");
})






 