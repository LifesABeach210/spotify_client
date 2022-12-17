/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { ShowPlayList } from '../components/ShowPlayList';
export const HomePage = props => {
  const { setPlaylistItems } = props;
  const [homeMessage, setHomeMessage] = useState('');
  const [token, setToken] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [searchParams, setSearchParams] = useState('me');
  const auth = useAuth();
  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    setRefresh(true);
    const querySting = window.location.search;
    const urlParams = new URLSearchParams(querySting);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');
    const storageToken = localStorage.getItem('token');

    if (accessToken) {
      localStorage.setItem('token', accessToken);
      setToken(accessToken);
    } else {
      const getToken = localStorage.getItem('token');
      setToken(getToken);
    }

    setRefresh(false);
  }, []);
  const tokenJWT = localStorage.getItem('tokenJWT');
  return (
    <div>
      HomePage
      <h1>HomePage</h1>
      <h3>{homeMessage}</h3>
      <div style={{ height: 500, width: 500 }}></div>
      {!tokenJWT ? (
        <span></span>
      ) : (
        <ShowPlayList
          setPlaylistItems={setPlaylistItems}
          tokenJWT={tokenJWT}
        />
      )}
    </div>
  );
};
