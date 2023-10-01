
document.addEventListener('DOMContentLoaded', function() {
    const gyldigeTjenester = ['3-Plagg', '5-Plagg', '8-Plagg', '10-Plagg'];
    
    const urlParams = new URLSearchParams(window.location.search);
    const tjeneste = urlParams.get('tjeneste');
    const tittelElement = document.getElementById('tjenesteTittel');

    let currentStep = 1; // Start med steg 1 som standard

    if (tjeneste && gyldigeTjenester.includes(tjeneste)) {
        tittelElement.textContent = 'Du har valgt ' + tjeneste;
        const radioButton = document.querySelector(`input[name="packageType"][value="${tjeneste}"]`);
        if (radioButton) radioButton.checked = true;
    } else {
        document.getElementById('formStep1').classList.remove('hidden');
    }

    function updateStep(step) {
        // Skjul nåværende steg
        document.getElementById('formStep' + currentStep).classList.add('hidden');
        document.getElementById('step' + currentStep).classList.remove('active-step');

        // Vis nytt steg
        document.getElementById('formStep' + step).classList.remove('hidden');
        document.getElementById('step' + step).classList.add('active-step');

        currentStep = step;
    }

    function updateConfirmationDetails() {
        // Pakkeinformasjon
        const selectedPackage = document.querySelector('input[name="packageType"]:checked');
        document.getElementById('confirmedPackage').textContent = selectedPackage ? selectedPackage.value : '';

        // Personopplysninger
        document.getElementById('confirmedFirstName').textContent = "Fornavn: \t" + document.getElementById('firstName').value;
        document.getElementById('confirmedLastName').textContent = "Etternavn: \t" + document.getElementById('lastName').value;
        document.getElementById('confirmedBirthDate').textContent = "Fødselsdato: \t" + document.getElementById('birthDate').value;
        document.getElementById('confirmedEmail').textContent = "E-post: \t" + document.getElementById('email').value;
        document.getElementById('confirmedPhone').textContent = "Telefon: \t" + document.getElementById('phone').value;
        document.getElementById('confirmedAddress').textContent = "Addresse: \t" + document.getElementById('address').value;
        document.getElementById('confirmedPostalCode').textContent = "Postnummer: \t" + document.getElementById('postalCode').value;
        document.getElementById('confirmedCity').textContent = "Poststed: \t" + document.getElementById('city').value;

        // Betalingsmetode
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        document.getElementById('confirmedPaymentMethod').textContent = selectedPaymentMethod ? selectedPaymentMethod.value : '';
    }

    document.getElementById('next3').addEventListener('click', function() {
        updateConfirmationDetails();
        updateStep(4);
    });

    document.getElementById('next1').addEventListener('click', function() {
        updateStep(2);
    });

    document.getElementById('next2').addEventListener('click', function() {
        updateStep(3);
    });



    document.getElementById('prev1').addEventListener('click', function() {
        updateStep(1);
    });

    document.getElementById('prev2').addEventListener('click', function() {
        updateStep(2);
    });

    document.getElementById('prev3').addEventListener('click', function() {
        updateStep(3);
    });

    function handleUserRegistration() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
    
        if (password !== confirmPassword) {
            alert("Passordene samsvarer ikke. Prøv igjen.");
            return;
        }
    
        registerUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
    
                // Legger til brukerdata i Firestore
                const db = firebase.firestore();
                db.collection('users').doc(user.uid).set({
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    birthDate: document.getElementById('birthDate').value,
                    email: email,
                    phone: document.getElementById('phone').value,
                    address: document.getElementById('address').value,
                    postalCode: document.getElementById('postalCode').value,
                    city: document.getElementById('city').value,
                    packageType: document.querySelector('input[name="packageType"]:checked').value,
                    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
                })
                .then(() => {
                    alert("Registrering vellykket!");
                    window.location.href = "minside.html";
                })
                .catch((error) => {
                    console.error("Feil ved lagring i Firestore: ", error);
                    alert("Det oppstod en feil under registrering.");
                });
            })
            .catch((error) => {
                console.error("Feil ved registrering: ", error);
                alert("Det oppstod en feil under registrering.");
            });
    }
    
    



    document.getElementById('submit').addEventListener('click', function() {
        handleUserRegistration();
    });
    

});
