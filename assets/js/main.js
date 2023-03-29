// (function () {
'use strict';

const contactForm = document.getElementById('contact_us');

let formData = new FormData(contactForm);

let emailF = document.querySelector('#email');
let helpF = document.querySelector('#help');
let nameF = document.querySelector('#name');
let messageF = document.querySelector('#message');

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (x) => {

    x.preventDefault();

    if (emailF.value == '') {
        emailF.style.border = '1px solid red';
    } else {
        emailF.style.border = '1px solid green';
    }

    if (helpF.value == '') {
        helpF.style.border = '1px solid red';
    } else {
        helpF.style.border = '1px solid green';
    }

    if (nameF.value == '') {
        nameF.style.border = '1px solid red';
    } else {
        nameF.style.border = '1px solid green';
    }

    if (messageF.value == '') {
        messageF.style.border = '1px solid red';
    } else {
        messageF.style.border = '1px solid green';
    }

})
// });

helpF.addEventListener('change', function(){
    const ansBox = document.querySelector('.ans');

    if(this.value !== ''){
        ansBox.style.display = 'block';
    }else{
        ansBox.style.display = 'none';

    }
})