let openModalButton = document.getElementById('open-modal');
let imageModal = document.getElementById('image-modal');

openModalButton.addEventListener('click', function() {
    imageModal.style.display = 'block';
});


window.addEventListener('click', function(event) {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});
