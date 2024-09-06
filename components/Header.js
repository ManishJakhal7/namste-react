import { CDN_LOGO } from "../utilis/constant";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="head">
      <div className="logo-conainer">
        <img className="logo" src={CDN_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//count increaase
