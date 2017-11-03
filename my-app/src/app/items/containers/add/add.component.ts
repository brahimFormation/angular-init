import { Component, /*OnInit*/ } from '@angular/core';
import { Item } from '../../interfaces/item.model';
// import { COLLECTION } from '../../../items/collection';
import { Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent /*implements OnInit*/ {
  // collection: Item[];

  constructor(private _Router: Router, private _CollectionService: CollectionService) {

  }

  /*
  ngOnInit() {
    // this.collection = this._CollectionService.collection;
  }
  */

  addItem(item: Item) {
    // this.collection.push(item);
    this._CollectionService.addItem(item);
    this._Router.navigate(['/list']);
  }

}
