import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-redbar',
  templateUrl: './header-redbar.component.html',
  styleUrls: ['./header-redbar.component.css']
})
export class HeaderRedbarComponent { @Input() bar; }
