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
        var title = document.createElement('span');
        title.textContent = book.title;
        title.classList.add('book-title');
        card.classList.add('card');
        card.appendChild(title);
        container === null || container === void 0 ? void 0 : container.appendChild(card);
    });
}
displayBooks();
