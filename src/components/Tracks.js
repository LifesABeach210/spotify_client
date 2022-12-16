/** @format */

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Tracks = props => {
  const nav = useNavigate();
  const [id, setId] = useState([]);
  const { tracks, trackUriId, setTrackUriId, setArtId, artId } =
    props;

  // const handleClick = idx => {
  //   const track = tracks[idx].console.log('handleClick', track);
  //   setTrack(track);
  // };`

  return (
    <div className='parent'>
      <h2>Artists</h2>
      {tracks.map((data, idx) => {
        console.log(data, 'line 21');

        return (
          <div
            key={idx}
            className='child'>
            <div
              className='child'
              style={{
                height: 150,
                width: 150,
                backgroundColor: 'gray',
              }}>
              <img
                style={{ height: 150, width: 150 }}
                src={data.album.images[1].url}
                onClick={() => {
                  setTrackUriId(data.album.artists[0].id);

                  console.log(data);

                  setArtId(data.id);
                  console.log(artId);

                  nav('/artist-page');
                }}></img>
              <h5>{data.name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
