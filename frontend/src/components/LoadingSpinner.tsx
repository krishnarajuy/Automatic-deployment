import React from 'react';
import "./LoadingSpinner.css";
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ipl-blue"></div>
    </div>
  );
};

export default LoadingSpinner;