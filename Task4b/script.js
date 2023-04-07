let count = 0

document.getElementById('counting').innerText = count

function increment() {
  count = count + 1
  document.getElementById('counting').innerText = count
}

function decrement() {
  count = count - 1
  document.getElementById('counting').innerText = count
}
function reset() {
  count = 0
  document.getElementById('counting').innerText = count
}
