import { useEffect, useState } from "react";
import images from "../assets/princeprof.png";
import { MdAttachment } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { Link,Element  } from 'react-scroll';
import {
  FiChevronDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import SkillsShowcase from "./Skillsandexp";
import Contact from "./Contact";
const BodyImage = () => {
  const TypewriterText = ({ text, delay = 300 }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, delay]);

    return (
      <span className="inline-block">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    );
  };

  const project_Project = [
    {
      name: "Real State App",
      technolgy: ["React Js", "Bootstrap css", "React Router", "Custom hook"],
      description:
        "Designed and developed the frontend of a real estate platform to manage customers, agents, properties, and agreements",
      link: "https://realestateqaapp.2sign.co.il/en/signin",
      imglink: "image/realState.png",
    },
    {
      name: "Saloon Booking Service",
      technolgy: [
        "React Js",
        "Tailwind css",
        "React Router",
        "Custom hook",
        "Redux Toolkit",
        "JWT",
        "Node Js",
        "MongoDB",
        "Express JS",
      ],
      description:
        "Developed a full-stack booking platform enabling users to find nearby salons, schedule services, and make payments.Implemented role-based access for users, salons, and artists with secure routing and session control.",
      link: "https://beautytime-eta.vercel.app/",
      imglink: "image/salonApp.png",
    },
    {
      name: "Sahibot",
      technolgy: [
        "React Js",
        "Tailwind css",
        "React Router",
        "Redux Toolkit",
        "JWT",
        "Node Js",
        "MySql",
        "Express JS",
      ],
      description:
        "Built a full-stack task management app with React.js, Node.js, MySql and Express.js, featuring a 2-day trial and subscription model.Enabled company owners to assign tasks, track statuses (Completed, In Progress, Pending), and manage team productivity.",
      link: "https://biz.sahibot.com/",
      imglink: "image/sahibot.png",
    },
    {
      name: "Case Converter and Text Analyzer",
      technolgy: ["React Js", "CSS", "BootStrap CSS"],
      description:
        "Built a full-stack task management app with React.js, Node.js, MySql and Express.js, featuring a 2-day trial and subscription model.Enabled company owners to assign tasks, track statuses (Completed, In Progress, Pending), and manage team productivity.",
      link: "https://caseconverterandtextanalyser.vercel.app/",
      imglink: "image/caseconvertor.png",
    },
  ];

  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-purple-950 to-blue-950">
        <div className="w-full md:w-[1240px] pt-20 pb-10 px-5 md:px-0">
          <section id="home">
            <div className="w-[150px] rounded-full mx-auto mb-[10px] overflow-hidden shadow-2xl">
              <img src={images} alt="" />
            </div>
            <h1 className="text-center text-4xl md:text-5xl font-bold text-white">
              Prince Prajapati
            </h1>
            <div className="text-center my-5 text-xl text-white font-semibold">
              <TypewriterText text={"MERN Stack Developer"} />
            </div>
            <div className="text-center text-gray-300 text-justify md:text-lg md:text-lcenter">
              <p >
                I’m a passionate MERN Stack Developer skilled in building
                scalable, full-stack web applications using MongoDB, Express,
                React, and Node.js.
              </p>
              <p>
                I thrive on solving real-world problems with clean code,
                seamless UI/UX, and robust backend logic.
              </p>
            </div>
            <div className="flex justify-center md:gap-x-10 flex-col gap-y-5 md:flex-row  mt-[50px]">
              <button className="flex items-center gap-x-5 bg-gradient-to-r from-purple-900 to-red-500 shadow-2xl py-3 px-5 text-lg font-semibold text-white rounded-3xl">
                View my work
                <FaArrowRight />
              </button>
              <button className="flex items-center gap-x-5 border shadow-2xl py-3 px-5 text-lg font-semibold text-white rounded-3xl">
                Dowload CV
                <FiDownload />
              </button>
            </div>
          </section>
          <section>
            <div className="flex justify-center space-x-6 mt-[20px] animate-fade-in-up animation-delay-700">
              {[FiGithub, FiLinkedin, FiMail].map((Icon, index) => (
                <div key={index} className="group cursor-pointer">
                  <Icon
                    size={24}
                    className="hover:text-purple-400 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12"
                  />
                </div>
              ))}
            </div>
            <div className="hidden md:block absolute bottom-0 left-1/2  transform -translate-x-1/2 animate-bounce">
              <FiChevronDown size={32} className="text-purple-400" />
            </div>
          </section>

          <section className="mt-[50px] md:mt-[200px]" id="aboutus">
            <div className="flex justify-center">
              <h1 className="w-fit text-center text-4xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-red-900  to-rose-100">
                About Us
              </h1>
            </div>
            <div>
              <p className="text-gray-300 mt-[20px] text-justify md:text-center md:text-lg  ">
                I am a passionate MERN Stack Developer with strong experience in
                building responsive and dynamic web applications using MongoDB,
                Express.js, React, and Node.js. Currently working at Aadi IT
                Services LLP, I’ve contributed to multiple live projects and
                developed several self-initiated applications that solve
                real-world problems. I specialize in creating clean, scalable
                code and have a deep interest in full-stack development, RESTful
                APIs, and modern UI design. Alongside MERN, I also have hands-on
                experience with WordPress and have a keen ability to learn and
                adapt quickly. With a B.Tech in Computer Science Engineering
                from SRMU Lucknow, I’m committed to continuous learning and
                crafting digital experiences that deliver real value.
              </p>
            </div>
          </section>
          <section id="project">
            <div className="flex justify-center mt-5">
              <h1 className="w-fit py-2 text-center text-4xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-red-900  to-rose-100">
                Featured Projects
              </h1>
            </div>
            <div className="mt-[40px] grid gap-4 md:grid-cols-2">
              {project_Project?.map((el) => {
                return (
                  <div className="w-full h-full flex flex-col">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={el?.imglink}
                        alt={el.name}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-950 from-20% via-gray-700 to-white opacity-50"></div> */}
                      <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs text-white font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="px-5 py-4 flex-1 flex flex-col">
                      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white mb-3 leading-tight">
                        {el.name}
                      </h1>

                      <p className="text-white text-sm leading-relaxed opacity-90 mb-4 flex-1">
                        {el.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {el.technolgy?.map((tech, index) => (
                          <div
                            key={index}
                            className="px-3 py-1.5 border border-gray-600 bg-gray-800/30 backdrop-blur-sm rounded-full text-white text-xs font-medium hover:bg-gray-700/40 transition-colors duration-200"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <a
                          href={el?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-white hover:text-gray-200 transition-all duration-200 group/link border border-gray-600 rounded-lg hover:border-gray-500 hover:bg-gray-800/20"
                        >
                          <FiExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          <span className="text-sm font-medium">
                            View Project
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section id="skills">
             <SkillsShowcase />
          </section>
          <section>
            <Contact/>
          </section>
        </div>
      </div>
    </>
  );
};

export default BodyImage;
