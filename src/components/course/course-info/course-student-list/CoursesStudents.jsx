import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsFromCourse, setStudentsInCourse } from '../../../../redux/reducers/courseReducer';
import {  setFetchMessageDefault } from '../../../../redux/reducers/global-message-reducer/fetchMessageReducer';
import { DELETE_COURSE_SUCCESS, DELETE_STUDENT_FROM_COURSE_FAILURE, DELETE_STUDENT_FROM_COURSE_SUCCESS, POST_STUDENT_INTO_COURSE_FAILURE, POST_STUDENT_INTO_COURSE_SUCCESS } from '../../../../redux/reducers/global-message-reducer/messages';

const CoursesStudents = () => {
    const { studentsInCourse } = useSelector(state => state.courses);
    const { code } = useSelector(state=> state.courses.courseDetails)
    const { type, message } = useSelector(state => state.fetch);

    const dispatch = useDispatch();

    useEffect(() => { 
      if(type===POST_STUDENT_INTO_COURSE_SUCCESS || type===DELETE_STUDENT_FROM_COURSE_SUCCESS ){
        dispatch(getStudentsFromCourse({code:code}));
        dispatch(setFetchMessageDefault());
        
      }
      if(type===POST_STUDENT_INTO_COURSE_FAILURE || type===DELETE_STUDENT_FROM_COURSE_FAILURE){
        alert(message);
        dispatch(setFetchMessageDefault());
      }
      if(type === DELETE_COURSE_SUCCESS){
        dispatch(setStudentsInCourse([]));
        }
        dispatch(setFetchMessageDefault());
    }, [type])

    useEffect(() => {
        if(code){
          dispatch(getStudentsFromCourse({code:code}));
          dispatch(setFetchMessageDefault());
        }
    }, [code])
    
    return ( 
      <div className='container container-course__table pt-3 pb-2 pl-2 pr-2'>
        <div className="table-courses-overflow">
          <table className="table table-sm table-hover col-8 table-overflow">
            <tbody>
              {studentsInCourse && studentsInCourse.map((student) => {
                return (
                  <tr key={student.studentId}>
                    <td className='table-courses-font-size'>{student.studentId}</td>
                    <td className='table-courses-font-size'>{student.lastName}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default CoursesStudents