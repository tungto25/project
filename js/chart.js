

async function billOrder() {
    const dataOrder = await getAll(URL_ORDER);
    const dataFood = await getAll(URL_FOOD);
    const dataTable = await getAll(URL_TABLE);
    const order = dataTable.map((e, index) => {
        const checkBill = dataOrder.find(f => f.id == e.id); // trả 1 duy nhất đối tượng đủ yêu cầu
        let total = 0;
        let totalFood = 0;
        if (checkBill) {
            checkBill.bill.forEach(e => {
                const food = dataFood.find(f => f.id == e.idFood);
                total += food.price * e.quantity;
                totalFood += e.quantity;
            })
        }
        return { id: e.id, total, quantity: parseInt(e.quantity), totalFood }
    });

    const ctx = document.createElement("canvas");
    document.querySelector(".bar-chart").appendChild(ctx);

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: order.map(e => `Table ${e.id}`),
            datasets: [
                {
                    label: "REVENUE TOTAL ($)",
                    data: order.map(e => e.total),
                    backgroundColor: "#c5487a",
                    borderColor: "#c5487a",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    const piece = document.createElement("canvas");
    document.querySelector(".pie-chart").appendChild(piece);

    new Chart(piece, {
        type: "pie", // Use 'pie' for creating a pie chart
        data: {
            labels: order.map(e => `Table ${e.id}`),
            datasets: [
                {
                    label: "QUANTITY CUSTOMER",
                    data: order.map(e => e.quantity),
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)",
                        "rgba(255, 0, 0, 0.6)",
                        "rgba(0, 255, 0, 0.6)",
                        "rgba(0, 0, 255, 0.6)",
                        "rgba(128, 0, 128, 0.6)",
                        "rgba(0, 128, 128, 0.6)",
                        "rgba(128, 128, 0, 0.6)",
                        "rgba(255, 165, 0, 0.6)",
                        "rgba(0, 255, 255, 0.6)",
                        "rgba(255, 0, 255, 0.6)",
                        "rgba(128, 0, 0, 0.6)",
                        "rgba(0, 128, 0, 0.6)",
                        "rgba(0, 0, 128, 0.6)",
                        // You can add more colors here if needed
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 0, 0, 0.6)',
                        'rgba(0, 255, 0, 0.6)',
                        'rgba(0, 0, 255, 0.6)',
                        'rgba(128, 0, 128, 0.6)',
                        'rgba(0, 128, 128, 0.6)',
                        'rgba(128, 128, 0, 0.6)',
                        'rgba(255, 165, 0, 0.6)',
                        'rgba(0, 255, 255, 0.6)',
                        'rgba(255, 0, 255, 0.6)',
                        'rgba(128, 0, 0, 0.6)',
                        'rgba(0, 128, 0, 0.6)',
                        'rgba(0, 0, 128, 0.6)',
                        // You can add more colors here if needed
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
    const line = document.createElement("canvas");
    document.querySelector(".line-chart").appendChild(line);

    new Chart(line, {
        type: "line",
        data: {
            labels: order.map(e => `Table ${e.id}`),
            datasets: [{
                label: 'QUANTITY FOOD',
                data: order.map(e => e.totalFood),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });

    const radar = document.createElement("canvas");
    document.querySelector(".radar-chart").appendChild(radar);
    new Chart(radar, {
        type: "radar",
        data: {
            labels: order.map(e => `Table ${e.id}`),
            datasets: [{
                label: 'REVENUE TOTAL',
                data: order.map(e => e.total),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'QUANTITY CUSTOMER',
                data: order.map(e => e.quantity * 100),
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
            {
                label: 'QUANTITY FOOD',
                data: order.map(e => e.totalFood * 100),
                fill: true,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',           // tím nhạt
                borderColor: 'rgb(153, 102, 255)',                     // tím đậm
                pointBackgroundColor: 'rgb(153, 102, 255)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(153, 102, 255)'
            }

            ]
        }
    });
}

billOrder();
