import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './compenents/item/item.component';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ItemComponent,
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ]
})
export class ItemsModule { }
