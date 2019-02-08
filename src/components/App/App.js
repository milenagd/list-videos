import React, { Component } from "react";
import { searchVideos } from "services/youtube";
import styles from "./App.scss";
import NavBar from "../NavBar";
import VideoList from "../VideoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      title: "Todos os vídeos do Canal"
    };
  }
  searchVideos = async (query = "") => {
    const response = await searchVideos(query);
    const title = query
      ? `Resultados para: "${query}"`
      : "Todos os vídeos do Canal";
    if (response) {
      this.setState({
        videos: response.videos,
        title
      });
    }
  };
  searchNewVideos = async query => {
    localStorage.setItem("next", "");
    this.searchVideos(query);
  };
  loadNextVideos = async () => {
    const response = await searchVideos();
    if (response) {
      const totalVideos = [...this.state.videos, ...response.videos];
      this.setState({
        videos: totalVideos
      });
    }
  };
  async componentDidMount() {
    this.searchVideos();
  }
  render() {
    return (
      <div>
        <NavBar handleSearch={this.searchNewVideos} />
        <h2 className={styles.title}>{this.state.title}</h2>
        <VideoList videos={this.state.videos} />
        <button className={styles.loadButton} onClick={this.loadNextVideos}>
          Carregar Mais Vídeos
        </button>
      </div>
    );
  }
}
