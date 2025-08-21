import PricingCard from "./PricingCard";

const Pricing = ({planName,price,description,features}) => {
    return (
        <>
        <article>
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{planName}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="text-center mb-8">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        
        {/* Map through the features array passed as props */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </article>
        </>
    )
}
export default Pricing;