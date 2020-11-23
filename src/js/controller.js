import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
 

// console.log('TEST');
const resultsContainer = document.querySelector('.image-results');


const renderSpinner = function(parentel) {
    const markup = `
    <div class="spinner">
        <svg>
            <use href="${icons}#icon-loader"></use>
        </svg>
    </div>`;
    parentel.innerHTML = '';
    parentel.insertAdjacentHTML('afterbegin', markup);
}

const showRoverData = async function() {
    try {
        renderSpinner(resultsContainer);
        const res = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=k05EDRoqBwSSXuNVNQzp8r4BjvisSjHkZXCq7zh6');
        const data = await res.json();
        console.log(res, data);

        if(!res.ok) {
            throw new Error(`${data.error.message} ${res.status}`)
        }
        let images = data.photos;
        console.log(images);

        const markup =

        `${images.map(photo => {
            return `
            <div class="links-img">
              <a class="link" href="${photo.img_src}" data-lightbox="gallery" data-title="${images[0].earth_date}">
                <p>${photo.id}</p>
             </a>
            </div>
            `;    
        }).join('')} 
        `;

        resultsContainer.innerHTML = "";
        resultsContainer.insertAdjacentHTML('afterbegin', markup);

    } catch(err) {
        alert(err);
    }
};
showRoverData();
