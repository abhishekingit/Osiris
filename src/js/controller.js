import * as model from './model';
import imageView from './views/imageView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
 

// console.log('TEST');

const controlRoverData = async function() {
    try {
        
        const [cam, sol] = searchView.getQuery();
        console.log(sol, cam);
        if(!cam || !sol) return;
        imageView.renderSpinner();
        
        //loading the images
        await model.loadRoverImages(cam, sol);
        const {images} = model.state;

        //rendering the images
        imageView.render(images);

        

        

    } catch(err) {
        alert(err);
    }
};



const init = function() {
    searchView.addHandlerSearch(controlRoverData);
};

init();


