import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import PatientDetail from '../patientDetail/patientDetail';

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
		setFilterGener(e.target.value);
	};
	const onNationality = (e) => {
		setFilterGener(e.target.value);
	};

	const infoPatients = () => {
		axios
			.get(`${BASE_URL}/?results=${viewMore}`)
			.then((res) => {
				setPatients(res.data.results);
				console.log(res.data.results);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const morePatients = () => {
		setViewMore(viewMore + 50);
	};

	useEffect(
		() => {
			infoPatients();
		},
		[ viewMore ]
	);

	return (
		<div>
			<h1>Sou a ListPatients</h1>
			<input placeholder="Search name" value={filterName} onChange={onName} />
			<input placeholder="Search nationality" value={filterNationality} onChange={onNationality} />
			<select value={filterGener} onChange={onGener}>
				<option value="">Search gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<div>
				{patients && patients.length > 0 ? (
				patients.filter((info) => {
					return info.name.first.toLowerCase().includes(filterName.toLowerCase())})
				.filter((info) => {
				return info.nat.toLowerCase().includes(filterGener.toLowerCase())})
				.filter((info) => {
				return info.gender.toLowerCase().includes(filterGener.toLowerCase())})
					.map((info) => {
					return (
						<div key={info.id}>
							<div>
								<h1>{info.name.first}</h1>
								<h1>{info.name.last}</h1>
							</div>
							<div>
								<h1>{info.gender}</h1>
							</div>
							<div>
								<h1>{convertDate(info.dob.date)}</h1>
							</div>
							<div>
								<PatientDetail info={info} data-bs-target={`#popup${info.login.sha1}`} />
							</div>
						</div>
					);
				})) :<p>Loading...</p>}
			</div>
			<button onClick={morePatients}>More Patients</button>
		</div>
	);
}
