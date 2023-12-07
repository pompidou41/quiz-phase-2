require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middlewares/ssr');

const PORT = 3000;
const app = express();

const indexRouter = require('./routes/index.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
