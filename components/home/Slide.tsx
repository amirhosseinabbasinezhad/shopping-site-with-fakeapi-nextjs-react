
import Image, { StaticImageData } from "next/image";
import React from "react";
const Slid: React.FC<{ text: string, text2: string, text3: string, image: string , header: string }> = (props) => {


    return (<>
        <div className="slide">
            <div className="imagebaner">

                <img src={props.image} alt="woman banner" />
            </div>
            <div className="texts">
                <h5>{props.header}</h5>
                <h6>{props.text}<br />  {props.text2} <br /> {props.text3}</h6>
            </div>
        </div>
    </>)
}
export default React.memo(Slid);