import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ff3ccf67cec04e56b17e8596b5720171',
	},
});
