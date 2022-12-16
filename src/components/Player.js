/** @format */

import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useState, useEffect } from 'react';

export const Player = ({
  trackUri,
  playlistId,
  setSnapShotId,
  setPlaylistItems,
  playlist_items,
  playlistArray,
  setPlaylistArray,
}) => {
  console.log(trackUri, 'player line 7');
  const test = ['spotify:playlist:1xi2IJObZHXmRYaTl0rJrG'];
  const getToken = localStorage.getItem('token');
  const [play, setPlay] = useState(true);
  // useEffect(() => {
  //   setPlay(true);
  // }, [trackUri]);

  // useEffect(() => {
  //   const get_playlist_items = async () => {
  //     await fetch(
  //       `https://api.spotify.com/v1/playlists/${playlistId}/tracks?type=episode`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: 'Bearer ' + getToken,
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         setPlaylistItems(data.uri);
  //         setPlaylistArray(data.track.items);
  //         console.log(data, 'line 25 player get items');
  //       });
  //   };
  //   const add_to_playlist = async () => {
  //     await fetch(
  //       `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           uris: trackUri,
  //           position: 0,
  //         }),
  //         headers: {
  //           Authorization: 'Bearer ' + getToken,
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         setSnapShotId(data.snapshot_id);
  //         console.log(
  //           data,

  //           'line 32 adding to playlist'
  //         );
  //       });
  //   };

  // const playSound = async () => {
  //   const deviceId =
  //     '81b90fca98cab60d07fb0733902198ac8cf054ac';
  //   const body = {
  //     context_uri: 'spotify:episode:6dMVMejS0LwF3us4oYIInd',
  //     offset: {
  //       position: 5,
  //     },
  //     position_ms: 0,
  //   };

  //   const formData = new FormData();
  //   formData.append(
  //     'context_uri',
  //     'spotify:track:3V6lJbJdVTZCLVpuA8r72s'
  //   );
  //   formData.append('offset', { position: 5 });
  //   formData.append('position_ms', 0);
  //   formData.append('device_id', deviceId);

  //   const resp = await fetch(
  //     `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
  //     {
  //       method: 'PUT',

  //       body: formData,
  //       headers: {
  //         Authorization: 'Bearer ' + getToken,
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data, 'line 90');
  //     });
  // };

  // playSound();

  //   add_to_playlist();
  //   get_playlist_items();
  // }, [trackUri, playlist_items]);

  return (
    <div className='global-layout-player'>
      <SpotifyPlayer
        token={getToken}
        persistDeviceSelection={true}
        syncExternalDevice={true}
        uris={[playlist_items]}
        play={true}
        autoPlay={play}
        callback={state => {
          console.log(state);

          if (!state.isPlaying) {
            console.log(state);

            setPlay(true);
          }
        }}
      />
    </div>
  );
};
