import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-dates',
  templateUrl: './post-dates.component.html',
  styleUrls: ['./post-dates.component.css']
})
export class PostDatesComponent { @Input() dates: any; }
