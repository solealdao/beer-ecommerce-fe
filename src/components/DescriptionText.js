import React, { useState } from 'react';
import styled from '@emotion/styled';

const DescriptionContainer = styled.div`
	position: relative;
	font-size: ${(props) => props.theme.fontSize.description};
	color: ${(props) => props.theme.colors.text};
	max-height: ${(props) => (props.expanded ? 'none' : 'calc(1.4em * 4)')};
	overflow: hidden;
`;

const Ellipsis = styled.span`
	color: ${(props) => props.theme.colors.text};
	margin: 0 2px;
`;

const ReadMoreButton = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: bold;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSize.description};
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: ${(props) => props.theme.colors.cardBackground};
	padding: 0;
	margin: 0;
`;

const DescriptionText = ({ text }) => {
	const [expanded, setExpanded] = useState(false);

	const handleToggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<DescriptionContainer expanded={expanded}>
			<p>{text}</p>
			{!expanded && text.split(' ').length > 30 && (
				<ReadMoreButton onClick={handleToggleExpand}>
					<Ellipsis>...</Ellipsis>Read more
				</ReadMoreButton>
			)}
			{expanded && (
				<ReadMoreButton onClick={handleToggleExpand}>
					Show less
				</ReadMoreButton>
			)}
		</DescriptionContainer>
	);
};

export default DescriptionText;
