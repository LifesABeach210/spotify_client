/** @format */

import React from 'react';

export const Episodes = props => {
  const { episodes } = props;
  return (
    <div className='parent'>
      <h2>Episodes</h2>

      {episodes.map(data => {
        return (
          <div
            className='child'
            key={data.id}>
            <div>
              <img
                style={{ height: 150, width: 150 }}
                src={data.images[0].url}></img>
            </div>
            <div>
              {' '}
              <p>{data.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
