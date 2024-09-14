const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalContent = document.getElementById('fullImage');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const closeModal = document.querySelector('.close');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalContent.src = item.src;
        currentIndex = index;
        document.body.style.overflow = 'hidden'; // Disable scroll on the body
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scroll on the body
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    modalContent.src = galleryItems[currentIndex].src;
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    modalContent.src = galleryItems[currentIndex].src;
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
