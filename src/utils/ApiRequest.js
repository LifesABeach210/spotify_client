/** @format */

import React from 'react';
import { useEffect, useState } from 'react';
export const ApiRequest = () => {
  const [token, setToken] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [searchParams, setSearchParams] = useState('me');

  const ApiRequest = () => {
    const handleOnClick = () => {
      fetch(`https://api.spotify.com/v1/${searchParams}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            localStorage.removeItem('token');
            setRefresh(true);
          } else {
            console.log(data);
          }
        })
        .then(() => {
          fetch(`https://api.spotify.com/v1/${searchParams}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(res => res.json())
            .then(a => {
              setRefresh(false);
              console.log(a);
            });
        });
    };
    return <div>ApiRequest</div>;
  };
};
