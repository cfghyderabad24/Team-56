import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import Entry from './components/Entry';

import Volunteer from './components/Volunteer';

import Admission from './components/Admission';
import Student from './components/Student';
import Home from './components/Home';
import Faculty from './components/Faculty';
import ViewData from './components/ViewData';
import Facultydata from './components/Facultydata';

import Login from './components/Login';
import Viewdatas from './components/Viewdatas';
import Registration from './components/Registration';
import Volunteerdata from './components/Volunteerdata';
import Profile from './components/Profile';

import Attendance from './components/Attendance';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Appbar />
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view" element={<ViewData />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facultydata" element={<Facultydata />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/volunteerdata" element={<Volunteerdata />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/student" element={<Student />} />
            <Route path="/viewdatas" element={<Viewdatas />} />
            <Route path="/profile" element={<Profile />} />
           
          </Routes>

            <Route path="/facultydata" element={<Facultydata />} />           
            <Route path="/admission" element={<Admission />} />
            <Route path="/student" element={<Student />} />
            <Route path='/getattendance' element={<Attendance />} /> 
          {/* Changed exact to element */}
          </Routes> {/* Changed Switch to Routes */}
        

        </div>
      </div>
    </Router>
  );
}

export default App;