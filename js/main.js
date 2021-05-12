// burger handler
(function ()
{
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.header_nav');
    const menuClose = document.querySelector('.header_nav-close')
    // при клике на бургер для меню делаем сдедующее
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav-active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
    });
}());
