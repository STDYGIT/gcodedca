// UI Management
function showProfile(userData) {
    document.getElementById('profile-pic').src = userData.imageUrl;
    document.getElementById('user-name').textContent = userData.givenName;
    document.getElementById('user-email').textContent = userData.email;
    
    document.getElementById('signin-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
}

function showSignIn() {
    document.getElementById('signin-section').style.display = 'block';
    document.getElementById('profile-section').style.display = 'none';
    
    // Clear profile info
    document.getElementById('profile-pic').src = '';
    document.getElementById('user-name').textContent = '';
    document.getElementById('user-email').textContent = '';
}

function redirectToResources() {
    window.location.href = 'resources.html';
}