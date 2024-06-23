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

function PlacementForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    gender: '',
    age: '',
    mobile: '',
    email: '',
    studentId: '',
    studentName: '',
    department: '',
    purpose: '',
    date: '',
    time: '',
    fileName: ''
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from the API
    fetch('http://localhost:8081/display')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Send formData to the server using fetch or axios
    fetch('http://localhost:8081/vol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Reset the form
        setFormData({
          parentName: '',
          gender: '',
          age: '',
          mobile: '',
          email: '',
          studentId: '',
          studentName: '',
          department: '',
          purpose: '',
          date: '',
          time: '',
          fileName: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} style={{ padding: 24, maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom>
          Volunteer Visit Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Parent's Name"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Student ID</InputLabel>
            <Select
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
            >
              {students.map((student) => (
                <MenuItem key={student.sid} value={student.sid}>
                  {student.sid}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Purpose of Visit"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="File Name"
            name="fileName"
            value={formData.fileName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default PlacementForm;
