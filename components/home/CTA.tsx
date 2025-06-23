'use CLient'

import React from "react";
import { useState } from "react";

function CTA() {


  const [copied, setCopied] = useState(false);

  const email = 'info-muneeb@proton.me';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy email');
    }
  };


  const handleClick = () => {
    // Try mailto first, fallback to copying
    window.location.href = `mailto:${email}`;
    setTimeout(() => {
      if (!document.hidden) { // If mailto failed
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }, 500);
  };



  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Interested in Working Together?
        </h2>
        <p className="mb-4" >Don't worry a guidance call is totally free</p>
        <div className="flex flex-col items-center">

        <a
          href="https://wa.me/923314588024" target="_blank"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Chat on Whatsapp
        </a>

        <a
          onClick={copyEmail}
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          {copied ? "Copied": "info-muneeb@proton.me"}
        </a>

        </div>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
