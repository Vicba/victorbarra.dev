import React from "react";

import Java from "../assets/images/java.png";
import ReactIcon from "../assets/images/react.png";
import Nodejs from "../assets/images/node.png";
import Python from "../assets/images/python.png";
import Javascript from "../assets/images/js.png";
import Tailwind from "../assets/images/tailwind.png";
import Github from "../assets/images/java.png";
import Figma from "../assets/images/figma.png";
import AWS from "../assets/images/aws.png";
import Firebase from "../assets/images/firebase.png";
import MySQL from "../assets/images/mysql.png";
import MongoDB from "../assets/images/mongoDB.png";
import Linux from "../assets/images/linux.png";
import Redux from "../assets/images/redux.png";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-auto md:h-auto text-center py-16 flex items-center justify-center md:mb-24 md:mt-8"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 md:mt-12">
          <h2 className="text-4xl mx-4 md:text-5xl font-extrabold">
            Personal Projects
          </h2>
          <p className="text-xl mx-3 md:text-xl py-6 text-gray-500">
            Click One To Visit Code
          </p>
        </div>

        <div className="flex flex-col space-y-10 items-start justify-center lg:flex-row lg:space-x-20 lg:space-y-0">
          <a href="https://github.com/Vicba/Chapro" target="_blank">
            <div className="border rounded-xl shadow-xl w-70 mx-10 md:w-60 md:mx-3 lg:h-98">
              <div className="bg-gray-400 flex items-center justify-center h-20 rounded-t-xl bg-blue-500/60 backdrop-brightness-75">
                <p className="text-2xl font-bold absolute text-white">Chapro</p>
              </div>
              <div className="py-2 px-5">
                <h3 className="text-left font-extrabold text-xl mt-3 text-dark-blue">
                  Chapro
                </h3>
                <p className="text-left text-gray-400 mt-2 ">
                  Chapro is a project management app that allows users to
                  schedule and assign tasks with team members. It helps you stay
                  organized and collaborate effectively.
                </p>
                <div className="flex flex-row justify-start mt-6 mb-3">
                  <img src={Firebase} alt="firebase" className="h-8" />
                  <img src={ReactIcon} alt="react" className="h-7" />
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/Vicba/Sociali" target="_blank">
            <div className="border rounded-xl shadow-xl w-70 mx-10 md:w-60 md:mx-3 lg:h-98">
              <div className="bg-gray-400 flex items-center justify-center h-20 rounded-t-xl bg-orange-600/70 backdrop-brightness-75">
                <p className="text-2xl font-bold absolute text-white">
                  Sociali
                </p>
              </div>
              <div className="py-auto px-5">
                <h3 className="text-left font-extrabold text-xl mt-5 text-dark-blue">
                  Sociali
                </h3>
                <p className="text-left text-gray-400 mt-2 pb-8">
                  Sociali is a simple instagram like photo-sharing app that
                  allows users to share photos of their unique moments with
                  friends and followers.
                </p>
                <div className="flex flex-row justify-start mt-5 mb-5 space-x-3">
                  <img src={ReactIcon} alt="react" className="h-7" />
                  <img src={Nodejs} alt="nodejs" className="h-7" />
                  <img src={MongoDB} alt="MongoDB" className="h-6" />
                  <img src={AWS} alt="aws" className="h-6" />
                  <img src={Tailwind} alt="tailwind" className="h-6" />
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/Vicba/Kinderdome" target="_blank">
            <div className="border rounded-xl shadow-xl w-70 mx-10 md:w-60 md:mx-3 lg:h-98">
              <div className="bg-gray-400 flex items-center justify-center h-20 rounded-t-xl bg-green-600/60 backdrop-brightness-75">
                <p className="text-2xl font-bold absolute text-white">
                  Kinderdome
                </p>
              </div>
              <div className="py-2 px-5">
                <h3 className="text-left font-extrabold text-xl mt-3 text-dark-blue">
                  Mars
                </h3>
                <p className="text-left text-gray-400 mt-2 pb-1">
                  Kinderdome is a full stack school project where a team of 5
                  students made a mock start-up which offers data management
                  software for kindergartens
                </p>
                <div className="flex flex-row justify-start items-center mt-12 mb-3 space-x-3">
                  <img src={Java} alt="java" className="h-7" />
                  <img src={Javascript} alt="Javascript" className="h-6" />
                  <img src={MySQL} alt="mlysql" className="h-7" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
