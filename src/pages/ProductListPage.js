import React from 'react';
import styled from '@emotion/styled';
import useProducts from '../hooks/useProducts';
import NavBar from '../components/NavBar';
import CardList from '../components/CardList';

const MainWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	padding: 1em;
	height: 100vh;
`;
const TextWrapper = styled.div`
	padding: 1em;

	@media (min-width: 1200px) {
		padding: 3em 14em;
	}
`;
const WelcomeText = styled.div`
	color: ${(props) => props.theme.colors.text};
	font-size: ${(props) => props.theme.fontSize.cardTitle};
`;

const Heading1 = styled.h1`
	margin: 15px 0;
	font-weight: 500;
`;

const Heading2 = styled.h2`
	margin: 5px 0;
	font-weight: 400;
`;

const ProductListPage = () => {
	const products = useProducts();
	return (
		<MainWrapper>
			<NavBar profileImageUrl={'/images/avatar.jpg'} />
			<TextWrapper>
				<WelcomeText>Hi, Mr. Michael</WelcomeText>
				<Heading1>Welcome Back!</Heading1>
				<Heading2>Our Products</Heading2>
			</TextWrapper>
			{products.length > 0 ? (
				<CardList cards={products} />
			) : (
				<p>No products available</p>
			)}
		</MainWrapper>
	);
};

export default ProductListPage;
