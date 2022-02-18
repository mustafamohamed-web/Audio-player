import React from "react";

const LibrarySongs = ({
  song,
  audio,
  setCurrentSong,
  audioRef,
  active,
  setAudioInfo,
  id,
  setAudio,
}) => {
  const handleSongChange = async () => {
    const selectedSong = song;
    await setCurrentSong(selectedSong);
    if (active) {
      const activePromise = audioRef.current.play();
      if (activePromise !== undefined) {
        activePromise.then((audio) => {
          audioRef.current.play();
        });
      }
      if (active) audioRef.current.play();
    }
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={handleSongChange}
    >
      <img src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
