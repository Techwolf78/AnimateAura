import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

const Hero = () => {
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

      <section className="py-20  items-center justify-center text-center py-20 px-4 relative overflow-hidden bg-gradient-to-r from-pink-200 to-blue-500">
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

      <section className="items-center justify-center text-center py-10 px-4 relative overflow-hidden bg-gradient-to-r from-purple-100 to-blue-500">
        <animated.h3
          style={fadeIn}
          className="text-5xl font-extrabold mb-6 text-white"
        >
          What Our Clients Say
        </animated.h3>
        <div className="flex flex-wrap justify-center">
          {[
            {
              name: "Mark Robert",
              message: "Their service transformed our business!",
            },
            {
              name: "Julie Lee",
              message: "Incredible support and dedication!",
            },
            { name: "Peter Sien", message: "A game-changer for us!" },
          ].map((client, index) => (
            <motion.div
              key={index}
              className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-r from-purple-400 to-violet-500 rounded-lg m-4 shadow-lg transition-transform duration-300 transform hover:scale-105"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.p
                className="text-lg text-white mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                "{client.message}"
              </motion.p>
              <p className="text-sm text-gray-200">- {client.name}</p>
            </motion.div>
          ))}
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
      <section className="py-20 bg-gradient-to-r from-sky-300 to-purple-500 text-white text-center">
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
