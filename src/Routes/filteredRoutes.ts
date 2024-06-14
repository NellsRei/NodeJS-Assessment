import { Router } from "express";
import {filteredProducts} from "../Controllers/productController";

const filProdrouter = Router()

filProdrouter.get("", filteredProducts)



export default filProdrouter