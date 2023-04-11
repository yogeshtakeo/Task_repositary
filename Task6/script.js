function findFrequency() {
  const str1 = document.getElementById("str1").value;
  console.log(str1);

  const obj = {};
  let max = 0;
  let mChar = " ";
  for (let i = 0; i < str1.length; i++) {
    let char = str1.charAt(i);
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  let sorted = [];
  for (let freq in obj) {
    sorted.push([freq, obj[freq]]);
  }

  sorted.sort(function (a, b) {
    return b[1] - a[1];
  });
  const out = sorted[0];
  const output1 =
    "The most frequent character is " +
    out[0] +
    ". It is repeated " +
    out[1] +
    " times.";

  const output = "The first character is " + str1[0];
  console.log(output1);
  console.log(output);
  document.getElementById("output").innerHTML = output;
  document.getElementById("output1").innerHTML = output1;
}
