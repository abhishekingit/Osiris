import icons from 'url:../../img/icons.svg';

class imageView {
    #parentElement = document.querySelector('.image-results');
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);

    }
    #clear() {
        this.#parentElement.innerHTML = '';
    }

    renderSpinner = function() {
        const markup = `
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>`;
        this.#parentElement.innerHTML = '';
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #generateMarkup() {
        return `${this.#data.results.map(photo => {
            return `
            <div class="links-img">
              <a class="link" href="${photo.img_src}" data-lightbox="gallery" data-title="${this.#data.results[0].earth_date}">
                <p>${photo.id}</p>
             </a>
            </div>
            `;    
        }).join('')} 
        `;

        
    }


}

export default new imageView();
