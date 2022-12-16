/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

export const RegistrationPage = props => {
  const { playlistId, setPlaylistId } = props;
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [alertMesssage, setAlertMessage] = useState('');
  const auth = useAuth();
  const getToken = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (password === confirmPassword) {
      setAlertMessage('Passwords Match');
    }
    if (password !== confirmPassword) {
      setAlertMessage('Passwords Do Not Match');
    }
  }, [password, confirmPassword]);

  return (
    <div>
      <h1 className='spin'>Registration Page</h1>
      <div className='Registration-Sign-up'>
        <label> Email</label>
        <input
          style={{ width: 200, height: 25 }}
          onChange={e => {
            setEmail(e.target.value);
          }}
          type='email'></input>
        <label>Password</label>

        <input
          style={{ width: 200, height: 25 }}
          onChange={e => {
            setPassword(e.target.value);
          }}
          type='password'></input>
        <label>Confirm Password</label>

        <input
          style={{ width: 200, height: 25 }}
          onChange={e => {
            setConfirmPassword(e.target.value);
            const passwordMatch = 'Passwords Match';
            const passwordsDoNotMatch = 'Passwords Do Not Match';
          }}
          type='password'></input>
      </div>
      <div>
        <button
          onClick={async () => {
            const results = await auth.register(email, password);
            console.log(results);
            if (results.success) {
              await fetch(
                `https://api.spotify.com/v1/users/31uwtxpvjlzswpau6ltcobf6mopi/playlists`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                    name: email,
                    public: false,
                    collaborative: false,
                    description: email + ' ' + 'Playlist',
                  }),
                  headers: {
                    Authorization: 'Bearer ' + getToken,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then(res => res.json())
                .then(data => {
                  setPlaylistId(data.id);
                  console.log(playlistId);

                  console.log(data, 'line 79 reg page');
                });
              navigate('/login');
            }
            if (!results.success) {
              setRegisterMessage(results.message);
            }
          }}>
          Sign Up
        </button>
      </div>
      <p>{alertMesssage}</p>
      <h3>{registerMessage}</h3>
      <div style={{ height: 500, width: 500 }}></div>
    </div>
  );
};
