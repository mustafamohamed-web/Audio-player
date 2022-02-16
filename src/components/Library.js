import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
  audio,
  setCurrentSong,
  audioRef,
  active,
  setAudioInfo,
  setAudio,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {audio.map((song) => (
          <LibrarySongs
            song={song}
            audio={audio}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            active={active}
            setAudioInfo={setAudioInfo}
            setAudio={setAudio}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
