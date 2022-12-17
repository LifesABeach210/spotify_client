/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
export const DisplayQue = ({
  playlistArray,
  setPlaylistArray,
}) => {
  return (
    <div className='global-layout-player2'>
      <div>
        {playlistArray.map((item, idx) => {
          return (
            <div key={idx}>
              <h4>{item.track.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
