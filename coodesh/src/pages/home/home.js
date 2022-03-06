import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonView, DivContainer, H1, Illust, Paragraf, Span } from './styledHome';

import Illustration from '../../constants/imgs/ilustration.png'

export default function Home() {
	const navigate = useNavigate();

	const goPatients = () => {
		navigate('/list-patients');
	};

	return (
		<DivContainer>
			<div>
				<H1><Span>MANAGEMENT</Span> AREA</H1>
        <Paragraf>Get access to patients informations, filter and get specific data from the list.</Paragraf>
				<ButtonView onClick={goPatients}>View patients</ButtonView>
			</div>
      <Illust></Illust>
		</DivContainer>
	);
}
