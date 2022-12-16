/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { InnerPlaylist } from '../components/InnerPlaylist';
// import { MusicHome } from './MusicHome';
import { Albums } from '../components/Albums';
export const ArtistPage = props => {
  const [ready, setReady] = useState(1);
  const [search, setSearch] = useState([]);
  const [genre, setGenre] = useState('');
  const [query, setQuery] = useState('');
  const {
    podcastData,
    setPodCastData,
    trackUriId,
    setTrackUriId,
    artistTopTracks,
    setArtistTopTracks,
    albums,
    setAlbums,
    tracks,
    setTracks,
    addToPlaylist,
    playlist,
    artistData,
    setArtistData,
    artId,
    setPlaylistItems,
    playlist_items,
    newPlayList,
  } = props;
  const getToken = localStorage.getItem('token');
  console.log(trackUriId);
  console.log(artId);

  useEffect(() => {
    const artist_tracks = async () => {
      await fetch(
        `https://api.spotify.com/v1/artists/${trackUriId}/top-tracks?market=US&limit=50`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + getToken,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          setArtistTopTracks(data.tracks);

          setReady(2);
          console.log(data, 'line 10 data');
        });
    };
    console.log(artistTopTracks, 'double check');

    artist_tracks();
  }, [trackUriId]);
  const handleClick = async () => {
    await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=artist,album,track&limit=10`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + getToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setAlbums(data.albums.items);
        setTracks(data.tracks.items);
        setArtistTopTracks(data.tracks.items);
        console.log(data, 'line 69');

        console.log();
      });
  };

  return (
    <div>
      <button onClick={handleClick}></button>
      <div>
        <input
          onChange={e => {
            setQuery(e.target.value);
          }}></input>
        <Albums albums={albums} />
        {/* <MusicHome
          trackUriId={trackUriId}
          setTrackUriId={setTrackUriId}
          podcastData={podcastData}
          setPodCastData={setPodCastData}
        />{' '} */}
      </div>{' '}
      ArtistPage
      <InnerPlaylist
        newPlayList={newPlayList}
        setPlaylistItems={setPlaylistItems}
        addToPlaylist={addToPlaylist}
        genre={genre}
        setGenre={setGenre}
        setSearch={setSearch}
        artistTopTracks={artistTopTracks}
        playlist={playlist}
      />
    </div>
  );
};
