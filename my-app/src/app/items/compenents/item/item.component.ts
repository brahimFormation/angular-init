import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  // @Input('item') item: Item;
  @Input('item') item: ItemId;
  state =  State;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  // changeState(item: Item, newState: State) {
  changeState(item: ItemId, newState: State) {
    // item.state = newState;
    this._CollectionService.updateItem(item, newState);
  }

  deleteItem(item: ItemId) {
    this._CollectionService.delete(item);
  }

}
