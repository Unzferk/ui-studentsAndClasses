import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteStudentFromCourse, postStudentIntoCourse } from '../../../redux/reducers/courseReducer';
import ModalMessage from '../../global/ModalMessage';
import useModal from '../../hooks/useModal';

const RegisterStudentIntoClass = () => {

	const dispatch = useDispatch();
	const [code, setCode] = useState("");
	const [studentId, setStudentId] = useState("");
	const  {showModal, mTitle, setMtitle, mMessage, setMmessage, mShow} = useModal();

	const handleRegister = async () => {
		if(!code || !studentId){
			setMtitle("Error");
			setMmessage("Both fields should be filled");
			showModal();
		}
		if(code && studentId) dispatch(postStudentIntoCourse({code,studentId}));	
		setCode("");
		setStudentId("");
	}
	const handleRemove = async () => {
		if(!code || !studentId){
			setMtitle("Error");
			setMmessage("Both fields should be filled");
			showModal();
		}
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
			<ModalMessage title={mTitle} message={mMessage} show= {mShow} setModal={showModal}/>
		</>
	)
}

export default RegisterStudentIntoClass