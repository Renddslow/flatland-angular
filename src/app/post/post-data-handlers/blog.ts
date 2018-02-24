import * as moment from 'moment';
import { startCase } from 'lodash';

export const getBlogPost = (http, permalink) => http.request(`https://api.flatlandchurch.com/v2/blog/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`);

export const handleBlogPost = (response, permalink) => {
	const data = response.json();
	const pageData = {
		title: data.title,
		jumbotronImage: data.image,
		content: data.content,
		metaFields: [
			`by ${data.author.name}`
		],
		ad: data.actionComponent,
		tags: Object.keys(data.topics)
			.map(t => startCase(t))
			.filter(t => t !== 'Legacy')
	};

	const metaTags = [
		{ property: 'og:url', content: `https://flatlandchurch.com/blog/${permalink}` },
		{ name: 'twitter:title', content: data.title },
		{ property: 'og:title', content: data.title },
		{ property: 'place:location:latitude', content: '41.3039152' },
		{ property: 'place:location:longitude', content: '-96.1377482' }
	];

	return { pageData, metaTags, legacy: data.topics.legacy };
};
