let elements = document.querySelectorAll(".hidden");
let windowHeight = window.innerHeight;

const aboutMeSection = document.querySelector(".hiddenSection");

// function isInViewport(element) {
//     let positionFromTop = element.getBoundingClientRect().top;
//     if (positionFromTop - windowHeight <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (isInViewport(aboutMeSection)) {
    let allHidden = document.querySelectorAll(".about-me .hidden");
    for (let i = 0; i < allHidden.length; i++) {
        let element = allHidden[i];

        if (i % 2 === 0) {
            element.classList.add('animate__animated');
            element.classList.add('animate__fadeInLeft');
            element.classList.remove('hidden');
        } else {
            element.classList.add('animate__animated');
            element.classList.add('animate__fadeInRight');
            element.classList.remove('hidden');
        }
    }
}


function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
}



function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {

            if (i % 2 === 0) {
                element.classList.add('animate__animated');
                element.classList.add('animate__fadeInLeft');
                element.classList.remove('hidden');
            } else {
                element.classList.add('animate__animated');
                element.classList.add('animate__fadeInRight');
                element.classList.remove('hidden');
            }
        }
    }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);
// checkPosition();