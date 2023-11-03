import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

export const NavBar = () => {
    const cartProducts = useSelector((state) => {
        return state.FoodApp
    })
    const {
        totalAmount,
        cartLength
    } = cartProducts
    return (
        <>
            <nav className="navbar navbar-light bg-secondary">
                <Link
                    to='/'
                    className="navbar-brand text-light"
                >
                    Food Project 
                </Link>
                <div className="nav-container">
                    <AiOutlineShoppingCart/>
                    <div className="amount-container">
                        <p className="total-amount">
                            {cartLength}
                        </p>
                    </div>
                </div>
            </nav>
            <h4 className="text-center mt-3">
                Total : <span className='text-danger'>&#8377;{totalAmount}</span>
            </h4>
        </>
    )
}