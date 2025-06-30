const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#slideNext');
const prev = document.querySelector('#slidePrev');
const bullets = document.querySelector('.bullets');
const auto = true;
const intervalTime = 5000;
let slideInterval;
let slideIndex = 0;

nextSlide = () => {
    if (slideIndex == slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    changeSlide();
    updateCircleBullets();
}

prevSlide = () => {
    if (slideIndex == 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex--;
    }
    changeSlide();
    updateCircleBullets();
}

next.addEventListener('click', e => {
    nextSlide();
    resetInterval();
})

prev.addEventListener('click', e => {
    prevSlide();
    resetInterval();
})




circleBullets = () => {
    for (i = 0; i < slides.length; i++) {
        const div = document.createElement('div');
        div.id = "slide" + i;
        div.setAttribute('onclick', 'indicateSlide(this)');
        bullets.appendChild(div);
    }
    bullets.children[0].classList.add('circle_current');
}

indicateSlide = (element) => {
    slideIndex = element.id.substr(5);
    changeSlide();
    updateCircleBullets();
    resetInterval();
}

changeSlide = () => {
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide_current');
    }
    slides[slideIndex].classList.add('slide_current');
}

updateCircleBullets = () => {
    for (i = 0; i < bullets.children.length; i++) {
        bullets.children[i].classList.remove('circle_current');
    }
    bullets.children[slideIndex].classList.add('circle_current');
}
circleBullets();

resetInterval = () => {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoplay, intervalTime)
    }
}

autoplay = () => {
    nextSlide();
    updateCircleBullets();
}

if (auto) {
    slideInterval = setInterval(autoplay, intervalTime);
}