async function  getAllTable() {
    const a = document.querySelector(".aaa");
    const data = await getAll(URL_TABLE);
    console.log(data);
    
   data.forEach(e => {
     a.innerHTML +=
        `<div class="col">
                    <div class="order-card bg-white rounded-2 p-3">
                        <div class="number">${e.id}</div>
                        <img src="../img/table.png" alt="" class="m-auto w-50">
                        <div class="d-flex justify-content-evenly align-items-center mt-2">
                            <button type="button" class="btn btn-success d-flex align-items-center gap-2"></button>
                            <button type="button" class="btn btn-danger d-flex align-items-center gap-2"></button>
                        </div>
                    </div>
                </div>`
})
}

getAllTable();