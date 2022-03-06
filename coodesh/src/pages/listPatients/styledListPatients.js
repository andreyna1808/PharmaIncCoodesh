import styled from 'styled-components';

export const ImgLoanding = styled.img`width: 90%;`;

export const ButtonComeBack = styled.button`
	position: absolute;
	top: 0;
	left: 45%;
	margin: 0.4% 0;
	color: white;
	font-weight: bolder;
	background-color: transparent;
	border: none;
	cursor: pointer;
	width: 180px;
	height: 25px;
	:hover {
		transition: 0.5s;
		font-size: 16px;
	}
`;
export const Selects = styled.select`
	color: white;
	opacity: 0.9;
	border-width: 2px;
	background-color: transparent;
	border-image: linear-gradient(90deg, rgba(2, 211, 215, 1), rgba(0, 85, 137, 1), rgba(255, 60, 115, 1) 100%) 1;
	padding: 12px 22px;
	font-weight: 900;
	width: 20%;
	height: 45px;
	@media (max-width: 700px) {
		width: 65%;
	}
`;

export const Options = styled.option`
	font-weight: bolder;
	color: black;
`;
export const Input = styled.input`
	color: white;
	background-color: transparent;
	border-image: linear-gradient(90deg, rgba(2, 211, 215, 1), rgba(0, 85, 137, 1), rgba(255, 60, 115, 1) 100%) 1;
	height: 45px;
	margin: 5% 1%;
	padding: 10px 30px;
	font-weight: bolder;
	outline: none;
	::placeholder {
		color: white;
		opacity: 0.9;
	}
	@media (max-width: 700px) {
		margin: 0;
		margin-bottom: 3%;
	}
`;
export const DivInputs = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	@media (max-width: 700px) {
		flex-direction: column;
		padding: 5% 0;
	}
`;

export const DivCard = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`;
export const DivCardInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	background: linear-gradient(90deg, rgba(2, 211, 215, 1) 16%, rgba(0, 85, 137, 1) 52%, rgba(255, 60, 115, 1) 87%);
`;
export const DivCardPatients = styled.div`
	background-color: rgba(300, 300, 300, 0.4);
	margin: 0.5% 0;
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const H1Card = styled.h1`
	margin: 0 auto;
	text-align: left;
	display: flex;
	justify-content: left;
	@media (max-width: 700px) {
		font-size: 16px;
	}
`;
export const H1Patients = styled.h1`
	padding: 10% auto;
	text-align: left;
	display: flex;
	justify-content: left;
	@media (max-width: 700px) {
		font-size: 12px;
	}
`;
export const ViewMore = styled.button`
	color: white;
	font-weight: bolder;
	cursor: pointer;
	width: 270px;
	height: 35px;
	margin: 2% 35%;
	background: transparent;
	border-image: linear-gradient(90deg, rgba(255, 60, 115, 1), rgba(2, 211, 215, 1), rgba(0, 85, 137, 1) 100%) 1;
	:hover {
		transition: 0.3s;
		font-size: 16px;
		background: linear-gradient(
			90deg,
			rgba(2, 211, 215, 1) 16%,
			rgba(0, 85, 137, 1) 52%,
			rgba(255, 60, 115, 1) 87%
		);
		border-image: none;
		border-radius: 90px;
	}
	@media (max-width: 700px) {
		width: 200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const DivDados = styled.div`
	margin: auto;
	padding: 0 20px;
	width: 100%;
	@media (max-width: 700px) {
		padding: 0 5px;
	}
`;
