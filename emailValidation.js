// const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
// const errorMessageS = document.getElementById('error-messageS');
// const submitBtn = document.querySelector('.btn');
// const input = document.querySelector('input');

// submitBtn.addEventListener('click', () => {
//     if(!emailRegex.test(input.value)) {
//         input.classList.add('error-messageS');

//         errorMessageS.style.display = 'block';
//         setTimeout(() => {
//             errorMessageS.style.transform = 'scale(1)';
//         }, 100);
//     } else {
//         if(input.classList.contains('error-messageS')) {
//             input.classList.remove('error-messageS');
//             errorMessageS.style.transform = 'scale(0)';
//             setTimeout(() => {
//                 errorMessageS.style.display = 'none';
//             }, 300);
//         }
//     }
// })