const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ]; 

console.log(products);
const claculerTTc = products.map(v => v.price*1.25).reduce((p,n)=>p+n);
console.log("Le prix total est :" , claculerTTc);
