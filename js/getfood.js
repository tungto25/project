const b = document.querySelector(".food");
async function getAllFood() {
    const data = await getAll(URL_FOOD);

    data.forEach(e => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML =
            `<div class="order-card1 bg-white rounded-2 p-3">
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
                            <input type="text" value="0" class="number2 p-1 text-center">
                            <button class="btn plus number1">+</button>
                        </div>
                    </div>`;
        b.appendChild(item);
        let minus = item.querySelector(".minus");
        let plus = item.querySelector(".plus");
        let input = item.querySelector(".number2");

        plus.addEventListener("click", () => {
            input.value = parseInt(input.value) + 1;
        });

        minus.addEventListener("click", () => {
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;
            }
        })
    });



}
getAllFood();

