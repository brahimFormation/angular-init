import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { State } from '../../../items/enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input('appState') appState: State;

  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}

  ngOnChanges() {
    const cssClass = `state-${this.appState}`;
    let text: string;
    const state = State;
    const elementNode = this._ElementRef.nativeElement;

    switch (this.appState) {
      case state.ALIVRER:
        text = 'A Livrer';
        break;

      case state.ENCOURS:
        text = 'En cours de livraison';
        break;

      case state.LIVREE:
        text = 'Commande livrée';
        break;

        default:
        console.log(this.appState);
        break;
    }

    this._Renderer2.addClass(elementNode, cssClass);
    elementNode.innerHTML = text;

  }

}
