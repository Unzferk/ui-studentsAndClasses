import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../reducers/studentReducer'
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        students: studentReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);