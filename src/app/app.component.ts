import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayCommFab = false;
  displayCommModal = false;
  displayCommForm = false;
  commFormType = null;
  searchOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if (event.url === '/') {
          this.displayCommFab = false;
        } else {
          this.displayCommFab = true;
        }
      }
    });
  }

  openCommModal() {
    this.displayCommModal = true;
    this.displayCommFab = false;
  }

  closeCommModal() {
    this.displayCommModal = false;
    this.displayCommFab = true;
  }

  presentForm(type) {
    this.displayCommForm = true;
    this.commFormType = type;
  }

  hideForm() {
    this.displayCommForm = false;
    this.commFormType = null;
  }

  openSearch() {
    this.searchOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeSearch() {
    this.searchOpen = false;
    document.body.style.overflow = 'unset';
  }
}
