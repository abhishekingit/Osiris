import { async } from "regenerator-runtime";

export const state = {
    images : {},
};
    
export const loadRoverImages = async function ( ) {
    try {
        const res = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=k05EDRoqBwSSXuNVNQzp8r4BjvisSjHkZXCq7zh6');
        const data = await res.json();
        console.log(res, data);

        if(!res.ok) {
            throw new Error(`${data.error.message} ${res.status}`)
        }
        const results = data.photos;
        state.images = {
            results,
        };
        console.log(state.images);

    } catch(err) {
        alert(err);

    }
    

};