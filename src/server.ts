import  express, { json } from "express";

import Productrouter from "./Routes/productRoutes";
import offProdrouter from "./Routes/offsetRoutes";
import filProdrouter from "./Routes/filteredRoutes";


const app = express()

//middleware
app.use(json())

app.use("/products", Productrouter)
app.use("/prod", offProdrouter)
app.use("/fil", filProdrouter)

//port
app.listen(3005, ()=>{
    console.log('Server Running....');
    
})