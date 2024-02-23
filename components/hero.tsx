import React from "react";
import Qoute from "../assets/qoute";
import LinkedIn from "../assets/linkedIn";
import Github from "../assets/github";
import Twitter from "../assets/twitter";

const Hero = () => {
  return (
    <div className="flex  mx-auto max-w-7xl px-2 sm:px-6 py-12 lg:px-8 mt-6">
      <div className="w-[57%] h-full  relative">
        <div id="info " className="z-10 relative">
          <h1 className="text-5xl py-28 font-bold text-white">
            <strong className="text-8xl">Sharif</strong>
            <br /> Didier Habimana.
          </h1>
          <h1 className=" font-bold text-white text-xl">
            Software Developer + <br /> DevOps
          </h1>
          
          <div className="w-[3em] h-[.3em] bg-[#EB6B44]"></div>
          <div className="flex gap-3 mt-4">
            <LinkedIn/>
            <Github/>
            <Twitter/>
            
            </div>
        </div>
        <div
          id="image"
          className="h-[20em] w-[25em]  absolute right-0 top-0  z-0 rounded-t-full gradient-border"
        >
           <img src="https://res.cloudinary.com/trio-code/image/upload/v1708334765/u2iixs1ubpqvrryvdl8b.png" alt="" />

        </div>
      </div>
      <div className="w-[43%] h-full px-8 ">
        <blockquote
          cite="https://www.huxley.net/bnw/four.html"
          className="py-10 "
        >
          <p className="text-white font-medium text-lg">
            <Qoute/>
            Sharif’s exemplary role as a contract React developer for
            Leerecs.com's project was marked by unparalleled dedication and a
            proactive mindset that transcended typical responsibilities.
          </p>
          <footer>
            —Antonio L,{" "}
            <cite>
              Vice President, User Experience Design at JPMorgan Chase & Co.
            </cite>
          </footer>
        </blockquote>
        <div className=" w-full flex relative">
        <div className="w-[50%] text-sm font-bold text-white">Breaking Free from Lazy Programming Habits: Essential Practices for Productive Developers</div>
        <div className="w-[50%]">
            <img src="https://media.licdn.com/dms/image/D4D12AQGc8N1igguSZQ/article-cover_image-shrink_720_1280/0/1684353427484?e=1714003200&v=beta&t=5o8E4dYNj9VYw8wSxuz9kXYoPpyNut2k2rlv3HVcT9U" alt="" />
        </div>
        

        </div>
        <div className="bg-[#EB6B44] w-full py-6 text-white text-2xl font-bold text-center">
            See More Blogs
        </div>
      </div>
    </div>
  );
};

export default Hero;
