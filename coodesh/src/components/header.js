import styled from "styled-components";

export const All = styled.div`
  background-color:  #0e0e16;
  min-height: 100vh;
  color: white;
  font-family: Helvetica, Sans-Serif;
`

export const Header = styled.div`
  background: rgb(2,211,215);
  background: linear-gradient(90deg, rgba(2,211,215,1) 16%, rgba(0,85,137,1) 52%, rgba(255,60,115,1) 87%);
  height: 5vh;
  display: flex;
  justify-content: space-between;
`

export const ImgName = styled.img`
  width: 14%;
  @media (max-width: 700px) {
    width: 30%;
	}
`
export const ImgProfile = styled.img`
  width: 3%;
  margin: 0 1%;
  @media (max-width: 700px) {
    width: 9%;
	}
`