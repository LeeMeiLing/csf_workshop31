import { Component } from '@angular/core';
import { INVENTORY, Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart: Item[] = []

  constructor(){
    for(let i of INVENTORY){
      this.cart.push(i)
    }
  }

  addToCart(item:Item){
    let itemFound = this.cart.find( i => i.description == item.description)
    itemFound!.quantity += 1
  }

  removeFromCart(item:Item){
    let itemFound = this.cart.find( i => i.description == item.description)
    itemFound!.quantity = 0
  }
}
