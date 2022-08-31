import React from 'react'
import { useDispatch } from 'react-redux';
import { setStudentDetails } from '../../../redux/reducers/studentReducer';
import './style.css'

const StudentTable = ({ students }) => {

  const dispatch = useDispatch();

  const setStudentInfo = (student) =>{
    dispatch(setStudentDetails(student));
  }

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