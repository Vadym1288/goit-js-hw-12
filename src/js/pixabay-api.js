export default searchImages;

function searchImages(tagImage) {

    const searchParams = new URLSearchParams({
        key: '42790970-549b29792af5c5ee610ad8401',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    })

    return fetch(`https://pixabay.com/api/?${searchParams}&q=${tagImage}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}