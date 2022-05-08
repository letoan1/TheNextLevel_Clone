const showSubMenu = () => {
    const iconOpen = document.querySelector('.has-subnav');
    const openSubmenu = document.querySelector('.subnav');

    iconOpen.addEventListener('click', () => {
        openSubmenu.classList.toggle('open');
    })
}

showSubMenu()