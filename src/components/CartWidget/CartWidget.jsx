import { RiShoppingCartFill } from "react-icons/ri";

export const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button><RiShoppingCartFill/></button>
            <p>{cantCarrito}</p>
            
        </>
    );
}

