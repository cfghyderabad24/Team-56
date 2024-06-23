import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit() {
    const username = document.getElementById('idun').value;
    const password = document.getElementById('idpw').value;
    console.log({ un: username, pw: password });

    axios
      .post('http://localhost:8081/check', {
        un: username,
        pw: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data !== 'fail') {
          dispatch({
            type: 'login',
            data: { un: response.data.name, role: response.data.role },
          });
          Swal.fire({
            title: 'Login Successful',
            icon: 'success',
          });
          navigate('/home');
          setTimeout(() => {
            dispatch({ type: 'logout' });
            Swal.fire({
              title: 'Logged out due to inactivity',
              icon: 'info',
            });
          }, 600000); // 10 minutes
        } else {
          Swal.fire({
            title: 'Login Unsuccessful',
            icon: 'error',
          });
        }
      });
  }

  function handleMouseOver() {
    document.getElementById('idlogin').style.boxShadow = '10px 10px 15px grey';
  }

  function handleMouseLeave() {
    document.getElementById('idlogin').style.boxShadow = '0px 0px 0px grey';
  }

  const loginFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    padding: '20px',
    margin: '50px auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const labelStyle = {
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
  };

  return (
    <div
      id="idlogin"
      style={loginFormStyle}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={headingStyle}> Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="idun" style={labelStyle}>Username:</label>
          <input type="text" id="idun" name="un" style={inputStyle} required />
        </div>
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <label htmlFor="idpw" style={labelStyle}>Password:</label>
          <input type="password" id="idpw" name="pw" style={inputStyle} required />
        </div>
        <button type="submit" onClick={handleSubmit} style={buttonStyle}>Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
  );
}