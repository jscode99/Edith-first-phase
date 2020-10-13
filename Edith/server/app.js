const express = require('express');
const env = require('dotenv')
//router
const userRouter=require('./routes/user')
//app
const app = express();


//.env config
env.config();
const port = process.env.PORT || 4000


//middlewares
app.use(express.json())

//routes
app.use('/api',userRouter)




app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});


