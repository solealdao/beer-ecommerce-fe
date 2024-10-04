import React from 'react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.backgroundColor || 'transparent'};
	color: ${(props) => props.color || props.theme.colors.secondary};
	border: 1px solid ${(props) => props.color || props.theme.colors.secondary};
	border-radius: 15px;
	padding: 15px;
	font-size: ${(props) => props.theme.colors.cardTitle};
	font-weight: bold;
	cursor: pointer;
	outline: none;
	width: ${(props) => props.width || 'auto'};
	height: 50px;
`;

const IconWrapper = styled.span`
	font-size: 24px;
`;

const CustomButton = ({
	backgroundColor,
	color,
	buttonText,
	icon: Icon,
	alertMessage,
	width,
	children,
	onClick,
	...props
}) => {
	const handleClick = () => {
		if (alertMessage) {
			alert(alertMessage);
		}
		if (onClick) {
			onClick();
		}
	};

	return (
		<ButtonWrapper
			backgroundColor={backgroundColor}
			color={color}
			width={width}
			onClick={handleClick}
			{...props}
		>
			{Icon && (
				<IconWrapper>
					<Icon />
				</IconWrapper>
			)}
			{buttonText && buttonText}
			{children}
		</ButtonWrapper>
	);
};

export default CustomButton;
