document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.custom-carousel');
    let startX, moveX, isDragging = false;
    let currentPosition = 0;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        carousel.classList.add('dragging');
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveX = e.touches[0].clientX;
        const diff = moveX - startX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                document.querySelector('.carousel-prev').click();
            } else {
                document.querySelector('.carousel-next').click();
            }
            isDragging = false;
            carousel.classList.remove('dragging');
        }
    });

    carousel.addEventListener('touchend', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
    });
});