import styles from "./Header.module.css";

import logo from "../../images/logo.svg";
import map from "../../images/map.svg";
import cart from "../../images/cart.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.top}>
          <ul>
            <li>
              <a href="/contact">Contact Sales</a>
            </li>
            <li>
              <a href="tel:6467913726">646-791-3726</a>
            </li>
            <li>
              <select>
                <option>US</option>
                <option>UK</option>
              </select>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <a href="/home">
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/explore">Explore</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
            </ul>
          </nav>
          <a href="/Showrooms">
            <img src={map} alt="map" />
            Showrooms
          </a>
          <button type="button">
            <img src={cart} alt="cart" />{" "}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
