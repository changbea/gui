import React from "react";
import axios from "axios";
import Ranks from "../component/Ranked";
import Navigate from "../../Navigate";
import "./Page.css";

class Page extends React.Component {
  state = {
    isLoading: true,
    moviesRanked: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ moviesRanked: movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, moviesRanked } = this.state;
    return (
      <section className="container">
        <Navigate />
        {isLoading ? (
          <div className="loader">
            <span>Loading</span>
          </div>
        ) : (
          <div className="moviesRanked">
            {moviesRanked.map((c) => (
              <Ranks
                key={c.id}
                id={c.id}
                title={c.title}
                year={c.year}
                summary={c.summary}
                poster={c.medium_cover_image}
                genres={c.genres}
              ></Ranks>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Page;
