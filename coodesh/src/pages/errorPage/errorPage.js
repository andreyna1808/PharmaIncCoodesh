import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonView, DivContainer, H1, Illust, Paragraf, Span } from "./styledErrorPage";

export default function ErrorPage() {
  const navigate = useNavigate();

	const home = () => {
		navigate('/');
	};

  return (
    <DivContainer>
    <div>
      <H1><Span>PAGE NOT </Span> FOUND</H1>
      <Paragraf>The page you tried to access is unavailable or does not exist. Please go back to home</Paragraf>
      <ButtonView onClick={home}>Home</ButtonView>
    </div>
    <Illust></Illust>
  </DivContainer>
  )
}
