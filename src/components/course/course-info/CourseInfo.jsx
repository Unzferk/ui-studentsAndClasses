import React from 'react'
import CourseStudents from './course-student-list/CoursesStudents'
import CourseData from './course-data/CourseData'
import RegisterStudentIntoClass from '../register-student-into-class/RegisterStudentIntoClass'
import './styles.css'

const CourseInfo = () => {
  return (
    <div className='container course-info-container mt-2 ml-2 mr-2'>

      <div className="row">

        <div className="col-6">
          <div className="row  course-details-max-height ">
            <div className='title-course h4'> Course Details </div>
            <CourseData />
          </div>
          <hr/>
          <div className="row">
            <div className='title-course h4'> Register / Remove Student from Course </div>
            <RegisterStudentIntoClass />
          </div>
        </div>

        <div className="col-6">
          <div className='title-course h4'> Students in this Course </div>
          <CourseStudents />
        </div>

      </div>

    </div>
  )
}

export default CourseInfo