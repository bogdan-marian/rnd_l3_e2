import React, {Component } from "react";

class MovieCard extends Component{
    render(){
        const {users, usersWhoLikedMovie, movieInfo} = this.props;

        return (
            <li key={movieInfo.id}>
                <h2>{movieInfo.name}</h2>
                <l3>Liked by:</l3>
                {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ?(
                    <p>Nobody likes it</p>
                ):(
                    <ul>
                        {usersWhoLikedMovie && 
                            usersWhoLikedMovie.map(userId => {
                                return (
                                    <li key = {userId}>
                                        <p>{users[userId].name}</p>
                                    </li>
                                )
                            })}
                    </ul>
                )}
            </li>
        );
    }
}

export default MovieCard;