const btnShowNavBarHeader = document.querySelector(".container-hamburger-button-header");
const containerListMenuNavHeader = document.querySelector(".agroup-list-header");

btnShowNavBarHeader.addEventListener("click", () => {
    containerListMenuNavHeader.classList.toggle('showElement');
})

const getLiInListMenuNavHeader = document.querySelectorAll("#li-header");

getLiInListMenuNavHeader.forEach((li) => {
    li.addEventListener("click", () => {
        const verifyIfMenuIsOpen = containerListMenuNavHeader.classList.contains('showElement');
        verifyIfMenuIsOpen ? containerListMenuNavHeader.classList.remove('showElement') : null;
    })
})


/******** Buttons carousel in section Popular Destinations ************/

const containerCarouselPopularDestinations = document.querySelector('.container-carousel-images-popular-destinations');
const ButtonsMoveScrollPopularDestinations = document.querySelectorAll('.button-slide-carousel-popular-destinations');

ButtonsMoveScrollPopularDestinations.forEach((buttons) => {
        buttons.addEventListener("click", () => {
        const direction = buttons.id === 'button-move-scroll-to-left-carousel-popular-destiantions' ? -1 : 1;
        const scrollAmount = containerCarouselPopularDestinations.clientWidth * direction;
        containerCarouselPopularDestinations.scrollBy({ left:scrollAmount, behavior:'smooth' });
    });
});

/******** Buttons carousel in section Special Offer ************/

const containerCarouselSpecialOffer = document.querySelector('.container-carousel-images-special-offer');
const ButtonsMoveScrollSpecialoffer = document.querySelectorAll('.button-slide-carousel-special-offer');

ButtonsMoveScrollSpecialoffer.forEach((buttons) => {
        buttons.addEventListener('click', () => {
        const direction = buttons.id === 'button-move-scroll-to-left-carousel-special-offer' ? -1 : 1;
        const scrollAmount = containerCarouselSpecialOffer.clientWidth * direction;
        containerCarouselSpecialOffer.scrollBy({ left:scrollAmount, behavior:'smooth' });
    });
});

/******** Buttons carousel in section Traveler´s Experiece ************/

const containerCarouselOfCommentUsers = document.querySelector('.agroup-comments-in-traveler-experience');
const ButtonsMoveScrollContainerOfComments = document.querySelectorAll('.button-slide-carousel-traverler-experience');

ButtonsMoveScrollContainerOfComments.forEach((buttons) => {
        buttons.addEventListener('click', () => {
        const direction = buttons.id === 'button-move-scroll-to-left-carousel-of-comments' ? -1 : 1;
        const scrollAmount = containerCarouselOfCommentUsers.clientWidth * direction;
        containerCarouselOfCommentUsers.scrollBy({ left:scrollAmount, behavior:'smooth' });
    });
});