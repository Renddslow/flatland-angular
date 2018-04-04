import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {NavigationEnd} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Input() navigation: [object];
  @Output() menuStateChanged = new EventEmitter<string>();

  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.setMenuState('closed');
    });
  }

  setMenuState(override: string = '') {
    if (override) {
      this.menuOpen = override === 'open';
    } else {
      this.menuOpen = !this.menuOpen;
    }
    this.menuStateChanged.emit(this.menuOpen ? 'open' : 'closed');
  }
}
