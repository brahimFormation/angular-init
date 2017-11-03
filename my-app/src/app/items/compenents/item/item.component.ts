import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('item') item: Item;
  state =  State;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  changeState(item: Item, newState: State) {
    // item.state = newState;
    this._CollectionService.updateItem(item, newState);
  }

}
