import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { COLLECTION } from '../../collection';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  // collection: Item[];
  collection: Observable<Item[]>;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
    // subscible(data => )
  }

}
