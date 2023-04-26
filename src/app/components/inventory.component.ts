import { Component, Output } from '@angular/core';
import { INVENTORY, Item } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  inventoryList:Item[] = []

  @Output()
  onAddItem = new Subject<Item>

  constructor(){
    for(let i of INVENTORY){
      this.inventoryList.push(i)
    }
  }

  addItem(item:Item){
    console.info("Added one item: ", item)
    this.onAddItem.next(item)
  }

}
