import Navigation from "./Navigation/Navigation"
import Footer from "./Footer/Footer";

const layout = (props) => {
    return (
        <>
            <Navigation />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default layout;