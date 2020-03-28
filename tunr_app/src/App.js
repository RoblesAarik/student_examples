import React from "react";
import "./App.css";
import playlists from "./data";

class App extends React.Component {
  state = {
    playlists,
    title: "",
    artist: "",
    time: "0:00",
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time,
    };

    const updatedSongs = [...this.state.playlists.song, newSong];

    this.setState({
      playlists: {
        ...playlists,
        songs: updatedSongs,
      },
      title: "",
      artist: "",
      time: "0:00",
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Tunr</h1>
        </header>
        <div className="App">
          <div className="playlist">
            <h3>{this.state.playlists.title}</h3>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="artist">artist</label>
              <input
                type="text"
                value={this.state.artist}
                id="artist"
                onChange={this.handleChange}
              />
              <label htmlFor="title">title</label>
              <input
                type="text"
                value={this.state.title}
                id="title"
                onChange={this.handleChange}
              />
              <label htmlFor="time">time</label>
              <input
                type="text"
                value={this.state.time}
                id="time"
                onChange={this.handleChange}
              />
              <input type="submit" />
            </form>
            <div>
              <h2>Preview our new song</h2>
              <h3>{this.state.title}</h3>
              <h4>{this.state.artist}</h4>
              <h5>{this.state.time}</h5>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Title</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.playlists.songs.map((song, index) => {
                  return (
                    <tr key={index}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
