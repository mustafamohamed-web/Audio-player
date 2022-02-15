import React from "react";

const LibrarySongs = ({ song, audio, setCurrentSong, audioRef, active }) => {
  const handleSongChange = () => {
    const selectedSong = song;
    setCurrentSong(selectedSong);

    if (active) {
      const activePromise = audioRef.current.play();
      if (activePromise !== undefined) {
        activePromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
