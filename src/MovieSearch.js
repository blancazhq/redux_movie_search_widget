import React from "react";

export default class MovieSearch extends React.Component{
  render(){
    return(
      <div>
       <h2>Movie Finder</h2>
       <div className="searchDiv">
         <label>type your search term here: </label><input type="text" value={this.props.searchTerm} onChange={this.props.change}/>
         <button onClick={()=> this.props.search(this.props.searchTerm)}>get movie data</button>
       </div>
       {this.props.loading ? <img src="./loader.gif"/> : null}
       {this.props.movieInfo ? this.props.movieInfo.results.map((movie, idx) =>
         <div>
         <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} onClick={()=>this.props.showContent(idx)}/>
         {movie.showContent ? <div className = {"div"+idx}>
           <p>title: {movie.title}</p>
           <p>overview: {movie.overview}</p>
           <p>popularity: {movie.popularity}</p>
           <p>average: {movie.vote_average}</p>
         </div> : null}
         <p>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>
         </div>
        ) : null}
      </div>
    )
  }
}
