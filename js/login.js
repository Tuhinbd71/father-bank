document.getElementById('login-submit').addEventListener('click', function () {
    // const userField = document.getElementById('user-email');
    const userEmail = document.getElementById('user-email').value;

    // const userFieldPassword = document.getElementById('user-password');
    const userPasswordPassword = document.getElementById('user-password').value;

    if (userEmail == 'santa@gmail.com' && userPasswordPassword == 'hanludada') {
        console.log('Valid user');
        window.location.href = 'banking.html'
    }
})