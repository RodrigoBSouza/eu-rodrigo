function toggle() {
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle.style.display === 'flex') {
        menuToggle.style.display = 'none';
    } else {
        menuToggle.style.display = 'flex';
    }
}

function scrollToAbout() {
    window.scrollTo(0, 470);
}

function scrollToExp() {
    window.scrollTo(0, 1100);
}

function scrollToProjects() {
    window.scrollTo(0, 1700);
}

function scrollToContact() {
    window.scrollTo(0, 2800);
}

function scrollToAboutResponsive() {
    window.scrollTo(0, 530);
}

function scrollToExpResponsive() {
    window.scrollTo(0, 1400);
}

function scrollToProjectsResponsive() {
    window.scrollTo(0, 1900);
}

function scrollToContactResponsive() {
    window.scrollTo(0, 4600);
}

const showExp1 = document.getElementById('experience-1');
const showExp2 = document.getElementById('experience-2');
const showExp3 = document.getElementById('experience-3');
const showExp4 = document.getElementById('experience-4');

function change1() {
    showExp1.style.display = 'block'
    showExp2.style.display = 'none'
    showExp3.style.display = 'none'
    showExp4.style.display = 'none'
}

function change2() {
    showExp1.style.display = 'none'
    showExp2.style.display = 'block'
    showExp3.style.display = 'none'
    showExp4.style.display = 'none'
}

function change3() {
    showExp1.style.display = 'none'
    showExp2.style.display = 'none'
    showExp3.style.display = 'block'
    showExp4.style.display = 'none'
}

function change4() {
    showExp1.style.display = 'none'
    showExp2.style.display = 'none'
    showExp3.style.display = 'none'
    showExp4.style.display = 'block'
}

const activeTarget1 = document.querySelector('.active-target-1');
    activeTarget1.classList.add('active-hover');

activeTarget1.addEventListener("click", function() {
    activeTarget1.classList.add('active-hover');
    activeTarget2.classList.remove('active-hover');
    activeTarget3.classList.remove('active-hover');
    activeTarget4.classList.remove('active-hover');
}); 

const activeTarget2 = document.querySelector('.active-target-2');

activeTarget2.addEventListener("click", function() {
    activeTarget1.classList.remove('active-hover');
    activeTarget2.classList.add('active-hover');
    activeTarget3.classList.remove('active-hover');
    activeTarget4.classList.remove('active-hover');
}); 

const activeTarget3 = document.querySelector('.active-target-3');

activeTarget3.addEventListener("click", function() {
    activeTarget1.classList.remove('active-hover');
    activeTarget2.classList.remove('active-hover');
    activeTarget3.classList.add('active-hover');
    activeTarget4.classList.remove('active-hover');
}); 

const activeTarget4 = document.querySelector('.active-target-4');

activeTarget4.addEventListener("click", function() {
    activeTarget1.classList.remove('active-hover');
    activeTarget2.classList.remove('active-hover');
    activeTarget3.classList.remove('active-hover');
    activeTarget4.classList.add('active-hover');
}); 