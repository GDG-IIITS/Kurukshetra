import command from '../../config.json' assert { type: 'json' };

async function fetchGET(url: string): Promise<any> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				`Unable to Fetch Data, Please check URL or Network connectivity!!`
			);
		}
		const data = await response.json();
		return data.results[0];
	} catch (error) {
		console.error('Some Error Occurred:', error);
	}
}

async function clickHandler(): Promise<any> {
	try {
		const returnedData = await fetchGET('https://api.chakravyuh.live/challenges/me/todo');
		return returnedData;
	} catch (error) {
		console.error('Some Error Occurred:', error);
	}
}

export const challenge = async (): Promise<string[]> => {
	const about: string[] = [];
	try {
		const data = await clickHandler();
		if (data && data.title) {
			about.push(data.title);
		}
	} catch (error) {
		console.error('Some Error Occurred:', error);
	}
	return about;
};

// To actually export the data as a resolved promise
export const CHALLENGE = await challenge();
