import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Navigation } from '../components/global/navbar';
import Course from '../pages/course/course';
import Student from '../pages/student/Student'

import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/course" element={<Course />} />
        <Route path="*" element={<Navigate to ="/student" replace/>}/>
      </Routes>
    </Router>
  )
};