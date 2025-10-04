var Book = /** @class */ (function () {
    function Book(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    return Book;
}());
var myLibrary = [];
function addBookToLibrary(title, author, pages, read) {
    var book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
addBookToLibrary('Dune', 'Frank Herbert', 704, true);
addBookToLibrary('Dune: Messiah', 'Frank Herbert', 256, false);
addBookToLibrary('1984', 'George Orwell', 352, true);
addBookToLibrary('A Clockwork Orange', 'Anthony Burgess', 176, true);
addBookToLibrary('Moby Dick', 'Herman Melville', 720, false);
function displayBooks() {
    var container = document.querySelector('.container');
    myLibrary.forEach(function (book) {
        var card = document.createElement('div');
        card.classList.add('card');
        var title = document.createElement('span');
        title.textContent = book.title;
        title.classList.add('book-title');
        card.appendChild(title);
        var bottomContainer = document.createElement('div');
        bottomContainer.classList.add('bottomContainer');
        var authorPages = document.createElement('div');
        var author = document.createElement('span');
        var pages = document.createElement('span');
        authorPages.classList.add('authorPages');
        author.textContent = 'By: ' + book.author;
        pages.textContent = book.pages + ' pages';
        authorPages.appendChild(author);
        authorPages.appendChild(pages);
        bottomContainer.appendChild(authorPages);
        var readButton = document.createElement('button');
        readButton.type = 'button';
        readButton.style.color = 'white';
        if (book.read) {
            readButton.textContent = 'Marked read';
            readButton.style.backgroundColor = 'green';
        }
        else {
            readButton.textContent = 'Marked unread';
            readButton.style.backgroundColor = 'red';
        }
        bottomContainer.appendChild(readButton);
        card.appendChild(bottomContainer);
        container === null || container === void 0 ? void 0 : container.appendChild(card);
    });
}
displayBooks();
