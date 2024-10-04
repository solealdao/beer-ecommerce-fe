import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { SlOptions } from 'react-icons/sl';
import useProductDetail from '../hooks/useProductDetail';
import ProductDetails from '../components/ProductDetails';
import imageMapping from '../utils/imageMapping';

const Wrapper = styled.div`
	height: 100vh;
	background-color: ${(props) => props.theme.colors.background};
`;
const MainWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	padding: 1em;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.primary};
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.cardBackground};
	font-size: 24px;
	padding: 12px;
	border-radius: 30%;
	cursor: pointer;
`;

const DetailPageTitle = styled.div`
	font-size: ${(props) => props.theme.fontSize.cardTitle};
	font-weight: 500;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 18em;
	margin: 15px 0;
`;

const CardImage = styled.img`
	width: auto;
	height: 100%;
	object-fit: contain;
`;

const ProductDetailPage = () => {
	const navigate = useNavigate();
	const { productId } = useParams();
	const { product, stockPrice, selectedSku, handleSkuChange } =
		useProductDetail(productId);
	const [iconPath, setIconPath] = useState();

	const handleBackClick = () => {
		navigate(-1);
	};

	const handleMenuClick = () => {
		alert('Menu clicked!');
	};

	// As I cannot modify the products.js file, I implemented this route mapping to apply the correct PNG icon
	// based on the backend image route, as shown in the Figma design.
	useEffect(() => {
		if (product) {
			const backendImagePath = product.image;
			const mappedIconPath =
				imageMapping[backendImagePath] || '/images/Beer.png';
			setIconPath(mappedIconPath);
		}
	}, [product]);

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<Wrapper>
			<MainWrapper>
				<TopContainer>
					<IconContainer onClick={handleBackClick}>
						<FaArrowLeft size={24} />
					</IconContainer>
					<DetailPageTitle>Detail</DetailPageTitle>
					<IconContainer onClick={handleMenuClick}>
						<SlOptions size={24} />
					</IconContainer>
				</TopContainer>
				<ImageContainer>
					<CardImage src={iconPath} alt={product.brand} />
				</ImageContainer>
			</MainWrapper>
			<ProductDetails
				product={product}
				stockPrice={stockPrice}
				selectedSku={selectedSku}
				onChipClick={handleSkuChange}
			/>
		</Wrapper>
	);
};

export default ProductDetailPage;
