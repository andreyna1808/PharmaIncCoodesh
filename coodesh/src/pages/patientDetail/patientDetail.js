import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ContainerAll, ContainerInfo, DivSpace, ImgDetail, InfoGrid, Name, ViewDetail } from './styledPatinentDetail';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
};

const convertDate = (dat) => {
	const day = dat.substring(8, 10);
	const month = dat.substring(5, 7);
	const year = dat.substring(0, 4);
	return `${day}/${month}/${year}`;
};

export default function PatientDetail({ info }) {
	const [ open, setOpen ] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<ViewDetail onClick={() => handleOpen()}>View Details</ViewDetail>
			<Modal
				aria-labelledby="transition-modal-title"
				id={`popup${info.login.sha1}`}
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							<ImgDetail src={info.picture.large} href="Img profile" />
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}>
							<ContainerInfo>
								<Name>
									{info.name.title}: {info.name.first} {info.name.last}
								</Name>
								<InfoGrid>
									<DivSpace>
										<p>E-mail: {info.email}</p>
										<p>Cell: {info.cell}</p>
										<p>Phone: {info.phone}</p>
									</DivSpace>
									<DivSpace>
										<p>Gender: {info.gender}</p>
										<p>Birth: {convertDate(info.dob.date)}</p> 
										<p>Age: {info.dob.age}</p> 
									</DivSpace>
									<DivSpace>
									<p>Country: {info.location.country}, Nat.: {info.nat}</p>
									<p>
										Adress: State: {info.location.state}, Postcode: {info.location.postcode},
										Street: {info.location.street.name}, Number: {info.location.street.number}
									</p>
									</DivSpace>
								</InfoGrid>
							</ContainerInfo>
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
