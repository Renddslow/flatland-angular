import * as moment from 'moment';

export const getBlogPost = (http, permalink) => http.request(`https://api.flatlandchurch.com/v1/blog/post/${permalink}`);

export const handleBlogPost = (response, permalink) => {
	const data = response.json();
	const pageData = {
		title: data.title,
		jumbotronImage: data.image,
		content: data.text,
		metaFields: [
			data.author,
			data.date_published
		],
		ad: data.actionComponent
	};

	const metaTags = [
		{ property: 'og:url', content: `https://flatlandchurch.com/blog/${permalink}` },
		{ name: 'twitter:title', content: data.title },
		{ property: 'og:title', content: data.title },
		{ property: 'place:location:latitude', content: '41.3039152' },
		{ property: 'place:location:longitude', content: '-96.1377482' }
	];

	return { pageData, metaTags };
};
