import React from "react";
import "./searchbar.css";
const Searchbar = (props) => {
  return (
    <div className="se">
      <form onSubmit={props.searchHandle}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5">
            <input
              className="search form-control"
              type="text"
              placeholder="Search for title of movies,series and...."
            ></input>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-dark form-control">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Searchbar;
