import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./styles/app.scss";
import data from "./data/data";

function App() {
  const audioRef = useRef(null);

  const [audio, setAudio] = useState(data());
  const [currentSong, setCurrentSong] = useState(audio[0]);
  const [active, setActive] = useState(false);
  const [audioInfo, setAudioInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setAudioInfo({ ...audioInfo, currentTime, duration });
  };

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        active={active}
        setActive={setActive}
        audioRef={audioRef}
        audioInfo={audioInfo}
        setAudioInfo={setAudioInfo}
      />
      <Library
        audio={audio}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        active={active}
      />
      <audio
        onTimeUpdate={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeHandler}
      ></audio>
    </div>
  );
}

export default App;
