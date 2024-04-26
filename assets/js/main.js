gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const headerMenu = document.querySelector('header');
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

    gsap.to('.founder-rectangle-animation', {
        duration: 3,
        scale: 1.05,
        ease: 'circ.in',
        scrollTrigger: {
            trigger: 'founder-photo-rectangle',
            start: 'center bottom'
        }
    });
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

    function overlayFunction() {
        const overlayMainSvg = document.querySelector('.main-overlay-svg');
        const overlayFounderSvg = document.querySelector('.founder-overlay-svg');

        const overlayMainObject = document.querySelector('.main-overlay');  
        const overlayFounderObject = document.querySelector('.founder-overlay');
        overlayMainObject.style.display = "none";
        // overlayFounderObject.style.display = "none";

        const VW = window.innerWidth;
        const VH = window.innerHeight;

        const halfScreen = (0.5 * VW);
        const tiltAngle = Math.round(0.25 * VW);
        const penHeight = (0.33 * VH);
        const vaultHeight = (penHeight * 0.5);
        const maxHeight = -50;

        overlayMainSvg.setAttribute('viewBox', `0 0 ${VW} ${VH}`);
        // overlayFounderSvg.setAttribute('viewBox', `0 0 ${VW} ${VH}`);
        
        
        const start = `M0 ${VH - 1} S${tiltAngle} ${VH - 1} ${halfScreen} ${VH - 1} s${halfScreen} 1 ${halfScreen} 1 V${VH}H0Z`;

        const midle = `M0 ${penHeight} S${tiltAngle} ${vaultHeight} ${halfScreen} ${vaultHeight} s${halfScreen} ${penHeight - vaultHeight} ${halfScreen} ${penHeight - vaultHeight} V${VH}H0Z`;

        const end = `M0 0 S${tiltAngle} ${maxHeight} ${halfScreen} ${maxHeight} s${halfScreen} ${- maxHeight} ${halfScreen} ${- maxHeight} V${VH}H0Z`;
        
            // const start = `M0 1 S${tiltAngle} 1 ${halfScreen} 1 s${halfScreen} -1 ${halfScreen} -1 V0H0Z`;

            // const midle = `M0 ${penHeight} S${tiltAngle} ${vaultHeight} ${halfScreen} ${vaultHeight} s${halfScreen} ${penHeight - vaultHeight} ${halfScreen} ${penHeight - vaultHeight} V0H0Z`;

            // const end = `M0 ${VH} S${tiltAngle} ${maxHeight} ${halfScreen} ${maxHeight} s${halfScreen} ${VH - maxHeight} ${halfScreen} ${VH - maxHeight} V0H0Z`;

        const mainPath = overlayMainSvg.querySelector('path');
        mainPath.setAttribute('d', start);           
        const founderPath = overlayFounderSvg.querySelector('path');
        founderPath.setAttribute('d', start);           
  
        const mainObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {  
                if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
                    if (overlayFunction.clicked){
                        observer.unobserve(entry.target); 
                    } else {
                        const tl = gsap.timeline();
                        overlayMainObject.style.display = "block";        
                    
                        // const start = "M0 2S175 1 500 1s500 1 500 1V0H0Z"
                        // const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
                        // const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    
                        tl.to(mainPath, 0.8, {
                            attr: {
                                d: midle
                            },
                            ease: Power2.easeIn,
                        })
                        tl.to(mainPath, 0.8, {
                            attr: {
                                d: end
                            },
                            ease: Power2.easeOut
                        })
                        tl.to(headerMenu, { y: '-100%' , duration: 0.8, ease: 'power1.out'}, "<");                
                        tl.to(window, {
                            duration: 1,
                            scrollTo: {
                                y: "#about",
                                offsetY: 10                          
                            },
                            ease: Back.easeIn(1.4),
                            onComplete: () => {
                                overlayMainObject.style.display = "none";
                                },
                        }, "<")
                        observer.unobserve(entry.target);                  

                    }
                }
            });
        }, {
            root: null,
            rootMargin: "10px",
            threshold: 0.1,
        });
        mainObserver.observe(document.querySelector(".main-overlay-trigger"));

        // const founderObserver = new IntersectionObserver((entries, observer) => {
        //     entries.forEach(entry => {
                
        //         if (entry.isIntersecting && entry.boundingClientRect.y > 0 && !overlayFunction.clicked) {
        //             const tl = gsap.timeline();
        //             overlayFounderObject.style.display = "block";
            
                    
        //             // const start = "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        //             // const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        //             // const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
        
        //             tl.to(founderPath, 0.8, {
        //                 attr: {
        //                     d: midle
        //                 },
        //                 ease: Power2.easeIn                        
        //             })
        //             tl.to(founderPath, 0.8, {
        //                 attr: {
        //                     d: end
        //                 },
        //                 ease: Power2.easeOut
        //             })                
        //             tl.to(window, {
        //                 duration: 1,
        //                 scrollTo: {
        //                     y: "#founder",
        //                     offsetY: 0
        //                 },
        //                 ease: Back.easeIn(1.4),
        //                 onComplete: () => {
        //                     overlayFounderObject.style.display = "none";
        //                     },
        //             })
    
        //             observer.unobserve(entry.target);                    
        //         }
        //     });
        // }, {
        //     root: null,
        //     rootMargin: "10px",
        //     threshold: 0.1,
        // });
        // founderObserver.observe(document.querySelector(".founder-title"));

    };
    window.addEventListener('load', overlayFunction);

});




if (window.innerWidth < 1025) {
    const menu = document.querySelector('.header-toggle');
    const peaceOfMenu = document.querySelector('nav');
    const clickableElements = [
        document.querySelector('.header-logo'),
        ...document.querySelectorAll('.menu-target-link'),
        document.querySelector('.header-button')
    ];
    
    menu.addEventListener('click', toggleMenu);
    
    function toggleMenu() {
        if (window.getComputedStyle(peaceOfMenu).display === 'flex') {
    
            document.querySelector('body').style.overflowY = 'auto';
            gsap.fromTo(peaceOfMenu, {x: 0}, {x: '100%', duration: 1, onComplete: () => {peaceOfMenu.style.display = 'none';}});            
        } else {
    
            document.querySelector('body').style.overflowY = 'hidden';
            peaceOfMenu.style.display = 'flex';
            gsap.fromTo(peaceOfMenu, {x: '100%'}, {x: 0, duration: 1});
        }
    }
    
    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            if (window.getComputedStyle(peaceOfMenu).display === 'flex') {
                toggleMenu();
            }
        });
    });
}

const links = [
    'https://www.youtube.com/',
    'https://example.com/link2',
    'https://www.youtube.com/',
    'https://example.com/link4',
    'https://www.youtube.com/'
];
function redirectToLink(index) {
    const selectedLink = links[index];
    
    window.open(selectedLink, '_blank');
}

document.querySelector('.faq-button').addEventListener('click', () => {
    const hiddenPlaceholders = document.querySelectorAll('.faq-placeholder[style*="display: none"]');
    const tl = gsap.timeline();        

    document.querySelector('.faq-closing').classList.remove('faq-closing');
    
    tl.to('.faq-button', { opacity: 0, duration: 0.5, display: 'none'});
    tl.fromTo(hiddenPlaceholders, { opacity: 0, y: 100, display: 'none'}, {opacity: 1, y: 0, display: 'flex', duration: 0.5, stagger: 0.4,}, "<");
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
            .fromTo(previousFact,
                {opacity: 1},
                {   opacity: 0,
                    duration: 0.5,
                    onComplete: () => {previousFact.setAttribute('data-activity', '');}
                })
            .fromTo(facts[index],
                {opacity: 0},
                {   opacity: 1,
                    duration: 0.5
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
let maxHeight = 0;
dates.forEach((date, index) => {
    if (facts[index].offsetHeight > maxHeight) {
        maxHeight = facts[index].offsetHeight;
    }
    factsContainer.style.height = `${maxHeight}px`;

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
    document.querySelector('body').style.overflowY = 'hidden';
    const modalContent = document.getElementById(contentType);
    const modalContainer = document.getElementById('modal-container');
    
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
            feedbackSection.style.marginTop = '0';
            feedbackSection.style.marginBottom = marginStyle;
            feedbackSection.style.setProperty('--before-content', '');
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
        } else {
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

    // // Обработчики смахивания на устройствах с тач-скрином
    // let touchStartX = 0;
    // let touchEndX = 0;

    // card.addEventListener('touchstart', (e) => {
    //     touchStartX = e.touches[0].clientX;
    // });

    // card.addEventListener('touchend', (e) => {
    //     touchEndX = e.changedTouches[0].clientX;
    //     handleSwipe();
    // });

    // function handleSwipe() {
    //     const swipeThreshold = 50; // Порог для определения смахивания

    //     if (touchEndX < touchStartX - swipeThreshold) {
    //         // Смахнули влево (следующее изображение)
    //         nextImage();
    //     } else if (touchEndX > touchStartX + swipeThreshold) {
    //         // Смахнули вправо (предыдущее изображение)
    //         prevImage();
    //     }
    // }    
});

const mainPhotoElement = document.querySelector('.catalog-main-photo img');

const catalogCards = document.querySelectorAll('.catalog-card');

const imagePaths = [
    'assets/img/instruments/regal/regal_1.jpg',
    'assets/img/instruments/imperial/imperial_1.jpg',
    'assets/img/instruments/pan/pan_1.jpg',
    'assets/img/instruments/rocket/rocket_2.jpg',
    'assets/img/instruments/horn/eh_1.jpg'
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





window.addEventListener('load', () =>{

    function handleScroll(show) {        
        if (show) {
            gsap.to(headerMenu, { y: 0, duration: 0.6, ease: 'sine.out'});
        } else {
            gsap.to(headerMenu, { y: '-100%' , duration: 0.6, ease: 'power1.out'});
        }     
    }

    setTimeout(() => {
        let scrollingUp = null;
        let lastScrollPosition = window.scrollY;
        window.addEventListener('scroll', () => {            
            const currentScroll = window.scrollY;

            if (scrollingUp === null) {
                scrollingUp = currentScroll > lastScrollPosition;
                console.log(scrollingUp);
            }

            if (currentScroll < lastScrollPosition && !scrollingUp) {
                if (handleScroll.clicked) {
                    handleScroll(false);
                } else {
                    handleScroll(true);
                }
                scrollingUp = true;       

            } else if (currentScroll > lastScrollPosition && scrollingUp) {
                handleScroll(false);
                
                scrollingUp = false;                
            }

            lastScrollPosition = currentScroll;                
        });
    }, 1000)

    const menuTargetLinks = document.querySelectorAll('.menu-target-link');    
    menuTargetLinks.forEach(link => {
        const anchorId = link.getAttribute('href');
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // overlayFunction.clicked = true;
            handleScroll.clicked = true;
                gsap.to(window, {                
                    duration: 1.5,
                    scrollTo: {
                        y: anchorId,
                        offsetY: 75
                    },
                    ease: Power1.easeOut,
                    onComplete: () => {
                        handleScroll.clicked = false;
                        // overlayFunction.clicked = false;                        
                    }
                })

            })            
        });
})






































// document.addEventListener("DOMContentLoaded", function () { //CTA popup window functionality    
//     const popupOpen = document.querySelectorAll(".popup-open");
//     const popupContainer = document.getElementById("popup-container");
//     const popupClose = document.querySelectorAll(".popup-close");    
//     const topMenu = document.getElementById('top-menu'); //crutch

//     let targetPopup;

//     popupOpen.forEach(function (button) {
//         button.addEventListener("click", function () {            
//             const popupID = button.dataset.popupId;
//             targetPopup = document.getElementById(popupID);            

//             popupContainer.style.display = "flex";
//             targetPopup.style.display = "flex";
//             document.body.style.overflow = "hidden";

//             if(targetPopup.style.display === "flex"){
//                 topMenu.style.width = "98.9%";
//             };
//             console.log(targetPopup);

//             popupContainer.addEventListener("click", function (event) {            
//                 if (popupContainer.style.display === "flex" && !targetPopup.contains(event.target)) {

//                     console.log(targetPopup);
//                     popupContainer.style.display = "none";
//                     targetPopup.style.display = "none";
//                     document.body.style.overflow = "";
//                     topMenu.style.width = "100%";               

//                 }
//             });


//         });
//     });    

//     popupClose.forEach(function (button) {
//         button.addEventListener("click", function () {
//             const popupID = button.dataset.popupId;
//             const targetPopup = document.getElementById(popupID);

//             popupContainer.style.display = "none";
//             targetPopup.style.display = "none"; 
//             document.body.style.overflow = "";
//             topMenu.style.width = "100%";
//             console.log(popupContainer);
//         });
//     });
// });

// document.querySelectorAll('.catalog-card').forEach(card => {//change image of catalog products    
//     const originalImage = card.getAttribute('data-normal-image');
//     const hoverImage = card.getAttribute('data-hover-image');
    
//     card.addEventListener('mouseover', () => {
//         card.querySelector('img').src = hoverImage; 
//     });

//     card.addEventListener('mouseout', () => {
//         card.querySelector('img').src = originalImage;
//     });
     
// });


// document.addEventListener("DOMContentLoaded", () => {   
//     let currentVideoIndex = 0;
//     const videoPlayer = document.getElementById('videoPlayer');
    
//     videoPlayer.addEventListener('ended', () => {
//         currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;    

//         const source = videoPlayer.querySelectorAll('source');
//         source.src = videoSources[currentVideoIndex];
        
//         console.log(videoSources);

//         videoPlayer.load();
//         videoPlayer.play();
//     });

// });

  





