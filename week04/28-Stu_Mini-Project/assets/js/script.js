const $key = document.getElementById('key');

function keyDownAction(event) {
    $key.textContent = event.key;
}

document.addEventListener('keydown', keyDownAction)