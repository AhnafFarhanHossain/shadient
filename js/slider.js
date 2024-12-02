document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-1');
    const sliderContent = slider.innerHTML;
    
    // Clone the slider content
    slider.innerHTML = sliderContent + sliderContent;

    // Function to check if slider needs to reset
    function checkSlider() {
        const firstItem = slider.firstElementChild;
        const itemWidth = firstItem.offsetWidth;
        const sliderScroll = slider.scrollLeft;
        const totalWidth = slider.scrollWidth;

        if (sliderScroll >= totalWidth / 2) {
            slider.scrollLeft = 0;
        } else if (sliderScroll <= 0) {
            slider.scrollLeft = totalWidth / 2;
        }
    }

    // Check slider position periodically
    setInterval(checkSlider, 1000);
});
