let angle = 0;
const carousel = document.querySelector('.carousel ul');
const items = document.querySelectorAll('.carousel li');
const totalItems = items.length;
let startX;
let isDragging = false;

function rotateCarousel() {
    carousel.style.transform = 'rotateY(' + angle + 'deg)';
    items.forEach((item, index) => {
        item.classList.remove('active');
        const itemAngle = ((angle / 45) + index) % totalItems;
        if (Math.abs(itemAngle) < 0.5 || Math.abs(itemAngle - totalItems) < 0.5) {
            item.classList.add('active');
        }
    });
}

carousel.addEventListener('mousedown', function(event) {
    startX = event.clientX;
    isDragging = true;
    carousel.style.transition = 'none'; // Disable transition during drag
});

carousel.addEventListener('mousemove', function(event) {
    if (isDragging) {
        const deltaX = event.clientX - startX;
        angle += deltaX / 10; // Adjust the divisor to control the speed
        rotateCarousel();
        startX = event.clientX;
    }
});

carousel.addEventListener('mouseup', function() {
    isDragging = false;
    carousel.style.transition = 'transform 1s'; // Re-enable transition after drag
});

carousel.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    carousel.style.transition = 'none'; // Disable transition during drag
});

carousel.addEventListener('touchmove', function(event) {
    if (isDragging) {
        const deltaX = event.touches[0].clientX - startX;
        angle += deltaX / 10; // Adjust the divisor to control the speed
        rotateCarousel();
        startX = event.touches[0].clientX;
    }
});

carousel.addEventListener('touchend', function() {
    isDragging = false;
    carousel.style.transition = 'transform 1s'; // Re-enable transition after drag
});

document.getElementById('left-button').addEventListener('click', function() {
    angle -= 45;
    rotateCarousel();
});

document.getElementById('right-button').addEventListener('click', function() {
    angle += 45;
    rotateCarousel();
});
