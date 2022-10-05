import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import Travel from "./Travel";
import "./Title.css";

function Title(){
        return(
            <div>
                <h1 className="title">my dream journey</h1>
                <Travel  image={image1}
                    city="japan"
                    place="Mount fuji"
                    day="12-jan-2022-24-jan-2022"
                    description="mount fuji is the tallest moutain in japan ,standing at 3462 meter(12.380 feet).mount fuji the single most popular tourist site in japan"
                />
                <Travel 
                    image={image2}
                    city="australia"
                    place="sydney opera house"
                    day="27-may-2021-8-jun-2021"
                    description="mount fuji is the tallest moutain in japan ,standing at 3462 meter(12.380 feet).mount fuji the single most popular tourist site in japan"
                />
                <Travel image={image3} 
                    city="norway"
                    place="geirangerfjiord"
                    day="12-jan-2021-25-jan-2021"
                    description="mount fuji is the tallest moutain in japan ,standing at 3462 meter(12.380 feet).mount fuji the single most popular tourist site in japan"
                />
                <Travel image={image4}
                    city="chennai"
                    place="mahapallipuram"
                    day="22-aug-2022"
                    description="it one awesome place all in place beach,temple,park verything clear handling in goverment recently chess oylampic coducted in 2022.it is my fevourite place"
                />
            </div>
        )
    
}

export default Title;