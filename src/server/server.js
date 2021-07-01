const http = require('http');

const hostname  = 'localhost';
const port      = 3000;
var jobsPosted = []

const server = http.createServer(function(request, response) {
    const { method, url } = request;
    let body = []
    
    if (url === '/' && method === 'POST') {
        request.on('data', (chunk) => {
            const buffer = Buffer.from(chunk)
            const info = buffer.toString('utf-8')
            const parsedData = JSON.parse(info)
            const data = parsedData.data
            if (parsedData.get) {
                jobsPosted.forEach((job) => {
                    if (data.position.length !== 0) {
                        (job.jobType === data.jobType && job.position.includes(data.position)) && body.push(job)
                    } else {
                        job.jobType === data.jobType && body.push(job)
                    }
                })
            } else {
                jobsPosted.push(data)
            }
        })
    }
    setTimeout(() => {
        const responseBody = { method, url, body };
        if (url === '/' && method === 'POST') {
            console.log(responseBody)
        }
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
        response.setHeader('Access-Control-Allow-Credentials', true)
        response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Credentials,  Origin, Accept");
        response.end(JSON.stringify(responseBody))

    }, 1000)
});

server.listen(port, hostname);
