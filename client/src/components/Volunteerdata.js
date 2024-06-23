import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  noData: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
  },
  downloadBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  downloadBtnHover: {
    backgroundColor: '#0056b3',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  studentsTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  deleteBtnHover: {
    backgroundColor: '#c82333',
  },
};

const Student = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8081/display')
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (studentId) => {
    axios.delete('http://localhost:8081/delete', {
      params: { id: studentId }
    })
    .then((response) => {
      console.log(response.data);
      // Refresh the data after delete
      fetchData();
    })
    .catch((error) => {
      console.error('Error deleting data:', error);
    });
  };

  const handleDownload = () => {
    if (!result || result.length === 0) {
      alert("No data available to download.");
      return;
    }

    const ws = XLSX.utils.json_to_sheet(result);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Student");
    XLSX.writeFile(wb, "Student.xlsx");
  };

  if (!result) {
    return (
      <div style={styles.container}>
        <h2>The Placement Data</h2>
        <div style={styles.noData}>The Placement Data is Not Available</div>
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <h2>The Placement Data</h2>
        <button
          style={{ ...styles.downloadBtn, ...(result.length === 0 && { pointerEvents: 'none', opacity: 0.5 }) }}
          onClick={handleDownload}
        >
          Download as Excel
        </button>
        <br /><br />
        <div style={styles.tableContainer}>
          <table style={styles.studentsTable}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}></th>
              </tr>
            </thead>
            <tbody>
              {result.map((user) => (
                <tr key={user.studentId}>
                  <td style={styles.tableCell}>{user.parentName}</td>
                  <td style={styles.tableCell}>{user.gender}</td>
                  <td style={styles.tableCell}>{user.age}</td>
                  <td style={styles.tableCell}>{user.mobile}</td>
                  <td style={styles.tableCell}>{user.email}</td>
                  <td style={styles.tableCell}>{user.studentId}</td>
                  <td style={styles.tableCell}>{user.studentName}</td>
                  <td style={styles.tableCell}>{user.department}</td>
                  <td style={styles.tableCell}>{user.purpose}</td>
                  <td style={styles.tableCell}>{user.date}</td>
                  <td style={styles.tableCell}>{user.time}</td>
                  <td style={styles.tableCell}>{user.fileName}</td>
                  <td style={styles.tableCell}>
                    <button
                      style={styles.deleteBtn}
                      onClick={() => handleDelete(user.studentId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Student;
