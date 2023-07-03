import '../css/common.css';
import '../css/feedback-form.css';


const refs = {
    form: document.querySelector('js-feedback-form'),
    textarea: document.querySelector('js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {}

function onTextareaInput(evt) {
    const value = evt.currentTarget.value;
    console.log(value);
}

function populateMessageOutput() {}