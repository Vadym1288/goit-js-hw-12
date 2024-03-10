import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import searchImages from './js/pixabay-api';
import createMarcupGallery from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });

function showMessageError(textMes) {
    iziToast.error({
        message: textMes,
        maxWidth: '432px',
        position: 'topRight',
        messageSize: 16,
        backgroundColor: '#ef4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
    }); 
}

function showGallery(tagImage) {
   if (tagImage) {
       form.reset();
       gallery.innerHTML = '';
       loader.style.display = 'grid';
       searchImages(tagImage)
            .then(data => {
                const arrayImages = data.hits;
                if (arrayImages.length) {
                    gallery.innerHTML = createMarcupGallery(arrayImages);
                    lightbox.refresh();
                } else {
                    showMessageError(
                        'Sorry, there are no images matching your search query. Please try again!');
                }
            })
            .catch((error) => showMessageError(error))
            .finally(() => loader.style.display = 'none');
    } 
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const tagImage = event.target.elements.search.value;
    showGallery(tagImage);
})