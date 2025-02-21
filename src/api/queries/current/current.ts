import { instance } from "src/api/instance"

function getWeather(q: string) {
    const data = instance.get('/forecast.json', {
        params: {
            q,
            days: 3
        }
    })

    return data
}

export { getWeather }