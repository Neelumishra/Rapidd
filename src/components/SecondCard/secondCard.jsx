import React from "react";
import "./SecondCard.css";
import { LiaShoppingCartSolid } from "react-icons/Lia";

function SecondCard() {
  return (
    <div className="mainSecContainer  d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center  align-items-center ">
        <div className="secondMain ">
          <img src="Rectangle1.jpg" style={{ marginTop: "-5px" }} />
          <div className="secondInnerMain">
            <b>Esse aliquip do, magni!</b>
          </div>
        </div>
        <div className="buttonCssSecond  d-flex align-items-center justify-content-center">
          <LiaShoppingCartSolid className="logoCssMainHeading" />
          <div className="secondInnerMainHeading ">Lorem</div>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;
