export const getGroup = (http, permalink) => http.request(`https://api.flatlandchurch.com/v2/groups/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`);

export const handleGroup = response => {
	const data = response.json();
	const pageData = {
		title: data.title,
		jumbotronImage: data.jumbotron || data.image,
		color: data.color || '#fff',
		content: data.description,
		inlineAction: {
			internalUrl: null,
			externalUrl: null,
			label: null
		}
	};
	if (data.inlineAction) {
		pageData.inlineAction.internalUrl = data.inlineAction.internalUrl;
		pageData.inlineAction.externalUrl = data.inlineAction.externalUrl;
		pageData.inlineAction.label = data.inlineAction.label;
	}

	const metaTags = [
		{ property: 'og:url', content: `https://flatlandchurch.com/blog/${data.permalink}` },
		{ name: 'twitter:title', content: data.title },
		{ property: 'og:title', content: data.title },
		{ property: 'place:location:latitude', content: '41.3039152' },
		{ property: 'place:location:longitude', content: '-96.1377482' }
	];

	const childCareString = data.details && data.details.children ? 'Childcare is available' : 'No childcare available';

	const pageDetails = [
		data.schedule.display,
		getAgeRange(data.details.ageRange),
		getGenderString(data.details.gender),
		childCareString
	];

	return { pageData, pageDetails, metaTags };
};

const getGenderString = gender => {
	switch(gender) {
		case 'male':
			return 'Men Only';
		case 'female':
			return 'Women Only';
		case 'coed':
			return 'Co-ed';
	}
}

const getAgeRange = ageArray => {
	if (ageArray.length > 1) {
		return `Age Range: ${ageArray[0]} - ${ageArray[1]}`;
	} else {
		return `Age Range: ${ageArray[0]}+`;
	}
}
