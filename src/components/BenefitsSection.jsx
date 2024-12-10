import React from 'react';
import { FaLifeRing, FaChartLine, FaWallet, FaGlobe, FaDatabase, FaBuilding, FaBoxes } from 'react-icons/fa';
import BenefitCard from './components/sections/bs/BenefitsSection';
import mockupImage from '../assets/mockup.png';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaLifeRing className="text-red-500" />,
      title: "Lifetime free basic usage",
      description: "Using our free GST invoicing and billing software, you can customize invoices. It offers you get manage your day-to-day and track inventory items. The free access allows you to use many other useful features.",
      expandedContent: "Access to essential features of our business accounting tool accessible for free. The free features are available for lifetime for Android mobile users."
    },
    {
      icon: <FaChartLine className="text-red-500" />,
      title: "Track your business status",
      description: "Vyapar business dashboard makes the entire management process seamless. You can check business cash flow, inventory status, open orders, and payment updates in one place.",
      expandedContent: "With free GST billing software and invoicing tools, you can manage your business efficiently."
    },
    {
      icon: <FaWallet className="text-red-500" />,
      title: "Manage cashflow seamlessly",
      description: "GST billing & accounting software allows businesses to record transactions. It helps track payments. Over 1 crore businesses have tried out our free billing software features. Cashflow management is widely used for their billing, accounting, and many more business requirements.",
      expandedContent: "The billing software by Vyapar helps automate management. It is done to prevent mistakes in accounting. By investing in this billing software, you can save time."
    },
    {
      icon: <FaGlobe className="text-red-500" />,
      title: "Online/Offline billing",
      description: "Using our billing tool, you need not stop business operations due to weak internet connectivity. You can use the offline billing features in the app to generate bills.",
      expandedContent: null
    },
    {
      icon: <FaDatabase className="text-red-500" />,
      title: "Keep data safe with backups",
      description: "Using our free GST software for billing in India, you can set up an automatic data backup, allowing you to safeguard the data stored in the app. For additional safety, you can create a local backup too.",
      expandedContent: "Keeping data safe is the utmost priority of any business today, as data is the new oil."
    },
    {
      icon: <FaBuilding className="text-red-500" />,
      title: "Build a positive brand image",
      description: "Providing professional quotes and estimates during negotiation builds a positive brand image. Further, you can provide complete disclosure about the deal to build trust.",
      expandedContent: null
    },
    {
      icon: <FaBoxes className="text-red-500" />,
      title: "Plan your inventory space",
      description: "Using our GST billing software, you can keep track of available items in your store. It can help you set up low inventory alerts to place advance orders and detect possible theft.",
      expandedContent: null
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
        Benefits of GST Billing Software
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section - Now on the right for large screens */}
        <div className="hidden lg:flex items-center justify-center order-2">
          <img 
            src={mockupImage} 
            alt="GST Billing Software Interface" 
            className="w-full max-w-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Benefits Columns */}
        <div className="space-y-6 order-1">
          {/* First Column of Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.slice(0, 4).map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          {/* Mobile Image - Visible only on smaller screens */}
          <div className="lg:hidden flex items-center justify-center my-8">
            <img 
              src={mockupImage} 
              alt="GST Billing Software Interface" 
              className="w-full max-w-md"
            />
          </div>

          {/* Second Column of Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.slice(4).map((benefit, index) => (
              <BenefitCard key={index + 4} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default BenefitsSection;

// import React from 'react';
// import { FaLifeRing, FaChartLine, FaWallet, FaGlobe, FaDatabase, FaBuilding, FaBoxes } from 'react-icons/fa';
// import BenefitCard from './components/sections/bs/BenefitsSection';
// import mockupImage from '../assets/mockup.png';

// const BenefitsSection = () => {
//   const benefits = [
//     {
//       icon: <FaLifeRing className="text-red-500" />,
//       title: "Lifetime free basic usage",
//       description: "Using our free GST invoicing and billing software, you can customize invoices. It offers you get manage your day-to-day and track inventory items. The free access allows you to use many other useful features.",
//       expandedContent: "Access to essential features of our business accounting tool accessible for free. The free features are available for lifetime for Android mobile users."
//     },
//     {
//       icon: <FaChartLine className="text-red-500" />,
//       title: "Track your business status",
//       description: "Vyapar business dashboard makes the entire management process seamless. You can check business cash flow, inventory status, open orders, and payment updates in one place.",
//       expandedContent: "With free GST billing software and invoicing tools, you can manage your business efficiently."
//     },
//     {
//       icon: <FaWallet className="text-red-500" />,
//       title: "Manage cashflow seamlessly",
//       description: "GST billing & accounting software allows businesses to record transactions. It helps track payments. Over 1 crore businesses have tried out our free billing software features. Cashflow management is widely used for their billing, accounting, and many more business requirements.",
//       expandedContent: "The billing software by Vyapar helps automate management. It is done to prevent mistakes in accounting. By investing in this billing software, you can save time."
//     },
//     {
//       icon: <FaGlobe className="text-red-500" />,
//       title: "Online/Offline billing",
//       description: "Using our billing tool, you need not stop business operations due to weak internet connectivity. You can use the offline billing features in the app to generate bills.",
//       expandedContent: null
//     },
//     {
//       icon: <FaDatabase className="text-red-500" />,
//       title: "Keep data safe with backups",
//       description: "Using our free GST software for billing in India, you can set up an automatic data backup, allowing you to safeguard the data stored in the app. For additional safety, you can create a local backup too.",
//       expandedContent: "Keeping data safe is the utmost priority of any business today, as data is the new oil."
//     },
//     {
//       icon: <FaBuilding className="text-red-500" />,
//       title: "Build a positive brand image",
//       description: "Providing professional quotes and estimates during negotiation builds a positive brand image. Further, you can provide complete disclosure about the deal to build trust.",
//       expandedContent: null
//     },
//     {
//       icon: <FaBoxes className="text-red-500" />,
//       title: "Plan your inventory space",
//       description: "Using our GST billing software, you can keep track of available items in your store. It can help you set up low inventory alerts to place advance orders and detect possible theft.",
//       expandedContent: null
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center mb-12">Benefits of GST Billing Software</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {benefits.slice(0, 4).map((benefit, index) => (
//             <BenefitCard key={index} {...benefit} />
//           ))}
//         </div>
//         <div className="relative flex items-center justify-center md:order-2">
//           <img 
//             src={mockupImage} 
//             alt="GST Billing Software Interface" 
//             className="w-full max-w-md"
//           />
//         </div>
//         <div className="md:col-span-2 space-y-6">
//           {benefits.slice(4).map((benefit, index) => (
//             <BenefitCard key={index + 4} {...benefit} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BenefitsSection;