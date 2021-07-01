import React from 'react';

export const publishJob = info => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    headers.append('Access-Control-Allow-Methods', 'GET, POST');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Auth-Token');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', true);

    return fetch('http://localhost:3000', {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(info)
    })
    .then(res => {
        return res.status;
    })
    .then((info) => {
        return info;
    })
}

export const findJobs = info => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    headers.append('Access-Control-Allow-Methods', 'GET, POST');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', true);

    return fetch('http://localhost:3000', {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(info)
    })
    .then(res => {
        console.log(res)
        return res.json();
    })
    .then((info) => {
        console.log(':::::::::::::::::::::::::')
        console.log(info)
        return info;
    })
}
