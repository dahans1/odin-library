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
        card.classList.add('card');
        
        const title = document.createElement('span');
        title.textContent = book.title;
        title.classList.add('book-title');
        card.appendChild(title);

        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('bottomContainer');

        const authorPages = document.createElement('div');
        const author = document.createElement('span');
        const pages = document.createElement('span');
        authorPages.classList.add('authorPages');
        
        author.textContent = 'By: ' + book.author;
        pages.textContent = book.pages + ' pages';
        authorPages.appendChild(author);
        authorPages.appendChild(pages);
        bottomContainer.appendChild(authorPages);

        const readButton = document.createElement('button');
        readButton.type = 'button';
        readButton.style.color = 'white';
        if (book.read) {
            readButton.textContent = 'Marked read';
            readButton.style.backgroundColor = 'green';
        } else {
            readButton.textContent = 'Marked unread';
            readButton.style.backgroundColor = 'red';
        }
        bottomContainer.appendChild(readButton);
        
        card.appendChild(bottomContainer);

        container?.appendChild(card);
    });
}

displayBooks();