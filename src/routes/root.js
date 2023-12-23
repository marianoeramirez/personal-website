import Home from "../components/Home";
import AboutUs from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Page from "../components/Page";

import Header from "../components/Header";



export default function Root() {
  
    return (<Page>
      <Header />
        <Home  />
        <AboutUs   />
        <Services   />
        <Resume   />
        <Blog   /> 
        <Contact   />
    </Page>)
}