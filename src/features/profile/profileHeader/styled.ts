import styled from 'styled-components'

export const Container = styled.div`
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
`

export const ImgCover = styled.div`
	position: relative;
	border-radius: 12px 12px 0 0;
	height: 250px;
	background-color: #e1e1e1;
`

export const ButtonEdit = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	min-height: 32px;
	padding: 0 16px;
	margin: 20px;

	color: ${({ theme }) => theme.colors.font.linkC};
	font-weight: ${({ theme }) => theme.sizes.weight.medium};
	font-size: ${({ theme }) => theme.sizes.font.m};
	background: #ffffff;
	border-radius: 8px;
`

export const ProfileInfo = styled.div`
	position: relative;
	margin-top: -10px;
	padding: 20px;
	display: flex;
	align-items: center;

	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
`

export const ProfileImg = styled.img`
	width: 150px;
	height: 150px;

	border: 4px solid ${({ theme }) => theme.colors.bg.secondary};
	margin: -95px 20px 0 0;
	border-radius: 50%;
`

export const ProfileWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`

export const Title = styled.h1`
	font-size: 21px;
	margin-bottom: 5px;
`

export const Subtitle = styled.p``

export const Button = styled.button`
	min-height: 32px;
	padding: 0 16px;

	color: ${({ theme }) => theme.colors.font.linkC};
	font-weight: ${({ theme }) => theme.sizes.weight.medium};
	font-size: ${({ theme }) => theme.sizes.font.m};
	background: #e5ebf1;
	border-radius: 8px;
`
