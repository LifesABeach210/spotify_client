/** @format */

import React from 'react';

export const InnerNextLevel = props => {
  const { search, showPlayList, setPlaylistItems } = props;
  return (
    <div className='inner-playlist-parent'>
      {showPlayList.map((item, idx) => {
        return (
          <div
            className='inner-playlist-child'
            key={idx}>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
