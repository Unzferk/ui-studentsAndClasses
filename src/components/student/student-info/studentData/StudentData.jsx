import React, { useEffect, useState } from 'react'
import { deleteStudent, setStudentDetails, updateStudent } from '../../../../redux/reducers/studentReducer';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_STUDENT_SUCCESS } from '../../../../redux/reducers/global-message-reducer/messages';

const StudentData = () => {

	const [editMode, setEditMode] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const { studentDetails } = useSelector(state => state.students);
	const { type } = useSelector(state => state.fetch);
	const dispatch = useDispatch();

	useEffect(() => {
	  if(type === DELETE_STUDENT_SUCCESS){
		dispatch(setStudentDetails({}));
	  }
	}, [type])

	const handleDelete = async (studentId) => {
		if(studentId){
			dispatch(deleteStudent({ studentId }));
		}else{
			alert("You should select a course from the list first")
		}
	}
	const handleUpdate = async (studentId) => {
		if(!firstName) alert("FirstName field can't be empty")
		if(!lastName) alert("LastName field can't be empty")
		let studentUpdated = {...studentDetails, firstName, lastName}
		dispatch(updateStudent({studentId,studentUpdated}));
		setEditMode(false);
	}

	const handleEditMode = (studentId) =>{
		if(studentId){
			setFirstName(studentDetails.firstName);
			setLastName(studentDetails.lastName);
			setEditMode(true);
		}else{
			alert("You should select a course from the list first")
		}
	}

	return (
		<>
			<div className='container'>

				<table className='container'>
					<tbody>

						<tr key="dni">
							<td className='fw-bold'>DNI: </td>
							<td className='d-flex justify-content-end'>{studentDetails.studentId ? studentDetails.studentId : "None selected"}</td>
						</tr>

						<tr>
							<td className='fw-bold'>FIRST NAME: </td>
							<td className='d-flex justify-content-end'> {!editMode ? studentDetails.firstName ? studentDetails.firstName : "None selected" :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={studentDetails.firstName}	
										value={firstName}
										onChange={e => setFirstName(e.target.value)}
											
									/>
								</>
							}</td>
						</tr>

						<tr>
							<td className='fw-bold'>LAST NAME: </td>
							<td className='d-flex justify-content-end'>{!editMode ? studentDetails.lastName ? studentDetails.lastName : "None" :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={studentDetails.lastName}
										value={lastName}
										onChange={e => setLastName(e.target.value)}
									/>
								</>
							}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<table>
				<tbody>
					<tr>
						{editMode ?
							<>
								<td><button className="btn btn-success btn-sm" onClick={()=>handleUpdate(studentDetails.studentId)}>Update</button></td>
								<td ><button className="btn btn-primary btn-sm" onClick={() => setEditMode(!editMode)}>Cancel</button></td>
							</>
							:
							<>
								<td ><button className="btn btn-warning btn-sm" onClick={() => handleEditMode(studentDetails.studentId)}>Edit</button></td>
								<td ><button className="btn btn-danger btn-sm" onClick={() => handleDelete(studentDetails.studentId)}>Delete</button></td>
							</>
						}
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default StudentData