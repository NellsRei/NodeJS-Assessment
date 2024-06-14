import { Router } from "express";
import { addProduct, getProduct, getProducts, offsettedProducts} from "../Controllers/productController";

const Productrouter = Router()

Productrouter.post("", addProduct)
Productrouter.get("/:id", getProduct)
Productrouter.get("", getProducts)
Productrouter.get("", offsettedProducts)



export default Productrouter