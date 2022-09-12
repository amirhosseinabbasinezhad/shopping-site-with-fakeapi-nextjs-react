import banerimage1 from "../../../public/assets/baner.png";
import baner2 from "../../../public/assets/banner2.png";
import baner22 from "../../../public/assets/banner22.png"
import Image from "next/image";
const Slid = () => {


    return (<>
        <div className="slide">
            <div className="imagebaner">

                <Image src={banerimage1} />
            </div>
            <div className="texts">
                <h5>Big Sale</h5>
                <h6>Get the trendy<br /> fashion at discount <br /> of up to 50%</h6>
            </div>
        </div>
    </>)
}
export default Slid;