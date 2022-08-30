import {put, takeLatest, all} from 'redux-saga/effects';
import { getStudentsSuccess, postStudentsSuccess } from '../reducers/studentReducer';
import axios from 'axios';

function* obtainStudents(){
    const url = `${process.env.REACT_APP_API_URL}/v1/student`;
    const response = yield axios.get(url);
    if(response.status == 200){
        yield put(getStudentsSuccess(response.data));
    }
}
function* createStudent(action){
    console.log(JSON.stringify(action.payload))
    const url = `${process.env.REACT_APP_API_URL}/v1/student`;
    const response = yield axios.post(url,action.payload);
    if(response.status == 201){
        yield put(postStudentsSuccess(response.data));
    }
}

function* getStudent(){
    yield takeLatest('students/getStudents', obtainStudents);
}
function* postStudent(){
    yield takeLatest('students/postStudent', createStudent);
}

export default function* rootSaga() {
    yield all([
      getStudent(),
      postStudent(),
    ]);
}