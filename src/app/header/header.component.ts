import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

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
				uri: "https://flatlandchurch.infellowship.com/UserLogin",
				label: "Sign In"
			}
		],
		navItems: [
			{
				uri: "/watch",
				mainLabel: "Watch",
				subLabel: "Sermons | Videos"
			},
			{
				uri: "/visit",
				mainLabel: "Visit",
				subLabel: "Times | Info"
			},
			{
				uri: "/move",
				mainLabel: "Move",
				subLabel: "Classes | Groups"
			},
			{
				uri: "/enjoy",
				mainLabel: "Enjoy",
				subLabel: "Retreats | Events"
			},
			{
				uri: "/give",
				mainLabel: "Give",
				subLabel: "Serve | Donate"
			}
		]
	};

  constructor(private http: Http) { }

  ngOnInit() {
		this.http.request('https://api.flatlandchurch.com/v2/redBar?key=pk_e6afff4e5ad186e9ce389cc21c225')
			.subscribe(res => {
				const bar = res.json();
				if (bar.expires >= new Date().getTime()) {
					this.redBar = bar;
				}
			});
  }

}
