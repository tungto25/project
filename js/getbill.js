let dataOrder; // toàn cục
const orderTable = document.getElementById("ordertable");
async function getAllOrders() {
    const data = await getAll(URL_ORDER);
    dataOrder = data;
}
getAllOrders();
orderTable.addEventListener("click", () => {
    // day la id ban order
    let idTable = document.querySelector(".select-order").value;
    const selectOrder = dataOrder.find(e => e.id == idTable);
    let bill = selectOrder ? selectOrder.bill : [];

    let allFood = document.querySelectorAll(".food .col");

    allFood.forEach(e => {
        const quantity = parseInt(e.querySelector(".number2").value);
        if (quantity > 0) {
            const idFood = e.querySelector(".number1").innerText;
            const indexFood = bill.findIndex(e => e.idFood == idFood);
            if (indexFood > -1) {
                bill[indexFood].quantity += quantity;
            } else {
                bill.push({ idFood, quantity })
            }
        }
    })

    const order = {
        id: idTable,
        bill: bill
    }

    if (selectOrder) {
        edit(URL_ORDER, order);
    } else {
        add(URL_ORDER, order);
    }

})

getAllOrders();

const billSelect = document.querySelector(".bill");

billSelect.addEventListener("change", () => {
    const bill = billSelect.value;
    const cardFood = document.querySelector(".card-bill tbody");
    const total = document.getElementById("totalBill");
    const selectOrder = dataOrder.find(e => e.id == bill);
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
})


const payBill = document.getElementById("paybill");
payBill.addEventListener("click", () => {
    const bill = document.querySelector(".bill");
    const a = {
        id: bill.value,
        quantity: "",
        nameCustomer: "",
        status: false
    }
    edit(URL_TABLE, a);
    deleted(URL_ORDER, bill.value);
})