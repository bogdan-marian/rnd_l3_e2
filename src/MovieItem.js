import React, {Component } from "react";

class MovieCard extends Component{
    render(){
        const {users, usersWhoLikedMovie, movieInfo} = this.props;

        return (
            <li key={movieInfo.id}>
                <h2>card {movieInfo.name}</h2>
            </li>
        );
    }
}

export default MovieCard;