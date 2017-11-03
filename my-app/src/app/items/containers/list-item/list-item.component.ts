import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { COLLECTION } from '../../collection';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  collection: Item[];

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

}
