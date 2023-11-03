import { useDispatch, useSelector } from "react-redux"
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'
import { decreaseQuantity, increaseQuantity, removeItem } from "../redux/features/foodSlice"
import swal from "sweetalert"

export const DisplayItems = () => {
    const productsData = useSelector((store) => {
        return store.FoodApp
    })
    const {
        foodData
    } = productsData

    const dispatch = useDispatch()

    // Logic to remove each item
    const handleRemove = (id) => {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to get the product!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal('Poof! Your imaginary product has been deleted!', {
                    icon: 'success',
                });
                dispatch(removeItem(id))
            } else {
                swal('Your product is available!');
            }
        });
    }

    const handleIncreaseQuantity = (id) => dispatch(increaseQuantity(id))
    const handleDecreaseQuantity = (id) => dispatch(decreaseQuantity(id))

    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                    {
                        foodData.map((item) => {
                            const{id,rname,imgdata,price,qnty} = item
                            return (
                                <div className="col-lg-3 col-sm-6 my-3 mx-auto" key={id}>
                                    <div className="card">
                                        <img 
                                            src={imgdata} 
                                            alt={rname}
                                            className="card-img-top img-fluid img-thumbnail" 
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">
                                                {rname}
                                            </h5>
                                            <h6 className="card-text">
                                                Price : &#8377;{price}
                                            </h6>
                                            <div className="btns d-flex justify-content-between align-items-center">
                                                <button 
                                                    className="btn btn-muted btn-sm text-dark"
                                                    onClick = {() => {
                                                        if(qnty === 1){
                                                            dispatch(removeItem(id))
                                                            return
                                                        }
                                                        handleDecreaseQuantity(id)
                                                    }}
                                                >
                                                    <BsChevronDown/>
                                                </button>
                                                <span className="text-dark">
                                                    {qnty}
                                                </span>
                                                <button 
                                                    className="btn btn-muted btn-sm text-dark"
                                                    onClick = {() => handleIncreaseQuantity(id) }
                                                >
                                                    <BsChevronUp/>
                                                </button>
                                            </div>
                                            <button 
                                                className="btn btn-block btn-danger mt-2"
                                                onClick={() => handleRemove(id)}
                                            >
                                                remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}