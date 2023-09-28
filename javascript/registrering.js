document.addEventListener('DOMContentLoaded', function() {
    const gyldigeTjenester = ['3-Plagg', '5-Plagg', '8-Plagg', '10-Plagg'];
    
    const urlParams = new URLSearchParams(window.location.search);
    const tjeneste = urlParams.get('tjeneste');

    const containerElement = document.getElementById('container');
    const tittelElement = document.getElementById('tjenesteTittel');

    if(tjeneste && gyldigeTjenester.includes(tjeneste)){
        
        tittelElement.textContent = 'Du har valgt ' + tjeneste;
    } else {
        if(containerElement){
            containerElement.innerHTML = '<p>Vennligst vvelg en gyldig tjeneste:</p>'
        

            gyldigeTjenester.forEach(function(tjenesteNavn){
                const btn = document.createElement('button');
                btn.textContent = tjenesteNavn;
                btn.addEventListener('click', function (){
                    window.location.href = 'registrering.html?tjeneste=' + tjenesteNavn;
                })
                containerElement.appendChild(btn);
            });
        } else {
            console.error('ID for container blei ikkje funnet')
        }
    }
})