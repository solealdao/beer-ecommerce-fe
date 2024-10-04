import React from 'react';
import styled from '@emotion/styled';
import { RiMenu2Line } from 'react-icons/ri';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
`;

const MenuIcon = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.cardBackground};
	font-size: 24px;
	padding: 12px;
	border-radius: 30%;
	cursor: pointer;
`;

const ProfileImageContainer = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
`;

const ProfileImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;

function NavBar({ profileImageUrl }) {
	const handleMenuClick = () => {
		alert('Menu clicked!');
	};

	const handleProfileClick = () => {
		alert('Profile image clicked!');
	};
	return (
		<Container>
			<MenuIcon onClick={handleMenuClick}>
				<RiMenu2Line size={24} />
			</MenuIcon>
			<ProfileImageContainer onClick={handleProfileClick}>
				<ProfileImage src={profileImageUrl} alt="Profile" />
			</ProfileImageContainer>
		</Container>
	);
}

export default NavBar;
