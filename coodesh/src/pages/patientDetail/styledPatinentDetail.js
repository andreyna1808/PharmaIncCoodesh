import styled from 'styled-components';

export const ViewDetail = styled.button`
	color: white;
	font-weight: bolder;
	cursor: pointer;
	width: 170px;
	margin: 10% 0;
	height: 35px;
	border-radius: 90px;
	background: linear-gradient(90deg, rgba(2, 211, 215, 1) 16%, rgba(0, 85, 137, 1) 52%, rgba(255, 60, 115, 1) 87%);
	:hover {
		transition: 0.3s;
		font-size: 16px;
		border-image: none;
		background: linear-gradient(
			90deg,
			rgba(255, 60, 115, 1) 16%,
			rgba(0, 85, 137, 1) 52%,
			rgba(2, 211, 215, 1) 87%
		);
	}
	@media (max-width: 700px) {
		width: 80px;
    :hover {
		font-size: 14px;
    }
	}
`;

export const ImgDetail = styled.img`
	border-radius: 120px;
	display: flex;
	margin: auto;
	border-image: linear-gradient(90deg, rgba(255,60,115,1), rgba(2,211,215,1), rgba(0,85,137,1) 100%) 1;
`;

export const ContainerInfo = styled.div``;

export const Name = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const InfoGrid = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: 5% 0;
	}
`;
export const DivSpace = styled.div`
	border-left: 5px solid;
	margin: 1%;
	padding: 0 1%;
	border-image: linear-gradient(180deg, rgba(255,60,115,1), rgba(2,211,215,1), rgba(0,85,137,1) 100%) 1;
`