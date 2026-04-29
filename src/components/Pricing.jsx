import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      btnText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "$29",
      period: "/Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      btnText: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      btnText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 border ${plan.isPopular ? 'bg-primary text-white border-primary shadow-2xl scale-105' : 'bg-white text-gray-900 border-gray-100 shadow-sm'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? 'text-purple-200' : 'text-gray-500'}`}>{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm font-medium ${plan.isPopular ? 'text-purple-200' : 'text-gray-500'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <FiCheck className={`text-lg flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-full font-bold transition-all ${plan.isPopular ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary-focus'}`}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
