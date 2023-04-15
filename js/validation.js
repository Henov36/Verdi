const form = document.getElementById('form');
const formInput = document.querySelectorAll('.input__elem');
const inputName = document.getElementById('name');
const inputLastName = document.getElementById('second-name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone'); 

const spanElements = document.querySelectorAll('.span-error')
 
function validEmail(email) {
    let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
}

// function validPhone(phone) {
//     let regularExpression = /^[0-9]|\. |,|:*$/
//     return regularExpression.test(String(phone).toString());
// }
    
form.onsubmit = function() {

    // let nameVal = inputName.value.length;
    // let lastNameVal = inputLastName.value.length
    // console.log(nameVal, lastNameVal)
    // let phoneVal = inputPhone.value;


    let emailVal = inputEmail.value;
    let emptyInputs = Array.from(formInput).filter(input => input.value === '')
    formInput.forEach(function(input, i) {
        if(input.value === '') {
            input.classList.add('error');
            if(formInput[i].classList.contains('error')) {
                spanElements[i].classList.add('span-error-active');
            };
        } else {
            input.classList.remove('error')  ;
            if(!formInput[i].classList.contains('error')) {
                spanElements[i].classList.remove('span-error-active');
            };
        };

    });


    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if (!validEmail(emailVal)) {
        // console.log('email is not valid');
        inputEmail.classList.add('error');
        spanElements[2].classList.add('span-error-active');
        return false;
    } else {
        inputEmail.classList.remove('error');
        spanElements[2].classList.remove('span-error-active');
    };

    

    // ????
    // if (nameVal > 15) {
    //     inputName.classList.add('error');
    //     console.log(inputName)
    //     return false
    // } else {
    //     inputName.classList.remove('error')
    // }

    // if (lastNameVal > 20) {
    //     inputLastName.classList.add('error');
    //     console.log('Long name')
    //     return false
    // } else {
    //     inputLastName.classList.remove('error')
    // }
    // ?????

    // if(!validPhone(phoneVal)) {
    //     console.log('phone is not valid');
    //     console.log(phoneVal);
    //     inputPhone.classList.add('error')
    //     return false
    // } else {
    //     inputPhone.classList.remove('error')
    // }

    // return false
};