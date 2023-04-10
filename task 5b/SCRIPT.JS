const bookArray = [];

const addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const rating = parseFloat(document.querySelector('#rating').value);
  const genre = document.querySelector('#genre').value;
  const book = { title, author, rating, genre };
  bookArray.push(book);
});

const findHighestRatedBtn = document.querySelector('#find-highest-rated');
findHighestRatedBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const highestRatedBook = bookArray.reduce((acc, curr) => {
    return acc.rating > curr.rating ? acc : curr;
  }, { rating: -Infinity });
  const { title, author, rating, genre } = highestRatedBook;
  const outputBox = document.querySelector('#output-box');
  outputBox.innerHTML = `<h2>${title}</h2><p>by ${author}</p><p>Rating: ${rating}</p><p>Genre: ${genre}</p>`;
});