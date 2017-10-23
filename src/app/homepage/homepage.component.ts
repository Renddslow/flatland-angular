import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';
import { markdown } from 'markdown';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	stuff = "header-nav";
	permalink: string;
	sub: any;
	page: {};
	homeCards = [];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private meta: Meta, private title: Title) {
		title.setTitle('Welcome to Flatland Church');
		meta.addTags([
			{ name: 'description', content: 'Located on 144th between Maple and Fort, Flatland Church is all about moving people closer to the center of God\'s kingdom' },
			{ property: 'og:url', content: 'https://flatlandchurch.com/' },
			{ name: 'twitter:title', content: 'Welcome to Flatland Church' },
			{ name: 'twitter:description', content: 'Located on 144th between Maple and Fort, Flatland Church is all about moving people closer to the center of God\'s kingdom' },
			{ property: 'og:title', content: 'Welcome to Flatland Church' },
			{ property: 'place:location:latitude', content: '41.3039152' },
			{ property: 'place:location:longitude', content: '-96.1377482' }
		]);
	}

	ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		let pageURI = "https://api.flatlandchurch.com/v2/pages";
		let params = {
			key: 'pk_e6afff4e5ad186e9ce389cc21c225'
		};
		this.http.request(`${pageURI}/home`, {params})
			.subscribe((res: Response) => {
				this.page = res.json();
				this.homeCards = this.page['homeCards'];
			});
  }

	toMarkdown(content) {
		return markdown.toHTML(content);
	}

}
