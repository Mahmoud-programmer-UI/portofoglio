import Footer from './footer'
import './assets//stylesheets//contact.css'
function Contact(){
    return(
        <>
        <div className="reach-me">
            <div className='reach-me-container card'>
                <div className='reach-me-intro flex2'>
                    <h2>Let's connect!</h2>
                    <p>Got an idea you'd like to bring to life? Let’s build something great together!</p>
                </div>
                <form>
                    <label for='user'>User-name</label>
                    <input id='user' type='text' placeholder='write your name' className='input-style'></input>
                    <label for='mail'>E-mail</label>
                    <input id='mail' type='text' placeholder='write your emial' className='input-style'></input>
                    <label for='pass'>password</label>
                    <input id='pass' type='password' placeholder='write your password' className='input-style'></input>            
                    <input type='submit' value='SEND' className='btn2'></input>
                    <hr></hr>

                </form>
                <div className='other-method flex2'>
                    <p>OR</p>
                    <p>Contact me via E-Mail</p>
                    <h3>mahmoudmohamedwebdeveloper@gmail.com</h3>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Contact;