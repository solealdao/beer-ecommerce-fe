import { useState, useEffect } from 'react';
import { getProducts } from '../api/productsAPI';
import { getStockAndPrice } from '../api/stockPriceAPI';
import { BASE_URL } from '../api/apiBase';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productsData = await getProducts();

				// Map over the fetched products to add price information
				const productsWithPrice = await Promise.all(
					productsData.map(async (product) => {
						const firstSku = product.skus[0]?.code;
						let price = 'N/A';

						if (firstSku) {
							const stockAndPrice = await getStockAndPrice(firstSku);
							price = stockAndPrice.price || 'N/A';
						}

						return {
							id: product.id,
							title: product.brand,
							imageUrl: `${BASE_URL}${product.image}`,
							price,
							link: `/product/${product.id}-${product.brand
								.toLowerCase()
								.replace(/\s+/g, '-')}`, // Generate a link with the product ID and brand as requested
						};
					})
				);
				setProducts(productsWithPrice);
			} catch (error) {
				alert('Failed to load products');
			}
		};

		fetchProducts();
	}, []);

	return products;
};

export default useProducts;
