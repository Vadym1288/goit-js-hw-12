import axios from 'axios';

export default searchImages;

async function searchImages(tagImage, page, perPage) {

    axios.defaults.baseURL = 'https://pixabay.com/api/';

    const searchParams = {
        params: {
            key: '42790970-549b29792af5c5ee610ad8401',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: perPage,
            page: page,
            q: `${tagImage}`,
        }
    }

    const response = await axios.get('', searchParams);
        return response.data;
}