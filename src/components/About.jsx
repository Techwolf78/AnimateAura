import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      el.classList.add("fade-in");
    });
  }, []);

  return (
    <section
      id="about"
      className="mt-10 p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    >
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 0.5s forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .about-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .team-member {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }

          .team-member img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
            margin-right: 15px;
          }
        `}
      </style>
      <div className="fade-in">
        <h3 className="text-4xl font-bold text-center">About Us</h3>
        <p className="mt-2 max-w-2xl mx-auto text-center">
          At our core, we are creators. We specialize in crafting stunning
          websites that elevate brands and drive engagement. Our passionate team
          combines innovative design with cutting-edge technology to deliver
          exceptional results.
        </p>

        <h4 className="text-3xl font-semibold mt-8 text-center">Our Mission</h4>
        <p className="mt-2 text-center">
          To empower businesses by building unique online presences that
          resonate with their audiences. We transform visions into reality,
          ensuring every project we undertake reflects our commitment to
          excellence and creativity.
        </p>

        <h4 className="text-3xl font-semibold mt-8 text-center">
          Meet Our Team
        </h4>
        <div className="about-container">
          {[
            {
              name: "Mavrik Donor",
              role: "CEO",
              img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80",
              description:
                "Mavrik is the visionary leader who drives our mission forward.",
            },
            {
              name: "Shane Smith",
              role: "CTO",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
              description:
                "Shane oversees all technical aspects and innovations.",
            },
            {
              name: "Alice Peterson",
              role: "Marketing Head",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
              description: "Alice crafts our brand strategy and outreach.",
            },
            {
              name: "Bryan Brown",
              role: "Lead Developer",
              img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
              description:
                "Bryan leads our development team with passion and expertise.",
            },
          ].map((member) => (
            <div className="card fade-in" key={member.name}>
              <h5 className="font-bold text-xl">{member.name}</h5>
              <div className="team-member">
                <img src={member.img} alt={member.name} />
                <p>{member.role}</p>
              </div>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
