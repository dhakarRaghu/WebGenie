import CopyButton from "./copied";

const HeaderSection = () => {
  return (
    <section id="header" className="relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm" id="el-tjkg8ous">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-uqlyfb4f">
          <div className="flex justify-between items-center py-4" id="el-0gsv62y4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-cyan-400 font-bold text-2xl">WebGen</a>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
            <div className="flex-shrink-0">
              <a href="/docs" className="text-cyan-400 font-bold text-2xl">Docs</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button id="mobileMenuBtn" className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-2" aria-label="Open menu">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div id="mobileMenu" className="hidden md:hidden bg-neutral-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1" id="el-98ewjjg2">
            <div className="system-element-placeholder bg-gray-100 text-gray-600 px-4 py-2 rounded border border-dashed border-gray-300 text-sm font-mono" data-tooltip="This is a system element that will be populated with the navigation menu" id="el-z0rzyyxy">
              [System: Menu will be rendered here]
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Header version) */}
      <CopyButton></CopyButton>
    </section>
  );
};

export default HeaderSection;
