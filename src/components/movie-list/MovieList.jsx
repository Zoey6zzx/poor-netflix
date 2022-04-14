import { getMovies } from "../../functions/movies";
import React from "react";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        getMovies().then(movies => this.setState({ movies }));
        console.log(getMovies())
    }

    render() {
        return(
            <div></div>
        );
    }
}