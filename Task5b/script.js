let arr1 = [];

function addInfo() {
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let rating = document.getElementById("rating").value;

  const book = { name, author, rating, genre };
  arr1.push(book);
  console.log(arr1);
  document.getElementById("form").reset();
}

function findHighest() {
  arr1.sort((a, b) => b.rating - a.rating);
  console.log(arr1);

  const highest = arr1[0];
  console.log(highest);
  const output =
    "The book " +
    highest.name +
    " by author " +
    highest.author +
    " of genre " +
    highest.genre +
    " is highest rated with rating of " +
    highest.rating;
  console.log(output);
  document.getElementById("output").innerHTML = output;
}
