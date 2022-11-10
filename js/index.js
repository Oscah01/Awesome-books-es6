import BookListing from './modules/bookList.js';
import Book from './modules/book.js';
import { timeNow } from './modules/datetime.js';

// js to access html elements
const navBar = document.querySelector('.header__nav-list');
const navListItem = navBar.querySelectorAll('.header__nav-item');
const addNewBookForm = document.querySelector('.add__book-form');
const listDiv = document.querySelector('.book__collection');
const formDiv = document.querySelector('.add__book');
const contactDiv = document.querySelector('.contact');

// calling the date-time function every one second
setInterval(timeNow, 1000);

// create an instance of a book listing
const bookList = new BookListing();

// add event listener to form
addNewBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // create an instance of a book from book class
  const newbook = new Book();
  bookList.addToList(newbook);
  addNewBookForm.reset();
});

// Add event listener to window reload
window.addEventListener('load', () => {
  // load page content
  bookList.displayList();
});

// Add an event listener to the navbar
navBar.addEventListener('click', (event) => {
  if ((event.target.matches('li'))
    && (event.target.innerHTML === 'Add new')) { // checking if the clicked tab is the "add new" tab
    navListItem.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    // adding active class to the clicked tab
    event.target.classList.add('active');

    // Remove the hidden class from the active section and add it to others
    formDiv.classList.remove('hidden');
    if (!(listDiv.classList.contains('hidden')) && !(contactDiv.classList.contains('hidden'))) {
      listDiv.classList.add('hidden');
      contactDiv.classList.add('hidden');
    } else if (!(listDiv.classList.contains('hidden')) && (contactDiv.classList.contains('hidden'))) {
      listDiv.classList.add('hidden');
    } else if ((listDiv.classList.contains('hidden')) && !(contactDiv.classList.contains('hidden'))) {
      contactDiv.classList.add('hidden');
    }
  } else if ((event.target.matches('li'))
    && (event.target.innerHTML === 'Contact')) { // checking if the clicked tab is the "Contact" tab
    navListItem.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    // adding active class to the clicked tab
    event.target.classList.add('active');

    // Remove the hidden class from the active section and add it to others
    contactDiv.classList.remove('hidden');
    if (!(listDiv.classList.contains('hidden')) && !(formDiv.classList.contains('hidden'))) {
      listDiv.classList.add('hidden');
      formDiv.classList.add('hidden');
    } else if (!(listDiv.classList.contains('hidden')) && (formDiv.classList.contains('hidden'))) {
      listDiv.classList.add('hidden');
    } else if ((listDiv.classList.contains('hidden')) && !(formDiv.classList.contains('hidden'))) {
      formDiv.classList.add('hidden');
    }
  } else { // checking if the clicked tab is the "List" tab
    navListItem.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    // adding active class to the clicked tab
    event.target.classList.add('active');

    // Remove the hidden class from the active section and add it to others
    listDiv.classList.remove('hidden');
    if (!(formDiv.classList.contains('hidden')) && !(contactDiv.classList.contains('hidden'))) {
      contactDiv.classList.add('hidden');
      formDiv.classList.add('hidden');
    } else if (!(formDiv.classList.contains('hidden')) && (contactDiv.classList.contains('hidden'))) {
      formDiv.classList.add('hidden');
    } else if ((formDiv.classList.contains('hidden')) && !(contactDiv.classList.contains('hidden'))) {
      contactDiv.classList.add('hidden');
    }
  }
});
