import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AppointmentDetails from './AppointmentDetails';
import './Entry.css'; // Import the CSS file

const Entry = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      parentName: event.target.elements.parentName.value,
      gender: event.target.elements.gender.value,
      age: event.target.elements.age.value,
      mobile: event.target.elements.mobile.value,
      email: event.target.elements.email.value,
      studentId: event.target.elements.studentId.value,
      studentName: event.target.elements.studentName.value,
      department: event.target.elements.department.value,
      purpose: event.target.elements.purpose.value,
      date: event.target.elements.date.value,
      time: event.target.elements.time.value,
      fileName: event.target.elements.file.files[0].name,
    };

    console.log(formData);

    // Logic to handle form submission (you might need to handle file upload differently)
    axios.post('http://localhost:8081/entry', formData).then((response) => {
      console.log(response.data);
      setAppointmentDetails(formData);
    });
  };

  const handleUpdate = () => {
    const formData = {
      parentName: document.getElementById("parentName").value,
      gender: document.getElementById("gender").value,
      age: document.getElementById("age").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      studentId: document.getElementById("studentId").value,
      studentName: document.getElementById("studentName").value,
      department: document.getElementById("department").value,
      purpose: document.getElementById("purpose").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      fileName: document.getElementById("file").files[0].name,
    };

    axios.put('http://localhost:8081/entry', formData).then((response) => {
      console.log(response.data);
    });
  };

  const handleInputChange = () => {
    const requiredFields = document.querySelectorAll('[required]');
    const isValid = Array.from(requiredFields).every((field) => field.value.trim() !== '');
    setIsFormValid(isValid);
  };

  useEffect(() => {
    setIsFormValid(false);
  }, []);

  return (
    <div className="container">
      {appointmentDetails ? (
        <AppointmentDetails appointmentDetails={appointmentDetails} />
      ) : (
        <Paper elevation={10} className="paper">
          <Typography variant="h6" gutterBottom className="title">
            Survey Form
          </Typography>
          <form onSubmit={handleSubmit} onChange={handleInputChange}>
            {/* Parent Information */}
            <TextField label="Parent's Name" className="textField" required name="parentName" id="parentName" />
            
            {/* Gender Dropdown */}
            <FormControl className="formControl" required>
              <InputLabel>Disability</InputLabel>
              <Select label="Disability" name="gender" id="gender">
                <MenuItem value="male">Yes</MenuItem>
                <MenuItem value="female">No</MenuItem>
              </Select>
            </FormControl>
            
            <TextField label="Age" type="number" className="textField" id="age" />
            <TextField label="Mobile" type="tel" className="textField" id="mobile" />
            
            {/* Student Information */}
            <TextField label="Income" className="textField" required name="studentId" id="studentId" />
            <TextField label="Area" className="textField" id="studentName" />
            
            {/* Department Dropdown */}
            <FormControl className="formControl">
              <InputLabel>Disability information</InputLabel>
              <Select label="Department" name="department" id="department">
                <MenuItem value="CSE-H">Autistic</MenuItem>
                <MenuItem value="CSE-R">Down syndrome</MenuItem>
                <MenuItem value="CS&IT">Visual Impairment</MenuItem>
                <MenuItem value="ECE">Hearing Impairment</MenuItem>
                <MenuItem value="EEE">Intelectual Disability</MenuItem>
                <MenuItem value="CIVIL">Deaf Blindness</MenuItem>
                <MenuItem value="MECH">Emotional Disturbance</MenuItem>
                <MenuItem value="IOT">Mental Illness</MenuItem>
                <MenuItem value="AI&DS">Mental Retardation</MenuItem>
              </Select>
            </FormControl>
            
            {/* Visit Details */}
            <TextField label="Donations" className="textField" id="purpose" />
            <TextField type="date" className="textField" required name="date" id="date" />
            
            <input
              type="file"
              accept=".pdf"
              className="fileInput"
              required
              name="file"
              id="file"
            />
            <Box mt={2}>
              <Button variant="contained" color="secondary" onClick={handleUpdate} className="submitButton">
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default Entry;


