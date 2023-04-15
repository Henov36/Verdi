const headerChangeColor = document.querySelector('.container__wraper-white');
const headerLinks = document.querySelectorAll('.a__header-link');

const logoHeader = document.querySelector('.container__logo');

const body = document.querySelector('.body');

// ======= SCREEN WIGHT ======
let valueOfScreenWidth = function checkPosition() {
    let screenWight = document.documentElement.clientWidth;
    return screenWight;
};
// ======= SCREEN WIGHT END

// ======== HEADER BTN MENU ================
function btnHeader(hoverElement, screenWight) {
    const headerParent = document.querySelector('.header');
    const menuHaderNav = document.querySelector('.header__menu_hiden');
    const dash = document.querySelector('.button-dash');
    let scrollPosition = window.scrollY;

    dash.addEventListener('click', () => {
        dash.classList.toggle('dash-active');
        menuHaderNav.classList.toggle('header__menu_hiden');
        hoverElement.classList.toggle('hover-bg');
        if(screenWight <= 900 && scrollPosition == 0) {
            body.classList.toggle('no-scroll')
            headerParent.classList.toggle('mobile-menu-show')
            hoverElement.classList.toggle('container__hrader-vh');
        }
    });
}
btnHeader(headerChangeColor, valueOfScreenWidth());
// ======== HEADER BTN MENU END

// ========= HEADER BG POSITION AND HIDEN =======================
let lastScrollTop = 0;
const headerElem = document.querySelector('.header');
const dash = document.querySelectorAll('.dash__line');
const menuHaderNav = document.querySelector('.header__menu_hiden');
window.addEventListener("scroll", function() {

    let scrollPositionY = window.pageYOffset || document.documentElement.scrollTop; 
    let screenWight = document.documentElement.clientWidth;

    if (scrollPositionY > lastScrollTop && scrollPositionY > 0 && screenWight <= 900) {
        headerElem.classList.add('hover-bg', 'heder__trans', 'header-bg');
        dash.forEach((el)=> {
            el.classList.add('dash__line-bg');
        });
    } else if (scrollPositionY == 0  && screenWight <= 900) {
        headerElem.classList.remove('header-bg');
        dash.forEach((el)=> {
            el.classList.remove('dash__line-bg');
        });
    } else if (screenWight < 900 && scrollPositionY > 0) {
        headerElem.classList.remove('hover-bg', 'heder__trans');
    }
    lastScrollTop = scrollPositionY <= 0 ? 0 : scrollPositionY; 
    
}, false);
// ========= HEADER BG POSITION AND HIDEN END


// =================== Sroll Top

function scrollTop(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
    
(function scrollToTop() {
    const btnElem = document.querySelector('.btn__scroll-top');
    btnElem.addEventListener('click', () => {
        const scrollToElem = document.querySelector('.header');
        scrollTop(scrollToElem);
    })
})(scrollTop);

(function scrollBlockHiden() {
    const btnElem = document.querySelector('.btn__scroll-top');
    window.addEventListener("scroll", function() { 
        const conteinerFooter = document.querySelector('.container__footer').offsetTop - 500;
        let scrollPositionY = window.pageYOffset || document.documentElement.scrollTop; 
        if (scrollPositionY >= conteinerFooter) {
            btnElem.classList.add('btn__scroll-position');
            btnElem.classList.remove('btn__scroll-hiden');
        } else {
            btnElem.classList.remove('btn__scroll-position');
            btnElem.classList.add('btn__scroll-hiden');
        }
    });
})();

// =================== Sroll Top End