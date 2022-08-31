import React from 'react'
import { useSelector } from 'react-redux'

const CoursesStudents = () => {
    const { students } = useSelector(state => state.courses.courseDetails);
    return (
      <div className='container container-course__table pt-3 pb-2 pl-2 pr-2'>
        <div className="table-courses-overflow">
          <table className="table table-sm table-hover col-8 table-overflow">
            <tbody>
              {students && students.map((student) => {
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