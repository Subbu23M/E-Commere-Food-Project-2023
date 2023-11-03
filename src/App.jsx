import { Route, Routes } from "react-router"
import { NavBar } from "./Components/NavBar"
import { DisplayItems } from "./pages/DisplayItems"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { totalProductsPrice } from "./redux/features/foodSlice"

export const App = () => {
    const foodDataItems = useSelector((state) => state.FoodApp)
    const {
        foodData
    } = foodDataItems

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(totalProductsPrice())
    }, [foodData])

    return (
        <>
            <NavBar/>
            <Routes>
                <Route
                    path='/'
                    element={<DisplayItems/>}
                />
            </Routes>
        </>
    )
}