import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import { AppRouter } from './routes/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>    
    <AppRouter />
  </Provider>
);
