import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import searchImages from './js/pixabay-api';
import createMarcupGallery from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('#load-more-btn');

const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });

    let tagImage;
    let perPage = 15;
    let page;

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

async function showGallery(tagImage) {
    btn.style.display = 'none';
    if (tagImage) {
        loader.style.display = 'grid';
        let totalPages;
       try {
            const data = await searchImages(tagImage, page, perPage);
            const arrayImages = data.hits;
            totalPages = Math.ceil(data.totalHits / perPage);
            if (arrayImages.length) {
                const marcup = await createMarcupGallery(arrayImages);
                gallery.insertAdjacentHTML('beforeend', marcup);
                if (page != 1) {
                    scrollPage();
                }
                lightbox.refresh();
            } else {
                    showMessageError(
                        'Sorry, there are no images matching your search query. Please try again!');
                }            
        }                
       catch (error) { showMessageError(`${error}`); }
       finally {
        loader.style.display = 'none';
        if (page < totalPages) {
            btn.style.display = 'block';
        }
        if (page === totalPages) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                maxWidth: '432px',
                position: 'topRight',
                messageSize: 16,
            })
        }
        };
    } 
}

function scrollPage() {
    const amountScroll = gallery.firstElementChild.getBoundingClientRect().height * 2;    
    window.scrollBy({
        top: amountScroll,
        behavior: 'smooth',
    })
}

form.addEventListener('submit', event => {
    event.preventDefault();
    tagImage = event.target.elements.search.value.trim();
    form.reset();
    gallery.innerHTML = null;
    page = 1;
    showGallery(tagImage);
})

btn.addEventListener('click', () => {
    page += 1;
    showGallery(tagImage);
})