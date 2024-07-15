// Career.js
import React from "react";

const Career = () => {
  return (
    <section
      id="career"
      className="min-h-screen p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 1s forwards;
          }

          .bounce {
            animation: bounce 2s infinite;
          }

          .hover-grow:hover {
            transform: scale(1.1);
            transition: transform 0.3s;
          }

          .bg-light-overlay {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
      <div className="fade-in bg-light-overlay p-10 rounded-lg">
        <h3 className="text-4xl font-bold text-center mb-8">Join Our Team</h3>
        <p className="text-center max-w-2xl mx-auto mb-8">
          We are always looking for talented individuals to join our team. If
          you are passionate about technology and innovation, we would love to
          hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-light-overlay rounded-lg hover-grow">
            <h4 className="text-2xl font-semibold mb-4">Current Openings</h4>
            <ul className="list-disc list-inside">
              <li className="mb-2">Frontend Developer</li>
              <li className="mb-2">Backend Developer</li>
              <li className="mb-2">Project Manager</li>
              <li className="mb-2">UI/UX Designer</li>
            </ul>
          </div>
          <div className="p-6 bg-light-overlay rounded-lg hover-grow">
            <h4 className="text-2xl font-semibold mb-4">Why Join Us?</h4>
            <p className="mb-2">
              Innovative projects and cutting-edge technology.
            </p>
            <p className="mb-2">
              Collaborative and inclusive work environment.
            </p>
            <p className="mb-2">
              Opportunities for growth and professional development.
            </p>
            <p className="mb-2">Competitive salaries and benefits.</p>
          </div>
          <div className="p-6 bg-light-overlay rounded-lg hover-grow">
            <h4 className="text-2xl font-semibold mb-4">Life at Our Company</h4>
            <p className="mb-2">
              We believe in a balanced work-life environment.
            </p>
            <p className="mb-2">Regular team-building activities and events.</p>
            <p className="mb-2">
              Support for personal and professional growth.
            </p>
            <p className="mb-2">Inclusive and diverse workplace.</p>
          </div>
          <div className="p-6 bg-light-overlay rounded-lg hover-grow">
            <h4 className="text-2xl font-semibold mb-4">How to Apply</h4>
            <p className="mb-2">
              Send your resume and cover letter to careers@example.com.
            </p>
            <p className="mb-2">
              Include links to your portfolio or GitHub profile.
            </p>
            <p className="mb-2">Tell us why you want to join our team.</p>
            <p className="mb-2">We look forward to hearing from you!</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            className="px-6 py-2 bg-blue-700 rounded-full bounce hover:bg-blue-800 transition-colors duration-300"
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Career;
