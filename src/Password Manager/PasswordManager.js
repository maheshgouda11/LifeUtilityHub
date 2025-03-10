
// import '../../src/Password Manager/pm.css'; 
import './pm.css'

import React, { useState, useEffect } from 'react';
import { FaCopy, FaEdit, FaTrash } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordManager = () => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    showPasswords();
  }, []);

  const copyPassword = async (pass) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = pass;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    } catch (error) {
      console.error('Error copying text:', error);
    }
  };

  const deletePassword = (website) => {
    const updatedPasswords = passwords.filter((e) => e.website !== website);
    setPasswords(updatedPasswords);
    alert(`Successfully deleted ${website}'s password`);
  };

  const showPasswords = () => {
    setPasswords([]);
    setWebsite('');
    setUsername('');
    setPassword('');
    setEditing(false);
    setEditIndex(null);
    setShowPassword(false);
  };

  const savePassword = () => {
    if (!website || !username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    if (editing && editIndex !== null) {
      const updatedPasswords = [...passwords];
      updatedPasswords[editIndex] = {
        website,
        username,
        password,
      };
      setPasswords(updatedPasswords);
      setEditing(false);
      setEditIndex(null);
      setWebsite('');
      setUsername('');
      setPassword('');
    } else {
      const newPassword = {
        website,
        username,
        password,
      };
      setPasswords((prevPasswords) => [...prevPasswords, newPassword]);
      setWebsite('');
      setUsername('');
      setPassword('');
    }
  };

  const editPassword = (index) => {
    setEditing(true);
    setEditIndex(index);
    setWebsite(passwords[index].website);
    setUsername(passwords[index].username);
    setPassword(passwords[index].password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const renderPasswordList = () => {
    return passwords.map((item, index) => (
    <div class='pmanager'>
      <div className="passwordItem" key={index}>
        <div className="listItem">
          <div className="listLabel">Website:</div>
          <div className="listValue">{item.website}</div>
          <div className="listLabel">Username:</div>
          <div className="listValue">{item.username}</div>
          <div className="listLabel">Password:</div>
          <div className="listValue">
            <span className="passwordField">
              {showPassword ? item.password : item.password.replace(/./g, '*')}
            </span>
          </div>
          <div className="passwordButtons">
            <button
              className="showPasswordButton btn btn-sm btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="iconContainer">
            <div
              className="icon"
              onClick={() => copyPassword(item.password)}
            >
              <FaCopy size={20} color="#555" />
            </div>
            <div className="icon" onClick={() => editPassword(index)}>
              <FaEdit size={20} color="#555" />
            </div>
            <div
              className="icon"
              onClick={() => deletePassword(item.website)}
            >
              <FaTrash size={20} color="#555" />
            </div>
          </div>
        </div>
      </div>
      </div>
    ));
  };

  return (
    <div className='pmanager'>
    <div className="container">
      <div className="content">
        <h1 className="heading">Password Manager</h1>
        <h2 className="subHeading">
          Your Passwords
          {alertVisible && <span id="alert">(Copied!)</span>}
        </h2>
        {passwords.length === 0 ? (
          <p className="noData">No Data To Show</p>
        ) : (
          <div className="table">{renderPasswordList()}</div>
        )}

        <h2 className="subHeading">
          {editing ? 'Edit Password' : 'Add a Password'}
        </h2>
        <input
          className="input form-control mb-3"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          className="input form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input form-control mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="submitButton btn btn-primary" onClick={savePassword}>
          <span className="submitButtonText">
            {editing ? 'Update Password' : 'Add Password'}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PasswordManager;
