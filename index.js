const form = document.getElementById('form');
const nameField = document.querySelector('.name-field');
const nameInput = document.querySelector('.name-input');
const numberField = document.querySelector('.number-field');
const numberInput = document.querySelector('.number-input');
const nInput = document.querySelector('.n-input');
const dataField = document.querySelector('.data-field');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvcField = document.querySelector('.cvc-field');
const cvcInput = document.querySelector('.cvc-input');

const confirmation = document.querySelector('.message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameValidate();
    numberCardValidate();
    dataValidate();
    cvcValidate();

    nameInput.addEventListener("keyup", nameValidate);
    numberInput.addEventListener("keyup", numberCardValidate);
    monthInput.addEventListener("keyup", dataValidate);
    yearInput.addEventListener("keyup", dataValidate);
    cvcInput.addEventListener("keyup", cvcValidate);

    if (
        !nameField.classList.contains('invalid') &&
        !numberField.classList.contains('invalid') &&
        !dataField.classList.contains('invalid') &&
        !cvcField.classList.contains('invalid')
    ) { 
        confirmation.style.display = "block"
        form.style.display = "none"
    }
});

function nameValidate() {
    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    
    if (!nameInput.value.match(namePattern)) {
        return nameField.classList.add('invalid');
    }
    nameField.classList.remove('invalid');

}

function numberCardValidate() {
    const numberPattern = "^[0-9 ]{19}"
    if (numberInput.value == '' || !numberInput.value.match(numberPattern)) {
        return numberField.classList.add('invalid');
    }
    numberField.classList.remove('invalid');
}

function dataValidate() {
    const dataPattern = "[0-9]{2}"
    if (monthInput.value == '' || yearInput.value == '' || !monthInput.value.match(dataPattern) || !yearInput.value.match(dataPattern)) {
        return dataField.classList.add('invalid');
    }
    dataField.classList.remove('invalid');
}

function cvcValidate() {
    const cvcPattern = "[0-9]{3}"
    if (cvcInput.value == '' || !cvcInput.value.match(cvcPattern)) {
        return cvcField.classList.add('invalid');
    }
    cvcField.classList.remove('invalid');
}


// for imprimir the dada in card
nameInput.oninput = () => {
    document.querySelector('.name-card').innerHTML = nameInput.value.toUpperCase()
}

numberInput.oninput = () => {
    document.querySelector('.number-card').innerHTML = numberInput.value
}

monthInput.oninput = () => {
    document.querySelector('.num-card').innerHTML = monthInput.value.toUpperCase()
}

yearInput.oninput = () => {
    document.querySelector('.num1-card').innerHTML = yearInput.value.toUpperCase()
}

cvcInput.oninput = () => {
    document.querySelector('.num-verso').innerHTML = cvcInput.value.toUpperCase()
}


nInput.addEventListener('keypress', () => {
    let numberInputLenght = nInput.value.length 

    if(numberInputLenght === 4 || numberInputLenght === 9 || numberInputLenght === 14) {
        nInput.value += ' '
    }
}) 