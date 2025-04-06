const search_Scrolling = document.querySelectorAll('.scrolling_page[data-goto]');

if (search_Scrolling.length > 0) {
    search_Scrolling.forEach(item => {
        item.addEventListener('click', onMenuClick);
    });
}

function onMenuClick(e) {
    const item_one = e.target;
    if (item_one.dataset.goto && document.querySelector(item_one.dataset.goto)) {
        const gotoBlock = document.querySelector(item_one.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
    }
}

// бургер меню
const Burger_Menu = document.querySelector('.block_none');
const Burger_MenuOne = document.querySelector('.menu_burger');
const body_menu_one = document.querySelector('.menu_mar_left');
const body_menu = document.querySelector('.black_width_two');

if (body_menu_one) {
    body_menu_one.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        body_menu_one.classList.toggle('_active');
        body_menu.classList.toggle('_active');
        document.querySelector('.block_none').classList.toggle('_display_none')
    });
}
if (Burger_MenuOne) {
    Burger_MenuOne.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        Burger_MenuOne.classList.toggle('_active');
        body_menu.classList.toggle('_active');
        document.querySelector('.block_none').classList.toggle('_display_none')
    });
}