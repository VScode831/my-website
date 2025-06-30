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

const h1_home_link = document.querySelector('#nav_h1_home');
const h1_service_link = document.querySelector('#nav_h1_service');
const h1_project_link = document.querySelector('#nav_h1_project');
const h1_aboutUs_link = document.querySelector('#nav_h1_aboutUs');
const h1_contact_link = document.querySelector('#nav_h1_contact');

const v1_home_link = document.querySelector('#nav_v1_home');
const v1_service_link = document.querySelector('#nav_v1_service');
const v1_project_link = document.querySelector('#nav_v1_project');
const v1_aboutUs_link = document.querySelector('#nav_v1_aboutUs');
const v1_contact_link = document.querySelector('#nav_v1_contact');

navToHome = () => {
    location.href="#nav_home";
}

navToService = () => {
    location.href="#nav_service";
}

navToProject = () => {
    location.href="#nav_project";
}

navToAboutUs = () => {
    location.href="#nav_aboutUs";
}

navToContact = () => {
    location.href="#nav_contact";
}

h1_home_link.onclick = ()=>{navToHome()};
v1_home_link.onclick = ()=>{navToHome()};

h1_service_link.onclick = ()=>{navToService()};
v1_service_link.onclick = ()=>{navToService()};

h1_project_link.onclick = ()=>{navToProject()};
v1_project_link.onclick = ()=>{navToProject()};

h1_aboutUs_link.onclick = ()=>{navToAboutUs()};
v1_aboutUs_link.onclick = ()=>{navToAboutUs()};

h1_contact_link.onclick = ()=>{navToContact()};
v1_contact_link.onclick = ()=>{navToContact()};

