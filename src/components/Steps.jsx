import { FiUser, FiPackage } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';

export default function Steps() {
  const steps = [
    {
      id: "01",
      icon: <FiUser className="text-3xl text-primary" />,
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      id: "02",
      icon: <FiPackage className="text-3xl text-primary" />,
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs."
    },
    {
      id: "03",
      icon: <IoRocketOutline className="text-3xl text-primary" />,
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all group">
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30">
              {step.id}
            </div>
            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
