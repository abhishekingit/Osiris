import { async } from "regenerator-runtime";

import {API_URL, ROVER, SOL, CAMERA, API_KEY} from './config';

import {getJSON} from './helper';

export const state = {
    images : {},
};
    
export const loadRoverImages = async function ( ) {
    try {

        const data = await getJSON(`${API_URL}/${ROVER}/photos?sol=${SOL}&camera=${CAMERA}&api_key=${API_KEY}`);
        
        const results = data.photos;
        state.images = {
            results,
        };
        console.log(state.images);

    } catch(err) {
        console.error(`${err}`);

    }
    

};