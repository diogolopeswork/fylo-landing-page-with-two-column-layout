const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
const errorMessageS = document.getElementById('error-messageS');
const errorMessageR = document.getElementById('error-messageR');
const submitBtn = document.querySelector('.btn');
const btnR = document.getElementById('btnR');
const input = document.getElementById('email');
const inputR = document.getElementById('register');

// ########## Top Register ######### 

submitBtn.addEventListener('click', () => {
    if(!emailRegex.test(input.value)) {
        input.classList.add('error');

        errorMessageS.style.display = 'block';
        setTimeout(() => {
            errorMessageS.style.transform = 'scale(1)';
        }, 100);
    } else {
        if(input.classList.contains('error')) {
            input.classList.remove('error');
            errorMessageS.style.transform = 'scale(0)';
            setTimeout(() => {
                errorMessageS.style.display = 'none';
            }, 300);
        }
    }
})

// ########## Bottom Register ######### 

btnR.addEventListener('click', () => {
    if(!emailRegex.test(input.value)) {
        input.classList.add('error');

        errorMessageR.style.display = 'block';
        setTimeout(() => {
            errorMessageR.style.transform = 'scale(1)';
        }, 100);
    } else {
        if(input.classList.contains('error')) {
            input.classList.remove('error');
            errorMessageR.style.transform = 'scale(0)';
            setTimeout(() => {
                errorMessageR.style.display = 'none';
            }, 300);
        }
    }
})