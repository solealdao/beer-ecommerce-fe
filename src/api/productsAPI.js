import { API_URL } from './apiBase';

// Fetches the list of products from the API
export const getProducts = async () => {
	try {
		const response = await fetch(`${API_URL}/products`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
};
