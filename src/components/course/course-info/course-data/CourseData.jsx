import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { getCourses, postCourse } from '../../../../redux/reducers/courseReducer';
import { useDispatch, useSelector } from 'react-redux';

const CourseData = () => {
    const [editMode, setEditMode] = useState(false);
	const dispatch = useDispatch();
	const { courseDetails } = useSelector(state => state.courses);
	const { register, handleSubmit, reset, formState, formState: { errors } } = useForm({
		defaultValues: {
			code: "",
			title: "",
			description: ""
		}
	});

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ code: "", title: "", description: "" });
			dispatch(getCourses());
		}
	}, [formState, reset]);

	const onSubmit = async (data) => {
		dispatch(postCourse(data));
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
							CODE:
						</tr>
						<tr>
							{courseDetails.code}
						</tr>

						<tr key="name" className='fw-bold'>
							Title:
						</tr>
						<tr>
							{!editMode ? courseDetails.title :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={courseDetails.title}
										{...register("title", { required: false })}
									/>
									<div className='msg-alert-course'>{errors.title?.type === 'required' && "This field is required"}</div>
								</>
							}

						</tr>

						<tr key="last" className='fw-bold'>
							Description:
						</tr>
						<tr>
							{!editMode ? courseDetails.description :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={courseDetails.description}
										{...register("description", { required: false })}
									/>
									<div className='msg-alert-course'>{errors.description?.type === 'required' && "This field is required"}</div>
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

export default CourseData