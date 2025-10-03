import React, { useEffect, useState } from "react";
import { assets } from "./../assets/assets";
import { projectsData } from "./../assets/assets";

const Projects = () => {
   const[currentIndex,setCurrentIndex]=useState(0)
   const[cardsToShow,setcardsToShow]=useState(1)
  
   useEffect(()=>{
   const updateCartToShow=()=>{
    if( window.innerWidth>= 1024){
      setcardsToShow(projectsData.length);
    }else{
      setcardsToShow(1)
    };
  }
    updateCartToShow();
  
    window.addEventListener('resize',updateCartToShow);
    return()=>window.removeEventListener('resize',updateCartToShow);
   
  },[])

   const nextProject =()=>{
    setCurrentIndex((previousIndex)=>(previousIndex +1)% projectsData.length)
   }
   const previousProject =()=>{
    setCurrentIndex((previousIndex)=>previousIndex===0?projectsData.length-1:previousIndex-1)
   }
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">
        Projects{" "}
        <span className="underline underline-offset-4  decoration-1 under font-light ">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces ,Building Legacies--- Explore Our Portfolio
      </p>

      {/* ............sider-buttons.............. */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={previousProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next"  />
        </button>
      </div>
      {/* Cards.......... */}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}% )`}}>
          {projectsData.map((project, index) => (
            <div  key={index}  className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2>{project.title}</h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1">|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
