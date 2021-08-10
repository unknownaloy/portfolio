import "./Navigation.css";

const navigation = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand ml-32" href="#">Chichebem</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link mr-8" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-8" href="blog.html">Blog</a>
                        </li> */}
                        <li className="nav-item">
                            <a href="#contact-me"><button type="button" className="btn btn-lg">Contact me</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default navigation;