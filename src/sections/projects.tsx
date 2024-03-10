// import Java from "../assets/images/java.png";
import ReactIcon from "../assets/images/react.png";
import Nodejs from "../assets/images/node.png";
import Python from "../assets/images/python.png";
// import Javascript from "../assets/images/js.png";
import Tailwind from "../assets/images/tailwind.png";
import Nextjs from '../assets/images/nextjs-icon.svg'
// import Github from "../assets/images/java.png";
// import Figma from "../assets/images/figma.png";
import AWS from "../assets/images/aws.png";
import Firebase from "../assets/images/firebase.png";
// import Postgresql from "../assets/images/postgresql.png";
import MongoDB from "../assets/images/mongoDB.png";
// import Linux from "../assets/images/linux.png";
// import Redux from "../assets/images/redux.png";

import {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.7 }
};

function Projects() {
  const control = useAnimation();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);



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

        <motion.div 
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-3 sm:gap-2"
          >
            <a href="https://github.com/Vicba/NLP-lyrics-genre" target="_blank">
                <div className="max-w-[350px] sm:max-w-[400px] m-auto text-left flex flex-col h-36 p-4 bg-white/10 rounded-md border border-slate-400 hover:border-slate-700 transition-colors duration-75 cursor-pointer">
                    <h1 className="font-semibold mb-1">NLP-lyrics-genre</h1>
                    <p className="text-sm text-gray-800/70">Using NLP to classify lyrics sentences into the rap or pop genre.
                    </p>
                    <div className="flex flex-row justify-start items-center mt-6 mb-3 gap-2">
                      <img src={Python} alt="Python" className="h-6" />
                    </div>
                </div>
            </a>
            <a href="https://github.com/Vicba/SentimentAPI" target="_blank">
                <div className="max-w-[350px] sm:max-w-[400px] m-auto text-left flex flex-col h-36 p-4 bg-white/10 rounded-md border border-slate-400 hover:border-slate-700 transition-colors duration-75 cursor-pointer">
                    <h1 className="font-semibold mb-1">SentimentAPI</h1>
                    <p className="text-sm text-gray-800/70">
                      API where users can analyse the sentiment of text with their API keys.
                    </p>
                    <div className="flex flex-row justify-start items-center mt-6 mb-3 gap-2">
                      <img src={Nextjs} alt="nextjs" className="h-5" />
                      <img src={Python} alt="python" className="h-6" />
                      <img src={Tailwind} alt="tailwindcss" className="h-6" />
                    </div>
                </div>
            </a>

             <a href="https://github.com/Vicba/Chapro" target="_blank">
                <div className="max-w-[350px] sm:max-w-[400px] m-auto text-left flex flex-col h-36 p-4 bg-white/10 rounded-md border border-slate-400 hover:border-slate-700 transition-colors duration-75 cursor-pointer">
                    <h1 className="font-semibold mb-1">Chapro</h1>
                    <p className="text-sm text-gray-800/70">Project management app that allows users to
                      schedule and assign tasks with team members.
                    </p>
                    <div className="flex flex-row justify-start items-center mt-6 mb-3">
                      <img src={Firebase} alt="firebase" className="h-7" />
                      <img src={ReactIcon} alt="react" className="h-6" />
                    </div>
                </div>
            </a>

            <a href="https://github.com/Vicba/Sociali" target="_blank">
                <div className="max-w-[350px] sm:max-w-[400px] m-auto text-left flex flex-col h-36 p-4 bg-white/10 rounded-md border border-slate-400 hover:border-slate-700 transition-colors duration-75 cursor-pointer">
                    <h1 className="font-semibold mb-1">Sociali</h1>
                    <p className="text-sm text-gray-800/70">Very simple instagram like photo-sharing app. This project was made 
                      to explore the world of AWS.
                    </p>
                    <div className="flex flex-row justify-start items-center mt-6 mb-3 gap-2">
                      <img src={ReactIcon} alt="react" className="h-6" />
                      <img src={Nodejs} alt="nodejs" className="h-5" />
                      <img src={MongoDB} alt="MongoDB" className="h-5" />
                      <img src={AWS} alt="aws" className="h-5" />
                      <img src={Tailwind} alt="tailwind" className="h-5" />
                    </div>
                </div>
            </a>

            <a href="https://github.com/Vicba/In-browser-markdown-editor" target="_blank">
                <div className="max-w-[350px] sm:max-w-[400px] m-auto text-left flex flex-col h-36 p-4 bg-white/10 rounded-md border border-slate-400 hover:border-slate-700 transition-colors duration-75 cursor-pointer">
                    <h1 className="font-semibold mb-1">In-Browser Markdown editor</h1>
                    <p className="text-sm text-gray-800/70">In-browser markdown editor, I like it as an open tab to make personal notes or things to remember.

                    </p>
                    <div className="flex flex-row justify-start items-center mt-6 mb-3 gap-2">
                      <img src={Nextjs} alt="nextjs" className="h-5" />
                      <img src={Tailwind} alt="tailwind" className="h-5" />
                    </div>
                </div>
            </a>

            <div>
                <div className="max-w-[350px] sm:max-w-[400px] m-auto text-left flex flex-col h-36 p-4 bg-white/10 rounded-md border border-slate-400  transition-colors duration-75">
                    <h1 className="font-semibold mb-1">Ongoing...</h1>
                    <p className="text-sm text-gray-800/70">Building backend of internal RAG solution for ML6. Using python, terraform and GCP

                    </p>
                    {/* <div className="flex flex-row justify-start items-center mt-6 mb-3 gap-2">
                      <img src={Nextjs} alt="nextjs" className="h-5" />
                      <img src={Tailwind} alt="tailwind" className="h-5" />
                    </div> */}
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
