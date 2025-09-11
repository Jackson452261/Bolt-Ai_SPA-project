import React, { useState } from 'react';
import { Menu, X, Star, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      id: 1,
      name: 'Signature Facial',
      description: 'Deep cleansing and rejuvenating facial treatment customized for your skin type',
      duration: '60 min',
      price: '$120',
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Swedish Massage',
      description: 'Relaxing full-body massage to relieve tension and promote circulation',
      duration: '90 min',
      price: '$150',
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Manicure & Pedicure',
      description: 'Complete nail care with polish, cuticle care, and relaxing hand treatment',
      duration: '75 min',
      price: '$85',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Body Wrap Therapy',
      description: 'Detoxifying and moisturizing treatment for silky smooth skin',
      duration: '75 min',
      price: '$140',
      image: 'https://images.pexels.com/photos/3985357/pexels-photo-3985357.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      name: 'Anti-Aging Treatment',
      description: 'Advanced skincare treatment targeting fine lines and age spots',
      duration: '90 min',
      price: '$200',
      image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      name: 'Couples Package',
      description: 'Romantic spa experience for two with massage and champagne',
      duration: '120 min',
      price: '$350',
      image: 'https://images.pexels.com/photos/3985337/pexels-photo-3985337.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Skincare Tips for Glowing Skin',
      excerpt: 'Discover the secrets to maintaining healthy, radiant skin with our expert-approved daily routine.',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'December 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Benefits of Regular Massage Therapy',
      excerpt: 'Learn how regular massage sessions can improve your physical and mental well-being.',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'December 10, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Seasonal Spa Treatments for Winter Wellness',
      excerpt: 'Combat winter skin dryness with our specially curated treatments designed for the cold season.',
      image: 'https://images.pexels.com/photos/3985354/pexels-photo-3985354.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'December 5, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-600">Serenity Spa</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#blog" className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Blog</a>
                <a href="#contact" className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-rose-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#blog" className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium">Contact</a>
              <button className="w-full text-left bg-rose-600 text-white px-3 py-2 text-base font-medium hover:bg-rose-700 transition-colors rounded-lg mt-2">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 bg-gradient-to-br from-rose-50 to-pink-100 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: 'url(https://images.pexels.com/photos/3985357/pexels-photo-3985357.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Experience
                <span className="text-rose-600"> Tranquility</span>
                <br />
                & Renewal
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Escape to our luxurious spa sanctuary where expert treatments meet serene ambiance. 
                Indulge in personalized wellness experiences designed to rejuvenate your body and soul.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-rose-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-rose-700 transition-all transform hover:scale-105">
                  Book Your Treatment
                </button>
                <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-rose-600 hover:text-white transition-all">
                  View Services
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-rose-600 mr-1" />
                  <span>Open 7 Days</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Spa Treatment"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-4 left-4 w-72 h-72 bg-rose-200 rounded-full -z-10 opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-40 h-40 bg-pink-200 rounded-full -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3985337/pexels-photo-3985337.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spa Interior"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Where Wellness Meets <span className="text-rose-600">Luxury</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 15 years, Serenity Spa has been the premier destination for luxury wellness 
                experiences. Our expert therapists combine ancient healing traditions with modern techniques 
                to deliver transformative treatments in our peaceful sanctuary.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-rose-600">15+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-rose-600">10,000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-rose-600">25+</h3>
                  <p className="text-gray-600">Expert Therapists</p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-rose-600">50+</h3>
                  <p className="text-gray-600">Premium Services</p>
                </div>
              </div>
              <button className="bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Premium <span className="text-rose-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of luxury treatments designed to restore, rejuvenate, 
              and refresh your mind, body, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              View All Services & Packages
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wellness <span className="text-rose-600">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest beauty tips, wellness advice, and spa industry insights 
              from our team of expert therapists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button className="text-rose-600 font-medium hover:text-rose-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-medium hover:bg-rose-600 hover:text-white transition-all">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to <span className="text-rose-400">Unwind</span>?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Book your appointment today and experience the ultimate in relaxation and rejuvenation. 
                Our friendly staff is ready to help you choose the perfect treatment for your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-rose-400 mr-4" />
                  <div>
                    <p className="font-medium">123 Serenity Boulevard</p>
                    <p className="text-gray-300">Wellness District, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-rose-400 mr-4" />
                  <div>
                    <p className="font-medium">(555) 123-SPAS</p>
                    <p className="text-gray-300">Call for appointments</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-rose-400 mr-4" />
                  <div>
                    <p className="font-medium">hello@serenityspa.com</p>
                    <p className="text-gray-300">We'd love to hear from you</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-rose-400 mr-4" />
                  <div>
                    <p className="font-medium">Mon - Sun: 9AM - 8PM</p>
                    <p className="text-gray-300">Extended hours on weekends</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-300 mb-4">Follow us for daily wellness tips:</p>
                <div className="flex space-x-4">
                  <button className="bg-rose-600 p-3 rounded-full hover:bg-rose-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </button>
                  <button className="bg-rose-600 p-3 rounded-full hover:bg-rose-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="bg-rose-600 p-3 rounded-full hover:bg-rose-700 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Book Your Visit</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                />
                <select className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none">
                  <option>Select a Service</option>
                  <option>Signature Facial</option>
                  <option>Swedish Massage</option>
                  <option>Manicure & Pedicure</option>
                  <option>Body Wrap Therapy</option>
                  <option>Anti-Aging Treatment</option>
                  <option>Couples Package</option>
                </select>
                <textarea
                  placeholder="Special requests or preferred date/time"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none resize-none"
                ></textarea>
                <button className="w-full bg-rose-600 text-white py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-rose-400 mb-2">Serenity Spa</h3>
            <p className="text-gray-400 mb-4">Your sanctuary for wellness and beauty</p>
            <p className="text-gray-500 text-sm">
              © 2024 Serenity Spa. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;