document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    
    function scrollLeft() {
        track.scrollBy({ left: -300, behavior: 'smooth' }); // Geser ke kiri
    }

    function scrollRight() {
        track.scrollBy({ left: 300, behavior: 'smooth' }); // Geser ke kanan
    }

    // Menambahkan event listener untuk tombol
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', scrollLeft);
        nextButton.addEventListener('click', scrollRight);
    }
});
