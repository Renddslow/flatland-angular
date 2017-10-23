import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

	page = 0;

	latestSermon: object = {};
	navigation = [
		{
			label: 'Sermons',
			uri: ['/watch']
		}
	];

  constructor(private http: Http, private meta: Meta, private title: Title) {
		title.setTitle('Browse weekly sermons from Flatland Church');
		meta.addTags([
			{ name: 'description', content: 'Every week at Flatland Church we teach a message write out of God\'s Word. Explore our full archive of teachings.' },
			{ property: 'og:url', content: 'https://flatlandchurch.com/watch' },
			{ name: 'twitter:title', content: 'Browse weekly sermons from Flatland Church' },
			{ name: 'twitter:description', content: 'Every week at Flatland Church we teach a message write out of God\'s Word. Explore our full archive of teachings.' },
			{ property: 'og:title', content: 'Browse weekly sermons from Flatland Church' },
			{ property: 'place:location:latitude', content: '41.3039152' },
			{ property: 'place:location:longitude', content: '-96.1377482' }
		]);
	}

  ngOnInit() {
		this.http.request(`https://api.flatlandchurch.com/v2/sermons?page=${this.page}&key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe((res: Response) => {
				this.latestSermon = res.json()[0];
			});
  }

}
