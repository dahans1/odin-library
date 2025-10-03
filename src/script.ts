const myLibrary = [];

class Book {
    id: string;
    title: string;
    author: string;
    pages: number;
    read: boolean;

    constructor(title: string, author: string, pages: number, read: boolean) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title: string, author: string, pages: number, read: boolean) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}