import React from "react";
import "./Travel.css"

function Travel(props){
        return(
              <>
              <div className="container">
                <div className="image">
                      <img src={props.image} alt=""width="350rem" height="250rem"></img>
                </div>
                 <div className="details">
                    <h4>{props.city} <span><a href="https://www.google.com/maps/">view on google maps</a></span></h4>
                    <h1>{props.place}</h1>
                    <h3>{props.day}</h3>
                    <p>{props.description}</p>
                 </div>
              </div>

              </>
        );
    }
export default Travel;