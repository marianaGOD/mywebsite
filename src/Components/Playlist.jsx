import React from 'react'
import { Spotify } from 'react-spotify-embed';

export default function Playlist() {
  return (
    <Spotify
      wide
      link={"https://open.spotify.com/playlist/37i9dQZF1DWSNiUduOl0uo?si=e1160c497751467f"}
      style={{height:"500px",width:"500px"}}
    />
  );
}
