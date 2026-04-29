import { FiPlayCircle } from 'react-icons/fi';

export default function Banner() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 md:py-20 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Supercharge Your <br className="hidden md:block" /> Digital Workflow
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="btn btn-primary rounded-full px-8 w-full sm:w-auto text-white border-none bg-gradient-to-r from-primary to-purple-500 hover:from-purple-600 hover:to-purple-500 transition-all">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full px-8 w-full sm:w-auto text-primary border-primary hover:bg-primary hover:text-white transition-all flex items-center gap-2">
              <FiPlayCircle className="text-xl" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <img 
            src="/assets/banner.png" 
            alt="Digital Workflow Platform" 
            className="w-full h-auto rounded-2xl object-cover shadow-2xl shadow-primary/10"
          />
        </div>
      </div>
    </section>
  );
}
