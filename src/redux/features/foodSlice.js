import {
    createSlice
} from "@reduxjs/toolkit"
import {
    foodListing
} from '../../data/foodListing'

const initialState = {
    foodData: foodListing,
    totalAmount: 0,
    cartLength: 0
}

const foodSlice = createSlice({
    name: 'FoodApp',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            // Logic to collect specific item
            const cartItem = state.foodData.find((ele) => ele.id === action.payload)
            cartItem.qnty += 1
        },
        decreaseQuantity: (state, action) => {
            // Logic to collect specific item
            const cartItem = state.foodData.find((ele) => ele.id === action.payload)
            cartItem.qnty -= 1
        },
        totalProductsPrice: (state) => {
            let totalAmountPrice = 0
            let cartLengthProducts = 0
            state.foodData.forEach((item) => {
                totalAmountPrice += item.qnty * item.price
                cartLengthProducts += item.qnty
            })
            state.totalAmount = totalAmountPrice
            state.cartLength = cartLengthProducts
        },
        removeItem: (state, action) => {
            state.foodData = state.foodData.filter((ele) => ele.id !== action.payload)
        }
    }
})

export const {
    increaseQuantity,
    decreaseQuantity,
    totalProductsPrice,
    removeItem
} = foodSlice.actions

export default foodSlice.reducer