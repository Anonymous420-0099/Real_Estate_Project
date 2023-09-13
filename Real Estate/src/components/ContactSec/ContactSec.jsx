import React from "react";
import "./ContactSec.css";
const ContactSec = ({ Icon, mode, value }) => {
  return (
    <div className=" modes">
      <div>
        <div className=" icon">
          <Icon />
        </div>
        <div className=" mode">
          <span className="primaryText">{mode}</span>
          <span className="secondaryText">{value}</span>
        </div>
      </div>
      <button className="button">{mode} Us</button>
    </div>
  );
};
export default ContactSec;
