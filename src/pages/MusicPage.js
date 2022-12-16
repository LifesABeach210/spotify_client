/** @format */

import React from 'react';
import { useEffect, useState } from 'react';
import { ApiRequest } from '../utils/ApiRequest';
import { ArtistPage } from './ArtistPage';
import { ArtistTracks } from './ArtistTracks';
import { ArtistImage } from '../components/ArtistImage';
import { useNavigate } from 'react-router-dom';
export const MusicPage = props => {
  const {
    mainArtist,
    setMainArtist,
    shows,
    episodes,
    podcast,
    audioBook,
  } = props;
  const [songs, setSongs] = useState([]);
  const { artistData, token } = props;
  const [artistName, setArtistName] = useState('');
  const [artistUri, setArtistUri] = useState('');
  const [tracks, setTracks] = useState('');
  const [trackName, setTrackName] = useState('');
  const [artistId, setArtistId] = useState('');
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const selectArtist = async data => {
    const id = data.id;

    const musicPageResponse = await fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setSongs(data.tracks);
      });
    setArtistId(data.id);

    setMainArtist(data); // from parent.
  };

  return (
    <div>
      <div>
        {artistData.map((data, idx) => {
          return (
            <div
              className='group-1'
              key={data.id}>
              <div className='group-2'>
                {' '}
                <h4>{data.name}</h4>
              </div>{' '}
              <div className='group-2'>
                {' '}
                <button
                  onClick={() => {
                    selectArtist(data);
                  }}>
                  show tracks
                </button>
              </div>{' '}
              <br />
              <div className='group-2'> </div>
            </div>
          );
        })}
        <div>
          <div>
            {mainArtist.uri && (
              <ArtistImage
                mainArtist={mainArtist}
                setMainArtist={setMainArtist}
                setArtistId={setArtistId}
                artistId={artistId}
              />
            )}
          </div>{' '}
        </div>{' '}
        <ArtistTracks
          token={token}
          songs={songs}
        />{' '}
      </div>
    </div>
  );
};
