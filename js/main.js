const search_Scrolling = document.querySelectorAll('.scrolling_page[data-goto]');


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
        if (body_menu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            body_menu_one.classList.remove('_active');
            body_menu.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
    }
}

const buttomOnclocl = document.querySelector('.btn_footer');
const emailInput = document.querySelector('.Email_input');
const sendingForm = document.querySelector('.sending_form');
const closeimg = document.querySelector('.close_img');

// форма отправки
function cliclButtton() {
    if (emailInput.value.length > 5) {
        sendingForm.style.display = "block";
        document.body.classList.add('_lock');
        closeimg.addEventListener('click', function () {
            sendingForm.style.display = "none";
            document.body.classList.remove('_lock');
            emailInput.classList.remove('danger');
        })
    } else if (emailInput.value.length < 5) {
        emailInput.classList.add('danger');
    } else {
        emailInput.classList.remove('danger');
    }
}