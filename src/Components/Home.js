import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import Header from './Header';
const Home = () => {
  return (

  <>

 
    <div className="site-wrap">
      <header className="site-navbar bg-white py-4  fixed top-0 w-full z-10">
      <Header />
      </header>

      <div className="slide-item relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(images/slider1-1.jpg)' }}>
        <div className="container mx-auto h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl mb-4">Expert Care for the Elderly</h1>
            <p className="text-lg mb-6">Welcome to Keystone Care Ltd, where we extend compassionate support and professional care to pre post operated patients and individuals navigating the challenges of old age and mental health disorders.</p>
            <Link to="/contact" className="btn bg-primary text-white px-6 py-3">Get In Touch</Link>
          </div>
        </div>
      </div>

      <div className="m-5">
        <h1 className="text-center text-3xl font-light mb-5">Keystone <span className="font-bold">Services</span></h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="service bg-gray-100 p-4 shadow-md">
                    <a href="#" className="block"><img src={service.img} alt="Service" className="w-full h-32 object-cover mb-4" /></a>
                    <div className="service-inner">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-blue-500 text-white flex items-center justify-center p-4">
                  <div>
                    <h1 className="text-2xl mb-2">{service.backTitle}</h1>
                    <p>{service.backDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-v1 py-16 bg-gray-100">
        <div className="container mx-auto flex flex-wrap">
          <FeatureItem icon="phone2.svg" heading="Phone Number" text="0044 (0) 7477881189" linkText="Call Us" />
          <FeatureItem icon="email.svg" heading="Email" text="sadiaali83@hotmail.com" linkText="Contact Us" />
          <FeatureItem icon="adress.svg" heading="Address" text="68 Thomhill Road E10 5LL London" linkText="Visit Us" />
        </div>
      </div>

      <div className="site-section py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0">
              <h2 className="text-3xl mb-6">Keystone Care Center is for Your Family</h2>
              <p className="mb-6">Our mission is to be more than just a care center; we strive to be an extended family, Nurturing Independence, Fostering Well-being...</p>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-4">
                  <img src="images/img_3.jpg" alt="Feature" className="w-full h-64 object-cover" />
                </div>
                <div className="w-full lg:w-1/2">
                  <ul className="list-disc list-inside">
                    <li>Compassionate Support</li>
                    <li>Personalized Attention</li>
                    <li>Nurturing Atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(images/img_2.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl">You can live here with love</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cover py-16 bg-cover bg-center" style={{ backgroundImage: 'url(images/slider2-2.jpg)' }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl mb-10">Our Goal is to Make Your Life Better</h1>
          <div className="flex flex-wrap justify-center">
            <Feature title="Vibrant and Engaging Environment" icon="006-elderly-3.svg" />
            <Feature title="Specialized Healthcare Programs" icon="005-elderly-2.svg" />
            <Feature title="Expert Nursing Staff" icon="004-nurse.svg" />
          </div>
        </div>
      </div>

      <div className="site-section bg-light py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial text-center p-6 bg-white shadow-md">
              <img src={testimonial.img} alt="Testimonial" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <blockquote>
                <p className="quote mb-4">"{testimonial.quote}"</p>
                <cite className="author">{testimonial.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="site-section bg-primary py-16 text-white">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="images/about.png" alt="About" className="w-full h-64 object-cover" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl mb-6">KeyStone for Senior & Elder Home Care Center</h2>
            <p className="mb-4">Keystone Care Center is dedicated to providing unwavering support and exceptional care for elderly individuals...</p>
            <p className="mb-4">Preserving dignity, promoting independence, and enhancing overall well-being...</p>
            <p className="mb-4"><strong className="h3">"We care for elderly people"</strong></p>
          </div>
        </div>
      </div>

      <footer className="site-footer bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-xl mb-4">About</h2>
              <p>Welcome to Keystone Care Ltd, where we extend compassionate support and professional care...</p>
              <div className="my-5 flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-700"><span className="icon-facebook"></span></a>
                <a href="#" className="text-gray-500 hover:text-gray-700"><span className="icon-twitter"></span></a>
                <a href="#" className="text-gray-500 hover:text-gray-700"><span className="icon-instagram"></span></a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-xl mb-4">Contact</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><strong>Address:</strong> 68 Thomhill Road E10 5LL London</li>
                <li className="mb-2"><strong>Phone:</strong> 0044 (0) 7477881189</li>
                <li className="mb-2"><strong>Email:</strong> sadiaali83@hotmail.com</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <h2 className="text-xl mb-4">Links</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/">Home</Link></li>
                <li className="mb-2"><Link to="/services">Services</Link></li>
                <li className="mb-2"><Link to="/about">About</Link></li>
                <li className="mb-2"><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-6 border-t mt-8">
            <p>&copy; 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>


  );
};

// Mock data for services and testimonials
const services = [
  {
    img: 'images/service1.jpg',
    title: 'Elderly Care',
    description: 'Comprehensive care for the elderly...',
    backTitle: 'Complete Care',
    backDescription: 'Dedicated services for well-being...'
  },
  // Add more service objects as needed
];

const testimonials = [
  {
    img: 'images/person1.jpg',
    quote: 'Keystone Care provided exceptional service...',
    author: 'John Doe'
  },
  // Add more testimonial objects as needed
];

// Feature item component
const FeatureItem = ({ icon, heading, text, linkText }) => (
  <div className="flex-1 flex flex-col items-center text-center px-4 py-6">
    <div className="w-12 mb-4"><img src={`../stuff/${icon}`} alt={heading} /></div>
    <h3 className="text-lg font-semibold mb-2">{heading}</h3>
    <p className="text-sm">{text}</p>
    <a href="#" className="text-primary underline mt-2">{linkText}</a>
  </div>
);

// Feature component
const Feature = ({ title, icon }) => (
  <div className="w-full md:w-1/3 p-4">
    <div className="h-40 flex items-center justify-center bg-white bg-opacity-75 p-4 rounded-lg">
      <div className="text-center">
        <img src={`../stuff/${icon}`} alt={title} className="mx-auto mb-4 w-12 h-12" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  </div>
);

export default Home;
