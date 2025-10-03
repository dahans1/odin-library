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

const myLibrary: Book[] = [];

function addBookToLibrary(title: string, author: string, pages: number, read: boolean) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('Dune', 'Frank Herbert', 704, true);
addBookToLibrary('Dune: Messiah', 'Frank Herbert', 256, false);
addBookToLibrary('1984', 'George Orwell', 352, true);
addBookToLibrary('A Clockwork Orange', 'Anthony Burgess', 176, true);
addBookToLibrary('Moby Dick', 'Herman Melville', 720, false);

function displayBooks() {
    const container = document.querySelector('.container');
    
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        
        const title = document.createElement('span');
        title.textContent = book.title;
        title.classList.add('book-title');
        card.appendChild(title);

        const authorPages = document.createElement('div');
        const author = document.createElement('span');
        const pages = document.createElement('span');
        authorPages.classList.add('authorPages');
        
        author.textContent = 'By: ' + book.author;
        pages.textContent = book.pages + ' pages';
        authorPages.appendChild(author);
        authorPages.appendChild(pages);
        
        card.appendChild(authorPages);

        card.classList.add('card');
        container?.appendChild(card);
    });
}

displayBooks();