import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
	sub: any;
	permalink: string;
	page: {};
	timeChange: string = null;
	topic: string;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private meta: Meta, private title: Title) {
		this.page = {}
	}

  ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		let pageURI = "https://api.flatlandchurch.com/v2/pages/";
		let timeURI = "https://api.flatlandchurch.com/v1/times/changes";
		this.sub = this.route.params.subscribe(params => {
			if (params['parent']) {
				this.permalink = `${params['parent']}/${params['permalink']}`
			} else {
				if (params['topic']) {
					this.topic = params['topic'];
				}
				this.permalink = params['permalink'];
			}
			this.http.request(`${timeURI}`)
				.subscribe((res: Response) => {
					this.timeChange = res.json().message;
				});
			let queryParams = {
				key: 'pk_e6afff4e5ad186e9ce389cc21c225'
			};
			this.http.request(`${pageURI}${this.permalink}`, { params: queryParams })
				.subscribe((res: Response) => {
					this.page = res.json();
					if (this.page['message'] && this.page['message'] === 'Page does not exist') {
						this.router.navigate(['/404']);
					}
					this.title.setTitle(this.page['meta']['title'] + ' | Flatland Church');
					this.meta.addTags([
						{ name: 'description', content: this.page['meta']['description'] },
						{ property: 'og:url', content: this.page['meta']['canonical'] },
						{ property: 'og:image', content: this.page['meta']['image'] },
						{ name: 'twitter:title', content: this.page['meta']['title'] },
						{ name: 'twitter:description', content: this.page['meta']['description'] },
						{ name: 'twitter:image', content: this.page['meta']['image'] },
						{ property: 'og:title', content: this.page['meta']['title'] },
						{ property: 'place:location:latitude', content: '41.3039152' },
						{ property: 'place:location:longitude', content: '-96.1377482' }
					]);
				});
		});
  }

}
