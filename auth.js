// Google Auth Configuration
const CLIENT_ID = '1075773109360-rvvcrkes8lbir14cthkbugqus54iq3p7.apps.googleusercontent.com';

// Initialize Google Auth
function initGoogleAuth() {
    return new Promise((resolve) => {
        gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: CLIENT_ID
            }).then(resolve);
        });
    });
}

// Save user data to localStorage
function saveUserData(profile) {
    const userData = {
        imageUrl: profile.getImageUrl(),
        givenName: profile.getGivenName(),
        email: profile.getEmail()
    };
    localStorage.setItem('googleUserData', JSON.stringify(userData));
    return userData;
}

// Get saved user data
function getSavedUserData() {
    const userData = localStorage.getItem('googleUserData');
    return userData ? JSON.parse(userData) : null;
}

// Clear user data
function clearUserData() {
    localStorage.removeItem('googleUserData');
}