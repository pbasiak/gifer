const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mockResponse = {
    field: 'value',
    field2: 'value2'
};

app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.listen(port, function () {
    console.log('App running on port: ' + port);
});