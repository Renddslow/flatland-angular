import * as moment from 'moment';

export const getEvent = (http, permalink) => http.request(`https://api.flatlandchurch.com/v2/events/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`);

export const handleEvent = response => {
	let data = response.json();

	const pageData = {
		metaFields: [
			data.location,
			moment(data.startsAt * 1000).format('MMM D @ h:mm A')
		],
		title: data.title,
		inlineAction: {
			internalUrl: null,
			externalUrl: null,
			label: null
		},
		content: data.description,
		jumbotronImage: data.jumbotron || data.image
	};

	if (data.price != "Free") {
		pageData.metaFields.push(data.price);
	}

	if (data.inlineAction) {
		pageData.inlineAction.internalUrl = data.inlineAction.internalUrl;
		pageData.inlineAction.externalUrl = data.inlineAction.externalUrl;
		pageData.inlineAction.label = data.inlineAction.label;
	}

	const metaTags = [
		{ name: 'description', content: data.description || 'Enjoy events at Flatland Church' },
		{ property: 'og:url', content: `https://flatlandchurch.com/enjoy/${data.permalink}` },
		{ property: 'og:image', content: data.jumbotron || data.image || '' },
		{ name: 'twitter:title', content: data.title },
		{ name: 'twitter:description', content: data.description || 'Enjoy events at Flatland Church' },
		{ name: 'twitter:image', content: data.jumbotron || data.image || '' },
		{ property: 'og:title', content: data.title },
		{ property: 'place:location:latitude', content: '41.3039152' },
		{ property: 'place:location:longitude', content: '-96.1377482' }
	];

	return { pageData, metaTags };
};
