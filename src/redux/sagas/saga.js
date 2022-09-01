import { put, takeLatest,all} from 'redux-saga/effects';
import { getStudentsSuccess, postStudentsSuccess } from '../reducers/studentReducer';
import axios from 'axios';
import { courseIsLoadingFalse, getCoursesSuccess, getStudentsFromCourseSuccess, postCoursesSuccess, updateCourseSuccess } from '../reducers/courseReducer';
import { setFetchMessage } from '../reducers/global-message-reducer/fetchMessageReducer';
import { DELETE_COURSE_SUCCESS, DELETE_STUDENT_FROM_COURSE_FAILURE, DELETE_STUDENT_FROM_COURSE_SUCCESS, POST_COURSE_FAILURE, POST_COURSE_SUCCESS, POST_STUDENT_FAILURE, POST_STUDENT_INTO_COURSE, POST_STUDENT_INTO_COURSE_FAILURE, POST_STUDENT_INTO_COURSE_SUCCESS, POST_STUDENT_SUCCESS, UPDATE_COURSE_SUCCESS } from '../reducers/global-message-reducer/messages';

function* obtainStudents() {
    const url = `${process.env.REACT_APP_API_URL}/v1/student`;
    const response = yield axios.get(url);
    if (response.status === 200) {
        yield put(getStudentsSuccess(response.data));
    }
}
function* createStudent(action) {
    const url = `${process.env.REACT_APP_API_URL}/v1/student`;
    const response = yield axios.post(url, action.payload);
    if (response.status === 201) {
        yield put(postStudentsSuccess(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: POST_STUDENT_SUCCESS}));
    }else{
        yield put(setFetchMessage({status: response.status, message:response.message, type: POST_STUDENT_FAILURE}));
    }
}
function* obtainCourses() {
    const url = `${process.env.REACT_APP_API_URL}/v1/course`;
    const response = yield axios.get(url); 
        if(response.status === 200){
        yield put(getCoursesSuccess(response.data));
    }
}
function* createCourse(action) {
    const url = `${process.env.REACT_APP_API_URL}/v1/course`;
    const response = yield axios.post(url, action.payload);
    if (response.status === 201) {
        yield put(postCoursesSuccess(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: POST_COURSE_SUCCESS}));
    } else {
        yield put(courseIsLoadingFalse(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: POST_COURSE_FAILURE}));
    }
}

function* addStudentIntoCourse(action){
    const { code } = action.payload;
    const { studentId } = action.payload;
    const url = `${process.env.REACT_APP_API_URL}/v1/course/${code}/${studentId}`;
    const response = yield axios.put(url);
    if (response.status === 202) {
        yield put(courseIsLoadingFalse(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: POST_STUDENT_INTO_COURSE_SUCCESS}));
    } else {
        yield put(courseIsLoadingFalse(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: POST_STUDENT_INTO_COURSE_FAILURE}));
    }
}
function* removeStudentFromCourse(action){
    const { code } = action.payload;
    const { studentId } = action.payload;
    const url = `${process.env.REACT_APP_API_URL}/v1/course/${code}/${studentId}`;
    const response = yield axios.delete(url);
    if (response.status === 202) {
        yield put(courseIsLoadingFalse(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: DELETE_STUDENT_FROM_COURSE_SUCCESS}));
    } else {
        yield put(courseIsLoadingFalse(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: DELETE_STUDENT_FROM_COURSE_FAILURE}));
    }
}

function* obtainStudentsFromCourse(action){
    const { code } = action.payload;
    const url = `${process.env.REACT_APP_API_URL}/v1/course/${code}/student`;
    const response = yield axios.get(url);
    if (response.status === 200) {
        yield put(getStudentsFromCourseSuccess(response.data));
    }
}

function* removeCourse(action){
    const { code } = action.payload
    const url = `${process.env.REACT_APP_API_URL}/v1/course/${code}`;
    const response = yield axios.delete(url);
    if (response.status === 200) {
        yield put(courseIsLoadingFalse(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: DELETE_COURSE_SUCCESS}));
    }
}

function* modifyCourse(action){
    const {code} = action.payload;
    const {courseUpdated} = action.payload;
    const url = `${process.env.REACT_APP_API_URL}/v1/course/${code}`;
    const response = yield axios.put(url, courseUpdated);
    if (response.status === 202) {
        yield put(updateCourseSuccess(response.data));
        yield put(setFetchMessage({status: response.status, message:response.message, type: UPDATE_COURSE_SUCCESS}));
    }
}

function* getStudent() {
    yield takeLatest('students/getStudents', obtainStudents);
}
function* postStudent() {
    yield takeLatest('students/postStudent', createStudent);
}

function* getCourses() {
    yield takeLatest('courses/getCourses', obtainCourses);
}
function* postCourse() {
    yield takeLatest('courses/postCourse', createCourse);
}
function* postStudentIntoCourse(){
    yield takeLatest('courses/postStudentIntoCourse', addStudentIntoCourse);
}
function* deleteStudentFromCourse(){
    yield takeLatest('courses/deleteStudentFromCourse', removeStudentFromCourse);
}

function* getStudentsFromCourse(){
    yield takeLatest('courses/getStudentsFromCourse', obtainStudentsFromCourse);
}

function* deleteCourse(){
    yield takeLatest('courses/deleteCourse', removeCourse);
}

function* updateCourse(){
    yield takeLatest('courses/updateCourse', modifyCourse);
}

export default function* rootSaga() {
    yield all([
        getStudent(),
        postStudent(),
        getCourses(),
        postCourse(),
        postStudentIntoCourse(),
        deleteStudentFromCourse(),
        getStudentsFromCourse(),
        deleteCourse(),
        updateCourse(),
    ]);
}