import React, {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    render(){
        const { profiles, users, movies, usersByMovie } = this.props;

        const movieCards = Object.keys(movies).map(id => (
            <MovieCard
                key={id}
                users = {users}
            />
        ));

        return<ul>{movieCards}</ul>
    }
}