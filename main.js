
const firstNameInput = document.querySelector('#user-first-name');
const lastNameInput = document.querySelector('#user-last-name');
const emailInput = document.querySelector('#user-email');
const passwordInput = document.querySelector('#user-password');
const submitBtn = document.querySelector('.submit-btn');

const firstNameParent = document.querySelector('.first-name-parent');
const lastNameParent = document.querySelector('.last-name-parent');
const emailParent = document.querySelector('.email-parent');
const passwordParent = document.querySelector('.password-parent');

const firstNameInputWrapper = document.querySelector('.first-name-input-wrapper');
const lastNameInputWrapper = document.querySelector('.last-name-input-wrapper');
const emailInputWrapper = document.querySelector('.email-input-wrapper');
const passwordInputWrapper = document.querySelector('.password-input-wrapper');

const emailvalidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let fieldName = null;
let nameErrorMsg = null;
const emailErrorMsg = `Looks like this is not an email`;
const passwordErrorMsg = `Password cannot be empty`;

function displayErrorIcon(parentName){
    const errorIconElement = document.createElement('span');
    errorIconElement.classList.add('error-icon');
    parentName.appendChild(errorIconElement);
}
function removeErrorIcon(parentName){
    const renderedErrorIcon = parentName.querySelector('.error-icon');
    if(renderedErrorIcon){
        renderedErrorIcon.remove();
    }
}

function renderErrorMsg(parentName, errorMsg){
    const errorMsgElement = document.createElement('p');
    errorMsgElement.classList.add('error-msg');
    errorMsgElement.textContent = errorMsg;
    parentName.appendChild(errorMsgElement);
}

function removeErrorMsg(parentName){
    const renderedErrorMsgElement = parentName.querySelector('.error-msg');
    if(renderedErrorMsgElement){
        renderedErrorMsgElement.remove();
    }
}


function validateFirstName(){
    removeErrorIcon(firstNameInputWrapper);
    removeErrorMsg(firstNameParent);
    if(!firstNameInput.value){
        fieldName = firstNameInput.name;
        nameErrorMsg = `${fieldName} cannot be empty`;
        renderErrorMsg(firstNameParent, nameErrorMsg);
        displayErrorIcon(firstNameInputWrapper);
        return false;
    }
    return true;
}

function validateLastName(){
    removeErrorIcon(lastNameInputWrapper);
    removeErrorMsg(lastNameParent);
    if(!lastNameInput.value){
        fieldName = lastNameInput.name;
        nameErrorMsg = `${fieldName} cannot be empty`;
        renderErrorMsg(lastNameParent, nameErrorMsg);
        displayErrorIcon(lastNameInputWrapper);
        return false;
    }
    return true;
}

function validateEmail(){
    removeErrorIcon(emailInputWrapper);
    removeErrorMsg(emailParent);
    emailInput.classList.remove(`error-state-placeholder-style`);

    if(!emailInput.value){
       renderErrorMsg(emailParent, `Email cannot be empty`);
       displayErrorIcon(emailInputWrapper);
       emailInput.placeholder = `email@example.com`;
       emailInput.classList.add(`error-state-placeholder-style`); 
       return false;
    }
    const userInput = emailInput.value.trim();
    if(!emailvalidator.test(userInput)){
    renderErrorMsg(emailParent, emailErrorMsg);
    displayErrorIcon(emailInputWrapper); 
    emailInput.placeholder = `email@example/com`;
    emailInput.classList.add(`error-state-placeholder-style`); 
    return false;
    }

    return true;

}

function validatePassword(){
    removeErrorIcon(passwordInputWrapper);
    removeErrorMsg(passwordParent);
    if(!passwordInput.value){
        renderErrorMsg(passwordParent, passwordErrorMsg);
        displayErrorIcon(passwordInputWrapper);
        return false;
    }
    return true;
}

function validateForm(){
    
    const fNameOk = validateFirstName();
    const lNameOk = validateLastName();
    const emailOk = validateEmail();
    const passOk = validatePassword();

    return fNameOk && lNameOk && emailOk && passOk;

}


submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const allOk = validateForm();

    if(allOk){
        console.log(`Form Submission done.`)
    }
    else{
        console.log(`Please fill up the form with appropriate informations.`);
    }
});

