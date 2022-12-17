/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { InnerNextLevel } from './InnerNextLevel';
export const ShowPlayList = props => {
  const [display, setDisplay] = useState(false);
  const [showPlayList, setShowPlayList] = useState([]);

  const { tokenJWT, setPlaylistItems } = props;
  const get_all_playlist = async () => {
    await fetch(`http://localhost:8888/playlist/get-playlist`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: tokenJWT,
      },
    })
      .then(res => res.json())
      .then(data => {
        setShowPlayList(data.message.playlist);
        console.log(data.message.playlist, 'incomming playlist');
        console.log(showPlayList, 'showing');
      });
  };
  return (
    <div>
      <h2>playlist</h2>
      <button
        onClick={() => {
          get_all_playlist();
        }}>
        get playlist
      </button>
      <button
        onClick={() => {
          setDisplay(!display);
        }}>
        show
      </button>
      <div>
        {' '}
        {display ? (
          <InnerNextLevel
            setPlaylistItems={setPlaylistItems}
            showPlayList={showPlayList}
          />
        ) : (
          <span>test</span>
        )}
      </div>
    </div>
  );
};
