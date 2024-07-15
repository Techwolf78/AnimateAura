// About.js
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const fadeInElement = document.querySelector(".fade-in");
    fadeInElement.classList.add("fade-in");
  }, []);

  return (
    <section id="about" className="mt-20 p-8">
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
        <h3 className="text-3xl font-bold">About Us</h3>
        <p className="mt-4 max-w-2xl">
          We are dedicated to providing the best service. Our team is composed
          of experts in their respective fields, committed to excellence and
          innovation.
        </p>

        <h4 className="text-2xl font-semibold mt-10">Our Mission</h4>
        <p className="mt-2">
          To empower our clients through innovative solutions and unparalleled
          service, ensuring success in every project.
        </p>

        <h4 className="text-2xl font-semibold mt-10">Meet Our Team</h4>
        <div className="about-container">
          <div className="card">
            <h5 className="font-bold">Mavrik Donor</h5>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt="Mavrik Donor"
              />
              <p>CEO</p>
            </div>
            <p>
              Mavrik is the visionary leader who drives our mission forward.
            </p>
          </div>

          <div className="card">
            <h5 className="font-bold">Shane Smith</h5>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Shane Smith"
              />
              <p>CTO</p>
            </div>
            <p>Shane oversees all technical aspects and innovations.</p>
          </div>

          <div className="card">
            <h5 className="font-bold">Alice Peterson</h5>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Alice Peterson"
              />
              <p>Marketing Head</p>
            </div>
            <p>Alice crafts our brand strategy and outreach.</p>
          </div>

          <div className="card">
            <h5 className="font-bold">Bryan Brown</h5>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8"
                alt="Bryan Brown"
              />
              <p>Lead Developer</p>
            </div>
            <p>Bryan leads our development team with passion and expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
