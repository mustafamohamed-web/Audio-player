import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({ audio, setCurrentSong }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
