class Item {

  #discount = 0.1;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }


  get finalPrice() {
   
    return this.price * (1 - this.#discount);
  }
}


const laptop = new Item("Laptop", 1000);

console.log(`Product: ${laptop.name}`);
console.log(`Original Price: ${laptop.price}`);
console.log(`Final Price (after 10% discount): ${laptop.finalPrice}`);

