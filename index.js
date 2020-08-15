const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const cookieParser=require('cookie-parser')


app.use(express.static('./assets'));

app.use(express.urlencoded());


app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      '*'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});