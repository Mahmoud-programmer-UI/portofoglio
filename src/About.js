
function About(){
    return(
        <><div className='about-page-section'>
            <div className='my-jop card flex2'>
                <h2> My Jop</h2>
                <p>I’m a front-end developer with 3+ years of experience in creating responsive, user-friendly websites. I love clean design and writing efficient code.</p>
            </div>
            <div className='my-story card flex2'>
                <h2> My Story</h2>
                <p>I started my coding journey over 3 years ago, driven by my curiosity and creativity. Over time, I’ve built a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React. I enjoy solving problems, learning new technologies, and building projects that help people and businesses shine online</p>
            </div>
            <div className='my-skills-container card flex 2'>
                <h2> My Skills</h2>
                <div className='my-skills flex'>
                    <ul >
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>ٌREACT</li>
                        <li>Clean, maintainable code</li>
                    </ul>
                    <ul>
                        <li>Responsive Design</li>
                        <li>Git & GitHub</li>
                        <li>Figma (basic UI design)</li>
                    </ul>
                    <li className='specific-skill'>Web Performance & SEO basics</li>
                </div>
            </div>
            <div className='my-scope card flex2'>
                <h2> What I am looking for</h2>
                <p>I’m always excited to collaborate on meaningful projects. My goal is to keep improving as a developer and designer, and to work with clients who value clean code, thoughtful design, and great user experiences.</p>
            </div>
        <   div className="contact-container card">
                <p>Want to know more or have a project in mind? Let’s connect!</p>
                <Link className='btn-other-pages' to="/contact">CONTACT ME</Link>      
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default About;