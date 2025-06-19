var card = [
    {
        number: "1",
        src: "/NewStore/img/table.png",
        icon1: `<i class="fa-solid fa-circle-plus"></i>`,
        icon2: `<i class="fa-solid fa-cart-plus"></i>`,
        button1: "ADD",
        button2: "CART"
    },
    {
        number: "2",
        src: "/NewStore/img/table.png",
        icon1: `<i class="fa-solid fa-circle-plus"></i>`,
        icon2: `<i class="fa-solid fa-cart-plus"></i>`,
        button1: "ADD",
        button2: "CART"
    },
    {
        number: "3",
        src: "/NewStore/img/table.png",
        icon1: `<i class="fa-solid fa-circle-plus"></i>`,
        icon2: `<i class="fa-solid fa-cart-plus"></i>`,
        button1: "ADD",
        button2: "CART"
    },
    {
        number: "4",
        src: "/NewStore/img/table.png",
        icon1: `<i class="fa-solid fa-circle-plus"></i>`,
        icon2: `<i class="fa-solid fa-cart-plus"></i>`,
        button1: "ADD",
        button2: "CART"
    }
]

const a = document.querySelector(".aaa")

card.forEach(e => {
    a.innerHTML +=
        `<div class="col">
                    <div class="order-card bg-white rounded-2 p-3">
                        <div class="number">${e.number}</div>
                        <img src="${e.src}" alt="" class="mt-2">
                        <div class="d-flex justify-content-evenly align-items-center mt-2">
                            <button type="button" class="btn btn-success d-flex align-items-center gap-2">${e.icon1}${e.button1}</button>
                            <button type="button" class="btn btn-danger d-flex align-items-center gap-2">${e.icon2}${e.button2}</button>
                        </div>
                    </div>
                </div>`
})
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
})