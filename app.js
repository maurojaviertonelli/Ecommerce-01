const express = require('express');
const session = require('express-session');
const app = express();
const mainRoutes = require('./src/routes/main');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users');
const apiRoutes = require('./src/routes/api');
const methodOverride=require('method-override');
const carritoRoutes = require ('./src/routes/carrito');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(session({
    secret: "shhh, it's a secret",
    resave:false,
    saveUninitialized:false,
}));

app.use('/Public', express.static(__dirname + '/Public'));
app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(methodOverride('_method'));
app.use(methodOverride('_METHOD'));
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/api', apiRoutes);
app.use('/carrito', carritoRoutes);




//trabajando con POST//

app.use(express.json());

