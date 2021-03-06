// React Import
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";
import ReactPlayer from "react-player";
// Main CSS style
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
const Landing = ({ loadUser }) => {
  return (
    <Fragment>
      <header id="header" className="header-transparent">
        <div className="container">
          <div id="logo" className="pull-left">
            {/* <a href="index.html"><img src="assets/img/logo.png" alt=""></a> */}
            <h1>
              <Links
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-light"
              >
                Obscura
              </Links>
            </h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <Links
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                >
                  Home
                </Links>
              </li>

              <li>
                <Links
                  className="menuu"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                >
                  About Us
                </Links>
              </li>
              <li>
                <Links
                  activeClass="active"
                  to="facts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                >
                  Partners
                </Links>
              </li>
              <li>
                <Links
                  activeClass="ac tive"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                >
                  Features
                </Links>
              </li>
              <li>
                <Links
                  className="menuu"
                  activeClass="active"
                  to="portofolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                >
                  Showcase
                </Links>
              </li>

              <li>
                <Links
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                >
                  Contact Us
                </Links>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn text-light"
                  to="/book"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" name="hero">
        <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-md-6 align-items-center my-4">
              <ReactPlayer
                width="100%"
                height="125%"
                controls
                url="https://www.youtube.com/watch?v=f9CfAqZfHoc"
                // url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fignenrico%2Fvideos%2F3270019243033992%2F&show_text=1&width=560"
              />
            </div>
            <div className="col-md-1" />

            <div className="col-md-5 align-items-end">
              <h1 style={{ fontSize: "2.2rem" }}>
                {" "}
                Comfort and protection for your visitor and workers
              </h1>
              <h2 style={{ fontSize: "1.5rem" }}>
                {" "}
                Completely contactless to ensure virus-free environment
              </h2>
              <Link to="/book" className="btn-get-started">
                Book a Visit Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" name="about">
          <div className="container" data-aos="fade-up">
            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <h2 className="title">About Us</h2>
                <p>
                  Obscura is a cloud-based visitor management solution for
                  midsize and large hospitals. It is suitable for hospitals that
                  need a VMS that can seamlessly monitor and identify visitors
                  while still maintaining flexibility.
                </p>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="fa fa-virus-slash"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Virus-Free Environment</a>
                  </h4>
                  <p className="description">
                    Obscura provides a contactless visitor management system
                    that can minimize human interaction and skin-to-surface
                    contact as these are the way viruses spread, including
                    COVID-19.
                  </p>
                </div>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="fa fa-dollar-sign"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Low-Cost System</a>
                  </h4>
                  <p className="description">
                    Obscura is a cloud-based web application VMS with a fully
                    serverless architecture that is built using AWS services.
                    Obscura will help hospitals to reduce operating cost,
                    especially in visitor management aspect, since there will be
                    less manpower needed for managing the system and
                    infrastructures needed to support Page 6 of 18 the system.
                  </p>
                </div>
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="fa fa-business-time"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Productivity Improvement</a>
                  </h4>
                  <p className="description">
                    As our product’s system needs very few man powers, this will
                    help hospitals to improve overall productivity by allocating
                    man powers to other more crucial sectors. Obscura already
                    provides a well-automated system which gives management
                    result as demanded by hospitals which is to maintain
                    well-organized visitor management.
                  </p>
                </div>
              </div>
          <div
          className="col-lg-6 order-lg-2 order-1 px-3 py-3">
              <div
                className="background mt-4"
                data-aos="fade-left"
                data-aos-delay="100"
                style={{ display: "block" }}

              ></div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="facts">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Our Partners </h3>
              <p className="section-description">
                We are currently partnering with more than 100 hospitals and
                public health centers
              </p>
            </div>
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                {/* <span data-toggle="counter-up">232</span>
                 */}
                <img
                  className="img-profile shadow rounded-circle mx-1 mb-3"
                  src="https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/rsupn-dr-cipto-mangunkusumo.jpg"
                  style={{ width: "150px", height: "130px" }}
                />
                <p>Cipto Mangunkusumo Hospital</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                {/* <span data-toggle="counter-up">521</span> */}
                <img
                  className="img-profile shadow rounded-circle mx-1 mb-3"
                  src="https://terminalhrd.com/public/images/article/actual_size/1502938c17c063de1276e95efd1b9822.jpg"
                  style={{ width: "150px", height: "130px" }}
                />
                <p>Mayapada Hospital</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                {/* <span data-toggle="counter-up">1,463</span> */}
                <img
                  className="img-profile shadow rounded-circle mx-1 mb-3"
                  src="https://cdn.statically.io/img/www.smarterhealth.id/wp-content/uploads/2020/02/logo-siloam-large-768x432.jpg?quality=90&f=auto"
                  style={{ width: "150px", height: "130px" }}
                />
                <p>Siloam Hospital</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                {/* <span data-toggle="counter-up">15</span> */}
                <img
                  className="img-profile shadow rounded-circle mx-1 mb-3"
                  src="https://upload.wikimedia.org/wikipedia/id/3/37/Logo_rshs.jpg"
                  style={{ width: "150px", height: "130px" }}
                />
                <p>Hasan Sadikin Hospital</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="services" name="services">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Features</h3>
              {/* <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p> */}
            </div>
            <div className="row mt-5 justify-content-around">
              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                <div className="box">
                  <div className="icon">
                    <a href="">
                      <i className="fa fa-cogs"></i>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="">Customizable</a>
                  </h4>
                  <p className="description">
                    Fully adjustable regulation system to suits your needs
                    including visitor limit, maximum visiting time, visiting
                    hours, and general rules
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                <div className="box">
                  <div className="icon">
                    <a href="">
                      <i className="fa fa-desktop"></i>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="">Monitoring </a>
                  </h4>
                  <p className="description">
                    Enables hospitals to count live visitor number per-bed in
                    every ward and livestream it on any location in the hospital
                    using a display device such as TV Screen and Monitor
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                <div className="box">
                  <div className="icon">
                    <a href="">
                      <i className="fa fa-id-badge"></i>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="">Identification</a>
                  </h4>
                  <p className="description">
                    Identify visitors using digital badge with QR code in the
                    check-in and check-out system where these badges will be
                    scanned and validated by QR scanners
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                <div className="box">
                  <div className="icon">
                    <a href="">
                      <i className="fa fa-calendar"></i>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="">Online Booking System</a>
                  </h4>
                  <p className="description">
                    Uses web-based visitation booking for visitors to plan their
                    visits in advance through pre-registration process, thus
                    avoiding unwanted crowd within the hospitals
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6" data-aos="zoom-in"> */}
              {/* <div className="box">
                  <div className="icon">
                    <a href="">
                      <i className="fa fa-road"></i>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div> */}
              {/* </div> */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                <div className="box">
                  <div className="icon">
                    <a href="">
                      <i className="fa fa-tasks"></i>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="">Access Control System </a>
                  </h4>
                  <p className="description">
                    Limits visitors at a time and issues a warning if the
                    visitor number has exceeded the limit, hence prohibiting new
                    visitor to enter any ward until the warning is lifted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">
                  Try our contactless visitor management system now !
                </h3>
                <p className="cta-text">
                  {" "}
                  Directly experience the advance of contactless environment
                  with Obscura system
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <Link className="cta-btn align-middle" to="/book">
                  Try Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio" name="portofolio">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Product Showcase</h3>
              {/* <p className="section-description">
                Kasi footage" buat showcase fitur" kita
              </p> */}
            </div>

            <div className="row mt-3" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex ">
                <ul id="portfolio-flters">
                  {/* <li data-filter="*" className="filter-active">
                    All
                  </li> */}
                  <li data-filter=".filter-app ">Online Booking System</li>
                  <li data-filter=".filter-card">Profile Account</li>
                  <li data-filter=".filter-web">Admin Dashboard</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container justify-content-around"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-6 col-md-6 portfolio-item filter-app">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1598886136/assets/guide/wdohhjhqbiq1nqplrbvi.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="App 1"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1598886136/assets/guide/wdohhjhqbiq1nqplrbvi.png"
                    className="img-fluid"
                    alt=""
                    style={{ display: "block", height: "400px" }}
                  />
                  <div className="portfolio-info">
                    <h4>Online Booking System</h4>
                    <p>Book your visit anywhere anytime without any hassle</p>

                    {/* <i className="bx bx-plus"></i> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item filter-app">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097079/assets/guide/fiqwbjap7mrc9jlget3l.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="App 1"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097079/assets/guide/fiqwbjap7mrc9jlget3l.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "400px" }}
                  />
                  <div className="portfolio-info">
                    <h4>Digital Visitor Badge</h4>
                    <p>Get your own QR Digital Badge for a fully contactless visitor identification</p>

                    {/* <i className="bx bx-plus"></i> */}
                  </div>
                </a>
              </div>

              <div className="col-lg-6 col-md-6 portfolio-item filter-card">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599099228/assets/guide/k1whswjvhjgscqlhwefl.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599099228/assets/guide/k1whswjvhjgscqlhwefl.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "400px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Account Registration</h4>
                    <p>Register your account to start using our online booking services</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item filter-card">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599099228/assets/guide/zoqtkbz9zievnn4ujmry.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599099228/assets/guide/zoqtkbz9zievnn4ujmry.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "400px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Forgot Password</h4>
                    <p>Just enter your email address below and we'll send you confirmation code to reset your password</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599100724/assets/guide/tvyt3digwhfmdf5jkoki.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599100724/assets/guide/tvyt3digwhfmdf5jkoki.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "300px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Login</h4>
                    <p>Authenticate by logging in with your visitor account</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/wsxrulyw3iybmcdbwojq.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/wsxrulyw3iybmcdbwojq.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "300px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Profile Page</h4>
                    <p>Visitor's complete identification data, including profile picture and identification card</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097079/assets/guide/n5vy8k4sdq8wwmpuykyn.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097079/assets/guide/n5vy8k4sdq8wwmpuykyn.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "300px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Visit History</h4>
                    <p>Track you visitation history and its digital badge link easily</p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/vzza6n6crzrtd985p9wu.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/vzza6n6crzrtd985p9wu.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "275px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Dashboard Panel</h4>
                    <p>Show and Visualize your vistation data to gain insight</p>

                    <i className="bx bx-plus"></i>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/gvd4jxcvmorlglaxt41i.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/gvd4jxcvmorlglaxt41i.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "275px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Ward Livestream</h4>
                    <p>Monitor visitor from each ward and stream it from TV/Display device in screening counter or lobby and change the ward's visitation access</p>

                    <i className="bx bx-plus"></i>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/mtjhpachl7baxn0iyqzf.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/mtjhpachl7baxn0iyqzf.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "275px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Bed Livestream</h4>
                    <p>Monitor visitor of a particular ward and stream it in the ward's front desk</p>

                    <i className="bx bx-plus"></i>
                  </div>
                </a>
              </div>
              <div className="col-lg-2 col-md-1 portfolio-item filter-web">
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/j3htiieomutzeh6qtsmo.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/j3htiieomutzeh6qtsmo.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "275px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Customize Regulation</h4>
                    <p>Adjust and Customize various visitation regulation and visit session seamlessly</p>

                    <i className="bx bx-plus"></i>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <a
                  href="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/dxsgwarp2bckfonvgdpu.png"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <img
                    src="https://res.cloudinary.com/awshackaton/image/upload/v1599097080/assets/guide/dxsgwarp2bckfonvgdpu.png"
                    className="img-fluid mx-auto"
                    alt=""
                    style={{ display: "block", height: "275px" }}

                  />
                  <div className="portfolio-info">
                    <h4>Schedule Table</h4>
                    <p>List all the visitation that is made by the visitor and have the ability to change the visit's access</p>

                    <i className="bx bx-plus"></i>
                  </div>
                </a>
              </div>
              <div className="col-lg-2 col-md-1 portfolio-item filter-web">
              </div>
            </div>
          </div>
        </section>

        <section id="contact" name="contact">
          <div className="container">
            <div className="section-header">
              <h3 className="section-title">Contact Us</h3>
              {/* <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p> */}
            </div>
          </div>
          <div class="container mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4">
                <div className="info">
                  <div>
                    <i className="fa fa-map-marker" />
                    <p>
                      Pondok Kemangi Street
                      <br />
                      Jakarta 10510
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="info">
                  <div>
                    <i className="fa fa-envelope" />
                    <p>davidfauzi@students.itb.ac.id</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="info">
                  <div>
                    <i className="fa fa-phone" />
                    <p>+62 87743872830</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen
          ></iframe>
        </section>
      </main>
      <footer id="footer">
        <div className="footer-top">
          <div className="container"></div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>2020</strong> Obscura.
            <br />
            <br /> All Rights Reserved
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Landing;

{
  /* <section id="team" name="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Team</h3>
              <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="pic">
                    <img src="assets/img/team-1.jpg" alt="" />
                  </div>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                      <i className="fa fa-twitter"></i>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="pic">
                    <img src="assets/img/team-2.jpg" alt="" />
                  </div>
                  <h4>Sarah Jhinson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="pic">
                    <img src="assets/img/team-3.jpg" alt="" />
                  </div>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="pic">
                    <img src="assets/img/team-4.jpg" alt="" />
                  </div>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */
}
