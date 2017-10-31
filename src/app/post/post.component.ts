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
		jumbotronImage: null,
		color: null,
		inlineAction: {
			internalUrl: null,
			externalUrl: null,
			label: null
		}
	};

	hasDetails = false;

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
							this.parseLocation(data.location),
							`${this.parseWeekday(data.schedule.day)} @ ${this.getTimes(data.schedule)}`,
							childCareString
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
						const scheduleString = `${this.parseWeekday(data.schedule.day)} @ ${this.getTimes(data.schedule)}`;

						this.pageDetails = [
							this.parseLocation(data.location),
							scheduleString,
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

	parseLocation = location => {
		if (typeof location === 'string') {
			return `Location: ${location}`;
		}
		const streetAddress = location.addressOne.replace(' ', '+');
		return `Location: <a class="underline" href="https://www.google.com/maps/place/${streetAddress},+${location.city},+${location.state}+${location.zipCode}">${location.name}</a>`
	}

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

}
