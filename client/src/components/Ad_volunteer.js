import React, { useState } from 'react';
import   './components/Ad_volunteer.css';
const AdVolunteer = () => {
    const [idVolunteer, setIdVolunteer] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="idVolunteer">ID Volunteer:</label>
            <input
                type="text"
                id="idVolunteer"
                value={idVolunteer}
                onChange={(e) => setIdVolunteer(e.target.value)}
            />

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="age">Age:</label>
            <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <label htmlFor="file">File:</label>
            <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default AdVolunteer;

const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object and append the form values
    const formData = new FormData();
    formData.append('idVolunteer', idVolunteer);
    formData.append('name', name);
    formData.append('age', age);
    if (file) {
        formData.append('file', file);
    }
    formData.append('password', password);

    // Send the FormData to your backend
    try {
        const response = await fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            body: formData,
            // Do not set Content-Type header when sending FormData
            // The browser will set it automatically, including the boundary parameter
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
        // Handle success response
    } catch (error) {
        console.error('Error:', error);
        // Handle errors here
    }
};