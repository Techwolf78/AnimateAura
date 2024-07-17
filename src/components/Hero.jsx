import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./css/Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clients = [
    {
      id: 1,
      name: "Ankura",
      logo: "images/sony.jpg",
    },
    {
      id: 2,
      name: "Sunshine",
      logo: "images/disney.jpg",
    },
    {
      id: 3,
      name: "Nimes",
      logo: "images/dreamwork.jpg",
    },
    {
      id: 4,
      name: "Olive",
      logo: "images/pixar.jpg",
    },
    {
      id: 8,
      name: "Olive",
      logo: "images/blue-sky.jpg",
    },

    {
      id: 6,
      name: "Olive",
      logo: "images/nick.jpg",
    },
    {
      id: 7,
      name: "Olive",
      logo: "images/cn.jpg",
    },

    {
      id: 9,
      name: "Olive",
      logo: "images/crest.jpg",
    },
    {
      id: 5,
      name: "Olive",
      logo: "images/illumination.jpg",
    },
  ];

  const navigate = useNavigate();

  const headlineProps = useSpring({
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 800 },
  });

  const descriptionProps = useSpring({
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0 },
    config: { duration: 800, delay: 300 },
  });

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const productBgImages = [
    "https://lh7-us.googleusercontent.com/XUjYoWDBhhxqgiwtuhI6MYOFSCoYlL21PQmy8cdSgtBbfKWP4Ahro9PcxzzX0lOKNL1tTxMI20HBRkJ_4xUQKCaK6w37bZWGn5rHqRv_RJ4OTA1bisDEFIBR-EISpe95ixHIRMGLJm585IHIUftwjeU",
    "https://lh7-us.googleusercontent.com/FT6NYzYZ4EvzQIsTcT11gncmgITpDg2GSVhG3I-svR2G8gDv2Jrvi4Sg4DzagTQxbIY8lHkt7O_SLO-Aa9Pz1G7CTAQ3MpbzxITpV9PwI3LsMA5Q2tZj0UW75OMaVStuE0tytxCD3uprL2iL4StjLzE",
    "https://www.sliderrevolution.com/wp-content/uploads/2021/09/sliderrevolution-blog-image-1.gif",
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-screen relative overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`dot dot-${i + 1}`} />
          ))}
        </div>
        <div className="relative z-10">
          <animated.h2
            className="text-6xl font-bold mb-4"
            style={headlineProps}
          >
            <span className="text-yellow-300">Experience</span> the Future
          </animated.h2>
          <animated.p
            className="max-w-2xl mx-auto mb-8 text-lg"
            style={descriptionProps}
          >
            Dive into the world of innovation and creativity. Our platform
            brings together cutting-edge technology and design to transform
            ideas into reality.
          </animated.p>
          <div className="space-x-4">
            <button
              className="px-6 py-2 border border-white rounded hover:bg-white hover:text-[#0f172a] transition-all duration-300"
              onClick={() => navigate("/services")}
            >
              Discover More
            </button>
            <button
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-300"
              onClick={() => navigate("/career")}
            >
              Join Our Team
            </button>
          </div>
          <div className="mt-8">
            <p className="text-white text-lg animate-bounce">
              🚀 Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20  items-center justify-center text-center  px-4 relative overflow-hidden bg-gradient-to-r from-pink-200 to-blue-500">
        <animated.h3
          className="text-4xl font-bold mb-4 relative"
          style={headlineProps}
        >
          Our Products
        </animated.h3>
        <animated.p
          className="max-w-xl mx-auto mb-8 text-lg"
          style={descriptionProps}
        >
          We build innovative products designed to elevate your business. Here
          are some of them:
        </animated.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Web Designing", "", "3-D Animations"].map((product, index) => (
            <motion.div
              key={index}
              className="p-6 items-center justify-center text-center py-20 px-4 relative overflow-hidden bg-gradient-to-r from-lightBlue-600 to-blue-500"
              style={{
                backgroundImage: `url(${productBgImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h4 className="text-2xl font-semibold mb-2 text-slate-100">
                {product}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="bg-gradient-to-r from-purple-300 to-yellow-200 py-20"
        ref={ref}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl  text-white mb-8">
            Relationships <b>Based On Trust</b>
          </h2>
          <p className="text-2xl text-white-200 mb-12">
            Our Engagement with the IT Industry
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-500">
                {inView && <CountUp end={25} duration={2.5} />}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Years of Experience
              </h3>
              <p className="text-gray-800 mt-2">
                We have been providing top-notch services for over 25 years.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-500">
                {inView && <CountUp end={500} duration={3} />}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Satisfied Clients
              </h3>
              <p className="text-gray-800 mt-2">
                We have served over 500 satisfied clients worldwide.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-500">
                {inView && <CountUp end={99} duration={2} suffix="%" />}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Customer Satisfaction
              </h3>
              <p className="text-gray-800 mt-2">
                Our clients are highly satisfied with our services.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-500">
                {inView && <CountUp end={1000} duration={4} />}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Projects Delivered
              </h3>
              <p className="text-gray-800 mt-2">
                We have successfully delivered over 1000 projects.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-500">
                {inView && <CountUp end={100} duration={2.5} />}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">Awards Won</h3>
              <p className="text-gray-800 mt-2">
                We have won over 100 prestigious awards.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-500">
                {inView && <CountUp end={10000} duration={5} />}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Hours of Support
              </h3>
              <p className="text-gray-800 mt-2">
                We have provided over 10000 hours of dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectors-we-serve py-12 bg-gradient-to-r from-blue-200 to-violet-300 ">
        <div className="container mx-auto ">
          <h2 className="text-5xl  mb-4 text-black">
            Sectors <span className="font-bold ">We Serve</span>
          </h2>
          <p className="text-gray-600 text-xl text-gray-800 mb-12">
            We offer varied services and customized solutions depending on your
            goals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Information Technology", icon: "it.jpg" },
              { title: "Real Estate", icon: "re.jpg" },
              { title: "Media and Entertainment", icon: "me.jpg" },
              { title: "Professional Services", icon: "ps.jpg" },
              { title: "Telecommunications", icon: "tele.jpg" },
              { title: "Finance & Banking", icon: "fb.jpg" },
              { title: "Gaming", icon: "game.jpg" },
              { title: "Retail and E-commerce", icon: "re.jpg" },
            ].map((sector, index) => (
              <div
                key={index}
                className="sector-card p-4 border rounded-3xl flex items-center bg-white hover:bg-dark-purple transition duration-300"
              >
                <img
                  src={`images/${sector.icon}`}
                  alt={sector.title}
                  className="sector-icon mr-4"
                />
                <h3 className="text-lg font-medium text-black hover:text-gradient text-wrap">
                  {sector.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-200 to-blue-500">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl  mb-8 ">
            Strengthening <b>Connections</b>
          </h1>
          <h3 className="text-2xl mb-8 "> Our delighted clients</h3>
          <Slider {...settings} className="w-full">
            {clients.map((client) => (
              <div key={client.id} className="p-4 flex justify-center">
                <div className="w-50 h-32 rounded overflow-hidden flex items-center justify-center bg-gray-200">
                  {" "}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://example.com/fallback-image.png";
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-300 to-purple-500 text-white text-center">
        <motion.h3
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Our Community
        </motion.h3>
        <motion.p
          className="max-w-xl mx-auto mb-8 text-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Be part of something great. Connect, collaborate, and grow with us!
        </motion.p>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition-all duration-300"
          onClick={() => window.open("https://discord.com/", "_blank")}
        >
          Get Started
        </button>
      </section>
      <hr />
      <section className="py-20 bg-gradient-to-r from-sky-200 to-purple-600 text-white text-center">
        <motion.h3
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Coded and designed with ❤️ by Ajay Pawar
        </motion.h3>
        <motion.p
          className="max-w-xl mx-auto mb-2 text-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We don't have any copyrights on our work. It's all for learning and
          practicing. Feel free to use it. If you have any doubts, please feel
          free to contact us.
        </motion.p>
        <motion.p
          className=" text-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Copyright @ 2024 | Team AnimateAura .
        </motion.p>
      </section>
    </div>
  );
};

export default Hero;
