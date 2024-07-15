// Services.jsx
import React from "react";

const Services = () => {
  return (
    <section className="py-20  items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-r from-pink-200 to-blue-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8 animate-fadeIn">Our Services</h2>
        <p className="max-w-2xl mx-auto mb-16 animate-fadeIn delay-2s">
          We provide a wide range of services to help you achieve your goals.
          Whether you're looking for web development, graphic design, or digital
          marketing, we have you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {[
            {
              title: "Web Development",
              description:
                "High-quality web development services to bring your ideas to life.",
              icon: "🌐",
            },
            {
              title: "Graphic Design",
              description:
                "Creative graphic design solutions for your branding needs.",
              icon: "🎨",
            },
            {
              title: "Digital Marketing",
              description:
                "Effective digital marketing strategies to grow your business.",
              icon: "📈",
            },
            {
              title: "SEO Services",
              description:
                "Optimize your website for search engines and increase your visibility.",
              icon: "🔍",
            },
            {
              title: "Content Creation",
              description:
                "Engaging content creation to captivate your audience.",
              icon: "✍️",
            },
            {
              title: "Consulting",
              description:
                "Expert consulting services to guide your business decisions.",
              icon: "💼",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="overflow-hidden bg-gradient-to-r from-sky-500 to-violet-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-sky-900"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
