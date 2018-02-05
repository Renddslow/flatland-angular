import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { markdown } from 'markdown';
import { Meta, Title } from "@angular/platform-browser";
import * as moment from 'moment';

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
		jumbotronImage: null,
		color: null,
		inlineAction: {
			internalUrl: null,
			externalUrl: null,
			label: null
		},
		ad: {
			image: null,
			action: {
				label: null,
				uri: null
			},
			title: null
		},
		dates: null
	};

	hasDetails = false;
	hasDates = false;

	pageDetails = [];

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
				this.http.request(`https://api.flatlandchurch.com/v2/events/${params['permalink']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
					.subscribe((res: Response) => {
						let data = res.json();
						data.date = moment(data.startsAt * 1000).format('MMM D @ h:mm A');
						// mapping
						this.pageData.title = data.title;
						this.pageData.metaFields = [data.location, data.date];
						if (data.price != "Free") {
							this.pageData.metaFields.push(data.price);
						}
						if (data.inlineAction) {
							this.pageData.inlineAction.internalUrl = data.inlineAction.internalUrl;
							this.pageData.inlineAction.externalUrl = data.inlineAction.externalUrl;
							this.pageData.inlineAction.label = data.inlineAction.label;
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
						this.assignBlogData(res.json(), 'v1', params['permalink']);
					}, (err) => {
						this.http.request(`https://api.flatlandchurch.com/v2/blog/${params['permalink']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
							.subscribe((res: Response) => {
								this.assignBlogData(res.json(), 'v2', params['permalink']);
							});
					});
			} else if (this.route.toString().includes("classes")) {
				this.http.request(`https://api.flatlandchurch.com/v2/classes/${params['permalink']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
					.subscribe((res: Response) => {
						let data = res.json();
						this.pageData.title = data.title;
						this.pageData.jumbotronImage = data.jumbotron || data.image;
						this.pageData.content = data.description;

						if (!data.registrationClosed) {
							this.pageData.callToAction.label = 'Sign Up';
							this.pageData.callToAction.uri = data.registrationLink;
						}

						if (data.dates) {
							this.pageData.dates = Object.keys(data.dates)
								.filter(key => {
									return moment().subtract(2, 'weeks').unix() < data.dates[key]['start'];
								})
								.map(key => {
									const date = data.dates[key];
									date['start'] = moment(date['start'] * 1000).format('MMM D, YYYY');
									if (date['end']) {
										date['end'] = moment(date['end'] * 1000).format('MMM D, YYYY');
									}
									return date;
								});
							this.hasDates = true;
						}

						this.hasDetails = true;

						this.title.setTitle(data.title);
						this.meta.addTags([
							{ property: 'og:url', content: `https://flatlandchurch.com/classes/${data.permalink}` },
							{ name: 'twitter:title', content: data.title },
							{ property: 'og:title', content: data.title },
							{ property: 'place:location:latitude', content: '41.3039152' },
							{ property: 'place:location:longitude', content: '-96.1377482' }
						]);

						const childCareString = data.details && data.details.children ? 'Childcare is available' : 'No childcare available';
						const costString = data.details && data.details.cost ? `$${data.details.cost}` : 'Free';
						this.pageDetails = [
							childCareString,
							costString
						];
					});
			} else if (this.route.toString().includes('groups')) {
				this.http.request(`https://api.flatlandchurch.com/v2/groups/${params['permalink']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
					.subscribe((res: Response) => {
						let data = res.json();
						this.pageData.title = data.title;
						this.pageData.jumbotronImage = data.jumbotron || data.image;
						this.pageData.color = data.color || '#fff';
						this.pageData.content = data.description;
						if (data.inlineAction) {
							this.pageData.inlineAction.internalUrl = data.inlineAction.internalUrl;
							this.pageData.inlineAction.externalUrl = data.inlineAction.externalUrl;
							this.pageData.inlineAction.label = data.inlineAction.label;
						}

						this.hasDetails = true;

						this.title.setTitle(data.title);
						this.meta.addTags([
							{ property: 'og:url', content: `https://flatlandchurch.com/blog/${data.permalink}` },
							{ name: 'twitter:title', content: data.title },
							{ property: 'og:title', content: data.title },
							{ property: 'place:location:latitude', content: '41.3039152' },
							{ property: 'place:location:longitude', content: '-96.1377482' }
						]);

						const childCareString = data.details && data.details.children ? 'Childcare is available' : 'No childcare available';

						this.pageDetails = [
							data.schedule.display,
							this.getAgeRange(data.details.ageRange),
							this.getGenderString(data.details.gender),
							childCareString
						];
					});
			}
		});
  }

	toMarkdown(content) {
		return markdown.toHTML(content);
	}

	getTimes = schedule => {
		if (schedule.times.length > 1) {
			return `${this.convert24HourTimeTo12HourString(schedule.times[0])} - ${this.convert24HourTimeTo12HourString(schedule.times[1])}`
		} else {
			return `${this.convert24HourTimeTo12HourString(schedule.times[0])}`;
		}
	};

	convert24HourTimeTo12HourString = timeString => {
		const timeArr = timeString.split(':');
		let firstNumber = parseInt(timeArr[0]) > 11 ? parseInt(timeArr[0]) - 12 : timeArr[0];
		let meridian = parseInt(timeArr[0]) > 11 ? 'pm' : 'am';
		if (firstNumber === 0) {
			firstNumber = 12;
		}
		return `${firstNumber}:${timeArr[1]}${meridian}`;
	};

	parseWeekday = day => {
		switch(day) {
			case 0:
				return `Sunday's`;
			case 1:
				return `Monday's`;
			case 2:
				return `Tuesday's`;
			case 3:
				return `Wednesday's`;
			case 4:
				return `Thursday's`;
			case 5:
				return `Friday's`;
			case 6:
				return `Saturday's`;
		}
	}

	getGenderString = gender => {
		switch(gender) {
			case 'male':
				return 'Men Only';
			case 'female':
				return 'Women Only';
			case 'coed':
				return 'Co-ed';
		}
	}

	getAgeRange = ageArray => {
		if (ageArray.length > 1) {
			return `Age Range: ${ageArray[0]} - ${ageArray[1]}`;
		} else {
			return `Age Range: ${ageArray[0]}+`;
		}
	}

	assignBlogData = (data, version, permalink) => {
		this.pageData.title = data.title;
		this.pageData.jumbotronImage = data.image;
		this.pageData.content = version === 'v1' ? data.text : data.content;
		this.pageData.metaFields = [
			version === 'v1' ? data.author : data.author.name,
			version === 'v1' ? data.date_published : moment(data.date * 1000).format('MMMM D, YYYY')
		];

		this.pageData.ad = data.actionComponent;

		this.title.setTitle(data.title);
		this.meta.addTags([
			{ property: 'og:url', content: `https://flatlandchurch.com/blog/${permalink}` },
			{ name: 'twitter:title', content: data.title },
			{ property: 'og:title', content: data.title },
			{ property: 'place:location:latitude', content: '41.3039152' },
			{ property: 'place:location:longitude', content: '-96.1377482' }
		]);
	}

}
