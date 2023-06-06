const status = document.getElementById("status");
document
  .getElementById("input")
  .addEventListener("input", debounce(updateStatus));
function updateStatus(currentStatus) {
  status.innerText = currentStatus;
}

function debounce(fn) {
  let debounceId;
  return function () {
    clearTimeout(debounceId);
    status.innerText = "waiting";
    debounceId = setTimeout(() => fn(this.value), 500);
  };
}

// <input id="input" />
// <p id="status"></p>
