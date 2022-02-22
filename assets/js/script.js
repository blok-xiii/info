(function() {
    const navbar = document.getElementById("navbar");
    const burgerMenu = document.getElementById("burger-menu");
    
    function toggleNavbar() {
        navbar.classList.toggle("hidden");
    }
    
    burgerMenu.addEventListener("click", toggleNavbar);
})();
