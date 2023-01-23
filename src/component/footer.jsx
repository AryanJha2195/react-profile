import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="copyright">
          <p className="paragraph">The copyright of this website belongs to Aryan Jha </p>
          <p>© Aryan Jha 2023</p>
        </div>
        <div className="emailbox">
          <h2>Share your email with us for regular updates</h2>
          <input type="email" name="" id="" /><input className="submitbtn" type="submit" value="Submit" />
        </div>
      </footer>
    </>
  );
};

export default Footer;