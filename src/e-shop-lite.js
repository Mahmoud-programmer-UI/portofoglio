import Footer from "./footer";
import "./assets//stylesheets//e-shop-lite.css";
import firstImg from "./assets//images//Screenshot 2025-07-01 004631.png";
import secondImg from "./assets//images//Screenshot 2025-07-01 004717.png";
export default function EshopLite() {
  return (
    <>
      <div className="e-shop-section">
        <div className="e-shop-information card">
          <div className="e-shop-intro">
            <h2> E-shop-lite</h2>
            <p>Description:</p>
            <p>
              A simple online store front-end template for small businesses. It
              showcases products, allows filtering by category, and includes a
              basic cart UI (without real checkout).
            </p>
          </div>
          <div className="language-used flex2">
            <h3>languages & libraries used:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="e-shop-pictures">
          <h1>Project Pictures</h1>
          <div className="e-shop-pictures-container flex card">
            <img src={firstImg} alt="not found"></img>
            <img src={secondImg} alt="not found"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
