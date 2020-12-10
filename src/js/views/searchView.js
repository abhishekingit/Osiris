class SearchView {
    #parentEl = document.querySelector('.search');

    getQuery() {
            let Cam = this.#parentEl.querySelector(".custom-select").value;
            let Sol = this.#parentEl.querySelector(".form-control").value;
            console.log(Sol);

            return [Cam, Sol];

        };
    

    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', function(e){
            e.preventDefault();
            handler();
        });
    }

}

export default new SearchView();