import { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Plane, Hotel, Ship, Palmtree, Package, CheckCircle2, Star, Users, HeadphonesIcon, ThumbsUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    { icon: Plane, title: 'Flights', description: 'Best deals on domestic and international flights' },
    { icon: Hotel, title: 'Hotels', description: 'Luxury and budget-friendly accommodations worldwide' },
    { icon: Ship, title: 'Cruises', description: 'Unforgettable cruise experiences across the seas' },
    { icon: Palmtree, title: 'Safaris', description: 'Adventure-filled safari experiences in exotic locations' },
    { icon: Package, title: 'Vacation Packages', description: 'All-inclusive packages tailored to your needs' },
  ];

  const features = [
    { icon: Users, title: 'Personalized Planning', description: 'Customized travel experiences just for you' },
    { icon: ThumbsUp, title: 'Best Deals', description: 'Competitive prices without compromising quality' },
    { icon: HeadphonesIcon, title: 'Trusted Support', description: '24/7 customer service to assist you' },
    { icon: CheckCircle2, title: 'Stress-Free Booking', description: 'Simple and secure booking process' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'ZEMKAY TRAVELS made our dream vacation a reality. Professional, responsive, and affordable!' },
    { name: 'Michael Chen', rating: 5, text: 'Excellent service from start to finish. They handled everything and we had an amazing safari experience.' },
    { name: 'Emily Rodriguez', rating: 5, text: 'Best travel agency we have worked with. Highly recommend for stress-free vacation planning!' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-md z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-yellow-600 bg-clip-text text-transparent">
                ZEMKAY TRAVELS
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <a href="tel:5165235325" className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Call Now
              </a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <a href="#home" className="block text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#services" className="block text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-emerald-600 transition-colors">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Your Trusted Travel Partner
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Flights, Cruises, Safaris & Vacation Packages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:5165235325"
                className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                516-523-5325
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About ZEMKAY TRAVELS</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At ZEMKAY TRAVELS, we believe that travel should be exciting, not stressful. With years of experience in the travel industry, we specialize in creating unforgettable journeys tailored to your preferences and budget.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're planning a romantic getaway, a family vacation, or an adventurous safari, our dedicated team is here to handle every detail so you can focus on making memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive travel solutions for every journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-emerald-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose ZEMKAY TRAVELS?</h2>
            <p className="text-xl text-emerald-100">Your satisfaction is our priority</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real travelers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">Ready to plan your next adventure? Contact us today!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-yellow-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:5165235325" className="text-emerald-600 hover:text-emerald-700 text-lg">
                      516-523-5325
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <a href="https://www.zemkaytravels.com" className="text-emerald-600 hover:text-emerald-700">
                      www.zemkaytravels.com
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-emerald-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-emerald-100">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-emerald-100">Sunday: Closed</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="123-456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your dream vacation..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">ZEMKAY TRAVELS</span>
              </div>
              <p className="text-gray-400">Your trusted partner in creating unforgettable travel experiences.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <a href="tel:5165235325" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    516-523-5325
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <a href="https://www.zemkaytravels.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    www.zemkaytravels.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZEMKAY TRAVELS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:5165235325"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;
