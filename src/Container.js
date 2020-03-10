import React, { Component } from "react";
import AddModal from "./Modal";
import List from "./List";
import Search from "./Search";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          show: false,
          title: "Jumanji",
          image:
          "https://cdn-static.egybest.net/serve/movies/art-2799680260-x300.jpg",
          rating: "5",
          year: "2019"
        },
        {
          show: false,
          title: "Insane",
          image:
            "https://cdn-static.egybest.net/serve/movies/art-0177839168-x300.jpg",
          rating: "2",
          year: "2010"
        },
        {
            show: false,
            title: "The Box",
            image:
            "https://cdn-static.egybest.net/serve/movies/art-0510929107-x300.jpg",
            rating: "4",
            year: "2009"
          },
          {
            show: false,
            title: "Sonic",
            image:
              "https://cdn-static.egybest.net/serve/movies/art-2838056871-x300.jpg",
            rating: "3",
            year: "2020"
          }
      ],
      key: "",
      r: 1
    };
  }
  search = x => {
    this.setState({ key: x });
  };
  searchR = x => {this.setState({ r:x})};

  add = movie => {
    this.setState({
      movies: this.state.movies.concat(movie)
    });
  };
  render() {
    return (
      <div className="galerie">
        <Search
          movies={this.state.movies}
          sh={x => this.search(x)}
          rate={x => this.searchR(x)}
          ret={this.state.r}
        />
        {(this.state.key || this.state.r) ? (
          <List
            movies={this.state.movies.filter(
              el => (
                el.title
                  .toUpperCase()
                  .indexOf(this.state.key.toUpperCase().trim()) >= "") && (el.rating>=this.state.r))}
          />
        ) : (
          <List movies={this.state.movies} />
        )}
        <AddModal add={m => this.add(m)} />
      </div>
    );
  }
}

export default Container;