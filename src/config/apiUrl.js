import axios from 'axios';
export async function getUserDetails() {
    let res = await axios({
        method: 'GET',
        baseURL: 'https://staging.kristal.ai',
        url: '/kristals-ws/api/v3/kristals/kristaldetails?kristal=1997',
        headers: ({
            PLATFORM_VERSION: 4.75,
            Agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
            'User-IP': '0.0.0.0',
            'Cache-Control': 'no-cache',
            'Access-Token': 'ZjE4MzY4ZDgtNzRkMS00MDdkLWJhOTMtNGViNGJkZTUxYzQyJVVTRVIlMjI2',
            'User-ID': '226',
            PLATFORM_CODE: 'WEBSITE',
            'Content-Type': 'application/json ',
            refreshCache: 'refreshCache'
        }),
    })
    return res
}