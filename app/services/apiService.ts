import { getAccessToken } from "../lib/actions";

const apiService = {

    // get: async function (url: string): Promise<any> {
    //     console.log('get', url);

    //     const token = await getAccessToken();

    //     return new Promise((resolve, reject) => {
    //         fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
    //             method: 'GET',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         .then(response => response.json())
    //         .then((json) => {
    //             console.log('Response:', json);

    //             resolve(json);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         })
    //     })
    // },


    // get: async function (url: string): Promise<any> {
    //     console.log('get', url);

    //     return new Promise((resolve, reject) => {
    //         fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
    //             method: 'GET',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         .then(response => response.json())
    //         .then((json) => {
    //             console.log('Response:', json);

    //             resolve(json);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         })
    //     })
    // },


    get: async function (url: string): Promise<any> {
        console.log('get', url);
    
        const token = await getAccessToken();
    
        return fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            console.log('Response:', json);
            return json;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });
    },


    // get: async function (url: string): Promise<any> {
    //     console.log('get', url);
    
    //     // Construct the full URL and check for potential issues with environment variables.
    //     const fullUrl = `${process.env.NEXT_PUBLIC_API_HOST}${url}`;
    //     if (!process.env.NEXT_PUBLIC_API_HOST) {
    //         console.error('API host environment variable is not set.');
    //         throw new Error('API host configuration error');
    //     }
    
    //     console.log(fullUrl);
    
    //     return fetch(fullUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             // Log more context with the status and response text if available.
    //             console.error(`HTTP error! Status: ${response.status}`);
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    
    //         // Attempt to parse JSON and handle parsing errors.
    //         return response.json().catch(() => {
    //             console.error('Response is not JSON.');
    //             throw new Error('Invalid JSON response');
    //         });
    //     })
    //     .then(json => {
    //         console.log('Response:', json);
    //         return json;
    //     })
    //     .catch(error => {
    //         console.error('Fetch error:', error);
    //         throw error; // Ensure the error is still thrown for handling upstream.
    //     });
    // },

    // getWithoutToken: async function (url: string): Promise<any> {

    //     console.log(`${process.env.NEXT_PUBLIC_API_HOST}${url}`)

    //     return fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
    //             method: 'GET',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(json => {
    //         console.log('Response:', json);
    //         return json;
    //     })
    //     .catch(error => {
    //         console.error('Fetch error:', error);
    //         throw error;
    //     });
    // },


    post: async function(url: string, data: any): Promise<any> {
        console.log('post', url, data);

        const token = await getAccessToken();

        return new Promise((resolve, reject) => {
            fetch (`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: {
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            .then(response => response.json())
            .then((json) => {
                console.log('Response:', json);

                resolve(json);
            })
            .catch((error) => {
                reject(error);
            })  
        })
        
    },

    postWithoutToken: async function(url: string, data: any): Promise<any> {
        console.log('postWithoutToken', url, data);

        const token = await getAccessToken();

        return new Promise((resolve, reject) => {
            fetch (`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            .then(response => response.json())
            .then((json) => {
                console.log('Response:', json);

                resolve(json);
            })
            .catch((error) => {
                reject(error);
            })  
        })
        
    }


}

export default apiService;