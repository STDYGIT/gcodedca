// Main application logic
async function initApp() {
    try {
        // First check for saved data
        const savedData = getSavedUserData();
        if (savedData) {
            showProfile(savedData);
        }

        // Then initialize Google Auth
        const auth2 = await initGoogleAuth();
        
        // Check if user is already signed in with Google
        if (auth2.isSignedIn.get()) {
            const googleUser = auth2.currentUser.get();
            const profile = googleUser.getBasicProfile();
            const userData = saveUserData(profile);
            showProfile(userData);
        }
    } catch (error) {
        console.error('Error initializing app:', error);
        // Show signin section if there's an error
        showSignIn();
    }
}

// Google Sign-in callback
function onSignIn(googleUser) {
    try {
        const profile = googleUser.getBasicProfile();
        const userData = saveUserData(profile);
        showProfile(userData);
    } catch (error) {
        console.error('Error during sign in:', error);
        showSignIn();
    }
}

// Sign out handler
async function signOut() {
    try {
        const auth2 = await initGoogleAuth();
        await auth2.signOut();
        clearUserData();
        showSignIn();
    } catch (error) {
        console.error('Error signing out:', error);
        // Clear data anyway
        clearUserData();
        showSignIn();
    }
}

// Make functions available globally
window.onSignIn = onSignIn;
window.signOut = signOut;
window.redirectToResources = redirectToResources;

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}