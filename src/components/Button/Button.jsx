import React from "react";
import "./Button.css";
import { GoLocation } from "react-icons/Go";
import { BsLink45Deg } from "react-icons/Bs";
import { AiOutlineMail } from "react-icons/Ai";
function Button({
  borderRadius,
  icon,
  text,
  color,
  backgroundColor,
  fontWeight,
  lineHeight,
  fontSize,
  width,
  height
}) {
  function Icon(icon) {
    if (icon === "email") {
      return <AiOutlineMail />;
    } else if (icon === "link") {
      return <BsLink45Deg />;
    } else if (icon === "location") {
      return <GoLocation style={{ color: "black" }} />;
    }
  }
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        color: color,
        border: "none",
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        fontSize: fontSize,
        width: width || "205px",
        height: height || "72px",
      }}
    >
      <span className="iconcss"> {Icon(icon)}</span>
      <span
        style={{ backgroundColor: backgroundColor, color: color }}
        className="buttonCss"
      >
        {" "}
        {text}
      </span>
    </button>
  );
}

export default Button;
