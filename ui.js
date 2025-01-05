// UI Management
function showProfile(userData) {
    if (!userData) {
        showSignIn();
        return;
    }

    const profilePic = document.getElementById('profile-pic');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const signinSection = document.getElementById('signin-section');
    const profileSection = document.getElementById('profile-section');

    if (profilePic) profilePic.src = userData.imageUrl;
    if (userName) userName.textContent = userData.givenName;
    if (userEmail) userEmail.textContent = userData.email;
    
    if (signinSection) signinSection.style.display = 'none';
    if (profileSection) profileSection.style.display = 'block';
}

function showSignIn() {
    const signinSection = document.getElementById('signin-section');
    const profileSection = document.getElementById('profile-section');
    const profilePic = document.getElementById('profile-pic');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    
    if (signinSection) signinSection.style.display = 'block';
    if (profileSection) profileSection.style.display = 'none';
    
    // Clear profile info
    if (profilePic) profilePic.src = '';
    if (userName) userName.textContent = '';
    if (userEmail) userEmail.textContent = '';
}

function redirectToResources() {
    window.location.href = 'resources.html';
}