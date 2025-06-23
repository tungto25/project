async function getAllTable() {
    const a = document.querySelector(".aaa");
    const order = document.querySelector(".select-order");
    const data = await getAll(URL_TABLE);

    data.forEach(e => {
        if(e.status){
          order.innerHTML +=  `<option selected>Table ${e.id}</option>`;
        }
        const img = e.status ? "../img/table.png" : "../img/table1.png";
        const icon = e.status ? `<div class="d-flex justify-content-evenly align-items-center mt-2">
                            <button type="button" class="btn btn-success d-flex align-items-center gap-2"><i class="fa-solid fa-circle-plus"></i>ADD</button>
                            <button type="button" class="btn btn-danger d-flex align-items-center gap-2"><i class="fa-solid fa-cart-plus"></i>CART</button>
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
let idBooking ;
function showTable(id) {
    idBooking = id ;
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
    
    edit(URL_TABLE,item);
})











