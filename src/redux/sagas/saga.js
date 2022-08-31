import {put, takeLatest, all} from 'redux-saga/effects';
import { getStudentsSuccess, postStudentsSuccess } from '../reducers/studentReducer';
import axios from 'axios';
import { getCoursesSuccess, postCoursesSuccess } from '../reducers/courseReducer';

function* obtainStudents(){
    const url = `${process.env.REACT_APP_API_URL}/v1/student`;
    const response = yield axios.get(url);
    if(response.status == 200){
        yield put(getStudentsSuccess(response.data));
    }
}
function* createStudent(action){
    const url = `${process.env.REACT_APP_API_URL}/v1/student`;
    const response = yield axios.post(url,action.payload);
    if(response.status == 201){
        yield put(postStudentsSuccess(response.data));
    }
}
function* obtainCourses(){
    const url = `${process.env.REACT_APP_API_URL}/v1/course`;
    const response = yield axios.get(url);
    if(response.status == 200){
        yield put(getCoursesSuccess(response.data));
    }
}
function* createCourse(action){
    const url = `${process.env.REACT_APP_API_URL}/v1/course`;
    const response = yield axios.post(url,action.payload);
    if(response.status == 201){
        yield put(postCoursesSuccess(response.data));
    }
}

function* getStudent(){
    yield takeLatest('students/getStudents', obtainStudents);
}
function* postStudent(){
    yield takeLatest('students/postStudent', createStudent);
}

function* getCourses(){
    yield takeLatest('courses/getCourses', obtainCourses);
}
function* postCourse(){
    yield takeLatest('courses/postCourse', createCourse);
}

export default function* rootSaga() {
    yield all([
      getStudent(),
      postStudent(),
      getCourses(),
      postCourse(),
    ]);
}