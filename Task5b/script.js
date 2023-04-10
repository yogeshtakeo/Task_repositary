let books = [];

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const rating = parseInt(document.getElementById("rating").value);
  const genre = document.getElementById("genre").value;

  const book = { title, author, rating, genre };
  books.push(book);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("genre").value = "";
}

function findBestBook() {
  if (books.length === 0) {
    document.getElementById("output").innerHTML = "No books added yet.";
    return;
  }

  let bestBook = books[0];
  for (let i = 1; i < books.length; i++) {
    if (books[i].rating > bestBook.rating) {
      bestBook = books[i];
    }
  }

  const { title, author, rating, genre } = bestBook;
  document.getElementById(
    "output"
  ).innerHTML = `<p><b>${title}</b> by ${author} (${genre}) - ${rating}/10</p>`;
}
