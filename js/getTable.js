async function getAllTable() {
    const a = document.querySelector(".aaa");
    const order = document.querySelector(".select-order");
    const data = await getAll(URL_TABLE);

    data.forEach(e => {
        if (e.status) {
            order.innerHTML += `<option value="${e.id}">Table ${e.id}</option>`;

        }
        const img = e.status ? "../img/table.png" : "../img/table1.png";
        const icon = e.status ? `<div class="d-flex justify-content-evenly align-items-center mt-2">
                            <button  onClick="showAdd(${e.id})" type="button" class="btn btn-success d-flex align-items-center gap-2" ><i class="fa-solid fa-circle-plus"></i>ADD</button>
                            <button onClick="showCart(${e.id})" type="button" class="btn btn-danger d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#billorder"><i class="fa-solid fa-cart-plus" ></i>CART</button>
                        </div>` : ` <div class="d-flex justify-content-center align-items-center mt-2 booking">
                            <button data-bs-toggle="modal" onClick="showTable(${e.id})"
                            data-bs-target="#bookingModal" type="button" class="btn btn-warning d-flex align-items-center gap-2"><i class="fa-regular fa-calendar-plus"></i>BOOKING</button>
                        </div>`
        a.innerHTML +=
            `<div class="col">
                    <div class="order-card bg-white rounded-2 p-3">
                        <div class="number">${e.id}</div>
                        <img src="${img}" alt="" class="m-auto w-50 d-block">
                        ${icon}
                    </div>
                </div>`
    })
}
getAllTable();
let idBooking;
function showTable(id) {
    idBooking = id;
}

const booking = document.getElementById("booking");

booking.addEventListener("click", () => {
    const name = document.getElementById("name");
    const quantity = document.getElementById("quantity");

    const item = {
        id: idBooking,
        quantity: quantity.value,
        nameCustomer: name.value,
        status: true
    }
    console.log(item);

    edit(URL_TABLE, item);
})


function showCart(id) {
    const cardFood = document.querySelector(".card-food tbody");
    const total = document.getElementById("totalFood");
    const selectOrder = dataOrder.find(e => e.id == id);
    cardFood.innerHTML = "";
    let totalPrice = 0;
    selectOrder.bill.forEach((e, index) => {
        const food = dataFood.find(f => f.id == e.idFood);
        const totalFood = food.price * e.quantity;
        totalPrice += totalFood;
        cardFood.innerHTML += ` <tr>
                                    <th scope="row">${index + 1}</th>
                                    <td><img src="${food.image}"
                                            alt=""></td>
                                    <td>${food.food}</td>
                                    <td>${e.quantity}</td>
                                    <td>$${totalFood}</td>
                                </tr>`
    })
    total.innerText = totalPrice;
}
function showAdd(id) {
    const select = document.querySelector(".select-order");
    select.value = id;

    const content = document.querySelectorAll("section");
    content.forEach(e => e.style.display = "none");
    const orderSection = document.querySelector(".orderfood");
    orderSection.style.display = "block";
}
