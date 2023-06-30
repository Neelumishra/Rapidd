import React, {Fragment} from "react";
import "./Third.css"
import Button from "../Button/Button";
function Third() {
    return (
      <div className="row  m-2 main maininner">
        <div className=" col-6  p-2 ">
          <img src="First.png" width="100%" />
          <br />
          <div className="d-flex justify-between ">
            <Button
              icon="link"
              text="Ipsum Lorem"
              backgroundColor="#FFFF"
              color="#003057"
              fontWeight="700"
              lineHeight="21px"
              fontSize="14px"
            />
            <Button
              icon="link"
              text="Ipsum Lorem"
              backgroundColor="#FFFF"
              color="#003057"
              fontWeight="700"
              lineHeight="21px"
              fontSize="14px"
            />
            <Button
              icon="link"
              text="Ipsum Lorem"
              backgroundColor="#FFFF"
              color="#003057"
              fontWeight="700"
              lineHeight="21px"
              fontSize="14px"
            />
          </div>
        </div>
        <div className="text-center  col-6 m-auto p-2">
          <div className="">
            Numquam.
            <span className="firstHeading">
              <b>Esse aliquip do,magni.</b>
            </span>
          </div>
          <br />
          <div className="secondHeading">
            <b>Minima ad for vitae sit</b>
          </div>
          <br />
          <div className="thirdHeading">
            <a href="">Ipsum Lorem</a>
          </div>
          <img
            style={{ marginTop: "14px" }}
            src="Frame13.png"
            width="100%"
            height={"220px"}
          />

          <div className="d-flex justify-content-evenly align-items-center mt-3 mainInnerCss">
            <div>
              <Button
                icon="link"
                text="Ipsum Lorem"
                backgroundColor="#ffff"
                color="#003057"
                fontWeight="700"
                lineHeight="21px"
                fontSize="14px"
                borderRadius="15px"
                height={"35px"}
                width={"150px"}
              />
            </div>
            <div>
              Adipisicing unde vel so dolore,
              <br />
              consequatur
            </div>
            <div>
              {" "}
              <a href="">Ipsum Lorem</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Third;
