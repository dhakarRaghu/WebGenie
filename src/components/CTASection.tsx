import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-neutral-900 py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-full w-full border-r border-cyan-400/20"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glassmorphism rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Supercharge
            </span> Your Development?
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate your perfect web development stack in minutes. Start building faster with our automated project generator.
          </p>

          {/* Buttons with Client Component for Click Handling */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              Start Generating Now
            </button>
            <Link href={'/docs'} >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              View Documentation
            </button>
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
}
