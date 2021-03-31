const API_KEY = process.env.NEXT_PUBLIC_ROVER_API_KEY;

export const getPhotos = async() => {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`);
    const result = await res.json();
    return result; 
}

export const getQuerybasedPhotos = async(rover, camera, sol) => {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`);
    const result = await res.json();
    return result;
}

export const getWeather = async() => {
    const res = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
    const result = await res.json();
    return result; 
}