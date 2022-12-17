/** @format */

import logo from './logo.svg';

import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { PodcastPage } from './pages/PodcastPage';
import { GlobalLayout } from './layouts/GlobalLayout';
import { MusicHomeLayout } from './components/MusicHomeLayout';
import { ArtistPage } from './pages/ArtistPage';
import { PlaylistPage } from './pages/PlaylistPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { MusicHome } from './pages/MusicHome';
import { MusicPage } from './pages/MusicPage';
import { ApiRequest } from './utils/ApiRequest';
function App(props) {
  const [albums, setAlbums] = useState([]);
  const [trackUri, setTrackUri] = useState([]);
  const [podcastData, setPodCastData] = useState([]);
  const [playlistArray, setPlaylistArray] = useState([]);
  const [playlistId, setPlaylistId] = useState(
    '2NzAVtov6AAUU7wFF7VgWa'
  );
  const [playlist_items, setPlaylistItems] = useState('');
  const [displayPlaylist, setDisplayPlaylist] = useState(true);
  const [artistData, setArtistData] = useState([]);
  const [snapshot_id, setSnapShotId] = useState('');
  const [tracks, setTracks] = useState([]);
  const [trackUriId, setTrackUriId] = useState([]);
  const [artistTopTracks, setArtistTopTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [newPlayList, setNewPlayList] = useState([]);
  const [artId, setArtId] = useState('');

  const addToPlaylist = async val => {
    console.log('BEFORE:', newPlayList);
    console.log('App.addToPlayList', val);

    await setNewPlayList([...newPlayList, val]);

    console.log('AFTER:', newPlayList);
  };
  const savePlayList = async () => {
    // API call to server
  };
  const { showData } = props;
  console.log(showData, 'line 22 main page');

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <GlobalLayout
          playlist_items={playlist_items}
          setPlaylistItems={setPlaylistItems}
          setSnapShotId={setSnapShotId}
          snapshot_id={snapshot_id}
          playlistId={playlistId}
          trackUri={trackUri}
          setTrackUri={setTrackUri}
        />
      ),
      children: [
        {
          index: true,
          element: (
            <HomePage setPlaylistItems={setPlaylistItems} />
          ),
        },
        { path: '/login', element: <LoginPage /> },
        {
          path: '/register',
          element: (
            <RegistrationPage
              playlistId={playlistId}
              setPlaylistId={setPlaylistId}
            />
          ),
        },
        {
          path: '/music-home',
          element: (
            <MusicHome
              setArtId={setArtId}
              artistTopTracks={artistTopTracks}
              artistData={artistData}
              setArtistData={setArtistData}
              tracks={tracks}
              setTracks={setTracks}
              albums={albums}
              setAlbums={setAlbums}
              trackUriId={trackUriId}
              setTrackUriId={setTrackUriId}
              podcastData={podcastData}
              setPodCastData={setPodCastData}
              artId={artId}
            />
          ),
        },
        {
          path: '/podcast-page',
          element: (
            <PodcastPage
              playlistArray={playlistArray}
              setPlaylistArray={setPlaylistArray}
              trackUri={trackUri}
              setTrackUri={setTrackUri}
              podcastData={podcastData}
              setPodCastData={setPodCastData}
              showData={showData}
            />
          ),
        },
        {
          path: '/artist-page',
          element: (
            <ArtistPage
              newPlayList={newPlayList}
              playlist_items={playlist_items}
              setPlaylistItems={setPlaylistItems}
              artId={artId}
              artistData={artistData}
              setArtistData={setArtistData}
              tracks={tracks}
              setTracks={setTracks}
              podcastData={podcastData}
              setPodCastData={setPodCastData}
              artistTopTracks={artistTopTracks}
              setArtistTopTracks={setArtistTopTracks}
              trackUriId={trackUriId}
              setTrackUriId={setTrackUriId}
              setAlbums={setAlbums}
              albums={albums}
              addToPlaylist={addToPlaylist}
              playlist={playlist}
            />
          ),
        },
        {
          path: '/playlist-page',
          element: (
            <PlaylistPage
              newPlayList={newPlayList}
              displayPlaylist={displayPlaylist}
              setDisplayPlaylist={setDisplayPlaylist}
              setPlaylist={setPlaylist}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
