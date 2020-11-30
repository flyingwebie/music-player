import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import LibrarySong from './Library-song';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs" />
      {songs.map((song) => (
        <LibrarySong
          audioRef={audioRef}
          setCurrentSong={setCurrentSong}
          song={song}
          songs={songs}
          id={song.id}
          key={song.id}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
      ))}
    </div>
  );
};

export default Library;
