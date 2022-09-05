import StudentCourses from './studentCoursesList/StudentCourses';
import StudentData from './studentData/StudentData';

const StudentInfo = () => {
	return (
		<div className='container container-student mt-2 mb-2 ml-2 mr-2'>
			<div className='row'>
				<div className='col-5'>
					<div className='title-student h4'> Student Details </div>
					<StudentData />
				</div>

				<div className='col-7'>
					<div className='title-student h4'> Student Courses Registered </div>
					<StudentCourses />
				</div>
			</div>
		</div>
	);
};

export default StudentInfo;
