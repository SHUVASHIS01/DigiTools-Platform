export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-primary to-purple-500 py-20 lg:py-24 text-white text-center">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="btn rounded-full px-8 w-full sm:w-auto bg-white text-primary border-none hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-full px-8 w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary transition-colors">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
