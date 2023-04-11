let count = 0;

document.getElementById("increase").onclick = function () {
  count += 1;
  document.getElementById("countlbl").innerHTML = count;
};
document.getElementById("decrease").onclick = function () {
  count -= 1;
  document.getElementById("countlbl").innerHTML = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("countlbl").innerHTML = count;
};
