import React from "react";

const Bgpage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="relative w-full max-w-4xl rounded-2xl p-8 shadow-lg">
        <img src="./mobilebox.png" alt="Event Banner" className="w-full rounded-lg mb-4 max-h-[500px] md:content-[url('./box.png')]"  />
        {/* <img src="./box.png" alt="Event Banner" className="w-full rounded-lg mb-4  sm:content-[url('./mobilebox.png')]"  /> */}
      </div>
      <footer className="mt-10 text-center">
        <p className="text-gray-400">NEXT GENERATION IP ECOSYSTEM</p>
        <p className="text-gray-500 text-sm">&copy; 2025 Pentagon Games</p>
      </footer>
    </div>
  );
};

export default Bgpage;

