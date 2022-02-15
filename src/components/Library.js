import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({ audio, setCurrentSong, audioRef, active }) => {
  return (
    <div className="library">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
