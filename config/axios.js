const axios = require("axios");
const getLugarLatitud = async(direcion) => {
    const encodedURL = encodeURI(direcion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { "x-rapidapi-key": "1456853350msh27502ee36941f70p136372jsn41792a98fa16" }
    })
    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados par ${direcion}`)
    }
    const data = respuesta.data.Results[0]
    const dir = data.name;
    const lon = data.lon
    const lat = data.lat
    return {
        dir,
        lat,
        lon
    }
}
module.exports = {
    getLugarLatitud
}