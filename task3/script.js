
document.getElementById('loginForm').style.display = 'block'; 

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('securePage').style.display = 'none';

    clearMessages(); 
}

function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('securePage').style.display = 'none';

    clearMessages(); 
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const message = document.getElementById('registerMessage');

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        message.style.color = "green";
        message.textContent = 'Registration successful! You can now login.';
    } else {
        message.style.color = "red";
        message.textContent = 'Please enter a username and password.';
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');


    if (username === storedUsername && password === storedPassword) {
        message.textContent = '';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('securePage').style.display = 'block';

    
        document.getElementById('welcomeMessage').textContent = `Hello, ${username}!`;
    } else {
        message.style.color = "red";
        message.textContent = 'Invalid username or password.';
    }
}


function logout() {
    clearMessages();
    document.getElementById('securePage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function clearMessages() {
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('registerMessage').textContent = '';
}
