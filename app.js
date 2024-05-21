document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#header .nav-list .hamburger');
    const mobileMenu = document.querySelector('#header .nav-list ul');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    } else {
        console.error("Hamburger or mobileMenu element not found.");
    }
});
