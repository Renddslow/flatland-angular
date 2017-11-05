import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { markdown } from 'markdown';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

	series = {};
	sub: any;
	permalink: string;

  constructor(private http: Http, private route: ActivatedRoute, private title: Title, private meta: Meta) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.permalink = params['permalink'];
			this.http.request(`https://api.flatlandchurch.com/v2/series/${params['permalink']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
				.subscribe((res: Response) => {
					this.series = res.json();
					this.title.setTitle(this.series['title'] + ' | Flatland Church');
					this.meta.addTags([
						{ name: 'description', content: this.series['description'] },
						{ property: 'og:url', content: `https://flatlandchurch.com/series/${this.series['permalink']}` },
						{ property: 'og:image', content: this.series['image'] },
						{ name: 'twitter:title', content: this.series['title'] },
						{ name: 'twitter:description', content: this.series['description'] },
						{ name: 'twitter:image', content: this.series['image'] },
						{ property: 'og:title', content: this.series['title'] },
						{ property: 'place:location:latitude', content: '41.3039152' },
						{ property: 'place:location:longitude', content: '-96.1377482' }
					]);
				});
		});
  }

	toMarkdown(content) {
		return markdown.toHTML(content);
	}

}
