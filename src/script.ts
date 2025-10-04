const addBookButton = document.querySelector('#add-book-button');
const formPopup = document.querySelector('#form-popup');
const closeButtton = document.querySelector('#close-form');
const bookForm = document.querySelector('#book-form') as HTMLFormElement;


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

    toggleRead() {
        this.read = !this.read;
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
    if (!container) return;
    container.innerHTML = '';
    
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
        readButton.classList.add('read-button');
        updateReadButton(readButton, book.read);

        readButton.addEventListener('click', () => {
            book.toggleRead();
            updateReadButton(readButton, book.read);
        });

        readButton.style.color = 'white';
        if (book.read) {
            
        } else {
            
        }
        bottomContainer.appendChild(readButton);
        
        card.appendChild(bottomContainer);

        container?.appendChild(card);
    });
}

function updateReadButton(button: HTMLButtonElement, read: boolean) {
    if (read) {
        button.textContent = 'Marked read';
        button.style.backgroundColor = 'green';
    } else {
        button.textContent = 'Marked unread';
        button.style.backgroundColor = 'red';
    }
} 

displayBooks();

function showForm() {
    formPopup?.classList.add('active');
}

function hideForm() {
    formPopup?.classList.remove('active');
}

addBookButton?.addEventListener('click', () => {
    showForm();
});

closeButtton?.addEventListener('click', () => {
    hideForm();
});

// submit form
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(bookForm);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const pages = parseInt(formData.get('pages') as string);

    console.log(formData.get('read'));
    const read = formData.get('read') === 'on';

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    bookForm.reset();
    hideForm();
});