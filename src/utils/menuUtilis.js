export const closeMenu = () => {
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
        menuToggle.checked = false;
    }
};