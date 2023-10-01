// Log the user in using email and password
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Successful login
        var user = userCredential.user;
        console.log("User logged in successfully: ", user);
        // Close the modal or redirect the user or any other post-login action
        // Example: closeModal();
        window.location.href = "minside.html";
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error logging in: ", errorMessage);
        // Show the error to the user
        alert(errorMessage);
    });
}

// Add a realtime listener to check for changes in authentication status
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("User is signed in: ", user);
    } else {
        // No user is signed in.
        console.log("No user is signed in.");
    }
});

