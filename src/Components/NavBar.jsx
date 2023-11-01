import { AiOutlineShoppingCart} from 'react-icons/ai';
import { Badge } from "@mui/material";

export const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col bg-light d-flex align-items-center justify-content-between">
                    <h1>
                        RTK Project 
                    </h1>
                    <Badge badgeContent={2} color="primary">
                        <AiOutlineShoppingCart/>
                    </Badge>
                </div>
            </div>
        </div>
    )
}