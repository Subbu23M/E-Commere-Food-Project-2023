import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsByUrl } from "../redux/features/foodSlice"

export const DisplayProducts = () => {
    const store = useSelector((state) => {
        return state.FOODAPP
    })
    const{foodArray,isLoading} = store

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsByUrl())
    },[dispatch])

    const DisplayResult = (
        <>
            {
                foodArray.map((ele) => {
                    const{id,title,price,image} =ele
                    return (
                        <div className="col-lg-4 my-2 mx-auto" key={id}>
                            <div className="card">
                                <img 
                                    src={image} 
                                    alt={title}
                                    className="card-img-top img-fluid"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {title}
                                    </h5>
                                    <p className="card-text">
                                        Price - {price}
                                    </p>
                                    <p>
                                        Quantity : 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

    return (
        <>  
            <section>
                <div className="container">
                    <div className="row">
                        {
                            isLoading ? <h2>Loading....</h2> : DisplayResult
                        }
                    </div>
                </div>
            </section>
        </>
    )
}