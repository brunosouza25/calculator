const screen = document.getElementById('screen');
document.addEventListener('click', function (event) {
    if (event.target.className !== 'calculatorButton') {
        return;
    }

    if (event.target.innerText === '=') {
        calc();
        return;
    } else if (event.target.innerText === '<<') {
        backSpace();
        return;
    } else if (event.target.innerText === 'C') {
        clear();
        return;
    }

    addInScreen(event.target.innerText);
});

//Função responsável por limpar o input da calculadora
function clear() {
    screen.value = '';
    screen.classList.remove('red');
}

//Função responsável por adicionar os valores recebidos no input da calculadora
function addInScreen(value) {
    screen.value += value;
}

//Função responsável por apagar o último valor do input
function backSpace() {
    screen.value = screen.value.slice(0, -1);
}

//Função responsável por calcular o que está dentro do input
function calc() {
    try {
        screen.value = eval(screen.value);
        screen.classList.remove('red');
    } catch (e) {
        screen.classList.add('red');
    }
}
