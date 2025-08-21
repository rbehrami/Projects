import Pricing from "./Pricing";

const pricingPosts =  [
{
    planName: 'Free',
    price: 0,
    description: 'Perfect for individuals getting started',
    features: [
        'Up to 5 projects',
        'Basic task management',
        'Email support',
        'Mobile app access',
        'Basic reporting'
      ],
},
{
    planName: 'Pro',
    price: 10,
    description: 'For teams and power users',
    features: [
        'Unlimited projects',
        'Advanced task management',
        'Time tracking',
        'Advanced reporting',
        'Custom fields',
        'API access'
      ],
},
{
    planName: 'Business',
    price: 30,
    description: 'For organizations and large teams',
    features: [
        'Everything in Pro',
        'Unlimited users',
        'Advanced permissions',
        'Single sign-on (SSO)',
        'Custom branding',
      ],
}
]

const PricingCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            {pricingPosts.map((pricingPosts, index)=>(
                <div key={index}>
                <Pricing 
                planName={pricingPosts.planName}
                price = {pricingPosts.price}
                description = {pricingPosts.description}
                features = {pricingPosts.features}
                />
            </div>
            ))}
      
            </div>
        </>
    )
}
export default PricingCard;