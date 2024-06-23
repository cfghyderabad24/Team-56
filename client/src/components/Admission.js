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
import './Admission.css';

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
    axios.post('http://localhost:8081/ent', formData).then((response) => {
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '20px' }}>
      {appointmentDetails ? (
        <AppointmentDetails appointmentDetails={appointmentDetails} />
      ) : (
        <Paper elevation={10} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', maxWidth: '400px', marginTop: '40px', maxHeight: '90vh', overflow: 'auto' }}>
          <Typography variant="h6" gutterBottom style={{ textAlign: 'center', marginTop: '10px' }}>
            Admission
          </Typography>
          <form onSubmit={handleSubmit} onChange={handleInputChange}>
            {/* Parent Information */}
            <TextField label="Name" fullWidth margin="normal" required name="parentName" id="parentName" />
            
            {/* Gender Dropdown */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Income less than 2.5lakhs</InputLabel>
              <Select label="Gender" name="gender" id="gender">
                <MenuItem value="male">Yes</MenuItem>
                <MenuItem value="female">No</MenuItem>
              </Select>
            </FormControl>
            
            <TextField label="Age" type="number" fullWidth margin="normal" required name="age" id="age" />
            <TextField label="Mobile" type="tel" fullWidth margin="normal" required name="mobile" id="mobile" />
            
            {/* Email Input */}
            <TextField label="Email" type="email" fullWidth margin="normal" required name="email" id="email" />

            {/* Student Information */}
            <TextField label="Student ID" fullWidth margin="normal" required name="studentId" id="studentId" />
            
            
            {/* Department Dropdown */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Course for teaching</InputLabel>
              <Select label="Department" name="department" id="department">
                <MenuItem value="CSE-H">Autistic</MenuItem>
                <MenuItem value="CSE-R">Down Syndrome</MenuItem>
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
            <TextField label="Certificates" fullWidth margin="normal" required name="purpose" id="purpose" />
            

            <input
              type="file"
              accept=".pdf"
              style={{ marginTop: '10px', padding: '6px', backgroundColor: 'white', border: 'none', borderRadius: '4px' }}
              required
              name="file"
              id="file"
            />
            <Box mt={2}>
              
              <Button variant="contained" color="secondary" onClick={handleUpdate} style={{ marginLeft: '10px' }}>
                Save Data
              </Button>
            </Box>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default Entry;