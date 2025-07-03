import Footer from "./footer";
import "./assets//stylesheets//portofolio.css";
import loginportofolio from "./assets//images//Screenshot 2025-07-01 003726.png";
import section1Img from "./assets//images//Screenshot 2025-07-01 004034.png";
import section2Img from "./assets//images//Screenshot 2025-07-01 004126.png";
import lastestWorkImg from "./assets//images//Screenshot 2025-07-01 004204.png";
export default function Portofolio() {
  return (
    <>
      <div className="Portofolio-section">
        <div className="Portofolio-information card">
          <div className="Portofolio-intro">
            <h2> Smart Portfolio</h2>
            <p>Description:</p>
            <p>
              A personal portfolio website template for developers and
              designers. It has sections for bio, skills, projects, and a
              contact form.
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
        <div className="Portofolio-pictures">
          <h1>Project Pictures</h1>
          <div className="portofolio-pictures-container card">
            <div>
              <img src={loginportofolio} alt="not found"></img>
            </div>
            <div className="centralized-pictures flex">
              <img src={section1Img} alt="not found"></img>
              <img src={section2Img} alt="not found"></img>
            </div>
            <div>
              <img src={lastestWorkImg} alt="not found"></img>
            </div>
          </div>
        </div>
        <div className="video-container">
          <h1>Video Of Project</h1>
          <video
            controls
            autoPlay
            src={portfolioVideo}
            width={500}
            typa="mma/mp4"
          ></video>
        </div>
      </div>
      <Footer />
    </>
  );
}
