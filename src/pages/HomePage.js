import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.background};
	padding: 2em;
	height: 100vh;
`;

const HomeTitleContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const HomeTitle = styled.h1`
	font-size: ${(props) => props.theme.fontSize.title};
	color: ${(props) => props.theme.colors.primary};
	text-align: center;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 10em;
	margin: 15px 0;
`;

const CardImage = styled.img`
	width: auto;
	height: 100%;
	object-fit: contain;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 20px 0;
`;

const HomePage = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/products');
	};
	return (
		<MainWrapper>
			<HomeTitleContainer>
				<HomeTitle>Welcome to Beer E-Commerce</HomeTitle>
			</HomeTitleContainer>
			<ImageContainer>
				<CardImage src={'/images/Beer.png'} alt={'Home image'} />
			</ImageContainer>
			<ButtonContainer>
				<CustomButton
					backgroundColor={theme.colors.secondary}
					color={theme.colors.cardBackground}
					buttonText="See our products"
					onClick={handleButtonClick}
					width={'220px'}
				/>
			</ButtonContainer>
		</MainWrapper>
	);
};

export default HomePage;
