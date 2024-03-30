const http = require('http')

const server = http.createServer((req, resp)=>{
    // resp.write('Welcome to my first server')
    if(req.url === '/') resp.end('Welcome to Home page')
    else if(req.url === '/about') {
        resp.end('Hey, there This is Arya Raj. \n Student: Engineering Physics')
    }
    else resp.end(
        `<h1>Oops!</h1>
        <p>We can't find your page for which you are looking for.</p> 
        <a href= "/">Go back to homepage</a>`
    )
    // resp.write('<br> This is Arya Raj Designer of this web-browser')
    
    // resp.end()
})

server.listen(5000)