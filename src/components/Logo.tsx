import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="https://stockandaccountbook.com/logo.png" 
        alt="Stock And Account Book" 
        className="w-10 h-10"
      />
    <span
              className={`ml-3 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-colorBlueApp  to-appColor`}
            >
              Stock And Account Book
            </span>
    </div>
  );
}
