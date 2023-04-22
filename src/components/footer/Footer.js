import footerLogo from "../../images/footer-logo.png";
import telIcon from "../../images/telIcon.svg";
import mailIcon from "../../images/mailIcon.svg";
import { AboutUs, UsefulLinks } from "../../data/footerData/FooterData";
import FooterMenu from "./FooterMenu";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sec">
        <div className="footer-container">
          <div className="footer-inner">
            <div className="footer-col-1 footerCol">
              <div className="footer-logo">
                <img src={footerLogo} alt="footer-logo" />
              </div>
              <div className="description">
                <h5>
                  There are course and event custom post types so you can easily
                  create and manage course, events.
                </h5>
              </div>
              <div className="footer-address">
                <ul className="contactInfo">
                  <li>
                    <img src={telIcon} alt="tel-icon" />
                    <a href="tel:40276244183"> +(402) 762 441 83</a>
                  </li>
                  <li>
                    <img src={mailIcon} alt="mail-icon" />
                    <a href="mailto:info@echooling.com"> info@echooling.com </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col-2 footerCol">
              {AboutUs.map((item) => (
                <FooterMenu key={item.id} title={item.title} list={item.list} />
              ))}
            </div>
            <div className="footer-col-3 footerCol">
              {UsefulLinks.map((item) => (
                <FooterMenu key={item.id} title={item.title} list={item.list} />
              ))}
            </div>
            <div className="footer-col-4 footerCol">
              <div className="news-letter">
                <h3 className="footer-menu-title">Newsletter</h3>
                <div className="footer-form">
                  <p className="desc">
                    Get the latest Echooling news delivered to you inbox
                  </p>
                  <form className="form-2" action="#">
                    <input
                      className="footer-input"
                      type="email"
                      required
                      placeholder="Enter your email"
                    />
                    <button className="btn">
                      <i className="arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-sec">
            <div className="copyright">
              © 2022 <a href="/">Echooling.</a> All Rights Reserved
            </div>
            <div className="socials">
              <div className="social-title">Follow Us</div>
              <ul className="social-icon">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={linkedin} alt="linkedin" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
