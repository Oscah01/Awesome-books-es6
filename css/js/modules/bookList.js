export default class BookListing {
  // declare a constructor function
  constructor() {
    if (localStorage.getItem('bookList')) {
      this.list = JSON.parse(localStorage.getItem('bookList'));
    } else {
      this.list = [];
    }
  }

  // create a display method
  displayList() {
    // clear the current list UI
    const bookListDiv = document.querySelector('.books');
    bookListDiv.innerHTML = '';

    // checking the number of books in the book list container
    if (this.list.length === 0) {
      // create a empty message element with a class 'book__empty'
      const emptyMsg = document.createElement('p');
      emptyMsg.className = 'book__empty';
      emptyMsg.innerText = 'Empty Book Collection';

      // Append the book card to the parent node
      bookListDiv.appendChild(emptyMsg);
    } else {
      // Loop through the array given
      this.list.forEach((book, id) => {
        // create a book card with a class 'book'
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        // create a book details p with the class 'book__details'
        const bookDetails = document.createElement('p');
        bookDetails.className = 'book__details';
        bookDetails.innerText = `"${book.title}" by ${book.author}`;

        // Create the delete button with a class 'book__remove-btn'
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'book__remove-btn';
        deleteBtn.innerText = 'Remove';

        // Attach a listener to the remove botton for delete function
        deleteBtn.addEventListener('click', () => {
          this.removeBookFromList(id);
        });

        bookDiv.appendChild(bookDetails);
        bookDiv.appendChild(deleteBtn);

        // Append the book card to the parent node
        bookListDiv.appendChild(bookDiv);
      });
    }
  }

  // create a book method
  addToList(newBook) {
    // update the book list with the new book
    this.list.push(newBook);

    // update the local storage with the new books
    localStorage.setItem('bookList', JSON.stringify(this.list));

    // update the page with the new book
    this.displayList();
  }

  // create delete book method
  removeBookFromList(index) {
    // Delete book at the given index
    this.list.splice(index, 1);

    // update the local storage with the current state of book list
    localStorage.setItem('bookList', JSON.stringify(this.list));

    // update the page with the current state of book list
    this.displayList();
  }
}
