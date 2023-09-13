import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import ContactSec from "../ContactSec/ContactSec";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            belive a good place to live can make your life better.
          </span>
          <div className="contactModes">
            <div className="row">
              <ContactSec Icon={MdCall} mode="Call" value="021 122 453 65" />
              <ContactSec
                Icon={BsFillChatDotsFill}
                mode="Chat"
                value="021 122 453 65"
              />
            </div>
            <div className="row">
              <ContactSec
                Icon={BsFillChatDotsFill}
                mode="Video Call"
                value="021 122 453 65"
              />
              <ContactSec
                Icon={HiChatBubbleBottomCenter}
                mode="Message"
                value="021 122 453 65"
              />
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="im-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
