import { CDN_LOGO } from "../utilis/constant";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
