export function initNavbar() {
    const menuIcon = document.querySelector('.nav__menu-icon');
    const navMenu = document.querySelector('.nav__menu');
    let isMenuOpen = false;

    // Toggle menu function
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle('show');
        menuIcon.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    };

    // Add click event to menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            isMenuOpen = false;
            navMenu.classList.remove('show');
            menuIcon.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}