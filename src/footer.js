import "./assets//stylesheets//footer.css";
import facebookLogo from "./assets//images//icons8-facebook.svg";
import linkedinLogo from "./assets//images//icons8-linkedin.svg";
import tiktokLogo from "./assets//images//icons8-tiktok-logo.svg";
function Footer() {
  return (
    <footer>
      <div className="review-massage">
        <h1>Leave me a message</h1>
        <textarea className="input-style2"></textarea>
      </div>
      <div className="follow-container">
        <h1>Soon...</h1>
        <div className="socialmedia-icons">
          <img src={facebookLogo}></img>
          <img src={linkedinLogo}></img>
          <img src={tiktokLogo}></img>
        </div>
      </div>
      <div className="copyright">
        <h2 className="my-name"> ALice Carter</h2>
        <p className="copyright-message">
          © 2025 ALice Carter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
