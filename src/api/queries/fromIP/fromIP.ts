import { instance } from "src/api/instance";

function getWeatherFromIP(ip: string) {
    const data = instance.get('/ip.json', {
        params: {
            q: ip
        }
    })

    return data
}

export { getWeatherFromIP };