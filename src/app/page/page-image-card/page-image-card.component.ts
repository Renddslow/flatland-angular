import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as moment from 'moment';
import { startCase } from 'lodash';

@Component({
  selector: 'page-image-card',
  templateUrl: './page-image-card.component.html',
  styleUrls: ['./page-image-card.component.css']
})
export class PageImageCardComponent implements OnInit {

  @Input() type: string;
  @Input() permalink?: string;
  @Input() topic?: string;

  sermons = [];
  events = [];
  posts = [];
  classes = [];
  groups = [];

  page: number = 0;
  offset: number = 0;

  constructor(private http: Http) {}

  ngOnInit() {
    if (this.type.includes('watch')) {
      this.getSermons();
    } else if (this.type.includes('recommended')) {
      this.getRecommendations(this.permalink);
    } else if (this.type.includes('enjoy')) {
      this.http.request(`https://api.flatlandchurch.com/v2/events?key=pk_e6afff4e5ad186e9ce389cc21c225`)
        .subscribe((res: Response) => {
          const events = res.json().map(event => {
            event.date = moment(event.startsAt * 1000).format('MMMM D');
            return event;
          });
          this.events = events;
        });
    } else if (this.type.includes('blog')) {
      this.getBlogPosts(this.topic);
    } else if (this.type.includes('classes')) {
      this.getClasses();
    } else if (this.type.includes('groups')) {
      this.getGroups();
    }
  }

  loadMore = (event, type) => {
    event.preventDefault();
    switch(type) {
      case "blog":
        this.getBlogPosts(this.topic);
        if (this.topic) {
          history.pushState(null, null, `/blog/topic/${this.topic}?page=${this.page + 1}`);
        } else {
          history.pushState(null, null, `/blog?page=${this.page + 1}`);
        }
        break;
      case "watch":
        this.getSermons();
    }
  }

  getBlogPosts = (topic?) => {
    const baseURL = `https://api.flatlandchurch.com/v2/blog?key=pk_e6afff4e5ad186e9ce389cc21c225`;
    const url = topic
      ? `${baseURL}&filter[topic]=${topic}&page[offset]=${this.offset}`
      : `${baseURL}&page[offset]=${this.offset}`;
    this.http.request(url)
      .subscribe((res: Response) => {
        this.posts = this.posts.concat(res.json().map(p => ({
          ...p,
          date: moment.unix(p.date).format('MMM D, YYYY'),
          tags: Object.keys(p.topics)
            .map(t => startCase(t))
            .filter(t => t !== 'Legacy')
        })));
        this.page += 1;
        this.offset = this.page * 12;
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
        this.classes.sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          }
          if (a.order < b.order) {
            return -1;
          }
          return 0;
        });
      });
  }

  getRecommendations = (permalink) => {
    this.http.request(`https://api.flatlandchurch.com/v2/sermons/${permalink}/series?key=pk_e6afff4e5ad186e9ce389cc21c225`)
      .subscribe(
				(res: Response) => {
        	this.sermons = res.json().slice(0, 3);
      	},
				err => {
					this.http.request('https://api.flatlandchurch.com/v2/sermons?key=pk_e6afff4e5ad186e9ce389cc21c225')
						.subscribe(
							(res: Response) => {
								this.sermons = res.json().slice(1, 4);
							}
						)
				}
			);
  }

  getGroups = () => {
    this.http.request(`https://api.flatlandchurch.com/v2/groups?key=pk_e6afff4e5ad186e9ce389cc21c225`)
      .subscribe((res: Response) => {
        this.groups = res.json();
        console.log(this.groups)
      });
  }

}
