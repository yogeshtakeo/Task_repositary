const books = [];

const addBook = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const rating = document.getElementById("rating").value;
  const genre = document.getElementById("genre").value;

  const book = { title, author, rating, genre };
  books.push(book);

  console.log(books);
};

const findHighestRating = () => {
  if (books.length === 0) {
    alert("Please add some books first.");
    return;
  }

  const highestRating = books.reduce((acc, curr) => {
    return curr.rating > acc.rating ? curr : acc;
  });

  const { title, author, rating, genre } = highestRating;

  const outputBox = document.getElementById("highest-rating");
  outputBox.innerHTML = `
    <h2>Highest Rating</h2>
    <p>Title: ${title}</p>
    <p>Author: ${author}</p>
    <p>Rating: ${rating}</p>
    <p>Genre: ${genre}</p>
  `;
};

const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", addBook);

const findHighestRatingButton = document.getElementById("find-highest-rating");
findHighestRatingButton.addEventListener("click", findHighestRating);