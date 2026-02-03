import { useState } from 'react';
import { Phone, MapPin, Menu, X, Plane, Hotel, Ship, Palmtree, Package, CheckCircle2, Star, Users, HeadphonesIcon, ThumbsUp, Car, Castle, Sparkles, Facebook, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
    { icon: Car, title: 'Rental Cars', description: 'Convenient car rentals at competitive rates worldwide' },
    { icon: Castle, title: 'Disney Packages', description: 'Magical Disney vacation packages for the whole family' },
    { icon: Sparkles, title: 'Universal Studios', description: 'Thrilling Universal Studios vacation experiences' },
    { icon: Package, title: 'Vacation Packages', description: 'All-inclusive packages tailored to your needs' },
  ];

  const features = [
    { icon: Users, title: 'Personalized Planning', description: 'Customized travel experiences just for you' },
    { icon: ThumbsUp, title: 'Best Deals', description: 'Competitive prices without compromising quality' },
    { icon: HeadphonesIcon, title: 'Trusted Support', description: 'Dedicated customer service to assist you' },
    { icon: CheckCircle2, title: 'Stress-Free Booking', description: 'Simple and secure booking process' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'ZEmKay Travels made our dream vacation a reality. Professional, responsive, and affordable!' },
    { name: 'Michael Chen', rating: 5, text: 'Excellent service from start to finish. They handled everything and we had an amazing safari experience.' },
    { name: 'Emily Rodriguez', rating: 5, text: 'Best travel agency we have worked with. Highly recommend for stress-free vacation planning!' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full shadow-md z-50 transition-all duration-300 border-b-2" style={{ backgroundColor: '#FFCC00', borderColor: '#FFCC00' }}>
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/att.onsvfgdls5qh_vzm-hvfcymdr-za-ajc_rgv9gbwon0.jpg"
                alt="ZEmKay Travels Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">Services</a>
              <a href="#what-we-offer" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">What We Offer</a>
              <a href="#gallery" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">Gallery</a>
              <a href="#testimonials" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">Contact</a>
              <a
                href="tel:5162340786"
                className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-semibold border-2 border-green-700"
              >
                Call Now
              </a>
            </div>

            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <a href="#home" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">Home</a>
              <a href="#about" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">About</a>
              <a href="#services" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">Services</a>
              <a href="#what-we-offer" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">What We Offer</a>
              <a href="#gallery" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">Gallery</a>
              <a href="#testimonials" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="block text-gray-900 hover:text-gray-700 transition-colors font-medium">Contact</a>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-emerald-50 via-white to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeIn leading-tight font-hero">
              Travel Made Easy. Memories Made Forever.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 animate-fadeIn font-hero" style={{ animationDelay: '0.2s' }}>
              Flights, Hotels, Cruises, Safaris & Vacation Packages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2"
                style={{ backgroundColor: '#FFCC00', borderColor: '#FFCC00', color: '#1A1A1A' }}
              >
                Get a Free Quote
              </a>
              <a
                href="tel:5162340786"
                className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                (516) 234-0786
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Separator */}
      <section
        className="relative overflow-hidden"
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          height: 'clamp(180px, 22vw, 280px)'
        }}
      >
        <img
          src="/att.ey117fo0kzzpc69gbvw5icflkk9zeieaxr0tuvedfuo.jpg"
          srcSet="/att.ey117fo0kzzpc69gbvw5icflkk9zeieaxr0tuvedfuo.jpg 1x, /att.ey117fo0kzzpc69gbvw5icflkk9zeieaxr0tuvedfuo.jpg 2x"
          alt="Airplane soaring through beautiful sky - ZEmKay Travels"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </section>

      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/att.dwx7kaykmwq2rzoeeo_bz6ywi8wxq4q1esz0gm905wy.jpg)',
            opacity: '0.22'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About ZEmKay Travels</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At ZEmKay Travels, we're a family-operated travel company built on a love for exploring the world and creating meaningful experiences together. We believe travel should feel exciting, effortless, and deeply personal.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Because we're family-run, we treat every client like one of our own—taking the time to understand your vision and handling every detail with care. Whether you're dreaming of a relaxing getaway, an adventurous escape, or a once-in-a-lifetime journey, we design trips that fit your style, budget, and goals.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              From curated itineraries to trusted guidance, we take the stress out of planning so you can focus on making memories. With ZEmKay Travels, you're not just booking a trip—you're traveling with heart, intention, and confidence.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let's explore the world together. 🌍✈️
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive travel solutions for every journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border-t-4"
                style={{ borderTopColor: '#FFCC00' }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, #d1fae5, #fff4cc)' }}>
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Travel Highlights</h2>
            <p className="text-xl text-gray-600">Discover the world's most incredible destinations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/att.fajhgn0tncyybm-i-t3bidnsdzz7eoomvu2e9wwn-m4.jpg')}>
              <img
                src="/att.fajhgn0tncyybm-i-t3bidnsdzz7eoomvu2e9wwn-m4.jpg"
                alt="Scenic train journey through mountains"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Scenic Rail Adventures</h3>
                  <p className="text-sm text-gray-200">Experience breathtaking journeys through majestic landscapes</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/att.gxrkznv34waxxccbpebxznimiupd5cvonnf1s-c9cye.jpg')}>
              <img
                src="/att.gxrkznv34waxxccbpebxznimiupd5cvonnf1s-c9cye.jpg"
                alt="Luxury tropical resort with infinity pool"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Luxury Resorts</h3>
                  <p className="text-sm text-gray-200">Unwind in paradise at world-class tropical destinations</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/att.utccchx9pocvo8kc1mgft7rplqlsevxlhu7hd9cnoae.jpg')}>
              <img
                src="/att.utccchx9pocvo8kc1mgft7rplqlsevxlhu7hd9cnoae.jpg"
                alt="Pristine tropical beach with palm trees"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Beach Getaways</h3>
                  <p className="text-sm text-gray-200">Relax on pristine shores with crystal-clear waters</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/att.lnujmnwhwkyk7d9h904ugpbictv9esj9o4pv80onnfc.jpg')}>
              <img
                src="/att.lnujmnwhwkyk7d9h904ugpbictv9esj9o4pv80onnfc.jpg"
                alt="Premium rental car fleet"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Car Rentals</h3>
                  <p className="text-sm text-gray-200">Choose from our premium fleet for ultimate comfort</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-2 cursor-pointer" onClick={() => setLightboxImage('/att.qbtzfofebwplljk1uktgmvifpnslsst2odj81srhjba.jpg')}>
              <img
                src="/att.qbtzfofebwplljk1uktgmvifpnslsst2odj81srhjba.jpg"
                alt="Sacred pilgrimage destination"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Religious Pilgrimages</h3>
                  <p className="text-sm text-gray-200">Fulfill your spiritual journey with our guided pilgrimage packages</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/travel-highlights/att.zbrfjoqug1kgj664vsnoys_bwug76vqk7-gh0twrpxw.jpg')}>
              <img
                src="/travel-highlights/att.zbrfjoqug1kgj664vsnoys_bwug76vqk7-gh0twrpxw.jpg"
                alt="Luxury cruise ship"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Cruise Vacations</h3>
                  <p className="text-sm text-gray-200">Sail the seas in style aboard world-class cruise ships</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/travel-highlights/att.yvf-gxo9dx4v8bcrlv47j4eztit1t-jalf8tal36hj8.jpg')}>
              <img
                src="/travel-highlights/att.yvf-gxo9dx4v8bcrlv47j4eztit1t-jalf8tal36hj8.jpg"
                alt="Theme park adventure"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Theme Park Adventures</h3>
                  <p className="text-sm text-gray-200">Experience thrilling rides and unforgettable family fun</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/travel-highlights/att.x3if5_sprny5apwypkqlgoaewyk0mcmrrwuk7tpshh8.jpg')}>
              <img
                src="/travel-highlights/att.x3if5_sprny5apwypkqlgoaewyk0mcmrrwuk7tpshh8.jpg"
                alt="Luxury resort at twilight"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Luxury Getaways</h3>
                  <p className="text-sm text-gray-200">Indulge in opulent resorts with world-class amenities</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setLightboxImage('/travel-highlights/att.whax4ccwco_dubtgp8uxdn8rbp96xd97gf97ceoxscc.jpg')}>
              <img
                src="/travel-highlights/att.whax4ccwco_dubtgp8uxdn8rbp96xd97gf97ceoxscc.jpg"
                alt="African safari with giraffes"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Safari Expeditions</h3>
                  <p className="text-sm text-gray-200">Witness majestic wildlife in their natural habitat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ZEmKay Travels?</h2>
            <p className="text-xl text-emerald-100">Your satisfaction is our priority</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300 border-2 border-white/20">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-offer" className="py-20 md:py-24" style={{ backgroundColor: '#F6F3EE' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-[680px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center font-playfair">
              What We Offer
            </h2>

            <div className="space-y-16 md:space-y-20">
              <div className="text-center">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Custom travel itinerary planning"
                    className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full object-cover mx-auto shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
                  Custom Itineraries
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-lato" style={{ lineHeight: '1.7' }}>
                  Every traveler is unique, and your trip should be too. We'll design a personalized itinerary that matches your style—whether that's a multi-city European adventure, a quick weekend escape, or a once-in-a-lifetime family trip.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Group travel and celebrations"
                    className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full object-cover mx-auto shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
                  Group Travel
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-lato" style={{ lineHeight: '1.7' }}>
                  From milestone celebrations to team getaways, we take the stress out of organizing for a crowd. We'll handle the logistics so your group can focus on making memories together.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Cruise ship at sunset"
                    className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full object-cover mx-auto shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
                  Cruises
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-lato" style={{ lineHeight: '1.7' }}>
                  Set sail with ease! Whether you're dreaming of a Caribbean escape, an Alaskan adventure, or a European river cruise, we'll help you choose the perfect sailing and add those little extras that make the journey even more special.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Luxury resort with infinity pool"
                    className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full object-cover mx-auto shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
                  All-Inclusive Getaways
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-lato" style={{ lineHeight: '1.7' }}>
                  Resorts, beaches, and relaxation made effortless. We'll match you with the best all-inclusive destinations so you can unwind, indulge, and enjoy—without worrying about the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real travelers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4"
                style={{ borderTopColor: '#FFCC00' }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5" style={{ fill: '#FFCC00', color: '#FFCC00' }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-yellow-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h2>
            <p className="text-xl text-gray-600 mb-10">Stay connected for travel inspiration, deals, and updates</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://www.facebook.com/share/188jDNNzhN/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2"
                style={{ borderColor: '#FFCC00' }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Facebook className="h-6 w-6 text-white" fill="white" />
                </div>
                <span className="text-gray-900 font-semibold text-lg">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/zemkaytravels?igsh=dmhldmV6dTEyYzYw"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2"
                style={{ borderColor: '#FFCC00' }}
              >
                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-900 font-semibold text-lg">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Ready to plan your next adventure? Contact us today!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md">
                  <div className="p-4 rounded-full" style={{ background: '#FFCC00' }}>
                    <Phone className="h-7 w-7" style={{ color: '#1A1A1A' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                    <a href="tel:5162340786" className="text-emerald-600 hover:text-emerald-700 text-xl font-semibold">
                      (516) 234-0786
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-full">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Website</h3>
                    <a href="https://www.zemkaytravels.com" className="text-emerald-600 hover:text-emerald-700 text-lg">
                      www.zemkaytravels.com
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Let's Plan Your Journey</h3>
                  <p className="text-emerald-100 text-lg leading-relaxed">
                    From flights and hotels to unforgettable vacation packages, we're here to make your travel dreams a reality. Contact us today for personalized service and the best deals.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border-t-4" style={{ borderTopColor: '#FFCC00' }}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 gold-focus outline-none transition-all"
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 gold-focus outline-none transition-all"
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 gold-focus outline-none transition-all"
                      placeholder="(123) 456-7890"
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 gold-focus outline-none transition-all resize-none"
                      placeholder="Tell us about your dream vacation..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2"
                    style={{ backgroundColor: '#FFCC00', borderColor: '#FFCC00', color: '#1A1A1A' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 border-t-4" style={{ borderTopColor: '#FFCC00' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img
                  src="/att.onsvfgdls5qh_vzm-hvfcymdr-za-ajc_rgv9gbwon0.jpg"
                  alt="ZEmKay Travels Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400">Your trusted partner in creating unforgettable travel experiences.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFCC00' }}>Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 transition-colors hover-gold">Home</a></li>
                <li><a href="#about" className="text-gray-400 transition-colors hover-gold">About</a></li>
                <li><a href="#services" className="text-gray-400 transition-colors hover-gold">Services</a></li>
                <li><a href="#what-we-offer" className="text-gray-400 transition-colors hover-gold">What We Offer</a></li>
                <li><a href="#gallery" className="text-gray-400 transition-colors hover-gold">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 transition-colors hover-gold">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFCC00' }}>Contact Us</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" style={{ color: '#FFCC00' }} />
                  <a href="tel:5162340786" className="text-gray-400 transition-colors font-semibold hover-gold">
                    (516) 234-0786
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" style={{ color: '#FFCC00' }} />
                  <a href="https://www.zemkaytravels.com" className="text-gray-400 transition-colors hover-gold">
                    www.zemkaytravels.com
                  </a>
                </li>
              </ul>
              <div>
                <h4 className="text-lg font-bold mb-3" style={{ color: '#FFCC00' }}>Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/188jDNNzhN/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover-gold-bg"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white" fill="white" />
                  </a>
                  <a
                    href="https://www.instagram.com/zemkaytravels?igsh=dmhldmV6dTEyYzYw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZEmKay Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:5162340786"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce border-2 border-green-700"
        style={{ animationDuration: '3s' }}
        aria-label="Call us at (516) 234-0786"
      >
        <Phone className="h-6 w-6" />
      </a>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white transition-colors p-2 hover-gold"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
