import { Injectable } from '@angular/core';
import { Item } from '../../../items/interfaces/item.model';
import { COLLECTION } from '../../../items/collection';
import { State } from '../../../items/enums/state.enum';

@Injectable()
export class CollectionService {
  collection: Item[] = COLLECTION;

  constructor() { }

  // recupere la collection

  // add items in collection
  addItem(item: Item) {
    this.collection.push(item);
  }

  // change state in collection
  updateItem(item: Item, newState: State) {
    item.state = newState;
  }

  // delete item in collection

}
