import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ItemsModule } from './items/items.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ItemsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
