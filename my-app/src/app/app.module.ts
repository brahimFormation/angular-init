import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { CollectionService } from './core/services/collection/collection.service';



@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ItemsModule,
    AppRoutingModule,
    CoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
 }
