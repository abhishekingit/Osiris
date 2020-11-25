import * as model from './model';
import imageView from './views/imageView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
 

// console.log('TEST');

const controlRoverData = async function() {
    try {
        imageView.renderSpinner();
        
        //loading the images
        await model.loadRoverImages();
        const {images} = model.state;

        //rendering the images
        imageView.render(images);

        

        

    } catch(err) {
        alert(err);
    }
};
controlRoverData();
