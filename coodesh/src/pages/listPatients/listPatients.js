import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import PatientDetail from '../patientDetail/patientDetail';

import Loanding from '../../constants/imgs/loading.gif';
import {
	ButtonComeBack,
	DivCard,
	DivCardInfo,
	DivCardPatients,
	DivDados,
	DivInputs,
	H1Card,
	H1Patients,
	ImgLoanding,
	Input,
	Options,
	Selects,
	ViewMore
} from './styledListPatients';

const convertDate = (dat) => {
	const day = dat.substring(8, 10);
	const month = dat.substring(5, 7);
	const year = dat.substring(0, 4);
	return `${day}/${month}/${year}`;
};

export default function ListPatients() {
	const navigate = useNavigate();

	const [ filterGener, setFilterGener ] = useState('');
	const [ filterName, setFilterName ] = useState('');
	const [ filterNationality, setFilteNationality ] = useState('');
	const [ viewMore, setViewMore ] = useState(50);

	const [ patients, setPatients ] = useState([]);

	const onGener = (e) => {
		setFilterGener(e.target.value);
	};
	const onName = (e) => {
		setFilterName(e.target.value);
	};
	const onNationality = (e) => {
		setFilteNationality(e.target.value);
	};

	const infoPatients = () => {
		axios
			.get(`${BASE_URL}/?results=${viewMore}`)
			.then((res) => {
				setPatients(res.data.results);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const morePatients = () => {
		setViewMore(viewMore + 50);
	};

	const comeBack = () => {
		navigate('/');
	};

	useEffect(
		() => {
			infoPatients();
		},
		[ viewMore ]
	);

	return (
		<div>
			<ButtonComeBack onClick={comeBack}>Come Back</ButtonComeBack>
			<DivInputs>
				<Input type="text" placeholder="Search name" onChange={onName} />
				<Input type="text" placeholder="Search nationality" onChange={onNationality} />
				<Selects value={filterGener} onChange={onGener}>
					<Options value="">Search gender</Options>
					<Options value="male">Male</Options>
					<Options value="female">Female</Options>
				</Selects>
			</DivInputs>
			<DivCard>
				<DivCardInfo>
					<H1Card>Name</H1Card>
					<H1Card>Gender</H1Card>
					<H1Card>Birth</H1Card>
					<H1Card>Actions</H1Card>
				</DivCardInfo>
				{patients && patients.length > 0 ? (
					patients
						.filter((info) => {
							return info.name.first.toLowerCase().includes(filterName.toLowerCase());
						})
						.filter((info) => {
							return info.nat.toLowerCase().includes(filterNationality.toLowerCase());
						})
						.filter((info) => {
							return info.gender.toLowerCase().includes(filterGener.toLowerCase());
						})
						.map((info) => {
							return (
								<DivCardPatients key={info.id}>
									<DivDados>
										<H1Patients>{info.name.first}</H1Patients>
										<H1Patients>{info.name.last}</H1Patients>
									</DivDados>
									<DivDados>
										<H1Patients>{info.gender}</H1Patients>
									</DivDados>
									<DivDados>
										<H1Patients>{convertDate(info.dob.date)}</H1Patients>
									</DivDados>
									<DivDados>
										<PatientDetail info={info} data-bs-target={`#popup${info.login.sha1}`} />
									</DivDados>
								</DivCardPatients>
							);
						})
				) : (
					<div>
						<h1>Loading...</h1>
						<ImgLoanding src={Loanding} href="Loanding" />
					</div>
				)}
			</DivCard>
			<ViewMore onClick={morePatients}>More Patients</ViewMore>
		</div>
	);
}
