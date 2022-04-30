import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення і рендер розмітки
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onImageClick);

function createGalleryMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`;
    }).join('');
}

// Підключення скрипту і стилів бібліотеки модального вікна
function onImageClick(evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== 'IMG') return;
    
    const originalImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${originalImg}">`)
    
    instance.show()
    
    window.addEventListener('keydown', onModalClose);

    function onModalClose(evt) {
        const ESC_KEY_CODE = 'Escape';

        if (evt.code === ESC_KEY_CODE) {
            instance.close();
        }
    }
}




