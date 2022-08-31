import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../reducers/studentReducer'
import courseReducer from '../reducers/courseReducer';
import rootSaga from '../sagas/saga';
import fetchMessageReducer from '../reducers/global-message-reducer/fetchMessageReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        students: studentReducer,
        courses: courseReducer,
        fetch: fetchMessageReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);