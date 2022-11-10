import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import Picker from 'emoji-picker-react';

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef();
  const [showEmojis, setShowEmojis] = useState(false)

  const addImageToPost = () => {};
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
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75
             rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              ></div>
              <XIcon className="text-white h-5" />
            </div>
          )}
          <img
            src={selectedFile}
            alt=""
            className="rounded-2xl max-h-80 object-contain"
          />
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center ">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                ref={filePickerRef}
                hidden
                onChange={addImageToPost}
              />
            </div>
            <div className="icon rotate-90 " >
                <ChartBarIcon className=" text-[#1d9bf0] h-[22px] " />
              </div>

              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>
              {
                showEmojis && (
                  <div style={{
                    position: "absolute",
                    marginTop: "480px",
                    marginLeft: -40,
                    borderRadius: "20px",
                  }}>
                  <Picker
               theme="dark"
               width={300}
               height={380}
               />
               </div>
                )
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;