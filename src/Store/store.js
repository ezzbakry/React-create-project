import { configureStore } from "@reduxjs/toolkit";
import lanreduce from "./slices/language"
import counterreduce from "./slices/counter"
import namerduce from'./slices/name'

const store=configureStore({
    reducer:{
        language : lanreduce,
        counter:counterreduce,
        name:namerduce
    }
})

export default store;