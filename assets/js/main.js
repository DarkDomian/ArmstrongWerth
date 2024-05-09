gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function getCookieValue(cookieName) {
    const cookiePairs = document.cookie.split(';');

    for (let pair of cookiePairs) {
      const [name, value] = pair.trim().split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return null;
  }

  const submittedHashValue = getCookieValue('submitted_hash');
  if (submittedHashValue) {
    document.getElementById('cookie').value = submittedHashValue;
  }

const headerMenu = document.querySelector('header');
let isScrolling = false;
document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
        if (window.scrollY === 0) {
            headerMenu.classList.add('fixed-header');
            gsap.from('header', {duration: 1.5, opasity: 0, y: '-100%', ease: 'circ.out', deley: .5});
        } else {
            headerMenu.classList.add('fixed-header');
            gsap.set('header', {y: '-100%'});
        }
    });
    gsap.from('.welcome-title-animation', {duration: 3, y: '60%', ease: 'circ.out', delay: .5});
    gsap.to('.welcome-title-animation-target', { duration: 2, y: 0, ease: 'sine.out', deley: .5});
    gsap.to('.welcome-photo-animation', {duration: 1.5, y: 0, opacity: 1, ease: 'circ.uot', delay: .5});
    gsap.to('.welcome-photo-animation', {duration: 3, scale: 1.1, ease: 'circ.uot', delay: .5});
    gsap.to('.welcome-p-animation', {duration: 2.5, y: 0, ease: 'sine.out', deley: .5});
    gsap.to('.welcome-button-animation', {duration: 2.5, y: 0, ease: 'sine.out', deley: .5});

    const paragraph = document.querySelectorAll('.opacity-paragraph');
    paragraph.forEach( ph => {

        gsap.to(ph, {
            duration: 1.5,
            delay: 1.5,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ph,
                start: 'center bottom',
                toggleActions: 'play pause resume none'
            }
        });
    });

    const photoHolderHint = document.querySelectorAll('.photo-holder')[1];
    gsap.to(photoHolderHint, {
        opacity: 1,
        maxHeight: photoHolderHint.scrollHeight,
        duration: 1.2,
        scrollTrigger: {
            trigger: '.catalog-template',
            start: 'center center'
        },
        onComplete: () => {
            photoHolderHint.classList.add('opened');
        }
    })

    gsap.to('.process-photo', {
        duration: 2.5,
        y: 0,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.process-photo',
            start: 'center bottom',
            toggleActions: 'play pause resume none'
        }
    });
    gsap.to('.process-photo-position', {
        duration: 2.5,
        y: 0,
        scale: 1.5,
        rotation: 25,
        ease: 'none',
        scrollTrigger: {
            trigger: '.process-photo',
            start: 'center bottom',
            toggleActions: 'play pause resume none'
        }
    });

    // gsap.to('.founder-rectangle-animation', {
    //     duration: 3,
    //     scale: 1.05,
    //     ease: 'circ.in',
    //     scrollTrigger: {
    //         trigger: 'founder-photo-rectangle',
    //         start: 'center bottom'
    //     }
    // });
    gsap.to('.quote-photo', {
        duration: 3,
        scale: 1,
        ease: 'circ.in',
        scrollTrigger: {
            trigger: '.quote-photo',
            start: 'center bottom'
        }
    });
    gsap.to('.quote-animation', {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: 'circ.in',
        scrollTrigger: {
            trigger: '.quote-photo',
            start: 'center bottom'
        }
    });



    const titleContainers = document.querySelectorAll('.title-animation-body');

    titleContainers.forEach(container => {
        const image = container.querySelector('img');

        gsap.to(image, {
            y: 0,
            duration: 2,
            ease: 'expoScale(0.5,7,none)',
            scrollTrigger: {
                trigger: container,
                start: 'bottom 90%'
                // toggleActions: 'play pause resume none'
            }
        });
    });

    gsap.fromTo ('.about-desctop', {y: -20}, {
        duration: 2, delay: 1, y: 0, ease: 'expoScale(0.5,7,none)',
        scrollTrigger: {
            trigger: '.about-desctop',
            strart: 'bottom 90%'
        }
    })
});

if (window.innerWidth >= 1025) {
    const menuCharacters = document.querySelector('nav ul');
    const menuButton = document.querySelector('.header-button');
    const header = document.querySelector('header');

    header.appendChild(menuCharacters);
    header.appendChild(menuButton);
}


if (window.innerWidth < 1025) {
    const menu = document.querySelector('.header-toggle');
    const peaceOfMenu = document.querySelector('nav');

    let menuIsAnimating = false;
    gsap.set(peaceOfMenu, {x: '100%', y: 0});
    document.querySelector('.header-button').addEventListener('click', () => {
        if (!menuIsAnimating) {
            menuModalBehaivor(false);
        }
    });


    menu.addEventListener('click', () => {
        if (!menuIsAnimating) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        menuIsAnimating = true;
        if (window.getComputedStyle(peaceOfMenu).display === 'flex') {

            document.querySelector('body').style.overflowY = 'auto';
            gsap.to(peaceOfMenu, {x: '100%', duration: .9, onComplete: () => {peaceOfMenu.style.display = 'none'; menuIsAnimating = false;}});
        } else {

            document.querySelector('body').style.overflowY = 'hidden';
            peaceOfMenu.style.display = 'flex';
            gsap.to(peaceOfMenu, {x: 0, duration: .9, onComplete: () => {menuIsAnimating = false;}});
        }
    }

    function menuModalBehaivor(scrolling) {
        if (scrolling) {
            menuIsAnimating = true;

            document.querySelector('body').style.overflowY = 'auto';
            gsap.to(peaceOfMenu, {y: '-101%', duration: 0.6, onComplete: () => {
                peaceOfMenu.style.display = 'none';
                menuIsAnimating = false;
                gsap.set(peaceOfMenu, {x: '100%', y: 0});
            }});
        } else {
            menuIsAnimating = true;

            document.querySelector('body').style.overflowY = 'auto';
            gsap.set(peaceOfMenu, {x: '100%', y: 0, delay: .9, onComplete: () => {peaceOfMenu.style.display = 'none'; menuIsAnimating = false;}});
        }
    }

}

const links = [
    'http://www.zasmusic.com/',
    'https://ajmusique.com/',
    'mailto:18017867558@163.com',
    'https://oboecentral.com.au/',
    'https://www.saxandwoodwind.com.au/',
    'https://www.argendonax.com/',
    'https://www.wamusic.com.au/'
];
function redirectToLink(index) {
    const selectedLink = links[index];

    window.open(selectedLink, '_blank');
}

document.querySelector('.faq-button').addEventListener('click', () => {
    const hiddenPlaceholders = document.querySelectorAll('.faq-placeholder[style*="display: none"]');
    const tl = gsap.timeline();

    document.querySelector('.faq-closing').classList.remove('faq-closing');
    gsap.set(hiddenPlaceholders, {display: 'flex'})

    tl.to('.faq-button', { opacity: 0, duration: 0.5, display: 'none'});
    tl.fromTo(hiddenPlaceholders, { opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.5, stagger: 0.4,}, "<");
});

let isAnimating = false;
let pendingAnimation = null;
function chronologyAnimation(date, index) {
    const previousFact = document.querySelector('.timeline-fact[data-activity="activ"]');
    const previousDate = document.querySelector('.timeline-date[data-activity="activ"]');

    if (isAnimating) {
        return;
    } else {

        if (previousDate === date) {
            return;
        }

        isAnimating = true;
        dates.forEach(date => date.setAttribute('data-activity', ''));
        date.setAttribute('data-activity', 'activ');

        facts[index].setAttribute('data-activity', 'activ')
        gsap.killTweensOf(previousFact);
        gsap.timeline()
            .to(factsContainer, {
                    height: `${facts[index].offsetHeight}px`,
                    duration: 0.6
                })
            .fromTo(previousFact,
                {opacity: 1},
                {   opacity: 0,
                    duration: 0.6,
                    onComplete: () => {previousFact.setAttribute('data-activity', '');}
                }, "<")
            .fromTo(facts[index],
                {opacity: 0},
                {   opacity: 1,
                    duration: 0.6
                }, 0)
            .call(() => {
                    isAnimating = false;

                    if (pendingAnimation) {
                        const { date, index } = pendingAnimation;
                        pendingAnimation = null;
                        chronologyAnimation(date, index);
                    }
                });
    }
}

const factsContainer = document.querySelector('.bio-facts');
const dates = document.querySelectorAll('.timeline-date');
const facts = document.querySelectorAll('.timeline-fact');

factsContainer.style.height =  `${facts[0].offsetHeight}px`;

dates.forEach((date, index) => {
    date.addEventListener('click', () => {
        if (isAnimating) {
            pendingAnimation = {date, index};
        } else {
            chronologyAnimation(date, index);
        }
    });
});

const cardNames = document.querySelectorAll('.catalog-name')
const photoHolders = document.querySelectorAll('.photo-holder');
photoHolders.forEach(holder => holder.style.maxHeight = 0);
cardNames.forEach(name => {
    name.addEventListener('click', (event) => {
        const onclick = event.target.getAttribute('data-onclick');
        if (window.innerWidth < 1025) {
            const selectedPhotoHolder = event.target.closest('.catalog-card').querySelector('.photo-holder');
            const openedPhotoHolder = document.querySelector('.photo-holder.opened');

            const selectedCard = event.target.closest('.catalog-card');
            const openedCard = document.querySelector('.catalog-card.opened');

            if (openedPhotoHolder && openedPhotoHolder !== selectedPhotoHolder) {
                openedCard.classList.remove('opened');
                gsap.to(openedPhotoHolder, {
                    opacity: 0,
                    maxHeight: 0,
                    duration: 1,
                    onComplete: () => {
                        openedPhotoHolder.classList.remove('opened');
                    }
                });
            }

            if (selectedPhotoHolder.style.maxHeight === '0px') {
                selectedCard.classList.add('opened');
                selectedPhotoHolder.classList.add('opened');
                gsap.fromTo(selectedPhotoHolder, { opacity: 0, maxHeight: 0},{ opacity: 1, maxHeight: selectedPhotoHolder.scrollHeight, duration: 1});

            } else {
                selectedCard.classList.remove('opened');
                gsap.to(selectedPhotoHolder, {
                    opacity: 0,
                    maxHeight: 0,
                    duration: 1,
                    onComplete: () => {
                        selectedPhotoHolder.classList.remove('opened');
                    }
                });
            }
        } else {
            openModal(onclick);
        }
    })
})

const placeholders = document.querySelectorAll('.faq-placeholder');
placeholders.forEach(placeholder => {
    const question = placeholder.querySelector('dt');
    const answer = placeholder.querySelector('.answer');
    const cross = placeholder.querySelector('.cross');



    // answer.style.display = 'none';
    answer.style.maxHeight = '0';

    cross.addEventListener('click', () => openFAQPlaceholder());
    question.addEventListener('click', () => openFAQPlaceholder());


    function openFAQPlaceholder() {
        const openedPlaceholder = document.querySelector('.faq-placeholder.opened');
        // const openedPlaceholder = dpcument.querySelector('.faq-placeholder.opened');

        if (openedPlaceholder && openedPlaceholder !== placeholder) {
            const openedAnswer = openedPlaceholder.querySelector('.answer');
            const openedCross = openedPlaceholder.querySelector('.cross');

            openedPlaceholder.classList.remove('opened');

            const tlClose = gsap.timeline();
            tlClose.to(openedAnswer, { opacity: 0, maxHeight: 0, duration: 1});
            tlClose.to(openedCross, {rotation: 0, duration: 1}, "<");
        }

        if (answer.style.maxHeight === '0px') {
            placeholder.classList.add('opened');

            const tl = gsap.timeline();
            tl.to(answer, { opacity: 1, maxHeight: answer.scrollHeight, duration: 1});
            tl.to(cross, {rotation: 45, duration: 1}, "<");
        } else {
            placeholder.classList.remove('opened');

            const tl = gsap.timeline();
            tl.to(answer, { opacity: 0, maxHeight: 0, duration: 1});
            tl.to(cross, {rotation: 0, duration: 1}, "<");
        }
    }
});


function openModal(contentType) {
    const modalContent = document.getElementById(contentType);
    const modalContainer = document.getElementById('modal-container');
    document.querySelector('body').style.overflowY = 'hidden';
    modalContainer.style.overflowY = 'auto';

    const feedbackSection = document.querySelector('.feedback-section');

    const feedbackParent = feedbackSection.parentNode;

    const marginStyle = window.getComputedStyle(feedbackSection).getPropertyValue('margin-bottom');

    const titleFeedbackContainers = document.querySelectorAll('.feedback-content .title-animation-body');
    let titleFeedbackContainer = null;
    titleFeedbackContainers.forEach(container => {
        const containerStyles = window.getComputedStyle(container);
        if (containerStyles.display === 'block') {
            titleFeedbackContainer = container;
        }
    })
    const titleFeedbackTarget = titleFeedbackContainer.querySelector('img');

    let titleFeedbackTargetWasUp = false;

    if (contentType === 'feedbackForm') {

        modalContainer.appendChild(feedbackSection);
        feedbackSection.style.setProperty('--before-content', 'none');

        modalContainer.classList.replace('modal-white', 'modal-black');
        if (!titleFeedbackTarget.getAttribute('style').includes('transform: translate(0px, 0px)')) {
            titleFeedbackTarget.style.transform = 'translateY(0)';
            titleFeedbackTargetWasUp = true;
        }
        feedbackSection.style.marginTop = '70px';
        feedbackSection.style.marginBottom = '0';
        modalContainer.style.display = 'flex';
        gsap.fromTo(modalContainer, {y: '110%'}, {y: 0, duration: 1});
    } else {

        modalContainer.classList.replace('modal-black', 'modal-white');
        modalContainer.style.display = 'flex';
        gsap.fromTo(modalContainer, {y: '110%'}, {y: 0, duration: 1});
        if (window.innerWidth <= 1024) {
            modalContent.style.display = 'flex';
        } else {modalContent.style.display = 'grid';}
    }

    const instrumentCards = document.querySelectorAll('.instrument-card');
    const prevBtn = document.querySelector('.previous-card');
    const nextBtn = document.querySelector('.next-card');
    let currentIndex = Array.from(instrumentCards).indexOf(modalContent);


    function changeCard(index) {
        instrumentCards.forEach(card => {
            card.style.display = 'none';
        });
        instrumentCards[index].style.display = 'grid';
    }

    function updatePaginator() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === instrumentCards.length - 1;
    }
    updatePaginator();

    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            changeCard(currentIndex);
            updatePaginator();
        }
    }
    function nextCard() {
        if (currentIndex < instrumentCards.length - 1) {
            currentIndex++;
            changeCard(currentIndex);
            updatePaginator();
        }
    }

    function closeModal() {
        if (contentType === 'feedbackForm') {
            modalContainer.style.overflowY = 'hidden';
            gsap.fromTo(modalContainer,{y: 0}, {
                y: '110%',
                duration: 1,
                onComplete: () => {
                    feedbackParent.appendChild(feedbackSection);
                    modalContainer.style.display = 'none';
                    if (titleFeedbackTargetWasUp) {
                        titleFeedbackTarget.style.transform = 'translateY(110%)';
                    }
                }
            });
            feedbackSection.style.marginTop = '0';
            feedbackSection.style.marginBottom = marginStyle;
            feedbackSection.style.setProperty('--before-content', '');
        } else {
            modalContainer.style.overflowY = 'hidden';
            gsap.fromTo(modalContainer,{y: 0}, {
                y: '110%',
                duration: 1,
                onComplete: () => {
                    instrumentCards[currentIndex].style.display = 'none';
                    modalContainer.style.display = 'none';
                }
            });
        }

        document.querySelector('body').style.overflowY = 'auto';

        prevBtn.removeEventListener('click', prevCard);
        nextBtn.removeEventListener('click', nextCard);
        document.querySelector('.modal-cross').removeEventListener('click', closeModal);
    }

    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);
    document.querySelector('.modal-cross').addEventListener('click', closeModal);
}

document.querySelectorAll('.instrument-card').forEach(card => {
    const imagesContainer = card.querySelector('.instrument-photos');
    const images = Array.from(imagesContainer.querySelectorAll('img'));
    const imagePaginator = card.querySelector('.photo-pagination');

    const paginatorLeft = imagePaginator.querySelector('.paginator-left');
    const paginatorRight = imagePaginator.querySelector('.paginator-right');

    let currentImageIndex = 0;
    let isInitialized = false;

    const paginatorList = document.createElement('ul');

    // creating list of images and give any items click-listener
    images.forEach((image, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('paginator-index');
        listItem.textContent = index + 1;
        listItem.addEventListener('click', () => {
            currentImageIndex = index;
            changeImage(currentImageIndex);
            updatePaginator();
        });
        paginatorList.appendChild(listItem);
    });

    imagePaginator.insertBefore(paginatorList, imagePaginator.children[1]);

    function changeImage(index) {
        images.forEach((image, idx) => {
            if (idx === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function updatePaginator() {
        const listItems = paginatorList.querySelectorAll('li');
        listItems.forEach((item, index) => {
            if (index === currentImageIndex) {
                item.classList.replace('paginator-index','active-paginator-index');
            } else {
                item.classList.replace('active-paginator-index', 'paginator-index');
            }
        });

        paginatorLeft.disabled = currentImageIndex === 0;
        paginatorRight.disabled = currentImageIndex === images.length - 1;
    }

    if (!isInitialized) {
        changeImage(currentImageIndex);
        updatePaginator();
        isInitialized = true;
    }

    function prevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            changeImage(currentImageIndex);
            updatePaginator();
        }
    }
    function nextImage() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            changeImage(currentImageIndex);
            updatePaginator();
        }
    }

    paginatorLeft.addEventListener('click', prevImage);
    paginatorRight.addEventListener('click', nextImage);



    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        let touchStartX = 0;
        let touchEndX = 0;

        card.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        card.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        });


        function handleSwipe() {
            const swipeThreshold = 50;

            if (touchEndX < touchStartX - swipeThreshold) {
                nextImage();
            } else if (touchEndX > touchStartX + swipeThreshold) {
                prevImage();
            }
        }
    }

});

const mainPhotoElement = document.querySelector('.catalog-main-photo img');

const catalogCards = document.querySelectorAll('.catalog-card');

const imagePaths = [
    'assets/img/instruments/regal/regal_1.jpg',
    'assets/img/instruments/imperial/imperial_1.jpg',
    'assets/img/instruments/pan/pan_1.jpg',
    'assets/img/instruments/rocket/rocket_2.jpg',
    'assets/img/instruments/horn/eh_1.png'
];
function changeMainPhoto(index) {
    if (index >= 0 && index < imagePaths.length) {
        gsap.killTweensOf(mainPhotoElement);
        gsap.to(mainPhotoElement, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
                mainPhotoElement.src = imagePaths[index];
                gsap.to(mainPhotoElement, { duration: 0.5, opacity: 1 });
            }
        });
    }
}


catalogCards.forEach((card, index) => {
    const button = card.querySelector('.catalog-button');

    card.addEventListener('mouseenter', () => {

        button.classList.add('hovered');

        switch (index) {
            case 0:
                changeMainPhoto(0)
                // mainPhotoElement.src = 'assets/img/instruments/regal/regal_1.jpg';
                break;
            case 1:
                changeMainPhoto(1)
                // mainPhotoElement.src = 'assets/img/instruments/imperial/imperial_1.jpg';
                break;
            case 2:
                changeMainPhoto(2)
                // mainPhotoElement.src = 'assets/img/instruments/pan/pan_1.jpg';
                break;
            case 3:
                changeMainPhoto(3)
                // mainPhotoElement.src = 'assets/img/instruments/rocket/rocket_2.jpg';
                break;
            case 4:
                changeMainPhoto(4)
                // mainPhotoElement.src = 'assets/img/instruments/horn/eh_1.jpg';
                break;

            default:
                break;
        }
    });

    card.addEventListener('mouseleave', () => {
        button.classList.remove('hovered');
    });
});

let currentIndex = 0;

setInterval(() => {
    if ([...document.querySelectorAll('.catalog-button')].every(button => !button.classList.contains('hovered'))) {
        changeMainPhoto(currentIndex);
        currentIndex = (currentIndex + 1) % imagePaths.length;
    }
}, 4000);

const inputFields = document.querySelectorAll('input[type="username"], input[type="email"], input[type="tel"]');
function handleFocus(event) {
    const input = event.target;
    if (input.value === input.getAttribute('value')) {
        input.value = '';
    }
}
function handleBlur(event) {
    const input = event.target;
    const defaultValue = input.getAttribute('value');
    if (input.value.trim() === '') {
        input.value = defaultValue;
    }
}
inputFields.forEach(input => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
});






window.addEventListener('load', () => {

    const overlayMainSvg = document.querySelector('.main-overlay-svg');

    const overlayMainObject = document.querySelector('.main-overlay');
    overlayMainObject.style.display = "none";

    const VW = window.innerWidth;
    const VH = window.innerHeight;

    const halfScreen = (0.5 * VW);
    const tiltAngle = Math.round(0.25 * VW);
    const penHeight = (0.33 * VH);
    const vaultHeight = (penHeight * 0.5);
    const maxHeight = -50;

    overlayMainSvg.setAttribute('viewBox', `0 0 ${VW} ${VH}`);


    const start = `M0 ${VH - 1} S${tiltAngle} ${VH - 1} ${halfScreen} ${VH - 1} s${halfScreen} 1 ${halfScreen} 1 V${VH}H0Z`;

    const midle = `M0 ${penHeight} S${tiltAngle} ${vaultHeight} ${halfScreen} ${vaultHeight} s${halfScreen} ${penHeight - vaultHeight} ${halfScreen} ${penHeight - vaultHeight} V${VH}H0Z`;

    const end = `M0 0 S${tiltAngle} ${maxHeight} ${halfScreen} ${maxHeight} s${halfScreen} ${- maxHeight} ${halfScreen} ${- maxHeight} V${VH}H0Z`;

    const mainPath = overlayMainSvg.querySelector('path');
    mainPath.setAttribute('d', start);

    marginValue = parseInt(getComputedStyle(document.querySelector('section:nth-child(2)')).marginTop) - 1 + 'px';

    const firstPosition = document.getElementById('about').offsetTop;
    const mainObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tl = gsap.timeline();
                overlayMainObject.style.display = "block";

                tl.to(mainPath, 0.6, {
                    attr: {
                        d: midle
                    },
                    ease: Power2.easeIn,
                })
                tl.to(mainPath, 0.6, {
                    attr: {
                        d: end
                    },
                    ease: Power2.easeOut,
                    onComplete: () => {
                        const secondPosition = window.scrollY;
                        if (secondPosition < firstPosition) {
                            gsap.to(window, {
                                duration: 0.6,
                                scrollTo: {
                                    y: "#about",
                                    offsetY: 10
                                },
                                ease: Back.easeIn(1.4),
                                onComplete: () => {
                                    overlayMainObject.style.display = "none";
                                },
                            })
                        } else {
                            overlayMainObject.style.display = "none";
                        }
                    }
                })

                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: marginValue
    });


    if (window.scrollY < 20) {
        mainObserver.observe(document.querySelector("main > section:first-child"));
    }
})

window.addEventListener('load', () =>{

    function handleScroll(show) {
        if (show) {
            gsap.to(headerMenu, { y: 0, duration: 0.6, ease: 'sine.out'});
        } else {
            gsap.to(headerMenu, { y: '-101%' , duration: 0.6, ease: 'power1.out'});
        }
    }

    setTimeout(() => {
        let scrollingUp = null;
        let lastScrollPosition = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (scrollingUp === null) {
                scrollingUp = currentScroll > lastScrollPosition;
            }

            if (currentScroll < lastScrollPosition && !scrollingUp) {

                handleScroll(true);
                scrollingUp = true;

            } else if (currentScroll > lastScrollPosition && scrollingUp) {

                handleScroll(false);
                scrollingUp = false;
            }

            // if (handleScroll.clicked) {
            //     handleScroll(false);
            //     scrollingUp = currentScroll > lastScrollPosition;
            // }

            lastScrollPosition = currentScroll;
        });
    }, 1000)

    const menuTargetLinks = document.querySelectorAll('.menu-target-link');
    menuTargetLinks.forEach(link => {
        const anchorId = link.getAttribute('href');
        link.addEventListener('click', (event) => {
            event.preventDefault();

            if (window.innerWidth < 1025) {menuModalBehaivor(true);}

            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: anchorId,
                    offsetY: 75
                },
                ease: Power1.easeOut
            })
        })
    })
});

const isAllowedInput = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;

    const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '(', ')', '-', '+'];

    if (allowedCharacters.includes(key)) {
        return true;
    }

    if ((event.ctrlKey || event.metaKey) && ['a', 'c', 'v', 'x', 'z', 'ф', 'с', 'м', 'ч', 'я'].includes(key)) {
        return true;
    }


    if ([8, 9, 13, 35, 36, 37, 38, 39, 40, 46].includes(keyCode)) {
        return true;
    }

    return false
};

const enforceFormat = (event) => {
    if (!isAllowedInput(event)) {
        event.preventDefault();
    }
};

const inputElement = document.getElementById('phone');
inputElement.addEventListener('keydown', enforceFormat);

const submitButton = document.querySelector('input[type="submit"]');

document.querySelector('.feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    submitButton.disabled = true;

    const formData = new FormData(this);

    const nameInput = formData.get('username');
    const emailInput = formData.get('email');
    const phoneInput = formData.get('phone');

    const errors = [];

    if (!isValidName(nameInput)) {
        errors.push('Name: You can use only Latin letters and spaces');
    }

    if (!isValidEmail(emailInput)) {
        errors.push('Email: Fill the address (following the example) example@example.com');
    }

    if (!isValidPhone(phoneInput)) {
        errors.push("Phone: Please use digits and standard characters for phone numbers. Remember to include the country code, which should start with '+'.");
    }

    if (errors.length > 0) {
        const errorMessage = 'Please fill in all fields correctly:\n\n' + errors.join('\n');
        alert(errorMessage);
        submitButton.disabled = false;
        return;
    }


    const consentCheckbox = this.querySelector('#consentCheckbox');
    const consentValue = consentCheckbox.checked ? 'on' : 'off';
    formData.append('consentCheckbox', consentValue);


    fetch('https://new.aw-oboe.com.au/mail.php', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            const sentMessage = document.getElementById('data-sent');
            gsap.set(sentMessage, {opacity: 0});

            sentMessage.style.display = "block";

            gsap.timeline()
                .fromTo(sentMessage, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1.2
                })
                .to(sentMessage, {
                    opacity: 0,
                    delay: 2,
                    duration: 1.2,
                    onComplete: () => {
                        sentMessage.style.display = "none";
                    }
                });

            const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();

            document.getElementById('cookie').value = data.cookie;
            document.cookie = `submitted_hash=${data.cookie}; path=/; expires=${expires}`;

            submitButton.disabled = false;
            console.log(data.message);
        } else {
            submitButton.disabled = false;
            console.error(data.message);
            alert(data.message);
        }
    })
    .catch(error => {
        submitButton.disabled = false;
        alert('Something went wrong: ', error)
        console.error('Something went wrong: ', error);
    });
});

function isValidName(name) {
    if (name.toUpperCase() === 'NAME') {
        return false;
    }
    return /^[A-Za-z\s]{1,50}$/.test(name);
}

function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+[0-9+()\s-]{11,26}$/.test(phone);
}