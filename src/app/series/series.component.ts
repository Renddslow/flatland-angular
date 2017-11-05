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

  constructor(private http: Http, private route: ActivatedRoute) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.permalink = params['permalink'];
			this.http.request(`https://api.flatlandchurch.com/v2/series/${params['permalink']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
				.subscribe((res: Response) => {
					this.series = res.json();
				});
		});
  }

	toMarkdown(content) {
		return markdown.toHTML(content);
	}

}
