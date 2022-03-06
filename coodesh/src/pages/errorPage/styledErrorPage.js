import styled from "styled-components";

import Illustration from '../../constants/imgs/error.png'

export const ButtonView = styled.button`
  color: white;
  font-weight: bolder;
  cursor: pointer;
  width: 180px;
  height: 35px;
  margin: 10% 20%;
  background: transparent;
  border-image: linear-gradient(90deg, rgba(255,60,115,1), rgba(2,211,215,1), rgba(0,85,137,1) 100%) 1;
    :hover {
    transition: 0.3s;
    font-size: 16px;
    width: 190px;
    background: linear-gradient(90deg, rgba(2,211,215,1) 16%, rgba(0,85,137,1) 52%, rgba(255,60,115,1) 87%);
    border-image: none;
    border-radius: 90px;
}
  @media (max-width: 700px) {
    padding: 0 5%;
    margin-bottom: 30%;
	}

`
export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
`

export const H1 = styled.h1`
  margin-top: 30%;
  margin-bottom: 10%;
  margin-left: 8%;
  font-weight: bolder;
  color: rgba(2,211,215,1);
  font-size: 82px;
  width: 90%;
  @media (max-width: 700px) {
    margin-left: 2%;
    font-size: 52px;
	}
`
export const Paragraf = styled.p`
  margin-left: 4% 0;
  padding: 0 15%;
  font-weight: bolder;
  font-size: 22px;
  @media (max-width: 700px) {
    padding: 0 5%;
    margin-top: 70%;
    margin-bottom: 10%;
	}
`

export const Span = styled.span`
  color: rgba(255,60,115,1);
`
export const Illust = styled.div`
  background: url(${Illustration}) no-repeat;
  width: 90%;
	height: 100vh;
	background-size: contain;
	text-align: center;
	padding: 5% 0;
  @media (max-width: 700px) {
    width: 100%;
    margin: 25% 0;
    position: absolute;
	}
`