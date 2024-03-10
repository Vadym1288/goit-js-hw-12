export default createMarcupGallery;

function createMarcupGallery(images) {
  return images.map((element) => 
        `<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${element.largeImageURL}">
                <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${element.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${element.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${element.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${element.downloads}</p>
              </li>
            </ul>
        </li>`).join('');
};