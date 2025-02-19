
import React from 'react';

const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="bg-neutral-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Stories</span>
          </h2>
          <p className="text-gray-300 text-xl">
            See what other developers are saying about our generator
          </p>
        </div>
        {/* Testimonials Slider */}
        <div className="testimonials-slider relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" id="testimonialsTrack" style={{ transform: 'translateX(0px)' }}>
              {/* Testimonial 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex-none px-4">
                <div className="glassmorphism p-8 rounded-xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold">Sarah Chen</h4>
                      <p className="text-gray-400">Frontend Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    "This generator saved me hours of setup time. The code structure is clean and follows all the best practices. Absolutely love it!"
                  </p>
                  <div className="flex text-cyan-400">
                    {[...Array(5)].map((_, index) => (
                      <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    {/* Repeat additional SVGs as in your original code */}
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex-none px-4">
                <div className="glassmorphism p-8 rounded-xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      M
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold">Michael Rodriguez</h4>
                      <p className="text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    "The tech stack options are perfect for modern web development. Everything is well-integrated and the generated code is production-ready."
                  </p>
                  <div className="flex text-cyan-400">
                    {/* SVG icons repeated */}
                    {[...Array(4)].map((_, index) => (
                      <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    {/* ... more icons as needed ... */}
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex-none px-4">
                <div className="glassmorphism p-8 rounded-xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      A
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold">Alex Thompson</h4>
                      <p className="text-gray-400">Tech Lead</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    "Perfect for team standardization. We use this for all our new projects now. The customization options are exactly what we needed."
                  </p>
                  <div className="flex text-cyan-400">
                    {/* SVG icons repeated */}
                    {[...Array(4)].map((_, index) => (
                      <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    {/* ... additional icons as needed ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
