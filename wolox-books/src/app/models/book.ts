export class Book {
    title: string;
    author: string;
    image_url: string;
    publisher: string;
    year: string | number;
    genre: string;

    constructor({ title, author, image_url, publisher, year, genre }) {
        this.title = title;
        this.author = author;
        this.image_url = image_url;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    }
}