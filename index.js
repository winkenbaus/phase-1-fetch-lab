function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json))
  };
function renderBooks(book) {
    const main = document.querySelector('main');
    book.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  };
document.addEventListener('DOMContentLoaded', function() {
     return fetchBooks
  });
