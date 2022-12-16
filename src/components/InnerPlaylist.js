/** @format */

import React from 'react';
import { useState } from 'react';
import { Playlist } from './Playlist';

export const InnerPlaylist = props => {
  const {
    artistTopTracks,
    setSearch,
    genre,
    setGenre,
    addToPlaylist,
    playlist,
    setPlaylistItems,
    newPlayList,
  } = props;
  const [loading, setLoading] = useState(true);
  return (
    <div className='inner-playlist-parent'>
      <button
        onClick={() => {
          setLoading(!loading);
        }}>
        show playlist
      </button>
      {loading ? (
        <span></span>
      ) : (
        <Playlist newPlayList={newPlayList} />
      )}
      {!artistTopTracks ? (
        <span></span>
      ) : (
        artistTopTracks.map(item => {
          //  setSearch(item.id);
          console.log(item, 'inner list items');

          // setGenre(item.artists[1].)
          return (
            <div className='inner-playlist-child'>
              <h3>{item.name}</h3>
              <div>
                <img
                  style={{ height: 100, width: 100 }}
                  src={item.album.images[1].url}></img>
                <button
                  onClick={() => {
                    setPlaylistItems(item.uri);
                  }}
                  className='float-left-btn'>
                  play
                </button>

                <button
                  onClick={() => {
                    addToPlaylist(...[item]);

                    console.log(playlist, 'is array check');
                  }}>
                  add to playlist
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
