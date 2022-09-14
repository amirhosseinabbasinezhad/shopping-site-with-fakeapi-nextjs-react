import { useEffect, useState } from "react";
import Slide from "./Slide";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import banerimage1 from "../../../public/assets/baner1111.png";

import baner22 from "../../../public/assets/banner22.png"
import baner3 from "../../../public/assets/banner3.png"
import React from "react";
const Slider = () => {
    const data = [
        {
            header: "Big Sale",
            text1: "Get the trendy",
            text2: "fashion at discount",
            text3: "of up to 50%",
            image: banerimage1,
        },
    ]
    const [index, setIndex] = React.useState(0);
   

    return (<><div className="row">

        <Slide text3={data[index].text3} text2={data[index].text2} text={data[index].text1} image={data[index].image.src} header={data[index].header} />
    </div>

    </>)
}
export default Slider;