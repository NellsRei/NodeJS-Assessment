import { Request, Response} from "express";
import {v4 as uid} from "uuid";
import mssql from "mssql"
import {sqlConfig} from "../Config"
import { Product } from "../Models/productModel";
import { DbHelper } from "../DatabaseHelper";


const dbInstance = new DbHelper()

//adding a product
export async function addProduct(req:Request , res:Response){
    try {
        const id = uid()
        const {name, description,price}= req.body

        //make connection
       
        dbInstance.exec('addProduct',{id,name,description,price} )
        res.status(200).json({Message: "Product Added Successfully"})
    } catch (error) {
        res.status(500).json(error)    
    }
}

//getting a product
export async function getProduct(req:Request<{id : string}> , res: Response){
    try {
        // //make connection
        const product = await(await(dbInstance.exec('getProduct',{id: req.params.id}))).recordset[0] as Product
        if(product && product.id){
        res.status(200).json(product)
    } 
    } catch (error) {
       res.status(500).json(error) 
    }
}

//getting all products
export async function getProducts(req:Request , res: Response){
    try {
        // //make connection
        const products = await(await (dbInstance.exec('getProducts', {}))).recordset as Product []
        res.status(200).json(products)
        
    } catch (error) {
       res.status(500).json(error) 
    }
}

export async function offsettedProducts(req:Request, res:Response){
    try {
        const products = await(await (dbInstance.exec('offsetProducts', {}))).recordset as Product []
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error) 
    }
}

export async function filteredProducts(req:Request, res:Response){
    try {
        const products = await(await (dbInstance.exec('filteredProducts', {}))).recordset as Product []
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error) 
    }
}