// function fetchBooks() {
// fetch('https://anapioficeandfire.com/api/books')
//   .then(function(resp) {
//     console.log(resp)
//   return resp.json();
//   })
//   .then(function(json) {
//     console.log(json)
//   })


// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//    return fetchBooks()
// });
// }


function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(function(resp) {
      console.log(resp)
    return resp.json();
    })
      .then(function(json) {
      console.log(json)
      });
}
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
     return renderBooks(fetchBooks())
  });