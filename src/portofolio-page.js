import Footer from "./footer";
import loginportofolio from "";
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
          <div className="language-used">
            <h3>language used:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
            </ul>
          </div>
        </div>
        <div className="Portofolio-pictures">
          <h1>Project Pictures</h1>
          <div className="portofolio-pictures-container">
            <img src=""></img>
            <img src=""></img>
            <img src=""></img>
            <img src=""></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
