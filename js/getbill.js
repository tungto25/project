let dataOrder; // toàn cục
const orderTable = document.getElementById("ordertable");

async function getAllOrders() {
    const data = await getAll(URL_ORDER);
    dataOrder = data;
}

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


