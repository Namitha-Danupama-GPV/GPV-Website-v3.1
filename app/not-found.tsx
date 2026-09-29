import React from "react";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-emerald-400 mb-4">404 - Page Not Found</h1>
      <p className="text-slate-300">The page you are looking for does not exist.</p>
    </div>
  );
}
