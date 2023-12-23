import Home from "../components/Home";
import AboutUs from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Page from "../components/Page";

import Header from "../components/Header";



export default function Root() {
  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
  
    return (<Page>
      <Header handleNavClick={handleNavClick}></Header>
        <Home handleNavClick={handleNavClick} />
        <AboutUs handleNavClick={handleNavClick}  />
        <Services handleNavClick={handleNavClick}  />
        <Resume handleNavClick={handleNavClick}  />
        <Blog handleNavClick={handleNavClick}  /> 
        <Contact handleNavClick={handleNavClick}  />
    </Page>)
}