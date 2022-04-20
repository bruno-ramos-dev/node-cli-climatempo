import { getCityId, getCityForecastById } from './utils/requests'

export default async function getForecast(cityName) {

    try {

        const cityId = await getCityId(cityName)
        const cityForecast = await getCityForecastById(cityId)

        console.log(`
            Clima em ${cityForecast.name}, ${cityForecast.state}
            Temperatura: ${cityForecast.temperature}°
            Direção do vento: ${cityForecast.wind_velocity} km/h
            Humidade Relativa: ${cityForecast.humidity} %
            Condição Climática: ${cityForecast.codition}
            Pressão Atmosférica: ${cityForecast.pressure}
            Sensação Térmica: ${cityForecast.sensation}°
            `)
    } catch (error) {
        console.log(error.message)
    }
}