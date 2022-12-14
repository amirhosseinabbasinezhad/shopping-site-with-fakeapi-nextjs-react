import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userstates } from "../store/userSlice";
import Header from "../home/Header";
import CartItem from "./CartItem";

const Cart: React.FC = () => {

    const user = useSelector(userstates);

    const itemsincart = user.cart.items.map((item, index) => {

        return <CartItem key={item.productItem.id} id={item.productItem.id} image={item.productItem.images[0]} title={item.productItem.title} price={item.productItem.price}
            amount={item.amount} />
    })
    return (<>
        <div className="showcartpage" style={{ padding: "20px 20px 5px 20px" }}>

            <Header text="cart" />
            <div className="cartitems">
                {itemsincart}
            </div>
            
        </div>



    </>)
}
export default Cart;