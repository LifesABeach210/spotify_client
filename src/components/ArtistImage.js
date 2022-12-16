/** @format */

import React from 'react';

export const ArtistImage = props => {
  const { setArtistId, artistId, mainArtist } = props;
  console.log(mainArtist, 'line 4 Artist Image');

  return (
    <div>
      <div className='artist-profile'>
        <img
          style={{ width: 240, height: 240 }}
          src={mainArtist.images[2].url}></img>
      </div>
    </div>
  );
};
