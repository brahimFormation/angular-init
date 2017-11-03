import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddComponent } from './containers/add/add.component';


const itemsRoutes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'add',  component: AddComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      itemsRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
