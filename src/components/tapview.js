import React, { useState } from "react";
import tabview_1 from "../img/tapview-1.png";
import tabview_2 from "../img/tapview-2.png";
import tabview_3 from "../img/tapview-3.png";
import tabview_4 from "../img/tapview-4.png";



function TapView() {
    const [activeTab,setActiveTab]=useState("tab1");
  const tabs = [
    { id: "tab1", label: "Custom storefront" },
    { id: "tab2", label: "Advertising tools" },
    { id: "tab3", label: "Data and analytics" },
    { id: "tab4", label: "Customers support" },
  ];

  const tabContent = {
    tab1: (
      <div className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center">
        <div className="flex sm:flex-col md:flex-col lg:flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">
            Set up a store that showcases your brand
          </h1>
          <br/>
          <p>
            Differentiate yourself from the competition with a full store
            dedicated to your products- no coding or design skills necessary!
          </p>
        </div>
        <div>
          
          <img src={tabview_1} alt="tabview-1" />
        </div>
      </div>
    ),
    tab2: (
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">
            Increase exposure by up to 120% with a suite of smart advertising tools.
            </h1>
            <br/>
            <p>
            Get your products placed in the right spots to be noticed by the exact audience you are targeting.
            </p>
          </div>
          <div>
            <img src={tabview_2} alt="tabview-2"/>
          </div>
        </div>
      ),
      tab3: (
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">
            Optimize your every move with in-depth data and customer insights
            </h1>
            <br/>
            <p>
            Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!
            </p>
          </div>
          <div>
            <img src={tabview_3} alt="tabview-3" />
          </div>
        </div>
      ),
      tab4: (
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">
            Know you're supported throughout your journey
            </h1>
            <br/>
            <p>
            From onboarding help to online chats to local support during business hours and account optimization tips -- we're here for you
            </p>
          </div>
          <div>
            <img src={tabview_4} alt="tabview-4" />
          </div>
        </div>
      )
  };

  return (
    <div className="min-h-screen w-full  ">
        <div>
            <h1 className="flex sm:px-5 md:px-5 items-center justify-center text-3xl text-red-800 font-bold py-24">Grow your business with a suite of tools built for you</h1>
        </div>
      <div className="max-w-full flex sm:flex-col md:flex-col lg:flex-row items-center justify-center md:px-10 sm:px-5  lg:gap-40 lg:px-32 ">
        <div className="flex flex-col border-l  text-lg">
            {tabs.map((tab)=>(
                <button key={tab.id}
                className={` px-4 py-2 text-start font-semibold ${
                    activeTab === tab.id ? "border-l-8 border-red-500 text-red-500 " : " text-gray-500 hover:text-red-500"
                    
                }`}
                onClick={() => setActiveTab(tab.id)}
                >
                    
                    {tab.label}
                </button>
                
                ))}
        </div>
        <div >
                {tabContent[activeTab]}

        </div>
      </div>
    </div>
  );
}

export default TapView;
