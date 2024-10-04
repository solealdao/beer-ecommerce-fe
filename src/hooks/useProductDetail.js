import { useState, useEffect } from 'react';
import {
	fetchProductById,
	fetchStockAndPriceBySku,
} from '../api/productDetailAPI';

const useProductDetail = (productId) => {
	const [product, setProduct] = useState(null);
	const [stockPrice, setStockPrice] = useState(null);
	const [selectedSku, setSelectedSku] = useState(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				// Fetch the product details by its ID
				const foundProduct = await fetchProductById(productId);
				setProduct(foundProduct);

				// If the product has SKUs, select the first one by default
				if (foundProduct && foundProduct.skus.length > 0) {
					const initialSku = foundProduct.skus[0].code;
					setSelectedSku(initialSku);

					// Fetch the stock and price details for the selected SKU
					const stockAndPrice = await fetchStockAndPriceBySku(initialSku);
					setStockPrice(stockAndPrice);
				}
			} catch (error) {
				alert(error.message);
			}
		};

		fetchProductDetails();
	}, [productId]);

	useEffect(() => {
		if (selectedSku) {
			const fetchStockAndPrice = async () => {
				try {
					const stockAndPrice = await fetchStockAndPriceBySku(selectedSku);
					setStockPrice(stockAndPrice);
				} catch (error) {
					alert('Failed to load stock and price');
				}
			};
			fetchStockAndPrice();

			const intervalId = setInterval(fetchStockAndPrice, 5000);
			return () => clearInterval(intervalId);
		}
	}, [selectedSku]);

	const handleSkuChange = (sku) => {
		setSelectedSku(sku);
	};

	return {
		product,
		stockPrice,
		selectedSku,
		handleSkuChange,
	};
};

export default useProductDetail;
