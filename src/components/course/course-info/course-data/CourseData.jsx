import React, {  useEffect, useState } from 'react'
import { deleteCourse, setCourseDetails, updateCourse } from '../../../../redux/reducers/courseReducer';
import { useDispatch, useSelector } from 'react-redux';
import '../styles.css';
import { DELETE_COURSE_SUCCESS } from '../../../../redux/reducers/global-message-reducer/messages';

const CourseData = () => {
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { courseDetails } = useSelector(state => state.courses);
	const { type } = useSelector(state => state.fetch);
	const dispatch = useDispatch();

	useEffect(() => {
		if(type === DELETE_COURSE_SUCCESS){
		  dispatch(setCourseDetails({}));
		}
	  }, [type])

	const handleDelete = async (code) => {
		if (code) {
			dispatch(deleteCourse({ code }));
		} else {
			alert("You should select a course from the list first")
		}
	}
	const handleUpdate = async (code) => {
		if (!title) return alert("Title field can't be empty")
		if (!description) setDescription("");
		let courseUpdated = { ...courseDetails, title, description, students:null }
		dispatch(updateCourse({ code, courseUpdated }));
		setEditMode(false);
	}

	const handleEditMode = (code) => {
		if (code) {
			setTitle(courseDetails.title);
			setDescription(courseDetails.description);
			setEditMode(true);
		} else {
			alert("You should select a course from the list first")
		}
	}

	return (
		<>
			<div className='container course-info-max-height'>

				<table className='container'>
					<tbody>

						<tr key="dni">
							<td className='fw-bold'>CODE: </td>
							<td className='justify-content-end details-text-body__size'>{courseDetails.code ? courseDetails.code : "None selected"}</td>
						</tr>

						<tr>
							<td className='fw-bold '>TITLE: </td>
							<td className='justify-content-end details-text-body__size'> {!editMode ? courseDetails.title ? courseDetails.title : "None selected" :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={courseDetails.title}
										value={title}
										onChange={e => setTitle(e.target.value)}

									/>
								</>
							}</td>
						</tr>

						<tr>
							<td className='fw-bold'>DESCRIPTION: </td>
						</tr>
						<tr>
						<td className='justify-content-end details-text-body__size'>{!editMode ? courseDetails.description ? courseDetails.description : "None" :
								<>
									<input type="text"
										className={`form-control form-control-sm`}
										autoComplete="off"
										placeholder={courseDetails.description}
										value={description}
										onChange={e => setDescription(e.target.value)}
									/>
								</>
							}</td>
						</tr>
					</tbody>
				</table>

				<div className='row mt-2'>
					{editMode ?
						<>
							<div className="col">
								<button className="btn btn-primary btn-sm" onClick={() => handleUpdate(courseDetails.code)}>Update</button>
							</div>
							<div className="col ">
								<button className="btn btn-danger btn-sm" onClick={() => setEditMode(!editMode)}>Cancel</button>
							</div>
						</>
						:
						<>
							<div className="col">
								<button className="btn btn-warning btn-sm" onClick={() => handleEditMode(courseDetails.code)}>Edit</button>
							</div>
							<div className="col">
								<button className="btn btn-danger btn-sm" onClick={() => handleDelete(courseDetails.code)}>Delete</button>

							</div>
						</>
					}
				</div>
			</div>


		</>
	)
}

export default CourseData