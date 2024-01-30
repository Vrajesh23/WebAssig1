document.addEventListener("DOMContentLoaded", function () {
    const quote = JSON.parse(localStorage.getItem("quote"));

    const customerName = quote.customerName;
    const customerEmail = quote.customerEmail;
    const roomType = quote.roomType;
    const roomWidth = quote.roomWidth;
    const roomLength = quote.roomLength;
    const roomColor = quote.roomColor;
    const paintType = quote.paintType;

    const squareFootage = roomWidth * roomLength;
    const numCans = Math.ceil(squareFootage / 400);
    const paintPrice = paintType === "standard" ? 24.99 : 39.99;
    const totalPrice = numCans * paintPrice * 1.13;

    document.getElementById("customerName").textContent = customerName;
    document.getElementById("customerEmail").textContent = customerEmail;
    document.getElementById("roomType").textContent = roomType;
    document.getElementById("roomDimensions").textContent = `${roomWidth}ft x ${roomLength}ft`;

    // Display color swatch
    const colorSwatchElement = document.getElementById("colorSwatch");
    colorSwatchElement.style.backgroundColor = roomColor;

    document.getElementById("paintType").textContent = paintType;
    document.getElementById("numCans").textContent = numCans;
    document.getElementById("finalPrice").textContent = `$${totalPrice.toFixed(2)}`;
});
