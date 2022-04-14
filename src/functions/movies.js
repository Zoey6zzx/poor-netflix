import { Movie } from "../models/Movie"

export const getMovies = () => {
    return fetch('https://movies-app1.p.rapidapi.com/api/genres', {
        headers: {
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
            'X-RapidAPI-Key': 'a41df235c4mshec1f74a9ab30ad0p1bd508jsn26d558ee0ab1'
        },
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
};

