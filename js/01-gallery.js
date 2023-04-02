import { galleryItems } from './gallery-items.js';
// Change code below this line
//import * as basicLightbox from 'basiclightbox';

let instance;
const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', onClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href = "${original}">
                    <img class=gallery__image
                          src="${preview}"
                          data-source="${original}"
                          alt="${description}">
                </a>
            </li>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function onClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  createFormImage(event.target.getAttribute('data-source'));
}

function onClickEsc() {
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

function createFormImage(src) {
  instance = basicLightbox.create(
    `<div>
        <img src=${src}>
    </div>`,
    {
      onShow: instance => {
        addEventListener('keydown', onClickEsc);
      },
    },
    {
      onClose: instance => {
        window.removeEventListener('keydown', onClickEsc);
      },
    },
  );

  instance.show();
}
console.log(galleryItems);
