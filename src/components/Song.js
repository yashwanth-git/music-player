import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="Song">
      <img
        className={`${isPlaying ? "rotate" : ""}`}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
