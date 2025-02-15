

import React from 'react';
import Image from "next/image";
const FintechProjects = () => {
  return (
    
    <div id="projects" className="container max-w-6xl max-md:max-w-md mx-auto z-50 ">


<div className="px-6 sm:py-20 py-10">
  <div className="max-w-screen-xl mx-auto text-center text-white">
    <h1 className="text-4xl max-sm:text-3xl font-extrabold leading-tight mb-4">Our Projects</h1>
    <p className="text-lg mb-8 text-gray-400">The projects we deliver are always based on a great idea requiring a unique software solution. The scope of our projects ranges from individual software for startups to large scale national and international solutions.</p>
  </div>
</div>



    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-12">
  {fintechProjects.map((project, index) => (
    <div key={index}
    className="text-gray-200 bg-[#03001417] backdrop-blur-md z-50 p-4 flex flex-col items-center shadow-xl shadow-gray-800/50 from-white to-black dark:from-black dark:to-gray-800 via-gray-800 after:content-[' '] after:absolute after:w-full after:h-full after:top-1/2 after:-translate-y-1/2 after:shadow-xl after:shadow-gray-800/50 dark:after:shadow-gray-800/50 shadow"
    >
        <Image
            src={project.imageSrc}
            alt={project.title}
            width={130}
            height={100}
            className="w-50 h-20 object-contain mb-4"
          />
      <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
      <p className="text-gray-400 mb-4 text-center">{project.description}</p>
      {/* <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
        <a className="Welcome-text text-[14px] bg-[#1d4137]">Explore</a>
      </div> */}
    </div>
  ))}
</div>
    </div>
  );
};

const fintechProjects = [
  {
    title: 'MetaXperts',
    description:
      'A leading ERP software solutions company, dedicated to providing custom software solutions that redefine business operations.',
      imageSrc: '/MetaXperts.png',
    exploreHref: '#',
  },
  {
    title: 'Order Booking App',
    description:
      'This app is designed to simplify & optimize the order management process for businesses, ensuring seamless and efficient operations.',
      imageSrc: '/CourageLogo.png',
      exploreHref: '#',
  },
  {
    title: 'Financial Management',
    description: 
    'Streamline accounting management with ledger tracking, stock amounts, and integrated calculations. Gain insights into operations with GPX data visualization',
    // all within a unified ERP platform.',
    imageSrc: '/Finance.png',
    exploreHref: '#',
  },
  {
    title: 'E R P',
    description:
      'This app seamlessly connects people, places, and processes for effortless management and data-driven decisions.',
      //  Gain a holistic view, boost efficiency, and make smarter moves, faster.',
      imageSrc: '/ERP2.png',
      exploreHref: '#',
  },
  {
    title: 'Inventory System',
    description:
      'A centralized platform to oversee stock, purchases, various order types (PRRs, SOs, SRs, POs), and individual items.',
      // Imagine real-time inventory visibility, optimized stock levels, automated workflows',
      imageSrc: '/inventory1.png',
    exploreHref: '#',
  },
  {
    title: 'Food App',
    description:
      'Coming Soon',
      imageSrc: '/FOOD2.png',
    exploreHref: '#',
  },
];

export default FintechProjects;

// bg-[#423c60d0]