import React from 'react';
// import { playAudio } from '../util';

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong(selectedSong[0]);
    // Add active State
    const newSongs = songs.map((playSong) => {
      if (playSong.id === id) {
        return {
          ...playSong,
          active: true,
        };
      }
      return {
        ...playSong,
        active: false,
      };
    });
    setSongs(newSongs);
    // playAudio(isPlaying, audioRef);
    if (isPlaying) audioRef.current.play();
    // check if the song is playing
  };
  return (
    <div
      role="button"
      onClick={songSelectHandler}
      tabIndex={0}
      className={`library-song ${song.active ? 'selected' : ''}`}
      onKeyDown={songSelectHandler}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-details">
        <h3>{song.artist}</h3>
        <h4>{song.name}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
