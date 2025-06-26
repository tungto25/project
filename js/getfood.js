const b = document.querySelector(".food");
let dataFood; // toàn cục
async function getAllFood() {
    const data = await getAll(URL_FOOD);
    dataFood = data;
    data.forEach(e => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML =
            `<div class="order-card1 bg-white rounded-2 p-3">
                        <div class="top d-flex justify-content-between align-items-center">
                            <div class="number1">${e.id}</div>
                            <h3><strong>${e.food}</strong></h3>
                            <div class="d-flex gap-2 align-items-center">
                                <i onClick="showFood(${e.id})" class="fa-solid fa-trash text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                                <i onClick="showEdit(${e.id})" class="fa-solid fa-pen-to-square fs-5 text-success "  data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
                            </div>
                        </div>
                        <div class="box-img">
                             <img src="${e.image}" alt="" class="mt-2">
                        </div>
                        <h3 class="currency text-center">$${e.price}</h3>
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

let file_food;
const fileFood = document.getElementById("fileFood");
fileFood.addEventListener("change", fileBook);
function fileBook(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
        document.getElementById("img_food").src = e.target.result;
    };
    file_food = file;
}
let idEdit;
const addfood = document.getElementById("addFood");

addfood.addEventListener("click", async () => {
    let name = document.getElementById("nameFood");
    let price = document.getElementById("priceFood");
    const img = await uploadImageToCloudinary(file_food);
    let idFood = idEdit ? idEdit : 1;
    if (!idEdit) {
        dataFood.sort((a, b) => a.id - b.id).forEach(e => {
            if (idFood == e.id) {
                idFood++;
            } else {
                return;
            }
        })
    }

    let addNew = {
        id: JSON.stringify(idFood),
        food: name.value,
        price: price.value,
        image: img
    }
    if (idEdit) {
        edit(URL_FOOD, addNew);
    } else {
        add(URL_FOOD, addNew);

    }

})


let idFood;
function showFood(id) {
    idFood = id;
}

const deletebtn = document.getElementById("deletebutton");
deletebtn.addEventListener('click', () => {
    deleted(URL_FOOD, idFood);
});

function showEdit(id) {
    idEdit = id;
    const food = dataFood.find(e => e.id == id);
    let name = document.getElementById("nameFood");
    name.value = food.food;
    let price = document.getElementById("priceFood");
    price.value = food.price;
    let img = document.getElementById("img_food");
    img.src = food.image;
    let titleFood = document.getElementById("Addfoodtitle");
    let addfood = document.getElementById("addFood");
    titleFood.innerText = "Edit Food";
    addfood.innerText = "Update Food";
}

function reset() {
    idEdit = null;
    let name = document.getElementById("nameFood");
    name.value = "";
    let price = document.getElementById("priceFood");
    price.value = "";
    let img = document.getElementById("img_food");
    img.src = "../img/Restaurant-Logo-Design-2-1180x664.jpg";
    let titleFood = document.getElementById("Addfoodtitle");
    let addfood = document.getElementById("addFood");
    titleFood.innerText = "Add Food";
    addfood.innerText = "Add Food";

}
document.getElementById("closeX").addEventListener("click", () => { reset() });


