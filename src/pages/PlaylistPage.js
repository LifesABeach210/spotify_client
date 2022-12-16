/** @format */

import React, { useEffect, useState } from 'react';
import { Playlist } from '../components/Playlist';

export const PlaylistPage = props => {
  const { playlist, displayPlaylist, setDisplayPlaylist } =
    props;
  //   useEffect(() => {
  //     const create_playlist = async data => {
  //       await fetch(
  //         `http://localhost:8888/playlist/create-playlist`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             Authorization: jtwToken,
  //             Accept: 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             artistData: addToPlaylist,
  //             jwtToken: jtwToken,
  //             playlistname: playListName,
  //             email: email,
  //             password: password,
  //             playListName: playListName,
  //           }),
  //         }
  //       );
  //     };
  //   });
  console.log(playlist, 'playlist page check ');

  return (
    <div>
      PlaylistPage
      {displayPlaylist ? (
        <Playlist playlist={playlist} />
      ) : (
        <span>closed</span>
      )}
    </div>
  );
};
