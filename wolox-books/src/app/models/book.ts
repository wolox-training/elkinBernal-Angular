export class Book {
    title: string;
    author: string;
    image_url: string;

    constructor({ title, author, image_url }) {
        this.title = title;
        this.author = author;
        this.image_url = image_url;
    }
}