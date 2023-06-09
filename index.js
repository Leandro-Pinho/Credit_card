const form = document.getElementById('form');
const confirmation = document.querySelector('.message')
const nameField = document.querySelector('.name-field');
const nameInput = document.querySelector('.name-input');
const numberField = document.querySelector('.number-field');
const numberInput = document.querySelector('.number-input');
const dataField = document.querySelector('.data-field');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvcField = document.querySelector('.cvc-field');
const cvcInput = document.querySelector('.cvc-input');


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
        !nameInput.classList.contains('invalid'),
        !numberInput.classList.contains('invalid'),
        !monthInput.classList.contains('invalid'),
        !yearInput.classList.contains('invalid'),
        !cvcInput.classList.contains('invalid')
    ) {
      //  alert("ola mundo")
        form.style.display = "none"
        confirmation.style.display = "block"
    }
});

function nameValidate() {
    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameInput.value.match(namePattern)) {
        return nameField.classList.add('invalid'); // adding invalid class if email do not matched with email pattern
    }
    nameField.classList.remove('invalid'); // removing invalid class if email value matched with emailPattern

}

function numberCardValidate() {
    const numberPattern = "[0-9]{16}"
    if (numberInput.value == '' || !numberInput.value.match(numberPattern)) {
        return numberField.classList.add('invalid'); // adding invalid class if email do not matched with email pattern
    }
    numberField.classList.remove('invalid'); // removing invalid class if email value matched with emailPattern
}

function dataValidate() {
    const dataPattern = "[0-9]{2}"
    if (monthInput.value == '' || yearInput.value == '' || !monthInput.value.match(dataPattern) || !yearInput.value.match(dataPattern)) {
        return dataField.classList.add('invalid'); // adding invalid class if email do not matched with email pattern
    }
    dataField.classList.remove('invalid'); // removing invalid class if email value matched with emailPattern
}

function cvcValidate() {
    const cvcPattern = "[0-9]{3}"
    if (cvcInput.value == '' || !cvcInput.value.match(cvcPattern)) {
        return cvcField.classList.add('invalid'); // adding invalid class if email do not matched with email pattern
    }
    cvcField.classList.remove('invalid'); // removing invalid class if email value matched with emailPattern
}


// for imprimir the dada in card
nameInput.oninput = () => {
    document.querySelector('.name-card').innerHTML = nameInput.value.toUpperCase()
}

numberInput.oninput = () => {
    document.querySelector('.number-card').innerHTML = numberInput.value.toUpperCase()
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
