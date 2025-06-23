var card = [
    {
        number: "1",
        food: "Hamberger",
        src: "/NewStore/img/c4400f1f2c8441cb7c6eea6844a79135.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$39",
        button1: "-",
        button2: "+"
    },
    {
        number: "2",
        food: "BeefSteak",
        src: "/NewStore/img/beefsteak-barbecue-sauce-jd-com-png-favpng-ELkEJ6B1yehhnz72vDD2Q2hxQ.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$129",
        button1: "-",
        button2: "+"
    },
    {
        number: "3",
        food: "Dimsum",
        src: "/NewStore/img/siomay-with-ai-generated-free-png (2).png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$79",
        button1: "-",
        button2: "+"
    },
    {
        number: "4",
        food: "Fried Chicken",
        src: "/NewStore/img/360_F_1436321969_58Kc8DW9mxqVgY2Nq94ZSu77lL7Nl7Ai.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$119",
        button1: "-",
        button2: "+"
    },
    {
        number: "5",
        food: "Pizza",
        src: "/NewStore/img/26c64bef44546cdc05bc2233168f32ac-Photoroom-1.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$79",
        button1: "-",
        button2: "+"
    },
    {
        number: "6",
        food: "Sallad",
        src: "/NewStore/img/931014d8e72841cf1cef6b2942e68322.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$49",
        button1: "-",
        button2: "+"
    },
    {
        number: "7",
        food: "Spaghetti",
        src: "/NewStore/img/fried-spaghetti-grilled-shrimps-tomatoes-260nw-2538299003 (1).png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$129",
        button1: "-",
        button2: "+"
    },
    {
        number: "8",
        food: "Seafood Noodles",
        src: "/NewStore/img/34f50e91abfd495fb2d1d1d94a7628fc.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$179",
        button1: "-",
        button2: "+"
    },
    {
        number: "9",
        food: "Mixed Rice",
        src: "/NewStore/img/bibimap-1024x683-1.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$99",
        button1: "-",
        button2: "+"
    },
    {
        number: "10",
        food: "Fried Noodles",
        src: "/NewStore/img/griled-meat-plate-with-mint-white-background_1224371-1709.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$119",
        button1: "-",
        button2: "+"
    },
        {
        number: "11",
        food: "Veg Rice",
        src: "/NewStore/img/bowl-ricew-with-avocado-eggs-cheese-and-tomatoes-isolated-on-a-transparent-background-png (2).png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$99",
        button1: "-",
        button2: "+"
    },
        {
        number: "12",
        food: "Pad Thai",
        src: "/NewStore/img/360_F_128123703_JHNf15Yx7nmqFs1996yD5Sketa5Uf5Bp.png",
        icon: `<i class="fa-solid fa-pen-to-square fs-3"></i>`,
        price: "$79",
        button1: "-",
        button2: "+"
    },

]

const a = document.querySelector(".aaa")

card.forEach(e => {
    a.innerHTML +=
        ` <div class="col">
                    <div class="order-card bg-white rounded-2 p-3 ">
                        <div class="top d-flex justify-content-between align-items-center">
                            <div class="number">${e.number}</div>
                            <h3><strong>${e.food}</strong></h3>
                            ${e.icon}
                        </div>
                        <div class="box-img">
                             <img src="${e.src}" alt="" class="mt-2">
                        </div>
                        <h3 class="currency text-center">${e.price}</h3>
                        <div class="d-flex justify-content-center align-items-center mt-1 gap-2">
                            <button class="btn minus number">${e.button1}</button>
                            <input type="text" class="number2 p-1 text-center" placeholder="0">
                            <button class="btn plus number ">${e.button2}</button>
                        </div>
                    </div>
                </div>`
})
