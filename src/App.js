import "./App.css";
import Layout from "./components/Layout";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./container/Contact/Contact";

function App() {

  return (
    <Layout>
      <Intro />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
