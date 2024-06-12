import { useState } from "react";

import logo from "./assets/logo.svg";
import bg1 from "./assets/bg1.jpg";
import Section from "./Section.jsx";
import Gap from "./Gap.jsx";

function App() {
  return (
    < >
      <nav
        className=" relative h-[60vh] lg:h-screen"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <box className="bg-black absolute right-0 top-0   h-screen w-full opacity-65 "></box>
        <div className=" z-50  w-4/5 lg:w-3/4 m-auto pt-6 relative">
          <div className="flex justify-between ">
            <img className=" opacity-100 w-24  lg:w-36" src={logo} alt="#" />
            <button
              className=" bg-red-600 text-white w-20 rounded-md font-bold"
              type="button"
            >
              Sing In
            </button>
          </div>
          <div className=" lg:text-5xl font-black font-[ Anton, sans-serif] text-white text-center mt-28  ">
            Unlimited movies, TV shows and more
          </div>
          <div className=" text-white text-center mt-6 lg:text-2xl font-medium ">
            {" "}
            Watch anywhere. Cancel anytime.
          </div>
          <div className=" text-white text-center mt-6 lg:text-2xl text-xl font-medium">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className=" lg:flex justify-center w-[70vw] m-auto lg:gap-4 ">
            <input
              className=" bg-zinc-800 opacity-70 border-slate-300 border-2 rounded-md text-center h-14 w-full  max-w-96 text-white"
              type="text"
              placeholder="Enter Your Email"
            />
            <button
              className=" bg-red-600 text-white lg:w-56 lg:h-14 w-40 h-12  rounded-md text-2xl font-bold"
              type="button"
            >
              Get Start
            </button>
          </div>
        </div>
      </nav>
      <Gap />

      <Section
        sty="bg-black text-white lg:flex justify-around items-center w-screen "
        css="absolute right-[83px] top-[98px] "
        line="Enjoy on your TV"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        srcVideo="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
      />
      <Gap />
      <Section
        sty="bg-black text-white lg:flex justify-around items-center w-screen flex-row-reverse"
        line="Download your shows to watch offline"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        srcVideo=""
        css="hidden"
      />
      <Gap />
      <Section
        sty="bg-black text-white lg:flex justify-around items-center w-screen"
        css="absolute lg:left-[129px] left-[89px] top-[42px] lg:w-[62%] w-[58%]"
        line="Watch everywhere"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        srcVideo="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
      />
      <Gap />
      <Section
      line="Create profiles for kids"
        sty="bg-black text-white lg:flex justify-around items-center w-screen flex-row-reverse "
        src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
        srcVideo=""
        css="hidden"
      />
      <Gap/>
      <div className=" text-5xl bg-black text-white font-black text-center">
      Frequently Asked Questions
      </div>
    </>
  );
}

export default App;
