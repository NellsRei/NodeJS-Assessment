import { Router } from "express";
import {offsettedProducts} from "../Controllers/productController";

const offProdrouter = Router()

offProdrouter.get("", offsettedProducts)



export default offProdrouter