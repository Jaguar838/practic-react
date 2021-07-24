import logo from "../../images/logo_footer.svg";
import styles from "./Footer.module.css";

import img1 from "../../images/footer/facebook.svg";
import img2 from "../../images/footer/instagram.svg";
import img3 from "../../images/footer/linkedin.svg";
import img4 from "../../images/footer/pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>
        <img src={logo} alt="logo room" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_items}>
          <h3>About</h3>
          <ul>
            <li>
              <a href="#"> Compare</a>
            </li>
            <li>
              <a href="#"> Reviews</a>
            </li>
            <li>
              <a href="#"> Risk-Free Trial</a>
            </li>
            <li>
              <a href="#"> Careers</a>
            </li>
            <li>
              <a href="#"> Press</a>
            </li>
            <li>
              <a href="#"> Podcast</a>
            </li>
            <li>
              <a href="#"> Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.menu_items}>
          <h3>Showrooms</h3>
          <ul>
            <li>
              <a href="#"> New York</a>
            </li>
            <li>
              <a href="#"> London</a>
            </li>
            <li>
              <a href="#"> San Francisco</a>
            </li>
            <li>
              <a href="#"> Paris</a>
            </li>
            <li>
              <a href="#"> Copenhagen</a>
            </li>
            <li>
              <a href="#"> Zürich</a>
            </li>
            <li>
              <a href="#"> Los Angeles</a>
            </li>
            <li>
              <a href="#"> Berlin</a>
            </li>
            <li>
              <a href="#"> Belgium</a>
            </li>
            <li>
              <a href="#"> Virtual Demo</a>
            </li>
          </ul>
        </div>
        <div className={styles.menu_items}>
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#"> FAQ</a>
            </li>
            <li>
              <a href="#"> Booth Assembly</a>
            </li>
            <li>
              <a href="#"> Delivery</a>
            </li>
            <li>
              <a href="#"> Room Service</a>
            </li>
            <li>
              <a href="#"> Warranty</a>
            </li>
            <li>
              <a href="#"> Terms of Use</a>
            </li>
            <li>
              <a href="#"> Privacy Policy</a>
            </li>
            <li>
              <a href="#"> Copyright</a>
            </li>
          </ul>
        </div>
        <div className={styles.menu_items}>
          <h3>Office</h3>
          <ul>
            <li>
              <a href="#"> 599 Broadway, FL 9 New York, NY 10012</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <h3>Follow us</h3>
        <ul className={styles.icons}>
          <li className={styles.icons_item}>
            <a href="#">
              <img src={img1} alt="facebook" />
            </a>
          </li>
          <li className={styles.icons_item}>
            <a href="#">
              <img src={img2} alt="instagram" />
            </a>
          </li>
          <li className={styles.icons_item}>
            <a href="#">
              <img src={img3} alt="linkedin" />
            </a>
          </li>
          <li className={styles.icons_item}>
            <a href="#">
              <img src={img4} alt="pinterest" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.subscribe}>
        <h3>Join our mailing list</h3>
        <p>Be the first to hear everything about ROOM.</p>
        <div className={styles.email_form}></div>
        <select className={styles.country}>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
        <div className={styles.agreement}>
          <div class={styles.checkbox}></div>
          <div class={styles.agreement_text}>
            Yes. I would like to receive marketing communications from ROOM
            about product updates and special offers. Please refer to ROOM’s
            Privacy Policy for more information about how we process your data
            (including how to unsubscribe).
          </div>
          <p class={styles.sign_up}>SIGN UP</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
