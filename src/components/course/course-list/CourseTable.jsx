import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getCourses, setCourseDetails } from '../../../redux/reducers/courseReducer';
import { POST_COURSE_SUCCESS, POST_COURSE_FAILURE, DEFAULT_FETCH_MESSAGE, DEFAULT_FETCH_STATUS, DEFAULT_FETCH_TYPE, POST_STUDENT_INTO_COURSE_SUCCESS, DELETE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS } from '../../../redux/reducers/global-message-reducer/messages';
import { setFetchMessage } from '../../../redux/reducers/global-message-reducer/fetchMessageReducer';
import './style.css'

const CourseTable = () => {
  
    const dispatch = useDispatch();
    const { courses } = useSelector(state => state.courses);
    const { type, message } = useSelector(state => state.fetch);

    useEffect(() => {
      if(type===POST_COURSE_SUCCESS || type === DELETE_COURSE_SUCCESS || type===UPDATE_COURSE_SUCCESS){
        dispatch(getCourses());
        alert("SUCCESSFUL !")
        dispatch(setFetchMessage({status:DEFAULT_FETCH_STATUS, message:DEFAULT_FETCH_MESSAGE, type:DEFAULT_FETCH_TYPE}));
      }
      if(type===POST_COURSE_FAILURE){
        alert("message: "+message);
        dispatch(setFetchMessage({status:DEFAULT_FETCH_STATUS, message:DEFAULT_FETCH_MESSAGE, type:DEFAULT_FETCH_TYPE}));
      }
    }, [type])

    const setCourseInfo = (course) =>{
      dispatch(setCourseDetails(course));
    }

    return (
      <div className='container container-course__table pt-3 pb-2 pl-2 pr-2'>
        <div className='title-course h4'> Courses List  </div>
        <div className="table-courses-overflow">
          <table className="table table-sm table-hover col-8 table-overflow">
            <thead>
              <tr>
                <th scope="col-2">Code</th>
                <th scope="col-4">Title</th>
                <th scope="col-4">Description</th>
                <th scope='col-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses && courses.map((course) => {
                return (
                  <tr key={course.code}>
                    <td className='table-courses-font-size'>{course.code}</td>
                    <td className='table-courses-font-size'>{course.title}</td>
                    <td className='table-courses-font-size'>{course.description} </td>
                    <td>
                      <i className="material-icons material-symbols-outlined " onClick={()=>setCourseInfo(course)}>visibility</i>
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

export default CourseTable