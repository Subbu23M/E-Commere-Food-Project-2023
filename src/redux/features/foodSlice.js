import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import swal from "sweetalert"

// Initial State
const initialState = {
    foodArray : [],
    totalAmount:0,
    totalProducts:0,
    isLoading:false,
    errorMessage:null
}

// creating thunk
export const fetchProductsByUrl = createAsyncThunk(
    'products',
    // API Call
    async () => {
        try{
            const baseUrl = 'https://fakestoreapi.com/products'
            const response = await fetch(baseUrl)
            const data = await response.json()
            return data
        }
        catch(error){
            swal(error.message)
        }
    }
)

const foodSlice = createSlice({
    name:'FOODAPP',
    initialState,
    reducers:{
        incrementQuantity:{

        },
        decrementQuantity:{

        },
        removeItem:{

        }
    },
    extraReducers:(builder) => {
        builder
                .addCase(fetchProductsByUrl.pending,(state) => {
                    state.isLoading = true
                })
                .addCase(fetchProductsByUrl.fulfilled,(state,action) => {
                    state.isLoading = false
                    state.foodArray = action.payload
                })
                .addCase(fetchProductsByUrl.rejected,(state) => {
                    state.isLoading = false
                    state.errorMessage = 'network-issue'
                })
    }
})

// exporting actions
export const{incrementQuantity,decrementQuantity,removeItem} = foodSlice.actions

// exporting reducer
export default foodSlice.reducer