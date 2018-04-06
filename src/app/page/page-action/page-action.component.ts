import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.css']
})
export class PageActionComponent {
  @Input() action;
}
