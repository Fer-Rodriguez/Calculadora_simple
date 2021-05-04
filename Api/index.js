const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8085;

app.get('/', (req, res, next) => {
    res.send('welcome to my api...');
});

app.get('/suma', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;


    var resultado = parseFloat(a) + parseFloat(b);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/resta', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;


    var resultado = parseFloat(a) - parseFloat(b);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/multiplicacion', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;


    var resultado = a * b;
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/division', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;


    var resultado = a / b;
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/potencia', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;


    var resultado = Math.pow(a, b);

    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});


app.get('/cuadrado', (req, res, next) => {
    var a = req.query.a;

    var resultado = Math.pow(a, 2);

    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/raizCuadrada', (req, res, next) => {
    var a = req.query.a;

    var resultado = Math.sqrt(a);

    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/log2', (req, res, next) => {
    var a = req.query.a;

    var resultado = Math.log2(a);

    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.listen(port, () =>
    console.log('listening on port 8085')
);