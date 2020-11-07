import React from "react";
import books from "../data/books.json";

class Search extends React.Component {
  state = { searchString: "" };
  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    var libraries = books,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString);
      });
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Type here..."
        />

        {libraries.map(function (i) {
          return (
            <p>
              {i.name} <a href={i.url}>{i.url}</a>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Search;
