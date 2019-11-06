const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request-promise');
const path = require('path');
const dotenv = require('dotenv');
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
dotenv.config();

const mockResponse = {
    field: 'value',
    field2: 'value2'
};

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

const getGiphyData = (query) => {
    return request(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}&limit=5`).then(data => JSON.parse(data).data);
}

const getPixabayData = (query) => {
    return request(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true&per_page=3`).then(data => JSON.parse(data).hits);
}

const getAllData = (query, callback) => {
    const giphyData = getGiphyData(query);
    const pixabayData = getPixabayData(query);

    const allSources = [
        giphyData,
        pixabayData,
    ];

    Promise.all(allSources).then(data => {
        return callback([].concat.apply([], data));
    });
}
app.use(express.static(DIST_DIR));
app.get('/api', (req, res) => {
    if (!!req.query.q) {
        getAllData(req.query.q, (response) => {
            res.send(response);
        });
        // TODO: Add error response
    } else {
        res.send(mockResponse); // TODO: Default response
    }
});

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});