/** @format */

import React from 'react';
import { useState } from 'react';
export const Playlist = props => {
  const [name, setName] = useState('');

  const { playlist, newPlayList } = props;
  const jwtToken = localStorage.getItem('tokenJWT');
  const create_playlist = async () => {
    await fetch(
      `http://localhost:8888/playlist/create-playlist`,
      {
        method: 'POST',
        headers: {
          Auth: jwtToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playlist: newPlayList,
          playListName: name,
          token: jwtToken,
        }),
      }
    )
      .then(res => res.json)
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className='inner-playlist-parent'>
      Playlist
      <div>
        <button onClick={create_playlist}>
          create playlist
        </button>
        <input
          onChange={e => {
            setName(e.target.value);
          }}></input>
      </div>
      {newPlayList.map(item => {
        return (
          <div
            style={{ backgroundColor: 'red' }}
            className='inner-playlist-child'>
            <h3>{item.name}</h3>
            <div>
              <img
                style={{ height: 100, width: 100 }}
                src={item.album.images[1].url}></img>
              <button
                onClick={() => {
                  // setPlaylistItems(item.uri);
                }}
                className='float-left-btn'>
                play
              </button>

              <button
                onClick={() => {
                  // addToPlaylist(...[item]);
                  console.log(playlist, 'is array check');
                }}>
                create playlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
