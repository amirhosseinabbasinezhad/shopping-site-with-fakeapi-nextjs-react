import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechSingleProduct, productslicestate } from "../store/productsSlice";

const SingleProduct: React.FC<{ pid: string | string[] | undefined }> = (props) => {

    const productstates = useSelector(productslicestate);

    const producpage = (product: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: {},

        images: string[],
        categoryId: string,


    }) => {
        return <>
            <div className="imageproduct">
                <img src={product.images[0]} alt="products image" />
            </div>
            <div className="pinfo row ">
                <h4>{product.title}</h4>
                <h4>${product.price}</h4>
            </div>
            <div className="description">
                <h5>{product.description}</h5>
            </div>

        </>
    }
    return (<>
        <div className="singleproduct">
            {producpage(productstates.product)}
        </div>
    </>)
}
export default SingleProduct;