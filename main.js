// Main application logic
async function initApp() {
    const auth2 = await initGoogleAuth();
    
    // Check if user is already signed in
    if (auth2.isSignedIn.get()) {
        const googleUser = auth2.currentUser.get();
        const profile = googleUser.getBasicProfile();
        const userData = saveUserData(profile);
        showProfile(userData);
    } else {
        // Check localStorage for saved session
        const savedData = getSavedUserData();
        if (savedData) {
            showProfile(savedData);
        }
    }
}

// Google Sign-in callback
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const userData = saveUserData(profile);
    showProfile(userData);
}

// Sign out handler
async function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    await auth2.signOut();
    clearUserData();
    showSignIn();
}

// Initialize when page loads
window.onload = initApp;