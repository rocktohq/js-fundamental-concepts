// ProductList: Name, Price and Quantity
const shoppingCart = [
    { productName: "shirt", price: 1200, quantity: 5 },
    { productName: "pant", price: 1500, quantity: 3 },
    { productName: "t-shirt", price: 500, quantity: 4 },
    { productName: "shoe", price: 2000, quantity: 2 },
    { productName: "sunglass", price: 1000, quantity: 2 },
    { productName: "watch", price: 1700, quantity: 1 }
];

// Function to calculate total expenses
function shoppingExpenses(shoppingCart) {
    let totalExpense = 0;
    for(let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];
        totalExpense += product.price * product.quantity;
    }
    return totalExpense;
}

// Call the function and Print the ammount
const expense = shoppingExpenses(shoppingCart);
console.log("Total expense:", expense);