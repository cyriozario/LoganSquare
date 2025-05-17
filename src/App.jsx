import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import AboutUs from "./component/AboutUs";
import Testimonials from "./component/Testimonial";
import ContactForm from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Testimonials />
        <AboutUs />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
