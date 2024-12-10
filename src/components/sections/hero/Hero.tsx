import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-navy-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInUp space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Manage your Business with Stock And Account Book
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Our Software Provides A Complete POS, Inventory, One-Time Products, Billing, 
              Purchase, Cr./Dr. Note Accounting, Expenses, Taxes Management Solution
            </p>
            
            {/* Search Input */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search theme, plugins & more..."
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-lg bg-white dark:bg-navy-800 
                text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 
                focus:outline-none focus:border-appColor transition-all duration-200"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 
                bg-appColor p-2 sm:p-3 rounded-lg hover:bg-opacity-90 
                transition-all duration-200 group-hover:scale-105">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative animate-fadeInRight flex flex-col items-center">
            <img
              src="images/finance img.png"
              alt="Digital Products Preview"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform 
              duration-300 animate-float w-full max-w-md h-auto mx-auto"
            />
            <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 
              sm:left-0 sm:translate-x-0 sm:-left-10 bg-appColor text-white 
              p-4 sm:p-6 rounded-lg transform hover:scale-110 
              transition-transform duration-200 animate-float text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">50k+</div>
              <div className="text-xs sm:text-sm">Themes & Plugins</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//     <div className="relative pt-32 pb-20 bg-gray-50 dark:bg-navy-900 transition-colors duration-200">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="animate-fadeInUp">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//               Manage your Business with Stock And Account Book
//             </h1>
//             <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8">
//               Our Software Provides A Complete POS, Inventory,
//               One-Time Products, Billing, Purchase, Cr./Dr. Note Accounting, Expenses,
//               Taxes Management Solution
//             </p>
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search theme, plugins & more..."
//                 className="w-full px-6 py-4 rounded-lg bg-white dark:bg-navy-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-appColor transition-all duration-200"
//               />
//               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-appColor p-3 rounded-lg hover:bg-appColor transition-colors group-hover:scale-105 duration-200">
//                 <Search className="w-5 h-5 text-white" />
//               </button>
//             </div>
//           </div>

//           <div className="relative animate-fadeInRight">
//             <img
//               src="images/finance img.png"
//               alt="Digital Products Preview"
//               className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 animate-float w-full h-auto"
//             />
//             <div className="absolute -bottom-10 -left-10 bg-appColor text-white p-6 rounded-lg transform hover:scale-110 transition-transform duration-200 animate-float">
//               <div className="text-3xl sm:text-4xl font-bold animate-float">50k+</div>
//               <div className="text-sm sm:text-base">Themes & Plugins</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
