import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../../../items/enums/state.enum';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../../items/interfaces/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  state = State;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;
  constructor(private fb: FormBuilder) {
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(this.state.ALIVRER);

    this.form = fb.group({
      name: this.nameCtrl, // binder le champs
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }


  ngOnInit() {
  }

  isError(champ: string) {
    return this.form.get(champ).dirty && this.form.get(champ).hasError('minlength');
  }

  treatmentItem() {
    // this.collection.push(this.form.value);
    /*
    this.collection.push({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });
    */
   // console.log(this.form.value);
   // this.reset();

    this.newItem.emit({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });

    this.reset();
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(this.state.ALIVRER);
  }

}
