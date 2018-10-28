import React, {Component} from "react";
import App from "./App";

class MovieItems extends Component{
    render(){
        const{profiles, users, movies, usersByMovie} = this.props;

        const movieItems = Object.keys(movies).map(id => (
            <li>"movie item text"</li>
        ))

        /*
        Return JSX
        */
        return <ul>{movieItems}</ul>
    }
}
export default App;