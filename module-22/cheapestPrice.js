const phones = [
    { name: "samsung", camera: 70, storage: 128, price: 65000 },
    { name: "htc", camera: 28, storage: 128, price: 45000 },
    { name: "oneplus", camera: 50, storage: 128, price: 55000 },
    { name: "xiaomi", camera: 40, storage: 128, price: 35000 },
    { name: "oppo", camera: 60, storage: 128, price: 30000 },
    { name: "iphone", camera: 12, storage: 128, price: 90000 },
    { name: "walton", camera: 20, storage: 32, price: 15000 },
    { name: "samphony", camera: 16, storage: 32, price: 12000 },
    { name: "lg", camera: 35, storage: 128, price: 40000 }
];

function cheapestPrice(phones) {
    let cheapestPhone = phones[0];
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapestPhone.price) {
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
}

const myChoice = cheapestPrice(phones);
console.log(myChoice);