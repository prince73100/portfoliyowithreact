import React, { useState } from 'react';
import { FaCode, FaDatabase, FaPalette, FaGlobe, FaMobileAlt, FaServer, FaBrain,FaBolt   } from 'react-icons/fa';

const SkillsShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    {
      name: "React",
      level: 75,
      category: "frontend",
      icon: <FaCode className="w-5 h-5" />,
      description: "Building modern, interactive user interfaces"
    },
    {
      name: "Node.js",
      level: 68,
      category: "backend",
      icon: <FaServer className="w-5 h-5" />,
      description: "Server-side JavaScript development"
    },
    {
      name: "TypeScript",
      level: 62,
      category: "language",
      icon: <FaCode className="w-5 h-5" />,
      description: "Type-safe JavaScript development"
    },
    {
      name: "MongoDB",
      level: 65,
      category: "database",
      icon: <FaDatabase className="w-5 h-5" />,
      description: "NoSQL database design and optimization"
    },
    {
      name: "Next.js",
      level: 60,
      category: "frontend",
      icon: <FaGlobe className="w-5 h-5" />,
      description: "Full-stack React framework"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaBolt className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <FaGlobe className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <FaServer className="w-4 h-4" /> },
    { id: 'mobile', name: 'Mobile', icon: <FaMobileAlt className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <FaPalette className="w-4 h-4" /> }
  ];

  const filteredSkills = activeTab === 'all' ? skills : skills.filter(skill => skill.category === activeTab);

  return (
    <div className="min-h-screen mt-[50px]">
      <div className="md:w-[1240px] w-full ">
        <div className="text-center mb-12">
          <div className="flex justify-center mt-5">
              <h1 className="w-fit py-2 text-center text-4xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-red-900  to-rose-100">
                My Skills & Expertise
              </h1>
            </div>
          <p className="text-gray-300 md:text-lg  mx-auto">
            A comprehensive overview of my technical skills, proficiency levels, and areas of expertise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Proficiency</span>
                  <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skills Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-sm text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Core Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.slice(0, 4).map((skill) => (
              <div key={skill.name} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-700"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${skill.level}, 100`}
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-white font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsShowcase;