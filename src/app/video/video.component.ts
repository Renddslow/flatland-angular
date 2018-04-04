import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
	sub: any;
	sermon: object;
	recommended = [];

	modalOpen = false;
	permalink: string;

  constructor(private http: Http, private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router, private meta: Meta, private title: Title) { }

  ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		this.sub = this.route.params.subscribe(params => {
			this.permalink = params['permalink'];
			let uri = `https://api.flatlandchurch.com/v2/sermons/${this.permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`;
			this.http.request(uri)
				.subscribe((res: Response) => {
						this.sermon = res.json();
						this.sermon['videoURI'] = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.sermon['vimeoId']}`);
						this.sermon['permalink'] = this.permalink;
						this.sermon['preached'] = moment(this.sermon['preached'] * 1000).tz('America/Chicago').format('MMMM D');
						this.title.setTitle(this.sermon['title'] + '| Flatland Church');
						this.meta.addTags([
							{ name: 'description', content: this.sermon['description'] || this.sermon['series']['description'] || '' },
							{ property: 'og:url', content: `https://flatlandchurch.com/watch/${this.sermon['permalink']}` },
							{ property: 'og:image', content: this.sermon['image'] || '' },
							{ name: 'twitter:title', content: this.sermon['title'] },
							{ name: 'twitter:description', content: this.sermon['description'] || this.sermon['series']['description'] || '' },
							{ name: 'twitter:image', content: this.sermon['image'] || '' },
							{ property: 'og:title', content: this.sermon['title'] },
							{ property: 'place:location:latitude', content: '41.3039152' },
							{ property: 'place:location:longitude', content: '-96.1377482' }
						]);
					},
					err => {
						this.router.navigate(['404']);
					}
				);
		});
  }

	openModal = () => {
		this.modalOpen = true;
	}

}
