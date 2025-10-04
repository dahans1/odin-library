var addBookButton = document.querySelector('#add-book-button');
var formPopup = document.querySelector('#form-popup');
var closeButtton = document.querySelector('#close-form');
var bookForm = document.querySelector('#book-form');
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
    if (!container)
        return;
    container.innerHTML = '';
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
function showForm() {
    formPopup === null || formPopup === void 0 ? void 0 : formPopup.classList.add('active');
}
function hideForm() {
    formPopup === null || formPopup === void 0 ? void 0 : formPopup.classList.remove('active');
}
addBookButton === null || addBookButton === void 0 ? void 0 : addBookButton.addEventListener('click', function () {
    showForm();
});
closeButtton === null || closeButtton === void 0 ? void 0 : closeButtton.addEventListener('click', function () {
    hideForm();
});
// submit form
bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(bookForm);
    var title = formData.get('title');
    var author = formData.get('author');
    var pages = parseInt(formData.get('pages'));
    console.log(formData.get('read'));
    var read = formData.get('read') === 'on';
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    bookForm.reset();
    hideForm();
});
