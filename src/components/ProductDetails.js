import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Chip from './CustomChip';
import CustomButton from './CustomButton';
import DescriptionText from './DescriptionText';

const DetailContainer = styled.div`
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	background-color: ${(props) => props.theme.colors.cardBackground};
	padding: 1.5em;

	@media (min-width: 768px) {
		padding: 3em 14em;
	}

	@media (min-width: 1200px) {
		padding: 3em 18em;
	}
`;

const InfoRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${(props) => props.theme.fontSize.title};
	font-weight: 700;
`;

const BrandName = styled.span`
	color: ${(props) => props.theme.colors.primary};
`;

const Price = styled.span`
	color: ${(props) => props.theme.colors.secondary};
`;

const SecondaryRow = styled.div`
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.colors.text};
	font-size: ${(props) => props.theme.fontSize.description};
`;

const Divider = styled.div`
	margin: 0 6px;
`;

const AttributeTitle = styled.div`
	font-size: ${(props) => props.theme.fontSize.cardTitle};
	font-weight: 500;
	margin: 1em 0 0;
`;

const ChipContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 20px 0;
`;

const ProductDetails = ({ product, stockPrice, selectedSku, onChipClick }) => {
	const theme = useTheme();

	return (
		<DetailContainer>
			<InfoRow>
				<BrandName>{product.brand}</BrandName>
				{stockPrice && <Price>${stockPrice.price}</Price>}
			</InfoRow>
			<SecondaryRow>
				<p>Origin: {product.origin}</p>
				<Divider>|</Divider>
				{stockPrice && <p>Stock: {stockPrice.stock}</p>}
			</SecondaryRow>
			<AttributeTitle>Description</AttributeTitle>
			<DescriptionText text={product.information} />
			<AttributeTitle>Size</AttributeTitle>
			<ChipContainer>
				{product.skus.map((sku) => (
					<Chip
						key={sku.code}
						label={sku.name}
						selected={selectedSku === sku.code}
						onClick={() => onChipClick(sku.code)}
					/>
				))}
			</ChipContainer>
			<ButtonContainer>
				<CustomButton
					icon={HiOutlineShoppingBag}
					alertMessage="See cart!"
				/>
				<CustomButton
					backgroundColor={theme.colors.secondary}
					color={theme.colors.cardBackground}
					buttonText="Add to cart"
					alertMessage="Added to cart!"
					width={'220px'}
				/>
			</ButtonContainer>
		</DetailContainer>
	);
};

export default ProductDetails;
