export class Movie {
    constructor(id, rank, title, year, image, crew, imDbRating) {
        this.crew = crew;
        this.id = id;
        this.imDbRating = imDbRating;
        this.image = image;
        this.rank = rank;
        this.title = title;
        this.year = year;
    }
}