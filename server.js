const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const userRoute = require('./routes/userRoute');
const vacationRoute = require('./routes/vacationRoute');
const authRoute = require('./routes/authenticateRoute');
const authenticationController = require('./controllers/authenticationController');
require('dotenv').config();


const app = express();



const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(authenticationController.receiveToken);
// app.use(methodOverride)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    }


app.use('/user', userRoute);
app.use('/api/vacations/', vacationRoute);
app.use('/auth', authRoute);






app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
