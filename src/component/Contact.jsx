import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiExternalLink,
} from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
const socialImage = [
  {
    img: "image/githublogo.png",
    link: "https://github.com/prince73100",
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    img: "image/linkedinlogo.png",
    link: "https://www.linkedin.com/in/prince-prajapati-266325242/",
    name: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    img: "image/leetcodes.png",
    link: "https://leetcode.com/princepjng85/",
    name: "LeetCode",
    icon: <FaCode className="w-5 h-5" />,
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgqpvyy");

  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  return (
    <footer className="relative  to-gray-900 text-white overflow-hidden" id="contactus">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 md:w-[1240px] w-full mx-auto  pt-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mt-5">
            <h1 className="w-fit py-2 text-center md:text-5xl text-4xl font-bold  bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-red-900  to-rose-100">
              Let's Talk
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and discuss how we
            can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16  mx-auto">
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                <FiMail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </h3>
                <a
                  href="mailto:princepjng85@gmail.com"
                  className="text-white hover:text-yellow-400 transition-colors font-medium break-all"
                >
                  princepjng85@gmail.com
                </a>
              </div>
              <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>

          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-400/20 rounded-xl text-blue-400 group-hover:bg-blue-400/30 transition-colors">
                <FiPhone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-400 mb-1">
                  Phone Number
                </h3>
                <a
                  href="tel:+917310070056"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  +91 7310070056
                </a>
              </div>
              <FiPhone className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
        {!state.succeeded ? (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
              Send a Quick Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  name="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm font-medium"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  name="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm font-medium"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                name="message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm font-medium"
              />
              <button
                className="w-full bg-gradient-to-r from-purple-900 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-red-400 transition-all duration-300 flex items-center justify-center gap-2 group"
                type="submit"
                disabled={state.submitting}
              >
                <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        ) : (
          <>
            <p className="text-green-400 text-center font-bold text-4xl">
              Thanks for joining!
            </p>
          </>
        )}
        <div className="text-center mb-12">
          <div className="flex justify-center my-5">
            <h1 className="w-fit py-2 text-center md:text-5xl text-4xl font-bold  bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-red-900  to-rose-100">
              Find Me
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {socialImage.map((social, index) => (
              <a
                key={`alt-${index}`}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 group"
              >
                {social.icon}
                <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors">
                  {social.name}
                </span>
                <FiExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-full border border-gray-700">
            <FiMapPin className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">Based in India</span>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              <span className="font-medium text-white">
                © 2025 Prince Prajapati
              </span>
              <span className="ml-2">All rights reserved</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
