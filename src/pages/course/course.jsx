import React, { useEffect } from 'react'
import CourseInfo from '../../components/course/course-info/CourseInfo';
import CourseTable from '../../components/course/course-list/CourseTable';
import CreateCourse from '../../components/course/create-course/CreateCourse';
import { useDispatch } from 'react-redux';
import './style.css'
import { getCourses } from '../../redux/reducers/courseReducer';

const Course = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch])

  return (
    <div className='container-fluid container-extended'>
      <div className='row'>
        <div className='col-7'>
          <div className='container mt-5 mb-16 ml-3 mr-5 component'>
            <div className="create-Course pt-2">
             <CreateCourse/>
            </div>
            <div className='courses-list'>
              <CourseTable />
            </div>
          </div>
        </div>
        <div className='col-5'>
          <div className='container mt-5 mb-16 ml-5 mr-3 component d-flex flex-column'>
            <div className="info-Course">
              <CourseInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
