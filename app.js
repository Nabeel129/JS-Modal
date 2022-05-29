//Getting elements for toggle class

const openOverlay = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const banner = document.querySelector('.banner');

// console.log(openOverlay);
// console.log(overlay);
// console.log(closeBtn);

//Add and Remove showModal Class

openOverlay.addEventListener('click', () => {
    overlay.classList.add('show-modal');
    banner.classList.add('show-banner');

})

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show-modal');
    banner.classList.remove('show-banner');
});
