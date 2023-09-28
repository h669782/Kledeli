document.addEventListener('DOMContentLoaded', function() {
    const gyldigeTjenester = ['3-Plagg', '5-Plagg', '8-Plagg', '10-Plagg'];
    
    const urlParams = new URLSearchParams(window.location.search);
    const tjeneste = urlParams.get('tjeneste');

    const containerElement = document.getElementById('container');
    const tittelElement = document.getElementById('tjenesteTittel');

    // Hvis ingen gyldig tjeneste er valgt fra URL, vis pakkevalget
    document.getElementById('formStep1').classList.remove('hidden');

    if(tjeneste && gyldigeTjenester.includes(tjeneste)){
        tittelElement.textContent = 'Du har valgt ' + tjeneste;
        // Velger den tilsvarende radioknappen for tjenesten fra URL
        document.querySelector(`input[name="packageType"][value="${tjeneste}"]`).checked = true;
    } 

    document.getElementById('next1').addEventListener('click', function() {
        const packageType = document.querySelector('input[name="packageType"]:checked').value;
        
        if(gyldigeTjenester.includes(packageType)){
            tittelElement.textContent = 'Du har valgt ' + packageType;
        }

        document.getElementById('formStep1').classList.add('hidden');
        document.getElementById('formStep2').classList.remove('hidden');
        document.getElementById('step1').classList.remove('active-step');
        document.getElementById('step2').classList.add('active-step');
    });
});



document.getElementById('next2').addEventListener('click', function() {
    document.getElementById('formStep2').classList.add('hidden');
    document.getElementById('formStep3').classList.remove('hidden');
    document.getElementById('step2').classList.remove('active-step');
    document.getElementById('step3').classList.add('active-step');
});

document.getElementById('next3').addEventListener('click', function() {
    document.getElementById('formStep3').classList.add('hidden');
    document.getElementById('formStep4').classList.remove('hidden');
    document.getElementById('step3').classList.remove('active-step');
    document.getElementById('step4').classList.add('active-step');
});

document.getElementById('prev1').addEventListener('click', function() {
    document.getElementById('formStep2').classList.add('hidden');
    document.getElementById('formStep1').classList.remove('hidden');
    document.getElementById('step2').classList.remove('active-step');
    document.getElementById('step1').classList.add('active-step');
});

document.getElementById('prev2').addEventListener('click', function() {
    document.getElementById('formStep3').classList.add('hidden');
    document.getElementById('formStep2').classList.remove('hidden');
    document.getElementById('step3').classList.remove('active-step');
    document.getElementById('step2').classList.add('active-step');
});

document.getElementById('prev3').addEventListener('click', function() {
    document.getElementById('formStep4').classList.add('hidden');
    document.getElementById('formStep3').classList.remove('hidden');
    document.getElementById('step4').classList.remove('active-step');
    document.getElementById('step3').classList.add('active-step');
});

document.getElementById('submit').addEventListener('click', function() {
    // Håndter innsending av skjemaet her
});
