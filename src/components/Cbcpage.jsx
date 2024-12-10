
import React from 'react';

const benefitsLeft = [
    {
        icon: 'icon-url-here',
        title: "SALES",
        description: "Manages all your sales with accounting"
    },
    {
        icon: 'icon-url-here',
        title: "ONE TIME PRODUCT",
        description: "Sell one time product directly eg. saree, cab rides, shirts,many more"
    },
    {
        icon: 'icon-url-here',
        title: "BANK DEPOSIT/WITHDRAWs",
        description: "Using our free GST accounting and billing software, you can seamlessly create custom invoices..."
    },
    {
        icon: 'icon-url-here',
        title: "PAYMENT RECEIPTs",
        description: "Generates and prints acknowledgement payment received receipt."
    },
    {
        icon: 'icon-url-here',
        title: "INVOICE GENERATION",
        description: "Automatically generates invoices for your sales and services."
    }
];

const benefitsRight = [
    {
        icon: 'icon-url-here',
        title: "INVENTORY MANAGEMENT",
        description: "Effortlessly manage your stock levels, track inventory movements, and optimize your storage..."
    },
    {
        icon: 'icon-url-here',
        title: "BILLING AND INVOICING",
        description: "Generate professional invoices, track payments, and manage your cash flow with ease..."
    },
    {
        icon: 'icon-url-here',
        title: "EXPENSES",
        description: "Effortlessly manage your stock levels, track inventory movements, and optimize your storage..."
    },
    {
        icon: 'icon-url-here',
        title: "DAY BOOK",
        description: "Generate professional invoices, track payments, and manage your cash flow with ease..."
    }
];

const BenefitsPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-12">
                Benefits of GST Billing Software
            </h1>
            
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Left Benefits Column */}
                <div className="w-full lg:w-1/3 space-y-6">
                    {benefitsLeft.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-5 rounded-lg shadow-md transition-all hover:shadow-lg"
                        >
                            <img 
                                src={benefit.icon} 
                                alt="Icon" 
                                className="w-8 h-8 mb-3"
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {benefit.description}
                            </p>
                            <a 
                                href="#" 
                                className="text-teal-600 hover:underline"
                            >
                                + Read more
                            </a>
                        </div>
                    ))}
                </div>

                {/* Central Image */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img 
                        src="/images/benefits_of_gst_billing_and_invoicing_software-222x300.webp" 
                        alt="GST Billing Software" 
                        className="max-w-full h-auto animate-float"
                    />
                </div>

                {/* Right Benefits Column */}
                <div className="w-full lg:w-1/3 space-y-6">
                    {benefitsRight.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-5 rounded-lg shadow-md transition-all hover:shadow-lg"
                        >
                            <img 
                                src={benefit.icon} 
                                alt="Icon" 
                                className="w-8 h-8 mb-3"
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {benefit.description}
                            </p>
                            <a 
                                href="#" 
                                className="text-teal-600 hover:underline"
                            >
                                + Read more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsPage;// import React from 'react';

// const benefitsLeft = [
//     {
//         icon: 'icon-url-here',
//         title: "SALES",
//         description: "Manages all your sales with accounting"
//     },
//     {
//         icon: 'icon-url-here',
//         title: "ONE TIME PRODUCT",
//         description: "Sell one time product directly eg. saree, cab rides, shirts,many more"
//     },
//     {
//         icon: 'icon-url-here',
//         title: "BANK DEPOSIT/WITHDRAWs",
//         description: "Using our free GST accounting and billing software, you can seamlessly create custom invoices..."
//     },
//     {
//         icon: 'icon-url-here',
//         title: "PAYMENT RECEIPTs",
//         description: "Generates and prints acknowledgement payment received receipt."
//     },
//     {
//         icon: 'icon-url-here',
//         title: "INVOICE GENERATION",
//         description: "Automatically generates invoices for your sales and services."
//     }
//     // Add more benefits as needed
// ];

// const benefitsRight = [
//     {
//         icon: 'icon-url-here',
//         title: "INVENTORY MANAGEMENT",
//         description: "Effortlessly manage your stock levels, track inventory movements, and optimize your storage..."
//     },
//     {
//         icon: 'icon-url-here',
//         title: "BILLING AND INVOICING",
//         description: "Generate professional invoices, track payments, and manage your cash flow with ease..."
//     },
//     {
//         icon: 'icon-url-here',
//         title: "EXPENSES",
//         description: "Effortlessly manage your stock levels, track inventory movements, and optimize your storage..."
//     },
//     {
//         icon: 'icon-url-here',
//         title: "DAY BOOK",
//         description: "Generate professional invoices, track payments, and manage your cash flow with ease..."
//     }
//     // Add more benefits as needed
// ];

// const styles = {
//     container: {
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '20px',
//         textAlign: 'center',
//     },
//     title: {
//         color: '#333',
//         marginBottom: '40px',
//         fontSize: '2.5rem',
//     },
//     benefits: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     },
//     benefit: {
//         backgroundColor: '#fff',
//         borderRadius: '8px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         width: '30%',
//         marginBottom: '20px',
//         padding: '20px',
//         textAlign: 'left',
//     },
//     icon: {
//         width: '24px',
//         height: '24px',
//         marginBottom: '10px',
//     },
//     benefitTitle: {
//         color: '#050505',
//         fontSize: '18px',
//         fontWeight: 'bold',
//         marginBottom: '10px',
//     },
//     benefitDescription: {
//         color: '#666',
//     },
//     readMore: {
//         color: 'rgb(29 103 106 / var(--tw-bg-opacity)) ',
//         textDecoration: 'none',
//     },
//     image: {
//         margin: '40px 0',
//     },
//     img: {
//         maxWidth: '100%',
//         height: 'auto',
//         animationDelay: '0.5s'
//     },
// };

// const BenefitsPage = () => {
//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>Benefits of GST Billing Software</h1>
//             <div style={{...styles.image, display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'100px'}}>
//                 <div style={{flex: 1, textAlign: 'right', paddingRight: '20px'}}>
//                     <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
//                         {benefitsLeft.map((benefit, index) => (
//                             <div key={index} style={{
//                                 padding: '15px',
//                                 backgroundColor: 'var(--tw-bg-opacity)',
//                                 transition: 'all 0.3s ease'
//                             }}>
//                                 <img src={benefit.icon} alt="Icon" style={styles.icon} />
//                                 <h3 style={styles.benefitTitle}>{benefit.title}</h3>
//                                 <p style={styles.benefitDescription}>{benefit.description}</p>
//                                 <a href="#" style={styles.readMore}>+ Read more</a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                <img src="public\images\benefits_of_gst_billing_and_invoicing_software-222x300.webp" alt="GST Billing Software"className='animate-float ' style={styles.img} />
//                 <div style={{flex: 1, textAlign: 'left', paddingLeft: '20px'}}>
//                     <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
//                         {benefitsRight.map((benefit, index) => (
//                             <div key={index} style={{
//                                 padding: '15px',
//                                 backgroundColor: 'var(--tw-bg-opacity)',
//                                 transition: 'all 0.3s ease'
//                             }}>
//                                 <img src={benefit.icon} alt="Icon" style={styles.icon} />
//                                 <h3 style={styles.benefitTitle}>{benefit.title}</h3>
//                                 <p style={styles.benefitDescription}>{benefit.description}</p>
//                                 <a href="#" style={styles.readMore}>+ Read more</a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BenefitsPage;

// import React from "react";

// interface Benefit {
//   icon: string;
//   title: string;
//   description: string;
// }

// const benefitsLeft: Benefit[] = [
//   {
//     icon: "icon-url-here",
//     title: "SALES",
//     description: "Manages all your sales with accounting",
//   },
//   {
//     icon: "icon-url-here",
//     title: "ONE TIME PRODUCT",
//     description:
//       "Sell one time product directly eg. saree, cab rides, shirts, many more",
//   },
//   {
//     icon: "icon-url-here",
//     title: "BANK DEPOSIT/WITHDRAWs",
//     description:
//       "Using our free GST accounting and billing software, you can seamlessly create custom invoices...",
//   },
//   {
//     icon: "icon-url-here",
//     title: "PAYMENT RECEIPTs",
//     description:
//       "Generates and prints acknowledgment payment received receipt.",
//   },
//   {
//     icon: "icon-url-here",
//     title: "INVOICE GENERATION",
//     description:
//       "Automatically generates invoices for your sales and services.",
//   },
// ];

// const benefitsRight: Benefit[] = [
//   {
//     icon: "icon-url-here",
//     title: "INVENTORY MANAGEMENT",
//     description:
//       "Effortlessly manage your stock levels, track inventory movements, and optimize your storage...",
//   },
//   {
//     icon: "icon-url-here",
//     title: "BILLING AND INVOICING",
//     description:
//       "Generate professional invoices, track payments, and manage your cash flow with ease...",
//   },
//   {
//     icon: "icon-url-here",
//     title: "EXPENSES",
//     description:
//       "Effortlessly manage your stock levels, track inventory movements, and optimize your storage...",
//   },
//   {
//     icon: "icon-url-here",
//     title: "DAY BOOK",
//     description:
//       "Generate professional invoices, track payments, and manage your cash flow with ease...",
//   },
// ];

// const styles: Record<string, React.CSSProperties> = {
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     textAlign: "center",
//   },
//   title: {
//     color: "#333",
//     marginBottom: "40px",
//     fontSize: "2.5rem",
//   },
//   benefits: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   benefit: {
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     width: "30%",
//     marginBottom: "20px",
//     padding: "20px",
//     textAlign: "left",
//   },
//   icon: {
//     width: "24px",
//     height: "24px",
//     marginBottom: "10px",
//   },
//   benefitTitle: {
//     color: "#050505",
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   },
//   benefitDescription: {
//     color: "#666",
//   },
//   readMore: {
//     color: "rgb(29 103 106 / var(--tw-bg-opacity))",
//     textDecoration: "none",
//   },
//   image: {
//     margin: "40px 0",
//   },
//   img: {
//     maxWidth: "100%",
//     height: "auto",
//   },
// };

// const BenefitsPage: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Benefits of GST Billing Software</h1>
//       <div
//         style={{
//           ...styles.image,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "100px",
//         }}
//       >
//         <div style={{ flex: 1, textAlign: "right", paddingRight: "20px" }}>
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             {benefitsLeft.map((benefit, index) => (
//               <div
//                 key={index}
//                 style={{
//                   padding: "15px",
//                   backgroundColor: "var(--tw-bg-opacity)",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <img src={benefit.icon} alt="Icon" style={styles.icon} />
//                 <h3 style={styles.benefitTitle}>{benefit.title}</h3>
//                 <p style={styles.benefitDescription}>{benefit.description}</p>
//                 <a href="#" style={styles.readMore}>
//                   + Read more
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//         <img
//           src="public/images/benefits_of_gst_billing_and_invoicing_software-222x300.webp"
//           alt="GST Billing Software"
//           style={styles.img}
//         />
//         <div style={{ flex: 1, textAlign: "left", paddingLeft: "20px" }}>
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             {benefitsRight.map((benefit, index) => (
//               <div
//                 key={index}
//                 style={{
//                   padding: "15px",
//                   backgroundColor: "var(--tw-bg-opacity)",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <img src={benefit.icon} alt="Icon" style={styles.icon} />
//                 <h3 style={styles.benefitTitle}>{benefit.title}</h3>
//                 <p style={styles.benefitDescription}>{benefit.description}</p>
//                 <a href="#" style={styles.readMore}>
//                   + Read more
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitsPage;
