const express = require('express');
const app = express();

const port = 8080;

const userCtrl = require('./controllers/userContoller');
const findCtrl = require('./controllers/findController');
const getSetCtrl = require('./controllers/gettersetter');
const validationCtrl = require('./controllers/validationConstraints');
const rawQueryCtrl = require('./controllers/rawquery');
const oneToOneCtrl = require('./controllers/oneToOne');

require('./models/index');

app.get('/', (req,res) => {
    res.send("Home Page");
});


app.get('/add', userCtrl.addUser);
app.get('/crud', userCtrl.crudOperation);
app.get('/query', userCtrl.queryOperation);
app.get('/find', findCtrl.finderData);
app.get('/getsetctrl', getSetCtrl.getterSetter);
app.get('/validation', validationCtrl.validationCount);
app.get('/raw-query', rawQueryCtrl.rawQuery);
app.get('/onetoone', oneToOneCtrl.oneToOne);
app.get('/belongsTo', oneToOneCtrl.belongsTo);
app.get('/onetomany', oneToOneCtrl.oneToMany);

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
});

