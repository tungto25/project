async function getAllBill() {
    const paybill = document.querySelector(".paybill");
    console.log(paybill);
    
    const orderbill = document.querySelector(".bill");
    const data = await getAll(URL_BILL);
    data.forEach(e => {
        if (e.status) {
            orderbill.innerHTML += `<option selected disabled>${e.id}</option>`;
        }
    });
}