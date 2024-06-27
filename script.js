function toggleMenu() {
    console.log('toggleMenu function called');
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    console.log('Before toggle - menu classes:', menu.classList);
    console.log('Before toggle - icon classes:', icon.classList);
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    console.log('After toggle - menu classes:', menu.classList);
    console.log('After toggle - icon classes:', icon.classList);
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    console.log('Hamburger icon element:', hamburgerIcon);
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", toggleMenu);
        console.log('Click event listener added to hamburger icon');
    } else {
        console.log('Hamburger icon not found');
    }
});