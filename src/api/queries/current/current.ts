import { instance } from "src/api/instance"

function currentWeather(q: string) {
    const data = instance.get('/current.json', {
        params: {
            q
        }
    })
    // .then(res => res.data)
    // .catch(error => {
    //     throw new Error(`Failed to get data, error: ${error}`)
    // })

    return data
}

export { currentWeather }