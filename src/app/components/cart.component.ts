import { Component, Input, Output } from '@angular/core';
import { Item } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cartList: Item[] = []

  @Output()
  onRemoveItem = new Subject <Item>

  removeItem(item:Item){
    this.onRemoveItem.next(item)
  }

}
