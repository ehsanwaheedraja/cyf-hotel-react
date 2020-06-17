import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.footerData.map((item, index) => {
          return <il key={index}>{item}</il>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
