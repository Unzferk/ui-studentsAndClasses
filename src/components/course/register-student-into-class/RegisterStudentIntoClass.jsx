import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postStudentIntoCourse } from '../../../redux/reducers/courseReducer';

const RegisterStudentIntoClass = () => {

	const dispatch = useDispatch();

	const { register, handleSubmit, reset, formState, formState: { errors } } = useForm({
		defaultValues: {
			code: "",
			studentId: "",
		}
	});

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ code: "", studentId: "" });
		}
	}, [formState, reset]);

	const onSubmit = async (data) => {
		dispatch(postStudentIntoCourse(data));
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='container'>

				<table>
					<tbody>

						<tr key="courseCode" className='fw-bold'>
							Course Code:
						</tr>
						<tr>
							<input type="text"
								className={`form-control form-control-sm`}
								autoComplete="off"
								placeholder="Course code"
								{...register("code", { required: false })}
							/>
							<div className='msg-alert-course'>{errors.code?.type === 'required' && "This field is required"}</div>
						</tr>

						<tr key="studentId" className='fw-bold'>
							Student DNI:
						</tr>
						<tr>
							<input type="text"
								className={`form-control form-control-sm`}
								autoComplete="off"
								placeholder="Student DNI"
								{...register("studentId", { required: false })}
							/>
							<div className='msg-alert-course'>{errors.studentId?.type === 'required' && "This field is required"}</div>
						</tr>
						<p />
					</tbody>
				</table>

				<div className='row'>
					<button type="submit" className="btn btn-success btn-sm">Register Student</button>
				</div>

			</form>
		</>
	)
}

export default RegisterStudentIntoClass