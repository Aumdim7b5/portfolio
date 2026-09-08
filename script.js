document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded.");

    // Project Carousel Logic
    const carousels = document.querySelectorAll('.project-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const dots = carousel.querySelectorAll('.dot');
        
        if (track && dots.length > 0) {
            let currentSlide = 0;
            const slideCount = dots.length;
            let slideInterval;

            function goToSlide(index) {
                currentSlide = index;
                track.style.transform = `translateX(-${currentSlide * 100}%)`;
                dots.forEach(dot => dot.classList.remove('active'));
                dots[currentSlide].classList.add('active');
            }

            function startAutoSlide() {
                slideInterval = setInterval(() => {
                    let nextSlide = (currentSlide + 1) % slideCount;
                    goToSlide(nextSlide);
                }, 4000); // Slide every 4 seconds
            }

            function stopAutoSlide() {
                clearInterval(slideInterval);
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    stopAutoSlide(); // Pause auto-sliding if user clicks
                    startAutoSlide(); // Restart timer
                });
            });

            // Initialize auto slide
            startAutoSlide();
        }
    });
});
