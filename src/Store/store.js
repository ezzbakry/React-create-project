import { configureStore } from "@reduxjs/toolkit";
import lanreduce from "./slices/language"
import counterreduce from "./slices/counter"
import namereduce from'./slices/name'

const store=configureStore({
    reducer:{
        language : lanreduce,
        counter:counterreduce,
        name:namereduce
    }
})

export default store;