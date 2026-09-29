import React from 'react';

export function CrossIcon() {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      <span className="absolute block w-6 h-0.5 bg-gray-800 rounded-sm transform rotate-45"></span>
      <span className="absolute block w-6 h-0.5 bg-gray-800 rounded-sm transform -rotate-45"></span>
    </div>
  );
}
