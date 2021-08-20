document.getElementById('submit-btn').addEventListener('click',function (){
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    
    if(userEmail=='shafia123@gmail.com' && userPassword == 'Latte24'){
        window.location.href = 'banking.html';
    }

})