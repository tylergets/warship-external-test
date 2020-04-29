const argv = require('yargs').argv
const express = require('express');

const app = express();
const port = argv.port || 3000;

app.get('/', (req, res) => res.send('Warship External Sample App!'));

app.get('/args', (req, res) => {
    res.json(argv);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
