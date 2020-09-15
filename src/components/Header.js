import React from "react";
import "./header.css";
const Header = (props) => {
  return (
    <div>
      <h1>{props.headername}</h1>
    </div>
  );
};
export default Header;
