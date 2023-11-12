import { CartItem } from "./CartItem";

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
  
  // Add the totalPrice property to the class
  set totalPrice(value: number) {
    // You can implement logic to set the total price if needed
    // For example, you might want to throw an error or handle it differently
    // based on your application's requirements.
    console.log("Setting total price is not allowed directly.");
  }
}