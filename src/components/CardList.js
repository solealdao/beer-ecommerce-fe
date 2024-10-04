import React from 'react';
import styled from '@emotion/styled';
import CustomCard from './CustomCard';

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;

	@media (min-width: 1200px) {
		padding: 3em 14em;
	}
`;

const CustomCardWrapper = styled.div`
	flex: 1 1 calc(50% - 10px);
	max-width: calc(50% - 10px);
	box-sizing: border-box;

	@media (min-width: 768px) {
		flex: 1 1 calc(33.33% - 10px);
		max-width: calc(33.33% - 10px);
	}

	@media (min-width: 1200px) {
		flex: 1 1 calc(25% - 10px);
		max-width: calc(25% - 10px);
	}
`;

const CardList = ({ cards }) => {
	return (
		<CardContainer>
			{cards.map((card, index) => (
				<CustomCardWrapper key={card.id}>
					<CustomCard
						title={card.title}
						imageUrl={card.imageUrl}
						price={card.price}
						link={card.link}
						roundedTopRight={index % 2 === 0}
						roundedTopLeft={index % 2 !== 0}
					/>
				</CustomCardWrapper>
			))}
		</CardContainer>
	);
};

export default CardList;
