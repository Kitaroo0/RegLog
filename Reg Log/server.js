const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const welcomeRoute = require('./routes/welcome');
const logoutRoute = require('./routes/logout');

const app = express();
const port = 3000;

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/welcome', welcomeRoute);
app.use('/logout', logoutRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});