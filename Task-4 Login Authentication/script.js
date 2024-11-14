// Show the Register form
function showRegisterForm() {
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('login').style.display = 'none';
    document.getElementById('securedPage').style.display = 'none';
    console.log('clicked');
}

// Show the Login form
function showLoginForm() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
    document.getElementById('securedPage').style.display = 'none';
}

// Register user
function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const Cpassword = document.getElementById('confirmRegPassword').value;
    if (username && password) {
        if (password.length >= 8) {
            if (password === Cpassword) {
                // Save username and password in localStorage (simulating database)
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                alert('Registration Successful! Now, you can log in.');
                showLoginForm();  // Show login form after registration
            } else {
                alert('Conform password is not valid');
            }
        } else {
            alert('Password must be 8');
        }
    } else {
        alert('Please fill in both fields.');
    }

}
// Login user
function loginUser() {
    console.log('hi');
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        showSecuredPage();  // Show secured page after successful login
    } else {
        alert('Invalid username or password.');
    }
}

// Show the Secured page after successful login
function showSecuredPage() {
    document.getElementById('securedPage').style.display = 'flex';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'none';
}

// Logout function
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    alert('You have logged out!');
    showLoginForm();  // Show login form after logout
    const username = document.getElementById('regUsername').value = '';
    const password = document.getElementById('regPassword').value = '';
    const Cpassword = document.getElementById('confirmRegPassword').value = '';

}
