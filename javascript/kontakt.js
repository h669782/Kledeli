document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        
        let city = tab.getAttribute('data-city');
        
        document.querySelectorAll('.map-frame').forEach(frame => {
            frame.style.display = frame.getAttribute('data-city') === city ? 'block' : 'none';
        });
    });
});

document.querySelector('.contact-form form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const navn = document.getElementById('navn').value;
    const epost = document.getElementById('epost').value;
    const melding = document.getElementById('melding').value;
  
    try {
      const db = firebase.firestore();
      await db.collection('tickets').doc(`${epost}_${Date.now()}`).set({
        navn: navn,
        epost: epost,
        melding: melding,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Melding sendt!');
    } catch (error) {
      console.error('Error saving message: ', error);
      alert('Det oppsto en feil under innsending.');
    }
  });
  