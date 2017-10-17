import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { markdown } from 'markdown';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	sub: any;

	pageData = {
		title: null,
		callToAction: {
			label: null,
			uri: null
		},
		content: null,
		metaFields: [],
		jumbotronImage: null
	};

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
				this.http.request(`https://api.flatlandchurch.com/v1/events/${params['permalink']}`)
					.subscribe((res: Response) => {
						let data = res.json();
						// mapping
						this.pageData.title = data.title;
						if (data.link != "") {
							this.pageData.callToAction.label = "Register";
							this.pageData.callToAction.uri = data.link;
						}
						this.pageData.metaFields = [data.location, data.date];
						if (data.price != "Free") {
							this.pageData.metaFields.push(data.price);
						}
						this.pageData.content = data.description;
						this.pageData.jumbotronImage = data.image;
						this.title.setTitle(data.title);
						this.meta.addTags([
							{ name: 'description', content: data.description },
							{ property: 'og:url', content: `https://flatlandchurch.com/enjoy/${params['permalink']}` },
							{ property: 'og:image', content: data.image },
							{ name: 'twitter:title', content: data.title },
							{ name: 'twitter:description', content: data.description },
							{ name: 'twitter:image', content: data.image },
							{ property: 'og:title', content: data.title },
							{ property: 'place:location:latitude', content: '41.3039152' },
							{ property: 'place:location:longitude', content: '-96.1377482' }
						]);
					});
			} else if (this.route.toString().includes("blog")) {
				this.http.request(`https://api.flatlandchurch.com/v1/blog/post/${params['permalink']}`)
					.subscribe((res: Response) => {
						let data = res.json();
						this.pageData.title = data.title;
						this.pageData.jumbotronImage = data.image;
						this.pageData.content = data.text;
						this.pageData.metaFields = [data.author, data.date_published];
						this.title.setTitle(data.title);
						this.meta.addTags([
							{ property: 'og:url', content: `https://flatlandchurch.com/blog/${data.permalink}` },
							{ name: 'twitter:title', content: data.title },
							{ property: 'og:title', content: data.title },
							{ property: 'place:location:latitude', content: '41.3039152' },
							{ property: 'place:location:longitude', content: '-96.1377482' }
						]);
					});
			}
		});
  }

	toMarkdown(content) {
		return markdown.toHTML(content);
	}

}
