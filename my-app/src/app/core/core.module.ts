import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [HomeComponent, PageNotFoundComponent]
})
export class CoreModule { }
