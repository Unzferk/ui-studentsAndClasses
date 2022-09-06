import { useSelector } from 'react-redux';

const StudentCourses = () => {
  const { courses } = useSelector((state) => state.students.studentDetails);
  return (
    <div className='container container-student__table pt-3 pb-2 pl-2 pr-2'>
      <div className='table-students-overflow'>
        <table className='table table-sm table-hover col-8 table-overflow'>
          <tbody>
            {courses &&
              courses.map((course) => {
                return (
                  <tr key={course.code}>
                    <td className='table-students-font-size'>{course.code}</td>
                    <td className='table-students-font-size'>{course.title}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentCourses;
