import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import * as marked from 'marked';
import { Meta, Title } from '@angular/platform-browser';
import * as moment from 'moment';

import { pageData } from './post-type';
import { getEvent, handleEvent } from './post-data-handlers/enjoy';
import { getClass, handleClass } from './post-data-handlers/classes';
import { getGroup, handleGroup } from './post-data-handlers/group';
import { getBlogPost, handleBlogPost } from './post-data-handlers/blog';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  xhtml: false
});

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	sub: any;
	pageData = pageData;
	hasDetails = false;
	hasDates = false;
	pageDetails = [];
	legacy = false;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private meta: Meta, private title: Title) { }

  ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		this.sub = this.route.params.subscribe(params => {
			if (this.route.toString().includes("enjoy")) {
				getEvent(this.http, params['permalink'])
					.subscribe((res: Response) => {
						const data = handleEvent(res);
						this.pageData = Object.assign({}, pageData, data.pageData);
						this.title.setTitle(data.pageData.title);
						this.meta.addTags(data.metaTags);
						window['fbq']('track', 'ViewContent', {
						  content_type: 'product',
              content_id: 'event'
            });
					});
			} else if (this.route.toString().includes("blog")) {
				getBlogPost(this.http, params['permalink'])
					.subscribe(res => {
						const data = handleBlogPost(res, params['permalink']);
						this.pageData = Object.assign({}, this.pageData, data.pageData);
						this.title.setTitle(data.pageData.title);
						this.meta.addTags(data.metaTags);
						this.legacy = data.legacy;
						window['fbq']('track', 'ViewContent', {
						  content_type: 'product',
              content_id: 'blog_post'
            });
					});
			} else if (this.route.toString().includes("classes")) {
				getClass(this.http, params['permalink'])
					.subscribe((res: Response) => {
						const data = handleClass(res);
						this.pageData = Object.assign({}, this.pageData, data.pageData);
						this.hasDates = data.hasDates;
						this.hasDetails = true;
						this.title.setTitle(data.pageData.title);
						this.meta.addTags(data.metaTags);
						this.pageDetails = data.pageDetails;
						window['fbq']('track', 'ViewContent', {
						  content_type: 'product',
              content_id: 'class'
            });
					});
			} else if (this.route.toString().includes('groups')) {
				getGroup(this.http, params['permalink'])
					.subscribe((res: Response) => {
						let data = handleGroup(res);
						this.pageData = Object.assign({}, this.pageData, data.pageData);
						this.hasDetails = true;
						this.title.setTitle(data.pageData.title);
						this.meta.addTags(data.metaTags);
						this.pageDetails = data.pageDetails;
						window['fbq']('track', 'ViewContent', {
						  content_type: 'product',
              content_id: 'group'
            });
					});
			}
		});
  }

	toMarkdown(content, legacy) {
		if (legacy) {
			return content;
		}
		return marked(content);
	}

}
