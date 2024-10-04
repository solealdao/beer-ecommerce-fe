import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

const StyledCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${(props) => props.theme.colors.cardBackground};
	width: 8em;
	height: 11em;
	padding: 10px;
	margin: 1em;
	border-radius: 12px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden;

	border-top-right-radius: ${(props) =>
		props.roundedTopRight ? '24px' : '12px'};
	border-top-left-radius: ${(props) =>
		props.roundedTopLeft ? '24px' : '12px'};
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CardTitle = styled.div`
	font-size: ${(props) => props.theme.fontSize.cardTitle};
	font-weight: 500;
	height: 3em;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 6em;
`;

const CardImage = styled.img`
	width: auto;
	height: 100%;
	object-fit: contain;
`;

const PriceContainer = styled.div`
	display: flex;
	justify-content: start;
	margin-top: 15px;
`;
const Price = styled.div`
	font-size: ${(props) => props.theme.fontSize.cardTitle};
	font-weight: 400;
`;

const IconWrapper = styled.div`
	position: absolute;
	bottom: 0px;
	right: 0px;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.cardBackground};
	border-radius: 20% 0 20% 0;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	cursor: pointer;
`;

function CustomCard({
	title,
	imageUrl,
	price,
	link,
	roundedTopRight,
	roundedTopLeft,
}) {
	const handleIconClick = (event) => {
		event.stopPropagation();
		alert('Item added to cart!');
	};
	return (
		<StyledCard
			roundedTopRight={roundedTopRight}
			roundedTopLeft={roundedTopLeft}
		>
			<StyledLink to={link}>
				<CardContent>
					<CardTitle>{title}</CardTitle>
					<ImageContainer>
						<CardImage src={imageUrl} alt={title} />
					</ImageContainer>
				</CardContent>
				<PriceContainer>
					<Price>${price}</Price>
				</PriceContainer>
			</StyledLink>
			<IconWrapper onClick={handleIconClick}>
				<FaPlus size={22} />
			</IconWrapper>
		</StyledCard>
	);
}

export default CustomCard;
