import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getCourses, setCourseDetails, setStatus } from '../../../redux/reducers/courseReducer';
import './style.css'

const CourseTable = () => {

    const dispatch = useDispatch();
    const { courses } = useSelector(state => state.courses);
    const { status } = useSelector(state => state.courses);

    useEffect(() => {
      if(status=="created"){
        dispatch(getCourses());
        dispatch(setStatus(""));
      }
    }, [status])
    

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
                      <i className="material-icons" onClick={()=>setCourseInfo(course)}>visibility</i>
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