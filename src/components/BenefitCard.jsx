import React, { useState } from 'react';

const BenefitCard = ({ icon, title, description, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          {expandedContent && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-red-500 text-sm flex items-center"
              >
                + Read more
              </button>
              {isExpanded && (
                <p className="mt-2 text-gray-600">{expandedContent}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BenefitCard;