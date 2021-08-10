import "./Intro.css";
import displayPic from "../../assets/display_pic.png";

const intro = () => {
    return (
        <div className="landing-screen">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 introduction">
                        <h1>Hi, I'm Ellis</h1>
                        <h4>A Mobile and Web Developer</h4>
                        <p class="animate__animated animate__fadeInLeft">I use code in solving problems while building beautiful applications to meet your needs, or to build stuffs just for fun!</p>
                    </div>
                    <div className="col-md-5">
                        <img className="developer-pic" src={displayPic} alt="A smiling photograph of Ellis"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default intro;