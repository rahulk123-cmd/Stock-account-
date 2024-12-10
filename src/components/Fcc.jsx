import React, { useState } from 'react';
import { FaFileInvoice, FaClipboardList, FaCalculator, FaFileAlt, FaStore, FaCloudUploadAlt, FaSyncAlt, FaTruck } from 'react-icons/fa';

const Fcc = () => {
    const [showMore, setShowMore] = useState({
        billing: false,
        inventory: false,
        accounting: false,
        gstReports: false,
        onlineStore: false,
        autoBackup: false,
        autoSync: false,
        eWayBill: false,
    });

    const handleMouseEnter = (card) => {
        setShowMore((prev) => ({ ...prev, [card]: true }));
    };

    const handleMouseLeave = (card) => {
        setShowMore((prev) => ({ ...prev, [card]: false }));
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-800">
            <h1 className="text-2xl font-bold text-center mb-6 text-appColor dark:text-white">Stock And Account Book features at a glance</h1>
            <div className="flex flex-wrap justify-center sm:justify-around md:justify-between">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaFileInvoice className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">Billing</h2>
                        <p className="text-gray-600 dark:text-gray-300">Create customized GST bills in 10+ formats that comply with the goods and services tax laws of India. Share bills with customers on Whatsapp.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('billing')}
                        onMouseLeave={() => handleMouseLeave('billing')}
                    >
                        + More
                    </button>
                    {/* {showMore.billing ? '- More' : '+ More'} */}
                    {showMore.billing && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaClipboardList className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">Inventory</h2>
                        <p className="text-gray-600 dark:text-gray-300">Track complete inventory with parameters like serial number, batch number, expiry date, and more. Check item wise P&L, discount report etc.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('inventory')}
                        onMouseLeave={() => handleMouseLeave('inventory')}
                    >
                        {showMore.inventory ? '- More' : '+ More'}
                    </button>
                    {showMore.inventory && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaCalculator className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">Accounting</h2>
                        <p className="text-gray-600 dark:text-gray-300">Record, manage and track all your business activities digitally. Get all accounting reports, sales & purchase reports, party-wise reports & expense reports.</p>
                    </div>
                    <button
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('accounting')}
                        onMouseLeave={() => handleMouseLeave('accounting')}
                    >
                        {showMore.accounting ? '- More' : '+ More'}
                    </button>
                    {showMore.accounting && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaFileAlt className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">GST Reports</h2>
                        <p className="text-gray-600 dark:text-gray-300">Generate GST reports including GSTR1, GSTR2, GSTR3B, GSTR9, GST detail report. Export it to your tax consultant in excel or pdf formats easily.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('gstReports')}
                        onMouseLeave={() => handleMouseLeave('gstReports')}
                    >
                        {showMore.gstReports ? '- More' : '+ More'}
                    </button>
                    {showMore.gstReports && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaStore className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">Online Store</h2>
                        <p className="text-gray-600 dark:text-gray-300">Take your business online. Add items with images, additional charges, minimum cart value. View & manage your online orders with order dashboard.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('onlineStore')}
                        onMouseLeave={() => handleMouseLeave('onlineStore')}
                    >
                        {showMore.onlineStore ? '- More' : '+ More'}
                    </button>
                    {showMore.onlineStore && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaCloudUploadAlt className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">Auto Backup</h2>
                        <p className="text-gray-600 dark:text-gray-300">Get a hassle-free auto backup system that ensures that your data is never lost. Back up data to your personal google drive and set backup frequency.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('autoBackup')}
                        onMouseLeave={() => handleMouseLeave('autoBackup')}
                    >
                        {showMore.autoBackup ? '- More' : '+ More'}
                    </button>
                    {showMore.autoBackup && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaSyncAlt className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">Auto Sync</h2>
                        <p className="text-gray-600 dark:text-gray-300">Use on multiple devices and sync your business data. Create user permission to restrict which users can access what features.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('autoSync')}
                        onMouseLeave={() => handleMouseLeave('autoSync')}
                    >
                        {showMore.autoSync ? '- More' : '+ More'}
                    </button>
                    {showMore.autoSync && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md m-2 p-4 w-full sm:w-80 md:w-72 text-center relative">
                    <div className="flex flex-col items-center">
                        <FaTruck className="text-3xl mb-1 mt-0" />
                        <h2 className="text-xl font-semibold text-appColor dark:text-white">E-Way Bill</h2>
                        <p className="text-gray-600 dark:text-gray-300">Generate E-way bill on Vyapar software in a single click after you made the invoice. Share invoice with E-way bill with your transporter.</p>
                    </div>
                    <button 
                        className="absolute bottom-4 right-4 text-teal-600 dark:text-teal-400 hover:underline"
                        onMouseEnter={() => handleMouseEnter('eWayBill')}
                        onMouseLeave={() => handleMouseLeave('eWayBill')}
                    >
                        {showMore.eWayBill ? '- More' : '+ More'}
                    </button>
                    {showMore.eWayBill && (
                        <div className="absolute left-0 right-0 top-0 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-appColor dark:text-white">Additional Features</h3>
                            <p className="text-gray-600 dark:text-gray-300">Feature 1: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 2: Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Feature 3: Description</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Fcc;
