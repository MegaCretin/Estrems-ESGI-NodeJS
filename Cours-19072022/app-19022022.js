// Recupération du module http requests
const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`<body>
                    <form action="/message">
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>`);
        res.write('</html>');
        res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // donnée envoyer par l'event POST
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }).on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode =302;
            res.setHeader('Location', '/');
            res.end();
        }).on('error', (err) => {
            console.log(err);
        })
    }
    }
});

server.listen(3000);