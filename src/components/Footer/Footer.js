import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>
          <address>
            <span>ScrapSafe Inc.</span> 20 Spaulding Avenue Rochester New
            Hampshire 03867 <span>Tel</span> 603-948-1026 <span>Email</span>{" "}
            <a href="mailto:info@scrapsafe.com">info@scrapsafe.com</a>
          </address>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
