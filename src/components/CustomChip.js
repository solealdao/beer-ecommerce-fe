import React from 'react';
import styled from '@emotion/styled';

const ChipWrapper = styled.div`
	display: inline-flex;
	align-items: center;
	border: 1px solid
		${(props) =>
			props.selected
				? props.theme.colors.secondary
				: props.theme.colors.text};

	color: ${(props) =>
		props.selected ? props.theme.colors.secondary : props.theme.colors.text};
	border-radius: 16px;
	padding: 6px 12px;
	margin: 4px;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSize.chips};
`;

const Chip = ({ label, selected, onClick }) => {
	return (
		<ChipWrapper selected={selected} onClick={onClick}>
			{label}
		</ChipWrapper>
	);
};

export default Chip;
