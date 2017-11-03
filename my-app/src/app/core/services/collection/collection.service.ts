import { Injectable } from '@angular/core';
import { Item } from '../../../items/interfaces/item.model';
// import { COLLECTION } from '../../../items/collection';
import { State } from '../../../items/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../../items/interfaces/item-id.model';

@Injectable()
export class CollectionService {
  // collection: Observable<Item[]>;
  collection: Observable<any>;
  itemsCollection: AngularFirestoreCollection<Item>;
  // collection: Item[] = COLLECTION;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    // this.collection = this.itemsCollection.valueChanges();
    // this.collection = this.itemsCollection.snapshotChanges();
    this.collection = this.itemsCollection.snapshotChanges().map(res => {
      return res.map(snap => {
        return {
          id: snap.payload.doc.id,
          name: snap.payload.doc.data().name,
          reference: snap.payload.doc.data().reference,
          state: snap.payload.doc.data().state
        };
      });
    });
    // this.itemsCollection.valueChanges().subscribe(data => console.log(data));
    // this.itemsCollection.snapshotChanges().subscribe(data => console.log(data));
  }

  // recupere la collection

  // add items in collection
  addItem(item: Item) {
    // this.collection.push(item);
    this.itemsCollection.add(item);
  }

  // change state in collection
  updateItem(item: ItemId, newState: State) {
    item.state = newState;
    this.afs.doc<Item>('collection/' + item.id).update(item);
  }

  // delete item in collection
  delete(item: ItemId) {
    this.afs.doc<Item>('collection/' + item.id).delete();
  }

}
