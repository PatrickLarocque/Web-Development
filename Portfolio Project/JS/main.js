/*=============== Modify Header On Scroll ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/


/*=============== MixItUp Filter ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*========== Style the active filter button in the projects section ==========*/ 
const filterArray = document.querySelectorAll(".work__item");

function activeFilter() {
    filterArray.forEach(f => f.classList.remove("active-work"));
    this.classList.add("active-work");
}

filterArray.forEach(f => f.addEventListener('click', activeFilter));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function activeScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', activeScroll);

/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

