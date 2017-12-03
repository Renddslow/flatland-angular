import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-action-component',
  templateUrl: './post-action-component.component.html',
  styleUrls: ['./post-action-component.component.css']
})
export class PostActionComponentComponent { @Input() ad; }
