const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');

const app = express();


const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    }


app.get('/hey', (userRoute))





app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
