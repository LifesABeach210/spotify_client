/** @format */

import React from 'react';

export const AudioBooks = props => {
  const { audioBook } = props;
  return (
    <div className='parent-books'>
      <h2>AudioBooks</h2>
      {audioBook.map(audiobook => {
        return (
          <div
            className='child-books'
            key={audiobook.id}>
            <div className='child-books'>
              {' '}
              <img
                style={{ height: 150, width: 150 }}
                src={audiobook.images[0].url}></img>
            </div>{' '}
            <div className='child-books'>
              <p>{audiobook.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
