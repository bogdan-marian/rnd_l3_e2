import React, {Component} from "react";
import MovieItem from "./MovieItem";

class MovieItems extends Component{
    render(){
        const{profiles, users, movies, usersByMovie} = this.props;

        const movieItems = Object.keys(movies).map(id => (
            <MovieItem
                key={id}
                users={users}
                usersWhoLikedMovie={usersByMovie[id]}
                movieInfo={movies[id]}
            />

        ))

        /*
        Return JSX
        */
        return <ul>{movieItems}</ul>
    }
}
export default MovieItems;