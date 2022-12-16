/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { Player } from '../components/Player';
import { EpisodeList } from '../components/EpisodeList';
import { DisplayQue } from '../components/DisplayQue';

export const PodcastPage = props => {
  const {
    setTrackUri,
    showData,
    podcastData,
    setPodCastData,
    playlistArray,
    setPlaylistArray,
  } = props;
  const [podcastItems, setPodcastItems] = useState([]);
  console.log(podcastData, 'line 7 podcast page');
  const token = localStorage.getItem('token');
  const description = podcastData.description;
  const id = podcastData.id;
  const uri = podcastData.uri;
  const name = podcastData.name;
  const total_episodes = podcastData.total_episodes;
  const mainImage = podcastData.images[1].url;

  useEffect(() => {
    const podcastHandler = () => {
      fetch(
        `https://api.spotify.com/v1/shows/${id}/episodes?id=${id}&limit=10&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          // if (data.error) {
          //   localStorage.removeItem('token');
          //   setRefresh(true);
          // } else {
          setPodcastItems(data.items);
          console.log(data, 'podcast');
        });
    };
    podcastHandler();
  }, []);
  return (
    <div className='parent-podcast-page'>
      <div className='podcast-page-content'>
        <DisplayQue
          playlistArray={playlistArray}
          setPlaylistArray={setPlaylistArray}
        />{' '}
        <h1>PodcastPage</h1>
        <img src={mainImage}></img>
        <h2>{name}</h2>{' '}
        <p style={{ width: 500, color: 'white' }}>
          {description}
        </p>
      </div>
      <div>
        {podcastItems.map(data => {
          return (
            <div className='podcast-page-content-lower'>
              <h3>{data.name}</h3>
              <img
                onClick={() => {
                  setTrackUri(data.uri);
                  console.log(data.uri);
                }}
                style={{ height: 150, width: 150 }}
                src={data.images[0].url}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};
