import fetch from 'isomorphic-fetch';

let httpUtil = {};
/**
 * POST请求
 * **/
httpUtil.post = (url,options) =>{
    return new Promise((resolve, reject) => {
        let opt = options || {};
        fetch(url,{
            method:'POST',
            ...opt
        })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        })
        .then(response => {
           if (response.status >= 400) {
               throw new Error("Bad response from server");
           }
           return response.json();
        })
        .then(response => {
            resolve(response);
        })
        .catch(error =>{
            reject(error);
        });
    })
};
/**
 * GET请求
 * **/
httpUtil.post = (url,options) =>{
    return new Promise((resolve, reject) => {
        let opt = options || {};
        fetch(url,{
            method : 'GET',
            ...opt
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            })
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(response => {
                resolve(response);
            })
            .catch(error =>{
                reject(error);
            });
    })
};

export default httpUtil
