import React from "react";
import Footer from "../Footer";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="About-main-div">
      <br />
      <br />
      <br />
      <div class="container">
        <h1 className="Main-Topic">SLT-Mobitel Job Portal System</h1>
        <p className="paragraph-top">Welcome to the SLT-Mobitel Job Portal System, where opportunities meet talent in the digital realm. Our job portal is a dynamic platform designed to connect job seekers with exciting career opportunities and assist employers in finding the perfect match for their teams.</p>
    </div>
      <div className="row pt-5 ">
        <div className="image-about col">
          <img className="image-about" src="https://www.myjobgator.com/assets/img/career.jpg" alt="" />
        </div>
        <div className="col mt-5 pt-3">
          <h2 className="Main-Topic-2">Advance your career with SLTMobitel</h2>
          <p className="paragraph-2">Create a free account, complete your profile, and get matched with your<br/> dream job.</p>
          <Link to='/login' className="btn-started">GET STARTED!</Link>
        </div>
        
      </div>
      {/* <div className="container1">
        <h2 className="main-title">SLT-Mobitel: Connecting Sri Lanka to a Digital Future</h2>

        <h4 className="section-title">About SLT-Mobitel</h4>
        <p className="paragraph">With a rich history spanning over 163 years, SLT-Mobitel stands as the National Information and Communications Technology (ICT) Solutions Provider, catering to the diverse connectivity needs of the nation. Operating across fixed, mobile, and various operational segments, we offer a comprehensive suite of ICT solutions tailored for consumers leading a digital lifestyle. Our array of services includes Voice, Fiber, ADSL, 4G LTE, Cloud Services, Enterprise Solutions, wholesale, international ICT solutions, IPTV services, eChannelling, and a variety of value-added services.</p>

        <h4 className="section-title">Our Evolution into a Digital Service Provider</h4>
        <p className="paragraph">In our transformative journey, SLT-Mobitel has evolved beyond traditional ICT services, leveraging our core strengths, expertise, and assets. Positioned as a key global player, we connect Sri Lanka to the world through international submarine cable systems. Our diversified portfolio includes Submarine cable maintenance, Human Resources solutions, Directory services, Digital marketing solutions, and software solutions, among others.</p>

        <h4 className="section-title">Pioneering Technological Advancements</h4>
        <p className="paragraph">SLT-Mobitel Mobile has a proud legacy of technological leadership. We were the first network to launch the Super-3.5G HSPA network in South Asia in 2007 and subsequently pioneered HSPA+, MIMO (Multiple Input Multiple Output) in 2009. In 2011, we demonstrated 4G-LTE technology for the first time in South Asia and later trialed 4.5G LTE-Advanced Pro Technology with Carrier Aggregation of three bands.</p>

        <p className="paragraph">In 2017, SLT-Mobitel Mobile deployed the first Sub-1G Mobile Broadband Network in Sri Lanka, enhancing coverage in rural areas. In 2018, we launched the First Commercial 4.5G/4G+ Mobile Network in South Asia and successfully trialed 5G by connecting a commercial mobile smartphone to our 5G network. Our commitment to innovation and excellence has been recognized by Ookla®, naming us the Fastest Mobile Network consecutively for 2019, 2020, and 2021.</p>

        <h4 className="section-title">Customer-Centric Excellence</h4>
        <p class="paragraph">At SLT-Mobitel, our growing customer base is a testament to our unwavering focus on the National vision and customer-centricity. Guided by our credo of 'The Connection,' we continue to shape the digital landscape of Sri Lanka, ensuring connectivity that empowers lives and embraces the future.</p>

        <p className="paragraph">Join us on this exciting journey as we pave the way for a connected and digitally empowered Sri Lanka. Together, we build bridges that span beyond technology, connecting people and possibilities.</p>
    </div> */}
      

      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;
