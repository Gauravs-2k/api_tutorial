import axios from 'axios';
export async function getApiData() {
    //let res = await axios.get('https://jsonplaceholder.typicode.com/users')
    // this.setState({ data: res.data })
    let res = await axios({
        method: 'GET',
        baseURL: 'https://staging.kristal.ai',
        url: '/assetmanager-ws/api/v4/kristals/kristalassetsearch?query=black',
        //url: 'https://jsonplaceholder.typicode.com/users',
        headers: ({
            PLATFORM_VERSION: 4.75,
            Agent: 'Mozilla/5.0 (Linux; Android 7.1.1; Android SDK built for x86 Build/NYC; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36',
            'User-IP': '0.0.0.0',
            'Cache-Control': 'no-cache',
            'Access-Token': 'NTA3ZGQ2YWEtMzBmNS00OWMxLWExYmQtOTU2NWY1NWIxYzk5JVVTRVIlNzg=',
            'User-ID': '78',
            PLATFORM_CODE: 'ANDROID',
            'Content-Type': 'application/json ',
            refreshCache: 'refreshCache'
        }),
    })
    return res.data
}
