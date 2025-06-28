import './assets//stylesheets//project.css'
import {   Link} from "react-router-dom";
import Footer from './footer'
function Projects(){
    return(
        <>
        <div className="projects-page-section">
            <div className='projects-intro card flex2'>
                <h2> My Projects</h2>
                <p>Here are some of my favorite projects. Each one shows my passion for clean code and user-friendly design.</p>
            </div>
            <div className="best-projects">
                <h1><i>Best Projects</i></h1>
                <div className="best-projects-container flex">
                    <div className="portofoglio">
                        <h2>Project1</h2>
                        <p>Discription:</p>
                        <p>A personal portfolio website template for developers and designers. It has sections for bio, skills, projects, and a contact form.</p>
                        <div className='btn-container3'>
                            <div className="button-container flex">
                                <button className='btn2'>SOURCE CODE</button>
                                <button className='btn2'>LIVE DEMO</button>
                            </div>
                        </div>
                    </div>
                    <div className="e-shop-lite">
                        <h2>Project2</h2>
                        <p>Discription:</p>
                        <p>A simple online store front-end template for small businesses. It showcases products, allows filtering by category, and includes a basic cart UI (without real checkout).</p>
                        <div className='btn-container'>
                            <div className="button-container flex">
                                <button className='btn2'>SOURCE CODE</button>
                                <button className='btn2'>LIVE DEMO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <   div className="contact-container card">
                <p>Add variety: “Have a project in mind? Drop me a message.”</p>
                <Link className='btn-other-pages' to="/contact">CONTACT ME</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
export default Projects;