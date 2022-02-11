import React from "react";

const LibrarySongs = ({ song, audio, setCurrentSong }) => {
  const handleSongChange = () => {
    const selectedSong = song;
    setCurrentSong(selectedSong);
  };
  return (
    <div className="library-song" onClick={handleSongChange}>
      <img src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
