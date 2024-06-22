import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes

import Appbar from './components/Appbar';
import Entry from './components/Entry';

import Student from './components/Student';
function App({ store }) {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Appbar store={store} />
          <Routes> {/* Changed Switch to Routes */}
           
           
            <Route path="/entry" element={<Entry />} />
            <Route path="/student" element={<Student />} />
          {/* Changed exact to element */}
          </Routes> {/* Changed Switch to Routes */}
        
        </div>
      </div>
    </Router>
  );
}

export default App;
