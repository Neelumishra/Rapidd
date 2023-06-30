import React from 'react'
import "./Card.css"
import Button from '../Button/Button';
function Card() {
  return (
    <div className="mainContainer">
      <img className="img-thumbnail" src="First.png" />
      <div className="mainContainerSecond">
        <p className="cardHeading">
          Adipisicing unde vel so dolore, consequatur.
        </p>
        <Button
          className={"buttonCss"}
          icon="link"
          text="Ipsum Lorem"
          backgroundColor="#FFFF"
          fontWeight="700"
          lineHeight="27px"
          fontSize="18px"
        />
      </div>
    </div>
  );
}

export default  Card