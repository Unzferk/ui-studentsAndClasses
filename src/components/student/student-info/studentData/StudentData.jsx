import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { getStudents, postStudent } from '../../../../redux/reducers/studentReducer';
import { useDispatch, useSelector } from 'react-redux';

const StudentData = () => {

	const [editMode, setEditMode] = useState(false);
	const dispatch = useDispatch();
	const { studentDetails } = useSelector(state => state.students);
	const { register, handleSubmit, reset, formState, formState: { errors } } = useForm({
		defaultValues: {
			studentId: "",
			firstName: "",
			lastName: ""
		}
	});

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ studentId: "", firstName: "", lastName: "" });
			dispatch(getStudents());
		}
	}, [formState, reset]);

	const onSubmit = async (data) => {
		dispatch(postStudent(data));
	}

	const onEdit = () => {
		setEditMode(true);
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='container'>

				<table>
					<tbody>
						<tr key="dni" className='fw-bold'>
							DNI:
						</tr>
						<tr>
							{studentDetails.studentId}
						</tr>

						<tr key="name" className='fw-bold'>
							First Name:
						</tr>
						<tr>
							{!editMode ? studentDetails.firstName :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={studentDetails.firstName}
										{...register("firstName", { required: false })}
									/>
									<div className='msg-alert-student'>{errors.firstName?.type === 'required' && "This field is required"}</div>
								</>
							}

						</tr>

						<tr key="last" className='fw-bold'>
							Last Name:
						</tr>
						<tr>
							{!editMode ? studentDetails.lastName :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={studentDetails.lastName}
										{...register("lastName", { required: false })}
									/>
									<div className='msg-alert-student'>{errors.lastName?.type === 'required' && "This field is required"}</div>
								</>
							}
						</tr>
						<p />
					</tbody>
				</table>
				<div className='row'>
					{editMode ?
						<>
							<button type="submit" className="btn btn-success btn-sm">Update</button>
							<p />
							<button className="btn btn-primary btn-sm" onClick={() => setEditMode(!editMode)}>Cancel</button>
						</>
						:
						<>
							<button className="btn btn-warning btn-sm" onClick={() => setEditMode(!editMode)}>Edit</button>
							<p />
							<button className="btn btn-danger btn-sm">Delete</button>
						</>
					}
				</div>
			</form>
		</>
	)
}

export default StudentData