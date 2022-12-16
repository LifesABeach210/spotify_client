/** @format */

import React from 'react';
import { useEffect, useState } from 'react';
import { MusicPage } from '../pages/MusicPage';
import { Tracks } from '../components/Tracks';
import { ArtistImage } from '../components/ArtistImage';
import { ArtistPage } from '../pages/ArtistPage';
import { Shows } from '../components/Shows';
import { AudioBooks } from '../components/AudioBooks';
import { Albums } from '../components/Albums';
import { Episodes } from '../components/Episodes';
import { useNavigate } from 'react-router-dom';
export const MusicHomeLayout = props => {
  const { podcastData, setPodCastData } = props;
  const [token, setToken] = useState('');
  const [searchParams, setSearchParams] = useState('me');
  const [searchArtistName, setSearchArtistName] = useState('');
  const [mainArtist, setMainArtist] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [audioBook, setAudioBook] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [shows, setShows] = useState([]);

  const [isAudioBook, setIsAudioBook] = useState(false);
  const [artist, setIsArtist] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isPodcast, setIsPodcast] = useState(false);
  const searchArtist = process.env.API_FIRST_ARTIST_FETCH;
  const nav = useNavigate();
  useEffect(() => {
    setRefresh(true);

    const storageToken = localStorage.getItem('token');

    setToken(storageToken);

    setRefresh(false);
  }, []);
  const handleOnClick = () => {
    fetch(
      `https://api.spotify.com/v1/search?q=${searchArtistName}&type=artist,show,episode,audiobook,album,artist,playlist,track&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setAudioBook(data.audiobooks.items);
        setEpisodes(data.episodes.items);
        setShows(data.shows.items);
        setAlbums(data.albums.items);

        setArtistData(data.artists.items);
        console.log(data, 'line 50 data');
        setTracks(data.tracks.items);

        // }
      }); //https://api.spotify.com/v1/search?q=eminem&type=${type}
  };

  return (
    <div>
      {/* <button onClick={}></button> */}
      <div className='btn-group-home'>
        <button
          className='btn-group-home'
          onClick={e => {
            console.log(e);
          }}>
          Artist{' '}
        </button>
        <button
          className='btn-group-home'
          onClick={e => {
            console.log(e);
          }}>
          Audio Books{' '}
        </button>
        <button
          className='btn-group-home'
          onClick={e => {
            console.log(e);
          }}>
          Podcast
        </button>
      </div>
      <MusicPage
        token={token}
        artistData={artistData}
        setMainArtist={setMainArtist}
        mainArtist={mainArtist}
        shows={shows}
        episodes={episodes}
        audioBook={audioBook}
      />{' '}
      <Albums albums={albums}></Albums>
      <input
        onChange={e => {
          setSearchArtistName(e.target.value);
        }}
        type='text'></input>{' '}
      <div>
        <Shows
          podcastData={podcastData}
          setPodCastData={setPodCastData}
          shows={shows}
        />
        <Episodes episodes={episodes} />
        <AudioBooks audioBook={audioBook} />
        <Tracks tracks={tracks} />
      </div>
    </div>
  );
};
