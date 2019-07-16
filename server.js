
const express = require('express');
const app = express();


const { shopRouter } = require('./controllers/shop.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`));
app.use(express.static(`${__dirname}/client/public`));
app.use('/api/shop', shopRouter);

app.get('/api/ping', (req, res) => {
    res.send('pong');
});

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
});
