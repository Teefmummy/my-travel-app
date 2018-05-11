const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');
const vacationRoute = require('./routes/vacationRoute');
require('dotenv').config();

const app = express();



const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    }


app.use('/user', userRoute);
app.use('/api/vacations/', vacationRoute);





app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
