const navbarTop = document.querySelector('.navbar_h1');
const navbarLeft = document.querySelector('.navbar_v1');
const main = document.querySelector('main');

navbarOnTop = () => {
    navbarLeft.classList.remove('moveIn_v1');
    navbarLeft.classList.add('moveOut_v1');
    navbarTop.classList.remove('moveOut_h1');
    navbarTop.classList.add('moveIn_h1');
    main.className = "mainTop"
};

navbarOnLeft = () => {
    navbarLeft.classList.add('moveIn_v1');
    navbarLeft.classList.remove('moveOut_v1');
    navbarTop.classList.add('moveOut_h1');
    navbarTop.classList.remove('moveIn_h1');
    main.className = "mainLeft"
};


window.onscroll = navbarSwitch = () => {
    isWindowTop = window.pageYOffset == 0
    if (isWindowTop) {
        navbarOnTop();
    } else {
        navbarOnLeft();
    }
};


