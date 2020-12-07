import React from "react";
const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  //Event Handler
  const songSelectHandler = async () => {
    const selectedSong = song;
    await setCurrentSong(selectedSong);
    //Check if isPlaying
    if (isPlaying) audioRef.current.play();
    const newSongs = songs.map((newsong) => {
      if (newsong.id === selectedSong.id) {
        return {
          ...newsong,
          active: true,
        };
      } else {
        return {
          ...newsong,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      className={`LibrarySong ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="LibrarySong__desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
