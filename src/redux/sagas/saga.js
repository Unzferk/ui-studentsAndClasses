import {put, takeLatest, all} from 'redux-saga/effects';
import { getStudentsSuccess } from '../reducers/studentReducer';
import axios from 'axios';

function* obtainStudents(){
    const response = yield axios.get(`${process.env.REACT_APP_API_URL}/v1/student`);
    if(response.status == 200){
        yield put(getStudentsSuccess(response.data));
    }
}

function* getStudent(){
    yield takeLatest('students/getStudents', obtainStudents);
}

export default function* rootSaga() {
    yield all([
      getStudent()
    ]);
}