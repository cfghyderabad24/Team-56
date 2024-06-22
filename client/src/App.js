import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes

import Appbar from './components/Appbar';
import Entry from './components/Entry';
import Home from './components/Home';
import Admission from './components/Admission';
import Student from './components/Student';
import Home from './components/Home';
import Faculty from './components/Faculty';
import ViewData from './components/ViewData';
import Facultydata from './components/Facultydata';

function App({ store }) {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Appbar store={store} />
          <Routes> {/* Changed Switch to Routes */}
           
           
            <Route path="/entry" element={<Entry />} />
            <Route path="/home" element={<Home />} />

            <Route path="/view" element={<ViewData />} />
<<<<<<< HEAD
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facultydata" element={<Facultydata />} />
=======
            <Route path="/home" element={<Home />} />
>>>>>>> 7696a5f4d025768ae56b33947f34b2d76f860999
           
            <Route path="/admission" element={<Admission />} />
            <Route path="/student" element={<Student />} />
          {/* Changed exact to element */}
          </Routes> {/* Changed Switch to Routes */}
        
        </div>
      </div>
    </Router>
  );
}

export default App;
