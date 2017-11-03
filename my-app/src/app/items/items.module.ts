import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemComponent } from './compenents/item/item.component';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddComponent } from './containers/add/add.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemComponent,
    ListItemComponent,
    AddComponent
  ],
  exports: [
    ListItemComponent,
    AddComponent
  ]
})
export class ItemsModule { }
