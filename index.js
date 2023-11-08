const API_KEY = 'e926ac3a0a829645ceb62c652f231b88';
const BASE_URL = 'https://api.flickr.com/services/rest';
const searchButtonElem = document.getElementById('searchButton');
const imageContainer = document.getElementById('imageContainer');
let input = document.querySelector('#searchInput');
const imageElem = document.createElement('img');

async function getPhotos() {
    const keyword = input.value;
    const url = `${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=${keyword}&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json();

    imageContainer.innerHTML = '';


        for (i = 0; i < data.photos.photo.length; i++) {
            const image = data.photos.photo[i];
            console.log(image);

            data.photos.photo.forEach(image => {
                const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`;
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imageContainer.appendChild(imgElement);
            });

        }
}


searchButtonElem.addEventListener('click', () => {
    getPhotos();
    console.log('Click')
});