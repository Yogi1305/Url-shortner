import React, { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [text, setText] = useState(""); 
  const [error, setError] = useState(null); 

  const copyToClipboard = async (text) => {
    if (!text.trim()) {
      console.error("Input is empty. Please provide a valid text.");
      setError("Please enter a valid URL or text.");
      return;
    }
    console.log(text);
    try {
      axios.defaults.withCredentials = true; 
      const response = await axios.post("https://url-shortner-m32i.onrender.com/api/shortid", {
        original:text,
      });

      const shortid = `${"https://url-shortner-m32i.onrender.com/api/"}${response?.data?.shortid}`;

      if (!shortid) {
        console.error("No shortid returned by the server.");
        setError("Failed to shorten the URL. Please try again.");
        return;
      }

       navigator.clipboard.writeText(shortid);
      console.log("Copied to clipboard!");
      setError(null); 
    } catch (err) {
      console.error("Error during API call:", err.message);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="text-white border w-screen h-2/3 flex flex-col justify-center items-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter URL or text"
        className="text-black h-10 w-[80%] border rounded-full pl-5 mb-4"
      />
      <button
        onClick={() => copyToClipboard(text)}
        className="w-[10%] h-10 border rounded-full bg-cyan-400"
      >
        Linkly
      </button>
      {error && (
        <p className="text-red-500 mt-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default Hero;
