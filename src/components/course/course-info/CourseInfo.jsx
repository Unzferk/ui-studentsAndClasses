import React from 'react'
import CourseStudents from './course-student-list/CoursesStudents'
import CourseData from './course-data/CourseData'

const CourseInfo = () => {
    return (
        <div className='container container-course mt-2 mb-2 ml-2 mr-2'>
    
          <div className="row">
            <div className="col-5">
              <div className='title-course h4'> Course Details </div>
              <CourseData/>
            </div>
    
            <div className="col-7">
              <div className='title-course h4'> Students in this Course </div>
              <CourseStudents />
            </div>
            
          </div>
    
        </div>
      )
}

export default CourseInfo