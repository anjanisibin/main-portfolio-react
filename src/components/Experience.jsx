import React from 'react'

import download from "../assets/download.jpg";
import download1 from "../assets/download.jpg";
import download2 from "../assets/download.jpg";
import download3 from "../assets/download.jpg";
import download4 from "../assets/download.jpg";
import download5 from "../assets/download.jpg";


const Experience = () => {
    const techs =[
        {
            id:1,
            src:download,
            title:'download',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:download1,
            title:'download1',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:download2,
            title:'download2',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:download3,
            title:'download3',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:download4,
            title:'download4',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:download5,
            title:'download5',
            style:'shadow-white'
        },
    ]

    return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Experience;