import React from 'react';
import { useState, useEffect, useContext } from 'react';
// import { Form } from 'react-bootstrap';
import { TextField, Button } from '@material-ui/core';
import {Card} from 'react-bootstrap'
import useStyles from './styles';
import Swal from 'sweetalert2';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import validator from 'validator';
import { Redirect } from 'react-router-dom';
import UserContext from 'context/user';
import * as api from 'api/courses';

const CourseForm = () => {
	const classes = useStyles();

	// const { user, setUser } = useContext(UserContext);
	const [open, setOpen] = useState(false);

	const [createCourseData, setCreateCourseData] = useState({
		name: '',
		description: '',
		price: '',
	});
	const [error, setError] = useState('');
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		// if (createCourseData.name !== '' && createCourseData.description !== '' && validator.isEmpty(createCourseData.price) ) {
		// 	setIsActive(true);
		// } else {
		// 	setIsActive(false);
		// }

		if (validator.isEmpty(createCourseData.name)) {
			setError('Please provide a course name.');
			setIsActive(false);
		} else if (validator.isEmpty(createCourseData.description)) {
			setIsActive(false);
			setError('Please provide a course description.');
		} else if (validator.isEmpty(String(createCourseData.price))) {
			setIsActive(false);
			setError('Please provide a course price.');
		} else {
			setIsActive(true);
		}
	}, [createCourseData]);

	const createCourseHandler = e => {
		e.preventDefault();
		console.log(createCourseData);

		api.createCourse(createCourseData, setCreateCourseData, Swal);
		Swal.fire({
			icon: 'success',
			title: 'Sucess!',
			text: 'Created a course successfully.',
		});
		setCreateCourseData({
			name: '',
			description: '',
			price: '',
		});
		handleClose();
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div className='text-center'>
				<Button
					className={classes.button}
					variant='contained'
					color='primary'
					onClick={handleOpen}
				>
					Create a New Course
				</Button>

				{/* Modal */}

				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<Card className={classes.card}>
								{/* modal */}

								<form className={classes.form} onSubmit={createCourseHandler}>
									<h3 className={classes.title}>Create a New Course</h3>
									<TextField
										type='text'
										size='small'
										required
										variant='outlined'
										label='Enter Course Name'
										value={createCourseData.name}
										onChange={e =>
											setCreateCourseData({
												...createCourseData,
												name: e.target.value,
											})
										}
									/>

									<TextField
										type='text'
										size='small'
										required
										variant='outlined'
										label='Enter Course Description '
										value={createCourseData.description}
										onChange={e =>
											setCreateCourseData({
												...createCourseData,
												description: e.target.value,
											})
										}
									/>

									<TextField
										type='number'
										size='small'
										required
										variant='outlined'
										label='Enter Course Price '
										value={createCourseData.price}
										onChange={e =>
											setCreateCourseData({
												...createCourseData,
												price: parseFloat(e.target.value),
											})
										}
									/>

									{isActive ? (
										<Button
											className={classes.button}
											variant='contained'
											color='primary'
											type='submit'
										>
											Submit
										</Button>
									) : (
										<Button
											className={classes.button}
											variant='contained'
											color='primary'
											type='submit'
											disabled
										>
											Submit
										</Button>
									)}
								</form>

								<div className={classes.errorContainer}>
									{!isActive && <p className={classes.error}>{error}</p>}
								</div>
							</Card>
						</div>
					</Fade>
				</Modal>
			</div>
		</div>
	);
};

export default CourseForm;
