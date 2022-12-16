/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NavBar = props => {
  const { playlistId, snapshot_id } = props;
  const nav = useNavigate();
  const getToken = localStorage.getItem('token');
  return (
    <div className='nav-bar'>
      <Link to='/'>Home</Link>
      <br></br>
      <Link to='/login'>Login Page</Link>
      <br></br>
      <a href='http://localhost:8888/login'> get token</a>
      <Link to='/register'>Registration</Link>
      <br></br>

      <Link to='/music-home'>music home</Link>
      <br></br>
      <button
        onClick={async () => {
          await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,

            {
              method: 'DELETE',
              body: JSON.stringify({
                tracks: [
                  {
                    uri: 'spotify:episode:51NknhV063ZtV87mOIoPjB',
                  },
                ],
                snapshot_id: snapshot_id,
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
              console.log(data, 'line 39 logout');

              localStorage.removeItem('tokenJWT');
              localStorage.removeItem('token');
            });

          nav('/login');
        }}>
        log out
      </button>
    </div>
  );
};
