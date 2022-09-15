import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechSingleProduct, productslicestate } from "../store/productsSlice";
import { carthandler, userstates } from "../store/userSlice";


const CartItem: React.FC<{ key: number, image: string, title: string, price: number, amount: number }> = (props) => {
    const user = useSelector(userstates);
    const dispatch = useDispatch();
    const curentproduct = useSelector(productslicestate);
    const handlePlusCart = (e: React.FormEvent) => {
        fechSingleProduct(dispatch, e.currentTarget.id)

        const cartArray = user.cart
        carthandler(dispatch, curentproduct.product, user.cart, 1);

        curentproduct.product;
    }
    const handleMinusCart = (e: React.FormEvent) => {
        fechSingleProduct(dispatch, e.currentTarget.id)
        const cartArray = user.cart
        carthandler(dispatch, curentproduct.product, user.cart, -1);

        curentproduct.product;
    }

    return (<>
        <div className="cartitem">
            <div className="productimagecart">
                <Image src={props.image} alt="product image"></Image>
            </div>
            <div className="productinfo">
                <div className="title"><h5>{props.title}</h5></div>
                <div className="price"><h6>${props.price}</h6></div>
            </div>
            <div className="itemamount row"><div className="minusbtn"  onClick={(e) => { handleMinusCart(e) }}>-</div>{props.amount}<div className="plusbtn" onClick={(e) => { handlePlusCart(e) }}>+</div></div>

        </div>
    </>)
}
export default CartItem;