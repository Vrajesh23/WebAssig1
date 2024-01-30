function createQuote() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const roomType = document.getElementById('roomType').value;
    const roomWidth = document.getElementById('roomWidth').value;
    const roomLength = document.getElementById('roomLength').value;
    const roomColor = document.getElementById('colorPicker').value;
    const paintType = document.getElementById('paintType').value;

    const quote = {
        customerName,
        customerEmail,
        roomType,
        roomWidth,
        roomLength,
        roomColor,
        paintType,
    };

    localStorage.setItem('quote', JSON.stringify(quote));

    window.location.href = 'quote.html';
}
