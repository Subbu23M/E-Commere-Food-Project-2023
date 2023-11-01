import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    foodData : [],
    isLoading:false
}

const foodSlice = createSlice({
    name:'FoodApp',
    initialState
})

export default foodSlice.reducer 