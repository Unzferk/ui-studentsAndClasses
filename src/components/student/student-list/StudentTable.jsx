import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFetchMessageDefault } from '../../../redux/reducers/global-message-reducer/fetchMessageReducer';
import {  DELETE_STUDENT_SUCCESS, POST_STUDENT_FAILURE, POST_STUDENT_SUCCESS, UPDATE_STUDENT_SUCCESS } from '../../../redux/reducers/global-message-reducer/messages';
import { getStudents, setStudentDetails } from '../../../redux/reducers/studentReducer';
import './style.css';

const searchKeys = ["studentId","firstName","lastName"];
const StudentTable = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const { students } = useSelector(state => state.students);
  const { type, message } = useSelector(state => state.fetch);

  const setStudentInfo = (student) =>{
    dispatch(setStudentDetails(student));
  }

  useEffect(() => { 
    if(type===POST_STUDENT_SUCCESS || type===DELETE_STUDENT_SUCCESS || type===UPDATE_STUDENT_SUCCESS){
      dispatch(getStudents());
      alert("SUCCESSFUL !")
      dispatch(setFetchMessageDefault());
    }
    if(type===POST_STUDENT_FAILURE){
      alert("message: "+message);
      dispatch(setFetchMessageDefault());
    }
  }, [type])

  const searcher = (data) =>{
    let aux = data.filter(
      (student) => searchKeys.some(key=>student[key].toLowerCase().includes(search))
    );
    return aux
  }

  return (
    <div className='container container-student__table pt-3 pb-2 pl-2 pr-2'>
      <div className='title-student h4 row'> 
        <div className='col-4'>Students List</div>
        <div className='col-8'><input 
                className='form-control form-control-sm'
                autoComplete='off'
                placeholder='Search...' 
                onChange={e => setSearch(e.target.value)}/>

        </div>
      </div>
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
            {students && searcher(students).map((stud) => {
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