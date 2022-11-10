import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide`}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            placeholder="What's happening?"
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg
             placeholder-gray-500 tracking-wide w-full min-h-[50px] scrollbar-hide "
          />
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
