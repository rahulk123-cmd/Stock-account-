import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';

const PartnerForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      phone: phone,
      otp: otp,
      email: email,
      pinCode: pinCode
    };
    console.log(formData);
  };

  const handleSendOTP = () => {
    // Implement OTP sending logic here
    setOtpSent(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Side: Marketing Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join 10,000+ Vyapar Partners Worldwide
            </h1>
            <div className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
              <p>Join Vyapar, the fastest growing Billing & Accounting software for small businesses</p>
              <p>Zero investment and no infrastructure required</p>
              <p>Payment settlements every week</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 max-w-xl p-6 md:p-8">
            <form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg w-full"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Become a Partner
              </h2>
              
              {/* Name Input */}
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="mb-4">
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <span 
                    className="inline-flex items-center px-3 rounded-l-md border border-r-0 
                      border-gray-300 bg-gray-50 text-gray-500 text-sm 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                {!otpSent && (
                  <button 
                    type="button" 
                    onClick={handleSendOTP}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800 
                      dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Send OTP
                  </button>
                )}
              </div>

              {/* OTP Input */}
              {otpSent && (
                <div className="mb-4">
                  <label 
                    htmlFor="otp" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength="6"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
              )}

              {/* Email Input */}
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              {/* PIN Code Input */}
              <div className="mb-6">
                <label 
                  htmlFor="pinCode" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  PIN Code
                </label>
                <input
                  type="text"
                  id="pinCode"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  pattern="[0-9]{6}"
                  maxLength="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full px-4 py-2 text-sm font-medium text-white 
                  bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                  dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerForm;