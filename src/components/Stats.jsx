export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-primary to-purple-500 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-purple-400/50">
          <div className="flex flex-col justify-center items-center py-4 md:py-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">50K+</h2>
            <p className="text-purple-100 text-lg">Active Users</p>
          </div>
          <div className="flex flex-col justify-center items-center py-4 md:py-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">200+</h2>
            <p className="text-purple-100 text-lg">Premium Tools</p>
          </div>
          <div className="flex flex-col justify-center items-center py-4 md:py-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">4.9</h2>
            <p className="text-purple-100 text-lg">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
