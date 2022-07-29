const express = require("express");
const open = require("open");
const app = express();
const port = 3000;

const bodyParse = require('body-parser')
app.use(bodyParse.json)

const BBWEBHOOK_RECEIVE_ENDPOINT = '/webhook-receive'

app.get(BBWEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
    const { url } = request;

    console.log('Receive get webhook request: Full URL: %s', url);

    response.send({
        message: "Received GET request. Check the console for more info"
    });
});

app.post(BBWEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
    const { body } = request;

    console.log("Received webhook request to /webhook-receive");
    console.log("Request body:");
    console.log(body);

    response.send({
        message: "Received POST request. Check the console for more info"
    });
})

app.put(BBWEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
    const { body } = request;

    console.log("Received webhook request to /webhook-receive");
    console.log("Request body: ");
    console.log(body);

    response.send({
        message: "Received PUT request. Check the console for more info"
    });
})

app.delete(BBWEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
    const { url } = request;

    console.log("Received webhook request to /webhook-receive");
    console.log("Full URL: " + url);

    response.send({
        message: "Received DELETE request. Check the console for more info"
    });
});


app.listen(port, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`Gravity webhook example server listening at http://localhost:${port}`);
        // open(`http://localhost:${port}`)
    }
});