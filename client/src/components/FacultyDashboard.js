import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FacultyDashboard from './FacultyDashboard';
import Home from './Home';
import Student from './Student';
import Faculty from './Faculty';
import FacultyData from './FacultyData';
import Login from './Login';
import Registration from './Registration';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/facultydata" element={<FacultyData />} />
      </Routes>
    </Router>
  );
}
