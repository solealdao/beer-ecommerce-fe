import { API_URL } from './apiBase';

// Fetches stock and price information for a given SKU from the API
export const getStockAndPrice = async (sku) => {
	try {
		const response = await fetch(`${API_URL}/stock-price/${sku}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Error fetching stock and price for SKU ${sku}:`, error);
		throw error;
	}
};
