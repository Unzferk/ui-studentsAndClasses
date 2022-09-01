import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFetchMessage } from '../../../redux/reducers/global-message-reducer/fetchMessageReducer';
import { DEFAULT_FETCH_MESSAGE, DEFAULT_FETCH_STATUS, DEFAULT_FETCH_TYPE, DELETE_STUDENT_SUCCESS, POST_STUDENT_FAILURE, POST_STUDENT_SUCCESS, UPDATE_STUDENT_SUCCESS } from '../../../redux/reducers/global-message-reducer/messages';
import { getStudents, setStudentDetails } from '../../../redux/reducers/studentReducer';
import './style.css'

const StudentTable = () => {

  const dispatch = useDispatch();
  const { students } = useSelector(state => state.students);
  const { type, message } = useSelector(state => state.fetch);

  const setStudentInfo = (student) =>{
    dispatch(setStudentDetails(student));
  }

  useEffect(() => { 
    if(type===POST_STUDENT_SUCCESS || type===DELETE_STUDENT_SUCCESS || type===UPDATE_STUDENT_SUCCESS){
      dispatch(getStudents());
      alert("SUCCESSFUL !")
      dispatch(setFetchMessage({status:DEFAULT_FETCH_STATUS, message:DEFAULT_FETCH_MESSAGE, type:DEFAULT_FETCH_TYPE}));
    }
    if(type===POST_STUDENT_FAILURE){
      alert("message: "+message);
      dispatch(setFetchMessage({status:DEFAULT_FETCH_STATUS, message:DEFAULT_FETCH_MESSAGE, type:DEFAULT_FETCH_TYPE}));
    }
  }, [type])

  return (
    <div className='container container-student__table pt-3 pb-2 pl-2 pr-2'>
      <div className='title-student h4'> Students List  </div>
      <div className="table-students-overflow">
        <table className="table table-sm table-hover col-8 table-overflow">
          <thead>
            <tr>
              <th scope="col-2">StudentId</th>
              <th scope="col-4">Name</th>
              <th scope="col-4">Last Name</th>
              <th scope='col-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students && students.map((stud) => {
              return (
                <tr key={stud.studentId}>
                  <td className='table-students-font-size'>{stud.studentId}</td>
                  <td className='table-students-font-size'>{stud.firstName}</td>
                  <td className='table-students-font-size'>{stud.lastName} </td>
                  <td>
                    <i className="material-icons" onClick={()=>setStudentInfo(stud)}>visibility</i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default StudentTable