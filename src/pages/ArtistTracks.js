/** @format */

import React from 'react';
import { useState } from 'react';
import { Player } from '../components/Player';
import { Playlist } from '../components/Playlist';
export const ArtistTracks = props => {
  const { songs, mainArtist, setMainArtist } = props;
  const email = localStorage.getItem('email');
  // const [trackUri, setTrackUri] = useState([]);
  const [openPlaylist, setOpenPlaylist] = useState(false);
  const [addToPlaylist, setAddToPlaylist] = useState([]);
  const starterToken = localStorage.getItem('token');
  const password = localStorage.getItem('password');
  const jtwToken = localStorage.getItem('tokenJWT');
  let token = starterToken;
  const addToQue = async song => {
    const deviceId = '81b90fca98cab60d07fb0733902198ac8cf054ac';

    const playListName = 'test-play-list';
    const data = {
      artistData: addToPlaylist,
      jwtToken: jtwToken,
      playlistname: playListName,
      email: email,
      password: password,
      playListName: playListName,
    };

    const response = await fetch(
      `http://localhost:8888/playlist/create-playlist`,
      {
        method: 'POST',
        headers: {
          Authorization: jtwToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artistData: addToPlaylist,
          jwtToken: jtwToken,
          playlistname: playListName,
          email: email,
          password: password,
          playListName: playListName,
        }),
      }
    );
    // setTrackUri([...trackUri, song.uri]);
    setAddToPlaylist([]);
  };
  const getPlaybackState = async () => {
    const reponse = await fetch(
      `https://api.spotify.com/v1/me/player?market=US`,
      {
        headers: {
          Authorization: 'Bearer ' + starterToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    ).then(data => console.log(data.json()));
  };

  const playSound = async song => {
    // setTrackUri([song.uri]);
    console.log(trackUri, 'trackuri console');

    const deviceId = '81b90fca98cab60d07fb0733902198ac8cf054ac';
    console.log(song, 'songsURI');
  };

  console.log(songs, 'art page songs');
  const getDevice = async () => {
    const resp = await fetch(
      `https://api.spotify.com/v1/me/devices`,

      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + starterToken,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await resp.json();
    console.log(data, 'line 8- art track');
  };

  const addToPlaylistHandler = song => {
    console.log('addToPlaylistHandler', song);
    setAddToPlaylist([...addToPlaylist, song]);
    console.log('playlist', addToPlaylist);
  };
  return (
    <div>
      <div>
        {songs.map((song, idx) => {
          console.log(song.uri, idx);
          return (
            <div
              className='row-tracks'
              key={idx}>
              <div className='row-item'>
                {' '}
                <p>{song.name}</p>
              </div>{' '}
              <div className='but-group'>
                <div className='button'>
                  {' '}
                  <button
                    onClick={() => {
                      playSound(song);
                      console.log(song, 'song[i]');
                    }}>
                    play song
                  </button>
                </div>
                <div className='button'>
                  {' '}
                  <button>pause song</button>
                </div>
                <div className='button'>
                  {' '}
                  <button
                    onClick={() => {
                      addToPlaylistHandler(song);
                    }}>
                    add to playlist
                  </button>
                </div>
                <div className='button'>
                  {' '}
                  <button>previuse song</button>
                </div>
                <div className='button'>
                  {' '}
                  <button
                    onClick={() => {
                      addToQue(song);
                    }}>
                    create-playlist
                  </button>
                </div>
                <div className='button'>
                  {' '}
                  <button onClick={getDevice}>
                    get avail devices
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setOpenPlaylist(!openPlaylist);
        }}>
        {openPlaylist ? <span>Close</span> : <span>Open</span>}
      </button>
      {openPlaylist ? <Playlist /> : <span>closed</span>}
      <div className='bottom'>
        {' '}
        <Player
          starterToken={starterToken}
          // setTrackUri={setTrackUri}
          // trackUri={trackUri}
        />
      </div>
    </div>
  );
};
