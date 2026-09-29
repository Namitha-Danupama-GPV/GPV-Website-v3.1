import React from 'react';

export function HamburgerMenu() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
      <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
      <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
    </div>
  );
}