const api_url_base = process.env.PORT ? 'https://candidates-api-gzkw.onrender.com' : 'http://localhost:4000'

export async function getCandidates() {

    try {

        const response = await fetch(`${api_url_base}/candidates`)

        const json = await response.json()
        return json.data

    } catch (err) { console.log(err) }
}