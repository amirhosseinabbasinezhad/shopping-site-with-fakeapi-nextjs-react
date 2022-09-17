

import React, { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";


const ProductCategory = () => {

    return <>
        <div className="categorytitle">
            <h4> Category :</h4>
        </div>
        <div className="categoriespage">
            <Link href={"/category/shoes"}>
                <div className="shoes">
                    <h4>shoes</h4>
                    <img src="https://api.lorem.space/image/shoes?w=640&h=480&r=7520" alt="shoes" />
                </div>
            </Link>
            <Link href={"/category/clothes"}>
                <div className="clothes">
                    <h4>clothes</h4>
                    <img src="https://api.lorem.space/image/fashion?w=640&h=480&r=1827" alt="clothes" />
                </div>
            </Link>
            <Link href={"/category/electronics"}>
                <div className="electronics">
                    <h4>electronics</h4>
                    <img src="https://api.lorem.space/image/watch?w=640&h=480&r=8823" alt="electronics" />
                </div>
            </Link>
            <Link href={"/category/furniture"}>
                <div className="furniture">
                    <h4>furniture</h4>
                    <img src="https://api.lorem.space/image/furniture?w=640&h=480&r=5955" alt="furniture" />
                </div>
            </Link>
            <Link href={"/category/others"}>
                <div className="others">
                    <h4>others</h4>
                    <img src="https://api.lorem.space/image?w=640&h=480&r=879" alt="others" />
                </div>
            </Link>

        </div>
    </>

}
export default ProductCategory;