import fetch from 'isomorphic-fetch';

export function post(options) {
    return new Promise((resolve, reject)=>{
        let header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        fetch(options.url,{
            method: 'POST',
            headers: Object.assign({},options.header,header),
            body: options.params || {}
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            resolve(response);
        }).catch((err)=>{
            reject(err);
        })
    })
}

