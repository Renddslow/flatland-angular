import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-image-card',
  templateUrl: './page-image-card.component.html',
  styleUrls: ['./page-image-card.component.css']
})
export class PageImageCardComponent implements OnInit {

	@Input() type: string;
	@Input() permalink?: string;

	sermons = [];
	events = [];
	posts = [];
	classes = [];
	groups = [];

	page: number = 0;

  constructor(private http: Http) {}

  ngOnInit() {
		if (this.type.includes("watch")) {
			this.getSermons();
		} else if (this.type.includes("recommended")) {
			this.getRecommendations(this.permalink);
		} else if (this.type.includes("enjoy")) {
			this.http.request(`https://api.flatlandchurch.com/v1/events/`)
				.subscribe((res: Response) => {
					this.events = this.events.concat(res.json()['events']);
				});
		} else if (this.type.includes("blog")) {
			this.getBlogPosts();
		} else if (this.type.includes('classes')) {
			this.getClasses();
		} else if (this.type.includes('groups')) {
			console.log('hello')
			this.getGroups();
		}
  }

	loadMore = (event, type) => {
		event.preventDefault();
		switch(type) {
			case "blog":
				this.getBlogPosts();
				history.pushState(null, null, `/blog?page=${this.page + 1}`);
				break;
			case "watch":
				this.getSermons();
		}
	}

	getBlogPosts = () => {
		this.http.request(`https://api.flatlandchurch.com/v1/blog/posts?page=${this.page}`)
			.subscribe((res: Response) => {
				this.posts = this.posts.concat(res.json());
				this.page += 1;
			});
	};

	getSermons = () => {
		this.http.request(`https://api.flatlandchurch.com/v2/sermons?page=${this.page}&key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe((res: Response) => {
				this.sermons = this.sermons.concat(res.json());
				this.page += 1;
			});
	};

	getClasses = () => {
		this.http.request('https://api.flatlandchurch.com/v2/classes?key=pk_e6afff4e5ad186e9ce389cc21c225')
			.subscribe((res: Response) => {
				this.classes = this.classes.concat(res.json());
			});
	}

	getRecommendations = (permalink) => {
		this.http.request(`https://api.flatlandchurch.com/v2/sermons/${permalink}/series?key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe((res: Response) => {
				this.sermons = res.json().slice(0, 3);
			});
	}

	getGroups = () => {
		this.http.request(`https://api.flatlandchurch.com/v2/groups?key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe((res: Response) => {
				this.groups = res.json();
			});
	}

}
