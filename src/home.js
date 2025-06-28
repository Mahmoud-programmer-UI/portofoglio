import './assets//stylesheets//home.css'
import {   Link} from "react-router-dom";
import Footer from './footer';
function Home() {
    return (
        <>
            <div className="intro-container">
                <h1><i>Introduction:</i></h1>
                <div className="full-intro flex">
                    <div className="who-i-am flex2">
                        <h2>Who I am?</h2>
                        <p>Hi, I’m Alice Carter — a Web Developer.</p>
                    </div>
                    <div className="what-i-offer flex2">
                        <h2>What I offer?</h2>
                        <p> I build modern websites with clean code and great UX.</p>
                    </div>
                </div>
                <Link className='btn' to="/projects">VIEW MY PROJECTS</Link>
            </div>
            <div className="about-review">
                <h1><i>About Me:</i></h1>
                <div className="full-review">
                    <div className='my-jop card flex2'>
                        <h2> My Jop</h2>
                        <p>I’m a front-end developer with 3+ years of experience in creating responsive, user-friendly websites. I love clean design and writing efficient code.</p>
                    </div>
                </div>
                <Link className='btn' to="/projects">READ MORE</Link>
            </div>
            <div className="project-container">
                <h1><i>Project Preview:</i></h1>
                <div className="all-projects flex">
                    <div className="first-project">
                        <h2>Project1</h2>
                        <p>Discription:</p>
                        <p>A personal portfolio website template for developers and designers. It has sections for bio, skills, projects, and a contact form.</p>
                        <div className='btn-container2 flex2'>
                            <button className='btn2'>VIEW</button>
                        </div>
                    </div>
                    <div className="second-project">
                        <h2>Project2</h2>
                        <p>Discription:</p>
                        <p>A simple online store front-end template for small businesses. It showcases products, allows filtering by category, and includes a basic cart UI (without real checkout).</p>
                        <div className='btn-container flex2'>
                            <button className='btn2'>VIEW</button>
                        </div>
                    </div>
                </div>
                <Link className='btn' to="/projects">VIEW MORE PROJECTS</Link>
            </div>
            <div className="contact-me">
                <h1><i>Contact Me:</i></h1>
                <div className="contact-section flex2">
                    <div className='collaboration card flex2'>
                        <h2>collaboration</h2>
                        <p>Let’s work together! Feel free to reach out.</p>
                    </div>
                </div>
                <Link className='btn' to="/contact">CONTACT ME</Link>
            </div>
            <Footer />
            {/* footer */}
        </>
    );
}

export default Home;