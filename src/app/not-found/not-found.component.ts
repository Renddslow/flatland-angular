import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
		this.title.setTitle('Page Not Found | Flatland Church');
		this.meta.addTags([
			{ name: 'description', content: 'Flatland Church is all about helping you move closer to the center of God\'s kingdom where real life transformation happens.' },
			{ property: 'og:url', content: `https://flatlandchurch.com/404` },
			{ property: 'og:image', content: '' },
			{ name: 'twitter:title', content: 'Page Not Found' },
			{ name: 'twitter:description', content: 'Flatland Church is all about helping you move closer to the center of God\'s kingdom where real life transformation happens.' },
			{ name: 'twitter:image', content: '' },
			{ property: 'og:title', content: 'Page Not Found' },
			{ property: 'place:location:latitude', content: '41.3039152' },
			{ property: 'place:location:longitude', content: '-96.1377482' }
		]);
  }

}
