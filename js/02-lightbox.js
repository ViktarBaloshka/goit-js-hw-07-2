import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href = "${original}">
                    <img class=gallery__image
                        src="${preview}"
                        alt="${description}">
                </a>
            </li>`;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
