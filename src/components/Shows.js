/** @format */

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { PodcastPage } from '../pages/PodcastPage';

export const Shows = props => {
  const [showData, setShowData] = useState([]);
  const [redirectToPodcastPage, setRedirectToPodcastPage] =
    useState(false);
  const { shows, podcastData, setPodCastData } = props;
  console.log(shows, 'shows line 11');
  const navigate = useNavigate();
  const handleClick = data => {
    console.log('handleClick');
    setPodCastData(data);
    setRedirectToPodcastPage(true);
    if (redirectToPodcastPage === true) {
      navigate('/podcast-page');
    }
  };
  return (
    <div className='parent'>
      {' '}
      <h2>podcast</h2>
      {shows.map((data, idx) => {
        return (
          <div
            className='child'
            key={idx}>
            <div className='child'>
              {' '}
              <img
                onClick={() => {
                  handleClick(data);
                }}
                style={{ height: 150, width: 150 }}
                src={data.images[0].url}></img>
            </div>{' '}
            <div className='child'>
              {' '}
              <h3>{data.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
