const axios = require('axios');

const getClima = async(lat, lon) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=99161bfd2178bf685f330413649399d3&units=metric`);
    return res.data.main.temp;

}
module.exports = {
    getClima
}