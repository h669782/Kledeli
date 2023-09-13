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
