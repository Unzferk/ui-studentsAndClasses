import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteStudentFromCourse, postStudentIntoCourse } from '../../../redux/reducers/courseReducer';

const RegisterStudentIntoClass = () => {

	const dispatch = useDispatch();
	const [code, setCode] = useState("");
	const [studentId, setStudentId] = useState("")

	const handleRegister = async () => {
		if(!code) return alert("Code field can't be empty")
		if(!studentId) return alert("Student DNI field can't be empty")
		if(code && studentId) dispatch(postStudentIntoCourse({code,studentId}));	
		setCode("");
		setStudentId("");
	}
	const handleRemove = async () => {
		if(!code) return alert("Code field can't be empty")
		if(!studentId) return alert("Student DNI field can't be empty")
		if(code && studentId) dispatch(deleteStudentFromCourse({code,studentId}));
		setCode("");
		setStudentId("");
	}

	return (
		<>
			<div className='container'>

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
								value={code}
								onChange={e => setCode(e.target.value)}
							/>
						</tr>

						<tr key="studentId" className='fw-bold'>
							Student DNI:
						</tr>
						<tr>
							<input type="text"
								className={`form-control form-control-sm`}
								autoComplete="off"
								placeholder="Student DNI"
								value={studentId}
								onChange={e => setStudentId(e.target.value)}
							/>
						</tr>
						<p />
					</tbody>
				</table>

				<div className='row'>
					<div className="col">
						<button onClick={()=>handleRegister()} className="btn btn-primary btn-sm">Register</button>
					</div>
					<div className="col">
						<button onClick={()=>handleRemove()} className="btn btn-danger btn-sm">Remove</button>
					</div>

				</div>
			</div>
		</>
	)
}

export default RegisterStudentIntoClass