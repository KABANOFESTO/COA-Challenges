//animating learn-more

const galleryItem = document.querySelectorAll('.gallery-item');


galleryItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.learn-more').style.display = 'inline-block';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.learn-more').style.display = 'none';
    });
});