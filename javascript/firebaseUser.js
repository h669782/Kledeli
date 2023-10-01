var auth = firebase.auth();

function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}
