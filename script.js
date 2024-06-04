document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        guests: document.getElementById('guests').value
    };
    
    fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Ihre Buchungsanfrage wurde gesendet. Wir werden uns in Kürze bei Ihnen melden.');
        document.getElementById('bookingForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Es gab einen Fehler bei der Buchungsanfrage. Bitte versuchen Sie es später erneut.');
    });
