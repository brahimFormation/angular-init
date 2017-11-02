import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { COLLECTION } from '../../collection';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  collection: Item[];
  state =  State;

  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

  changeState(item: Item, newState: State) {
    item.state = newState;
  }

}
