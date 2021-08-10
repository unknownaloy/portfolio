import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer";
import "./Layout.css";

const layout = (props) => {
    return (
        <>
            <Navigation />
            <main className="main">{props.children}</main>
            <Footer />
        </>
    );
}

export default layout;