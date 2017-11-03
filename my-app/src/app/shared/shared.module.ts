import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent
  ],
  exports: [
    MenuComponent,
    StateDirective,
    FormComponent
  ]
})
export class SharedModule { }
