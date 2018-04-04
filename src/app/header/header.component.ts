import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {NavigationEnd} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  redBar = null;

  navigation = {
    login: [
      {
        uri: 'https://flatlandchurch.infellowship.com/UserLogin',
        label: 'Sign In'
      }
    ],
    navItems: [
      {
        uri: '/watch',
        label: 'Messages',
      },
      {
        uri: '/visit',
        label: 'Visit',
      },
      {
        uri: '/enjoy',
        label: 'Events',
      },
      {
        uri: '/give',
        label: 'Give',
      }
    ],
    menuItems: [
      {
        name: 'About',
        items: [
          {
            uri: '/visit/values',
            label: 'Values'
          },
          {
            uri: '/visit/beliefs',
            label: 'Beliefs'
          },
          {
            uri: '/visit/leadership',
            label: 'Leadership'
          },
          {
            uri: '/visit',
            label: 'Location'
          }
        ]
      },
      {
        name: 'Connect',
        items: [
          {
            uri: '/visit/kids',
            label: 'FlatKids'
          },
          {
            uri: '/move/groups',
            label: 'Life Groups'
          },
          {
            uri: '/move/classes',
            label: 'Core Classes'
          },
          {
            uri: '/enjoy',
            label: 'Events'
          }
        ]
      },
      {
        name: 'Resources',
        items: [
          {
            uri: '/watch',
            label: 'Messages'
          },
          {
            uri: '/blog',
            label: 'Blog'
          },
          {
            uri: '/move',
            label: 'Life Coaching'
          },
          {
            uri: '/radio',
            label: 'Move to the Center Podcast'
          }
        ]
      }
    ]
  };

  menuOpen = false;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.changeMenuState('close');
    });
    this.http.request('https://api.flatlandchurch.com/v2/redBar?key=pk_e6afff4e5ad186e9ce389cc21c225')
      .subscribe(res => {
        const bar = res.json();
        if (bar.expires >= new Date().getTime()) {
          this.redBar = bar;
        }
      });
  }

  changeMenuState(event) {
    this.menuOpen = event === 'open';
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

}
