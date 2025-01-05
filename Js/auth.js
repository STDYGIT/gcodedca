// Google Auth Configuration
const CLIENT_ID = '1075773109360-rvvcrkes8lbir14cthkbugqus54iq3p7.apps.googleusercontent.com';
let auth2Instance = null;

// Initialize Google Auth with proper error handling
function initGoogleAuth() {
    return new Promise((resolve, reject) => {
        if (typeof gapi === 'undefined') {
            reject(new Error('Google API not loaded'));
            return;
        }

        // Check if auth2 is already initialized
        if (auth2Instance) {
            resolve(auth2Instance);
            return;
        }

        gapi.load('auth2', {
            callback: () => {
                gapi.auth2.init({
                    client_id: CLIENT_ID
                }).then(auth2 => {
                    auth2Instance = auth2;
                    resolve(auth2);
                }).catch(reject);
            },
            onerror: () => reject(new Error('Failed to load auth2'))
        });
    });
}

// Save user data to localStorage
function saveUserData(profile) {
    if (!profile) return null;
    
    try {
        const userData = {
            imageUrl: profile.getImageUrl(),
            givenName: profile.getGivenName(),
            email: profile.getEmail()
        };
        localStorage.setItem('googleUserData', JSON.stringify(userData));
        return userData;
    } catch (error) {
        console.error('Error saving user data:', error);
        return null;
    }
}

// Get saved user data
function getSavedUserData() {
    try {
        const userData = localStorage.getItem('googleUserData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Error getting saved user data:', error);
        return null;
    }
}

// Clear user data
function clearUserData() {
    localStorage.removeItem('googleUserData');
}