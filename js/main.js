const headerChangeColor = document.querySelector('.container__wraper-white');
const headerLinks = document.querySelectorAll('.a__header-link');

const logoHeader = document.querySelector('.container__logo');

const logoBlack = document.querySelector('.logo-black');
const logoWhite = document.querySelector('.logo-white');

const body = document.querySelector('.body');

// ======= SCREEN WIGHT ======
let valueOfScreenWidth = function checkPosition() {
    let screenWight = document.documentElement.clientWidth;
    return screenWight;
};
// ======= SCREEN WIGHT END

//  ======= HEADER HOVER ======
function hoverHeader(hoverElement, black, white, linkElements, screenWight = valueOfScreenWidth()) {
    if (screenWight > 900) {
        hoverElement.addEventListener('mouseover', () => {
            hoverElement.classList.add('hover-bg');
            black.classList.remove('logo-hiden');
            white.classList.add('logo-hiden');

            linkElements.forEach((el) => {
                el.classList.add('color-links');
            }); 

            dash.forEach((el)=> {
                el.classList.add('dash__line-bg');
            });
        });

        hoverElement.addEventListener('mouseout', () => {
            hoverElement.classList.remove('hover-bg');
            black.classList.add('logo-hiden');
            white.classList.remove('logo-hiden');

            linkElements.forEach((el) => {
                el.classList.remove('color-links');
            });

            dash.forEach((el)=> {
                el.classList.remove('dash__line-bg');
            });
        });
    } 
};
hoverHeader(headerChangeColor, logoBlack, logoWhite, headerLinks);

//  ======= HEADER HOVER END

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
            logoBlack.classList.toggle('logo-hiden');
            logoWhite.classList.toggle('logo-hiden')
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
        logoBlack.classList.remove('logo-hiden');
        logoWhite.classList.add('logo-hiden')
        dash.forEach((el)=> {
            el.classList.add('dash__line-bg');
        });
    } else if (scrollPositionY == 0  && screenWight <= 900) {
        headerElem.classList.remove('header-bg');
        logoBlack.classList.add('logo-hiden');
        logoWhite.classList.remove('logo-hiden');
        dash.forEach((el)=> {
            el.classList.remove('dash__line-bg');
        });
    } else if (screenWight < 900 && scrollPositionY > 0) {
        headerElem.classList.remove('hover-bg', 'heder__trans');
        logoBlack.classList.remove('logo-hiden');
    }
    lastScrollTop = scrollPositionY <= 0 ? 0 : scrollPositionY; 
    
}, false);

// ========= HEADER BG POSITION AND HIDEN END

// ====== HOVER SCROLL ===================
const btnScrollConteiner = document.querySelector('.span__scroll');
const svgSpanElem = document.querySelector('.svg-color');

function hoverScroll(spanElem, svgElem) {
    spanElem.addEventListener('mouseover', () => {
        spanElem.classList.add('scroll-active');
        svgElem.classList.add('scroll-active');
    });
    
    spanElem.addEventListener('mouseout', () => {
        spanElem.classList.remove('scroll-active');
        svgElem.classList.remove('scroll-active');
    });
}
hoverScroll(btnScrollConteiner, svgSpanElem);
// ====== HOVER SCROLL END

// ====== SCROLL TO ANCHOR ======
function scrollToDown(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
btnScrollConteiner.addEventListener('click', () => {
    const scrollToElem = document.querySelector('.section__text-p');
    scrollToDown(scrollToElem);
})
// ================= SCROLL TO ANCHOR END

// ================== SWIPER  ==================
const arg = {
    loop: true,
    threshold: 10,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}
let swiper = new Swiper(".mySwiper", arg);


// const swiper3 = new Swiper(".mySwiper3", {
//     threshold: 10,
//     watchOverflow: true,
//     slidesPerView: "auto",
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
// });


const swiperV2 = document.querySelectorAll('.mySwiper3');
// console.log(swiperV2);

if(swiperV2.length >= 1) {
    const arrowRight = document.querySelectorAll('.swiper-button-next');
    const arrowLeft = document.querySelectorAll('.swiper-button-prev');
    // console.log(arrowRight);
    // console.log(arrowLeft);

    swiperV2.forEach((element, i) => {
        element.classList.add('swiperNumber' + [i])
        const btnNext = element.getElementsByClassName('swiper-button-next')[0];
        if(btnNext) {
           btnNext.classList.add('swiper-button-next' + i)
        }
        const btnPrev = element.getElementsByClassName('swiper-button-prev')[0];
        if(btnPrev) {
            btnPrev.classList.add('swiper-button-prev' + i)
        }
        // console.log('btnNext >',btnNext)
        const swiperFull = new Swiper(".swiperNumber" + i, {
            threshold: 10,
            watchOverflow: true,
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next" + i,
              prevEl: ".swiper-button-prev" + i,
            },
        });
    });

    // console.log(arrowRight);
    // console.log(arrowLeft);

    
}



//================= SWIPER

// ================= Swiper Pagination ==================
(function change() {
    let swiperPagination = document.querySelector('.swiper-pagination');
    let childrenPagination = swiperPagination.childNodes;
    childrenPagination.forEach((el) => {
        el.classList.add('swiper-pagination-style');
    })
})();
// ====================Swiper Pagination End

// ============================ link hover ===================
(function hoverLinkFirst() {

    let linkElement = document.querySelector('.link__carousel-title');
    let svgElement = document.getElementById('svg-link');

    linkElement.addEventListener('mouseover', () => {
        linkElement.classList.add('svg-color-link');
        svgElement.classList.add('svg-color-link');
    });

    linkElement.addEventListener('mouseout', () => {
        linkElement.classList.remove('svg-color-link');
        svgElement.classList.remove('svg-color-link');
    });
})();

(function hoverLinkSecond() {

    let linkSecond = document.querySelector('.second');
    let svgSecond = document.getElementById('second');

    linkSecond.addEventListener('mouseover', () => {
        linkSecond.classList.add('svg-color-link')
        svgSecond.classList.add('svg-color-link')
    });

    linkSecond.addEventListener('mouseout', () => {
        linkSecond.classList.remove('svg-color-link')
        svgSecond.classList.remove('svg-color-link')
    });

})();
// =========================== link hover end

// ==================== hever link footer
(function hoverBtnFotter() {
    const btnElem = document.querySelector('.btn__scroll-top');
    const svgElem = document.querySelector('.svg__btn-footer');

    btnElem.addEventListener('mouseover', ()=> {
        btnElem.classList.add('bg__btn-svg')
        svgElem.classList.add('bg__btn-svg')
    });

    btnElem.addEventListener('mouseout', ()=> {
        btnElem.classList.remove('bg__btn-svg')
        svgElem.classList.remove('bg__btn-svg')
    })
})();
// =================== hever link footer end

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

// PADDING POSITION //
function paddingElementRight() {
        const blockBorder = document.getElementById('element-padding').offsetLeft;
        const swiperBlockFirst = document.querySelector('.swiperNumber0');
        const swiperBlockSecond = document.querySelector('.swiperNumber1');

        swiperBlockFirst.style.paddingLeft = `${blockBorder}px`;
        swiperBlockSecond.style.paddingLeft = `${blockBorder}px`;
};

function paddingElementNone() {
    const swiperBlockFirst = document.querySelector('.swiperNumber0');
    const swiperBlockSecond = document.querySelector('.swiperNumber1');
    swiperBlockFirst.style.paddingLeft = `0`;
    swiperBlockSecond.style.paddingLeft = `0`;
}

(function paddingRight()  {
    window.addEventListener('resize', function() {
        if (valueOfScreenWidth() >= 1200) {
            paddingElementRight()
        }else if(valueOfScreenWidth() < 1200) {
            paddingElementNone()
        }
    });
})();

(function load(screenWight = valueOfScreenWidth()) {
    if (screenWight >= 1200) {
        window.addEventListener('load', () => {
            paddingElementRight();
        });
    }else if(screenWight < 1200) {
        paddingElementNone()
    }
})();

// ===== PADDING POSITION ======= //

