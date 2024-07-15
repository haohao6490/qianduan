document.getElementById('home').addEventListener('click', () => {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('guidePage').classList.add('hidden');
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('reviewPage').classList.add('hidden');
});

document.getElementById('guide').addEventListener('click', () => {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('guidePage').classList.remove('hidden');
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('reviewPage').classList.add('hidden');
});

document.getElementById('signup').addEventListener('click', () => {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('guidePage').classList.add('hidden');
    document.getElementById('signupPage').classList.remove('hidden');
    document.getElementById('reviewPage').classList.add('hidden');
});

document.getElementById('review').addEventListener('click', () => {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('guidePage').classList.add('hidden');
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('reviewPage').classList.remove('hidden');
});

document.getElementById('loginButton').addEventListener('click', () => {
    document.getElementById('loginModal').classList.toggle('hidden');
});

document.getElementById('logoutButton').addEventListener('click', () => {
    // Handle logout logic
});

document.getElementById('changePasswordButton').addEventListener('click', () => {
    document.getElementById('changePasswordModal').classList.toggle('hidden');
});

document.getElementById('applyNow').addEventListener('click', () => {
    // Handle apply now logic
});

document.getElementById('nextStep').addEventListener('click', () => {
    document.getElementById('fillInfo').classList.add('hidden');
    document.getElementById('uploadWork').classList.remove('hidden');
});

document.getElementById('prevStep').addEventListener('click', () => {
    document.getElementById('uploadWork').classList.add('hidden');
    document.getElementById('fillInfo').classList.remove('hidden');
});

document.getElementById('agreeButton').addEventListener('click', () => {
    document.getElementById('reviewList').classList.remove('hidden');
});

// Add event listeners for login form
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle login logic here
});

// Add event listeners for change password form
document.getElementById('changePasswordForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle change password logic here
});

// Add more event listeners and logic as needed
