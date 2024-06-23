import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Attendance() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/getattendance').then((response) => {
      console.log(response.data);
      setResult(response.data);
    });
  }, []);

  const countOnes = (obj) => {
    let count = 0;
    
    const recursiveCount = (element) => {
      if (typeof element === 'object') {
        for (const key in element) {
          if (element.hasOwnProperty(key)) {
            recursiveCount(element[key]);
          }
        }
      } else if (element === 1) {
        count++;
      }
    };

    recursiveCount(obj);
    return count;
  };

  if (!result) {
    return (
      <div>
        Attendance Data is Not Available
      </div>
    );
  } else {
    return (
      <div>
        <h2>The Attendance Data</h2>
        <table border="1">
          <thead>
            <tr>
              <th>firstName</th>
              
              <th>id</th>
              <th>disability</th>
              <th>Weekly Attendance</th>
              <th>Weekly Remarks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {result.map((user) => (
              <tr key={user.firstName}>
                <td>{user.firstName}</td>
                <td>{user._id}</td>
                <td>{user.disability}</td>
                <td>{countOnes(user.weeklyAttendance)}</td>
                <td>{JSON.stringify(user.remarks)}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
