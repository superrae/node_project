const express = require('express'); 
// const ejs = require('ejs'); 
const bodyParser = require('body-parser')
const app = express(); 
const {productRouter} =require('./controllers/Product.Controller')
const {userRouter} =require('./controllers/User.Controller')
const {db} = require('./db')

// app.use(express.static('public'));
// app.set('view engine', 'ejs')
// app.set("views","views")
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use('/product',productRouter)
app.use('/user',userRouter)

db.sync(
    //{force:true}
).then(()=> {

    app.listen(8080); 
})
