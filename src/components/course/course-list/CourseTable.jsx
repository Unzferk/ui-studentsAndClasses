import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, setCourseDetails } from '../../../redux/reducers/courseReducer';
import { POST_COURSE_SUCCESS, POST_COURSE_FAILURE, DEFAULT_FETCH_MESSAGE, DEFAULT_FETCH_STATUS, DEFAULT_FETCH_TYPE, POST_STUDENT_INTO_COURSE_SUCCESS, DELETE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS } from '../../../redux/reducers/global-message-reducer/messages';
import { setFetchMessageDefault } from '../../../redux/reducers/global-message-reducer/fetchMessageReducer';
import './style.css'
import useModal from '../../hooks/useModal';
import ModalMessage from '../../global/ModalMessage';

const searchKeys = ["code", "title"];

const CourseTable = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const { courses } = useSelector(state => state.courses);
  const { type, message } = useSelector(state => state.fetch);
  const  {showModal, mTitle, setMtitle, mMessage, setMmessage, mShow} = useModal();

  useEffect(() => {
    if (type === POST_COURSE_SUCCESS || type === DELETE_COURSE_SUCCESS || type === UPDATE_COURSE_SUCCESS) {
      dispatch(getCourses());
      setMtitle("SUCCESSFUL");
      setMmessage("Your request has been completed successfully");
      showModal();
      dispatch(setFetchMessageDefault());
    }
    if (type === POST_COURSE_FAILURE) {
      setMtitle("FAILURE");
      setMmessage(message);
      showModal();
      dispatch(setFetchMessageDefault());
    }
  }, [type])

  const setCourseInfo = (course) => {
    dispatch(setCourseDetails(course));
  }

  const searcher = (data) => {
    return data.filter(
      (course) => searchKeys.some(key => course[key].toLowerCase().includes(search))
    );
  }

  return (
    <div className='container container-course__table pt-3 pb-2 pl-2 pr-2'>
      <div className='title-course h4 row'>
        <div className='col-4'>Courses List</div>
        <div className='col-8'><input
          className='form-control form-control-sm'
          autoComplete='off'
          placeholder='Search...'
          onChange={e => setSearch(e.target.value)} />

        </div>
      </div>
      <div className="table-courses-overflow container">
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
            {courses && searcher(courses).map((course) => {
              return (
                <tr key={course.code}>
                  <td className='table-courses-font-size'>{course.code}</td>
                  <td className='table-courses-font-size'>{course.title}</td>
                  <td className='table-courses-font-size'>{course.description} </td>
                  <td>
                    <i className="material-icons material-symbols-outlined " onClick={() => setCourseInfo(course)}>visibility</i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <ModalMessage title={mTitle} message={mMessage} show= {mShow} setModal={showModal}/> 
    </div>
  )
}

export default CourseTable