import * as moment from 'moment';

export const getClass = (http, permalink) => http.request(`https://api.flatlandchurch.com/v2/classes/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`);

export const handleClass = response => {
	const data = response.json();
	const pageData = {
		title: data.title,
		jumbotronImage: data.jumbotron || data.image,
		content: data.description,
		callToAction: {
			label: null,
			uri: null
		},
		dates: []
	};
	let hasDates = false;

	if (!data.registrationClosed) {
		pageData.callToAction.label = 'Sign Up';
		pageData.callToAction.uri = data.registrationLink;
	}

	if (data.dates) {
		pageData.dates = Object.keys(data.dates)
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
		hasDates = true;
	}

	const metaTags = [
		{ property: 'og:url', content: `https://flatlandchurch.com/classes/${data.permalink}` },
		{ name: 'twitter:title', content: data.title },
		{ property: 'og:title', content: data.title },
		{ property: 'place:location:latitude', content: '41.3039152' },
		{ property: 'place:location:longitude', content: '-96.1377482' }
	];

	const childCareString = data.details && data.details.children ? 'Childcare is available' : 'No childcare available';
	const costString = data.details && data.details.cost ? `$${data.details.cost}` : 'Free';

	const pageDetails = [
		childCareString,
		costString
	];

	return { pageData, pageDetails, metaTags, hasDates };
};
