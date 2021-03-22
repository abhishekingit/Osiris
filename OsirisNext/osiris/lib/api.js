const API_KEY = process.env.NEXT_PUBLIC_ROVER_API_KEY;

export const getPhotos = async() => {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
    const result = await res.json();
    return result;

}