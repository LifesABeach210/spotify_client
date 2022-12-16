/** @format */

import React from 'react';
import { NavBar } from '../components/NavBar';
import { Player } from '../components/Player';
import { Outlet } from 'react-router-dom';
import { MusicHome } from '../pages/MusicHome';
export const GlobalLayout = props => {
  const {
    snapshot_id,
    setSnapShotId,
    trackUri,
    setTrackUri,
    playlistId,
    setPlaylistItems,
    playlist_items,
    playlistArray,
    setPlaylistArray,
  } = props;
  return (
    <div className='global-layout-parent'>
      <NavBar
        playlistId={playlistId}
        snapshot_id={snapshot_id}
      />{' '}
      <Outlet />
      <Player
        playlistArray={playlistArray}
        setPlaylistArray={setPlaylistArray}
        playlist_items={playlist_items}
        setPlaylistItems={setPlaylistItems}
        snapshot_id={snapshot_id}
        setSnapShotId={setSnapShotId}
        playlistId={playlistId}
        trackUri={trackUri}
        setTrackUri={setTrackUri}
      />{' '}
    </div>
  );
};
