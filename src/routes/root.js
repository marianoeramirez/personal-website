import Home from "../components/Home";
import AboutUs from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import { commonConfig } from "../config/commonConfig";


export default function Root() {
const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;
  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
  
    return (<>
        <Home
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        handleNavClick={handleNavClick}
        ></Home>
        <AboutUs
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        ></AboutUs>
        <Services
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        ></Services>
        <Resume
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        ></Resume>
        {/* <Portfolio
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        ></Portfolio>*/}
        <Blog
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        ></Blog> 
        <Contact
        classicHeader={classicHeader}
        darkTheme={darkTheme}
        ></Contact>
    </>)
}