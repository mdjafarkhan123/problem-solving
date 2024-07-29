function getTotalPrice(arr) {
    let result = arr.reduce((total, item) => {
        total += item.price * item.quantity;
        return total;
    }, 0);

    console.log(Number.parseFloat(result.toFixed(2)));
}

getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]); //➞ 1.5

getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
]); //➞ 4


getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]); //➞ 4.5


getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
]); //➞ 10.4


getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
]); //➞ 0.3
