import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return; // Stop form submission if passwords don't match
    }

    // Clear any previous errors
    setError('');

    // Add your registration logic here (e.g., API call)
    console.log('Registration data:', { username, email, password });

    // Redirect to a blank page after successful submission
    navigate('/blank');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register Account</h2>
        {error && <p style={styles.error}>{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* <div style={styles.formGroup}>
            <input
              type="text"
              value={username}
              placeholder="Your Name"
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div> */}
          <div style={styles.formGroup}>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>Register</button>
        </form>
        <p style={styles.footer}>
          Already registered? <Link to="/login" style={styles.link}>Login</Link>
        </p>

      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  footer: {
    marginTop: '20px',
    color: '#666',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  credit: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#999',
  },
};

export default Registration;


