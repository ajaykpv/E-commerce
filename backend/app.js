require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');



const app = express();

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("Database connected successfully.");
})
.catch((err)=>{
    console.log(err);
})
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator())


app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})