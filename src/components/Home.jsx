import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/home.png";
import img2 from "../assets/img/img2.png";
import img4 from "../assets/img/img4.png";
import card from "../assets/img/cards.png";
import polygon from "../assets/img/p1.png";
import btn from "../assets/img/btn.png";
import img5 from "../assets/img/img5.png";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
import gif from "../assets/img/gif.gif"

const cardData = [
  { icon: one, text: "Subtext or description goes here." },
  { icon: two, text: "Subtext or description goes here." },
  { icon: three, text: "Subtext or description goes here." },
  { icon: four, text: "Subtext or description goes here." },
];
const Home = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="w-[1920px] h-[1012px] bg-[url('assets/img/home.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center px-5 lg:px-32">
        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-[64px] font-extrabold leading-tight">
            Innovating Wellness,
            <br />
            Empowering lives
          </h1>
          <p className="text-[18px] ">
            At TrueBridge, we are committed to improving your well-being with
            cutting-edge healthcare solutions and personalized service. Discover
            a range of treatments, advice, and support, all tailored to help you
            lead a better, healthier life.
          </p>
          <Button title="See Services" />
        </div>
      </div>

      {/* 2nd Section (Centered in the page) */}
      <div className="w-full bg-white text-[#0054AD] ml-24 py-20 px-5 lg:px-32 flex justify-center items-center">
  <div className="max-w-7xl w-full">
    <h2 className="text-[32px] sm:text-[36px] font-semibold text-center mb-12 mr-48">
      Welcome to TrueBridge
    </h2>

    <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
      
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src={img5}
          alt="Display"
          className="hidden lg:block absolute top-[10px] left-[380px] transform -translate-x-1/2 w-[519.43px] h-[641px] object-contain z-0"
        />

        <div className="flex justify-start w-full">
  <div className="relative z-10 w-full  mt-40 ml-10 lg:ml-[-300px] ">
  <img
    src={gif} 
    alt="Animated GIF"
    className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[230px] h-[230px] object-contain z-20"
  />
    <img
      src={img2}
      alt="Overlay"
      className="w-619 h-416 object-contain"
    />
    <div className="absolute inset-10 flex flex-col items-end justify-center text-start px-4">
      <p className="text-[#0054AD] text-[32px] font-semibold max-w-[80%] left-[-20px]">
        Subtext or description goes here. It can be multiline and centered.
        Sample content for alignment. It adjusts responsively.
      </p>
    </div>
  </div>
</div>

      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <h3 className="text-[28px] sm:text-[32px] font-medium">
          Driven by innovation.<br />Dedicated to Wellness.
        </h3>
        <p className=" sm:text-[18px] text-black w-[500px] leading-relaxed py-2">
          At TrueBridge, we are committed to improving your well-being with cutting-edge
          healthcare solutions and personalized service. Discover a range of treatments,
          advice, and support, all tailored to help you lead a better, healthier life.
        </p>

        {/* Cards */}
        <div className="space-y-6 mt-8 flex flex-col items-center lg:items-start">
          {cardData.map((item, idx) => (
            <div key={idx} className="relative w-full max-w-[493px] h-[54px]">
              <img
                src={img4}
                alt="Base"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center px-4 text-[#013771] text-[16px] font-medium">
                <p className="max-w-[80%]">{item.text}</p>
              </div>
              <img
                src={item.icon}
                alt="Icon"
                className="absolute top-3 left-4 w-[39px] h-[39px] object-cover rounded-full z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Cards Section */}
      <div className="mt-80 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className=" text-center rounded-xl">
              {/* Card as a base */}
              <div className="w-full relative min-h-[300px] max-w-[330px] bg-white rounded-lg shadow-xl mb-6 sm:mb-8 md:mb-10">
                {/* Card Content */}
                <div className="p-4 flex flex-col justify-center h-full">
                  <div className="mt-20">
                    <h3 className="text-lg font-semibold mb-0">Card {i + 1}</h3>
                    <h4 className="text-md text-[18px] font-medium text-black mb-1">
                      Subheading Title
                    </h4>

                    <p className="text-[14px] text-black font-light mb-8">
                      You can add more details or content here as needed.
                      dtfdyugytudgytudugdug tydfuigytduifyguidfygtuidygt
                      uidrygtuidryuityder uigtydruigytderuiyt
                      uiderytuiderygtuier
                    </p>
                  </div>
                </div>
                {/* Overlay Image */}

                <img
                  src={polygon}
                  alt="Overlay"
                  className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[82%] max-w-[258px] h-[209px] object-contain z-10"
                />
                <img
                  src={btn}
                  alt="Overlay"
                  className="absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[82%] max-w-[50px] h-[50px] object-contain z-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
     {/* Cards Section */}
     <div className="mt-20 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className=" text-center rounded-xl">
              {/* Card as a base */}
              <div className="w-full relative min-h-[300px] max-w-[330px] bg-white rounded-lg shadow-xl mb-6 sm:mb-8 md:mb-10">
                {/* Card Content */}
                <div className="p-4 flex flex-col justify-center h-full">
                  <div className="mt-20">
                    <h3 className="text-lg font-semibold mb-0">Card {i + 1}</h3>
                    <h4 className="text-md text-[18px] font-medium text-black mb-1">
                      Subheading Title
                    </h4>

                    <p className="text-[14px] text-black font-light mb-8">
                      You can add more details or content here as needed.
                      dtfdyugytudgytudugdug tydfuigytduifyguidfygtuidygt
                      uidrygtuidryuityder uigtydruigytderuiyt
                      uiderytuiderygtuier
                    </p>
                  </div>
                </div>
                {/* Overlay Image */}

                <img
                  src={polygon}
                  alt="Overlay"
                  className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[82%] max-w-[258px] h-[209px] object-contain z-10"
                />
                <img
                  src={btn}
                  alt="Overlay"
                  className="absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[82%] max-w-[50px] h-[50px] object-contain z-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
           {/* Cards Section */}
           <div className="mt-20 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className=" text-center rounded-xl">
              {/* Card as a base */}
              <div className="w-full relative min-h-[300px] max-w-[330px] bg-white rounded-lg shadow-xl mb-6 sm:mb-8 md:mb-10">
                {/* Card Content */}
                <div className="p-4 flex flex-col justify-center h-full">
                  <div className="mt-20">
                    <h3 className="text-lg font-semibold mb-0">Card {i + 1}</h3>
                    <h4 className="text-md text-[18px] font-medium text-black mb-1">
                      Subheading Title
                    </h4>

                    <p className="text-[14px] text-black font-light mb-8">
                      You can add more details or content here as needed.
                      dtfdyugytudgytudugdug tydfuigytduifyguidfygtuidygt
                      uidrygtuidryuityder uigtydruigytderuiyt
                      uiderytuiderygtuier
                    </p>
                  </div>
                </div>
                {/* Overlay Image */}

                <img
                  src={polygon}
                  alt="Overlay"
                  className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[82%] max-w-[258px] h-[209px] object-contain z-10"
                />
                <img
                  src={btn}
                  alt="Overlay"
                  className="absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[82%] max-w-[50px] h-[50px] object-contain z-10"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
  <div className="mt-20 px-5 lg:px-32 flex flex-col lg:flex-row items-start justify-center gap-10 w-[1928] h-[711] bg-[#2E3192]">
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      alt="Side Image"
      className="w-full max-w-[500px] h-auto object-contain"
    />
  </div>

  <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-200 hover:shadow-xl transition duration-300"
      >
        <h4 className="text-[#0054AD] text-lg font-semibold mb-2">Card Title {i + 1}</h4>
        <p className="text-sm text-gray-600">
          Short description or content goes here for card {i + 1}.
        </p>
      </div>
    ))}
  </div>
</div>
<div className="mt-20 w-full px-5 lg:px-32">
  <div className="bg-[#F5F8FC] rounded-xl shadow-md p-8 text-center">
    <h2 className="text-[#0054AD] text-2xl sm:text-3xl font-semibold mb-4">
      Explore More With TrueBridge
    </h2>
    <p className="text-[#333] text-sm sm:text-base max-w-2xl mx-auto mb-6">
      Discover additional services, insights, or offerings tailored to support your wellness journey.
    </p>
    <img
      alt="Additional Info"
      className="mx-auto w-full max-w-[500px] h-auto object-contain"
    />
  </div>
</div>


    </div>
    
  );
};

export default Home;
