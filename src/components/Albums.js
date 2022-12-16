/** @format */

import React from 'react';

export const Albums = props => {
  const { albums } = props;
  return (
    <div className='parent'>
      <h2> Albums</h2>
      {albums.map(data => {
        return (
          <div
            className='child'
            key={data.id}>
            <div className='child'>
              <img
                style={{ height: 150, width: 150 }}
                src={data.images[0].url}></img>
            </div>{' '}
            <div className='child'>
              {' '}
              <p>{data.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
