document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('_gallery-276-9');
    const items = gallery.querySelectorAll('.oxy-gallery-item');
    let currentIndex = 0;
    let isAnimating = false;

    function updateCarousel() {
        if (isAnimating) return;
        isAnimating = true;
        
        const totalItems = items.length;
        
        items.forEach((item, index) => {
            // Remove all classes first
            item.classList.remove('active', 'prev', 'next', 'visible');
            
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === getPrevIndex(currentIndex, totalItems)) {
                item.classList.add('prev');
            } else if (index === getNextIndex(currentIndex, totalItems)) {
                item.classList.add('next');
            }
        });

        // Allow next animation after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    function getPrevIndex(current, total) {
        return (current - 1 + total) % total;
    }

    function getNextIndex(current, total) {
        return (current + 1) % total;
    }

    document.querySelector('.carousel-next').addEventListener('click', function() {
        if (!isAnimating) {
            currentIndex = getNextIndex(currentIndex, items.length);
            updateCarousel();
        }
    });

    document.querySelector('.carousel-prev').addEventListener('click', function() {
        if (!isAnimating) {
            currentIndex = getPrevIndex(currentIndex, items.length);
            updateCarousel();
        }
    });

    // Initialize
    updateCarousel();
});
