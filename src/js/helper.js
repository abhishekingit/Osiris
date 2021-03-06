import { async } from "regenerator-runtime";

export const getJSON = async function(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(res, data);

        if(!res.ok) {
            throw new Error(`${data.error.message} ${res.status}`)

        }
        return data;
    } catch(err) {
        throw err;
    }
}