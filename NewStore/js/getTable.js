async function getAllTable() {
    const a = document.querySelector(".aaa");
    const data = await getAll(URL_TABLE);
    // console.log(data);

    data.forEach(e => {
        a.innerHTML +=
            `<div class="col">
                    <div class="order-card bg-white rounded-2 p-3">
                        <div class="number">${e.id}</div>
                        <img src="../img/table.png" alt="" class="m-auto w-50 d-block">
                        <div class="d-flex justify-content-evenly align-items-center mt-2">
                            <button type="button" class="btn btn-success d-flex align-items-center gap-2"><i class="fa-solid fa-circle-plus"></i>ADD</button>
                            <button type="button" class="btn btn-danger d-flex align-items-center gap-2"><i class="fa-solid fa-cart-plus"></i>CART</button>
                        </div>
                    </div>
                </div>`
    })
}
getAllTable();

async function getAllTable1() {
    const b = document.querySelector(".bbb");
    const data = await getAll(URL_TABLE1);
    console.log(data);

    data.forEach(e => {
        b.innerHTML +=
            ` <div class="col">
                    <div class="order-card bg-white rounded-2 p-3">
                        <div class="number">${e.id}</div>
                        <img src="../img/table1.png" alt="" class="mt-2 m-auto w-50 d-block">
                        <div class="d-none boo">
                            <img src="../img/table.png" alt="" class="m-auto w-50 d-block ">
                            <div class="d-flex justify-content-evenly align-items-center mt-2 ">
                                <button type="button" class="btn btn-success d-flex align-items-center gap-2"><i class="fa-solid fa-circle-plus"></i>ADD</button>
                                <button type="button" class="btn btn-danger d-flex align-items-center gap-2"><i class="fa-solid fa-cart-plus"></i>CART</button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mt-2 booking">
                            <button type="button" class="btn btn-warning d-flex align-items-center gap-2"><i class="fa-regular fa-calendar-plus"></i>BOOKING</button>
                        </div>
                    </div>
                </div>`
    })
}
getAllTable1();

async function getAllFood() {
    const b = document.querySelector(".food");
    const data = await getAll(URL_FOOD);
    console.log(data);

    data.forEach(e => {
        b.innerHTML +=
            ` <div class="col">
                    <div class="order-card1 bg-white rounded-2 p-3">
                        <div class="top d-flex justify-content-between align-items-center">
                            <div class="number1">${e.id}</div>
                            <h3><strong>${e.food}</strong></h3>
                            <i class="fa-solid fa-pen-to-square fs-3"></i>
                        </div>
                        <div class="box-img">
                             <img src="${e.image}" alt="" class="mt-2">
                        </div>
                        <h3 class="currency text-center">${e.price}</h3>
                        <div class="d-flex justify-content-center align-items-center mt-2 gap-2">
                            <button class="btn minus number1">−</button>
                            <input type="text" class="number2 p-1 text-center" placeholder="0">
                            <button class="btn plus number1">+</button>
                        </div>
                    </div>
                </div> `
    })
}
getAllFood();
// style
// classList

const listItem = document.querySelectorAll(".items"); // trả mảng 

const button = document.querySelector(".narrow"); // trả về 1 

const nav = document.querySelector(".navbar-nav");

button.addEventListener("click", () => {
    listItem.forEach(e => e.classList.toggle("d-none"));
    nav.classList.toggle("navbar-nav");
})

const reservation = document.querySelectorAll(".reservation");

const button1 = document.querySelector(".a1")

button1.addEventListener("click", () => {
    reservation.forEach(e => e.classList.toggle("d-none"));
});

const orderfood = document.querySelectorAll(".orderfood");

const button2 = document.querySelector(".a2")

button2.addEventListener("click", () => {
    orderfood.forEach(e => e.classList.toggle("d-none"));
    reservation.forEach(e => e.classList.add("d-none"));
});

const paybill = document.querySelectorAll(".paybill");

const button3 = document.querySelector(".a3")

button3.addEventListener("click", () => {
    paybill.forEach(e => e.classList.toggle("d-none"));
    reservation.forEach(e => e.classList.add("d-none"));
    orderfood.forEach(e => e.classList.add("d-none"));
    information.forEach(e => e.classList.add("d-none"));
});

const information = document.querySelectorAll(".information");

const button4 = document.querySelector(".a4")

button4.addEventListener("click", () => {
    information.forEach(e => e.classList.toggle("d-none"));
    reservation.forEach(e => e.classList.add("d-none"));
    orderfood.forEach(e => e.classList.add("d-none"));
    paybill.forEach(e => e.classList.add("d-none"));
});