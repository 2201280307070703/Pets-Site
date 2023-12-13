const buildOptions = (data) => {
    const options = {};

    if(data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }

    const accessToken = localStorage.getItem('accessToken');

    if(accessToken){
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        };
    };

    return options;
}

const request = async (method, url, data) => {
    const responce =  await fetch(url, {
        ...buildOptions(data),
        method
    });

    if(responce.status === 204){
        return {};
    }

    const result =  await responce.json();

    if(!responce.ok){
        throw result;
    }

    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const remove = request.bind(null, 'DELETE');
export const put = request.bind(null, 'PUT');