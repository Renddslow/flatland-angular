import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  @Input() navigation;
  @Input() mobileNav;
  @Output() openSearch = new EventEmitter<boolean>();

  openSearchMenu() {
    this.openSearch.emit(true);
  }
}
