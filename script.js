function clearScreen() {
    document.getElementById('screen').value = '';
}

function append(value) {
    document.getElementById('screen').value += value;
}

function backspace() {
    let screen = document.getElementById('screen').value;
    document.getElementById('screen').value = screen.substring(0, screen.length - 1);
}

function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch {
        document.getElementById('screen').value = 'Error';
    }
}