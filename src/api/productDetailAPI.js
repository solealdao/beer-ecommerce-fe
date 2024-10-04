import { getProducts } from './productsAPI';
import { getStockAndPrice } from './stockPriceAPI';

// Fetches a product by its ID from the list of products.
export const fetchProductById = async (productId) => {
	try {
		const products = await getProducts();
		const foundProduct = products.find(
			(product) => product.id === parseInt(productId, 10)
		);
		return foundProduct;
	} catch (error) {
		throw new Error('Failed to load product details');
	}
};

// Fetches stock and price information for a specific SKU.
export const fetchStockAndPriceBySku = async (sku) => {
	try {
		const data = await getStockAndPrice(sku);
		return data;
	} catch (error) {
		throw new Error('Failed to load stock and price');
	}
};
