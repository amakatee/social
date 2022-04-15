import { createSlice, nanoid } from "@reduxjs/toolkit";
import AddProductForm from "../../../components/Profile/features/AddProductForm";
import sub from "date-fns/sub";

const initialState = {
  products: [
    {id: 1, title:"Summer dress", content: "Smooth Fabric",price: 300, imageURL:"https://i.pinimg.com/564x/1f/83/d1/1f83d1b5c4bd99033c1f5184b9a1c5d2.jpg",
date:sub(new Date(), {minutes:30}).toISOString()},
    {id: 2, title:"Gaya swim", content: "Smooth Fabric",price: 300, imageURL:"https://i.pinimg.com/564x/bc/81/e4/bc81e473dae9287b7df8c5da750e909d.jpg",
    date:sub(new Date(), {minutes:20}).toISOString()},
    {id: 3, title:"Silk skirt", content: "Smooth Fabric",price: 900, imageURL:"https://i.pinimg.com/564x/58/ad/5c/58ad5cd00534e36333316eb6edb91eb1.jpg",
    date:sub(new Date(), {minutes:10}).toISOString()},
    {id: 4, title:"Green hills", content: "Smooth Fabric",price: 300, imageURL:"https://i.pinimg.com/564x/83/2a/ab/832aab615952af22db970ac285403130.jpg",
    date:sub(new Date(), {minutes:5}).toISOString()}
]}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: {
            reducer(state, action) {
                state.products.push(action.payload)
            },
            prepare(title, content, imageURL, price){
                return {
                    payload: {
                        id:nanoid(),
                        title,
                        content,
                        imageURL,
                        date: new Date().toISOString(),
                        price

                    }
                }
            }
    
        }
    }
})
export const allProducts = (state) => state.products.products
export const {addProduct} = productSlice.actions
export default productSlice.reducer