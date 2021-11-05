const $key = document.getElementById('key');
const $code = document.getElementById('code');
const $status = document.getElementById('status');

function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  $key.textContent = event.key;
  $code.textContent = event.code;
  $status.textContent = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);