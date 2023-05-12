import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen space-x-2">
      <div className="w-12 h-12 border-2 border-pink-600 border-t-0 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
