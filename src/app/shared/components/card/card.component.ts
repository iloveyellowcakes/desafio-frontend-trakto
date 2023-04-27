import { Component, Input } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  @Input() products!: any;

}
