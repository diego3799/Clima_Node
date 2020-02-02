const argv = require('./config/yargs').argv
const clima = require('./clima/clima')
const axios = require('./config/axios')
const getInfo = async(direccion) => {
    let dir = await axios.getLugarLatitud(direccion);
    let cli = await clima.getClima(dir.lat, dir.lon);
    return {
        dir,
        cli
    }
}
getInfo(argv.direccion).then(r => {
    console.log(r);
}).catch(
    () => console.log('No se pudo'));