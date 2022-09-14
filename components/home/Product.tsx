import Link from "next/link";

import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { useRouter } from "next/router";
import React from "react";

const Product: React.FC<{ id:number,key: number, title: string, price: number, image: string }> = (props) => {
    const router=useRouter();
    const singleProductHandler =(e:React.MouseEvent)=>{
        router.push(`/products/${props.id.toString()}`);
    }

    return (<>
        <div onClick={(e)=>{singleProductHandler(e)}} className="product">
            <div className="imagebox">
                <img src={props.image} alt="product image"/>
            </div>

            <div className="maininfo row">
                <div className="textproduct">
                    <h5>{props.title.slice(0,30)}</h5>
                    <h6>${props.price}</h6>
                </div>
                <div className='likeicon'>
                    <FavoriteBorderTwoToneIcon sx={{ fontSize: "17px" }} />
                </div>
            </div>
        </div>
    </>)
}
export default React.memo(Product);