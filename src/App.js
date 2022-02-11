import React, { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./styles/app.scss";
import data from "./data/data";

function App() {
  const [audio, setAudio] = useState(data());
  const [currentSong, setCurrentSong] = useState(audio[0]);
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} active={active} setActive={setActive} />
      <Library audio={audio} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
