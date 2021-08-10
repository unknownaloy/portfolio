import "./About.css";
import aboutMe from "../../assets/about_me.png";

const about = () => {
    return (
        <section className="about-me" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0"  tabindex="0">
            <div className="container" id="about">
                <div className="row align-items-center hiddenSection">
                    <div className="col-md-6 testing hidden">
                        <img className="about-me-pic" src={aboutMe} alt="Ellis sitting on a chair, wearing a big grin"/>
                    </div>
                    <div className="col-md-6 hidden">
                        <h1>About Me</h1>
                        <p>Ellis is a software developer based in Owerri, Imo State, Nigeria. He began his development journey at the age of 14, and built his first website using HTML and in-line CSS. He then went on to study for 5 years at the Federal Polytechnic Nekede, Owerri, graduating with a Higher National Diploma in Biochemistry in 2016. </p>
                        <p>When Ellis is not writing codes, he loves watching movies, reading books/articles or playing video games with his friends.</p>
                        <p>Ellis hopes to help you build phenomenal applications.</p>
                        <p><span className="austin">Languages I speak:</span> Flutter & Dart, JavaScript
                    </p>
                        <p><span>Others:</span> HTML, CSS, NodeJS, ExpressJS, MongoDB, Git/GitHub, Bootstrap</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/Ellisice" target="blank"><i className="fab fa-facebook fa-2x"></i></a>
                            <a href="https://github.com/unknownaloy" target="blank"><i className="fab fa-github fa-2x"></i></a>
                            <a href="https://www.instagram.com/ellisaloy/" target="blank"><i className="fab fa-instagram fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/ellis-ifoegbu-3aa87717b/" target="blank"><i className="fab fa-linkedin fa-2x"></i></a>
                            <a href="https://twitter.com/Ellisice" target="blank"><i className="fab fa-twitter fa-2x"></i></a>
                            <a href="https://stackoverflow.com/users/10296000/chichebe?tab=profile" target="blank"><i className="fab fa-stack-overflow fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default about;