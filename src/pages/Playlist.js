import React, { useState } from 'react';
import BeatsinputForm from '../components/BeatsinputForm';
import BeatsOutput from '../components/BeatsOutput';
import { v4 as uuidv4 } from 'uuid';

const Playlist = () => {
  const [beats, setbeats] = useState([]);

  const addBeats = (e, beat) => {
    e.preventDefault();
    const beatId = uuidv4();
    beat = { ...beat, id: beatId };
    setbeats([...beats, beat]);
  };

  const removeBeat = (id) => {
    const arrayWithoutBeat = beats.filter((beat) => {
      return beat.id !== id;
    });

    setbeats(arrayWithoutBeat);
  };

  return (
    <div className='Container'>
      <h1 className='title'>My Favo Lil | Playlist</h1>
      <BeatsinputForm addBeats={addBeats} />
      <table className='playlist'>
        <thead>
          <tr className='playlist__header'>
            <th className='playlist__title'>Song</th>
            <th className='playlist__title'>Artist</th>
            <th className='playlist__title'>Genre</th>
            <th className='playlist__title'>Rating</th>
            <th className='playlist__title'>Delete</th>
          </tr>
        </thead>
        <BeatsOutput beats={beats} removeBeat={removeBeat} />
      </table>
    </div>
  );
};

export default Playlist;
