/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { TfiEmail } from "react-icons/tfi";
import { MdSendToMobile } from "react-icons/md";

const socialImage = [
  { img: "image/githublogo.png", link: "https://github.com/prince73100" },
  {
    img: "image/linkedinlogo.png",
    link: "https://www.linkedin.com/in/prince-prajapati-266325242/",
  },
  { img: "image/leetcodes.png", link: "https://leetcode.com/princepjng85/" },
];
const Contact = () => {
  return (
    <>
      <footer className="footer">
        <center className="lettalk">
          <h1 className="text-4xl font-bold mt-10">
            let's <i className="text-yellow-300">talk</i>
          </h1>
        </center>
        <div className="contact mt-10">
          <div className="  bg-slate-200 rounded flex justify-center items-center gap-x-4 h-12 w-60">
            <span className="">
              <TfiEmail />
            </span>
            <a href="mailto:princepjng85@gmail.com" className="">
              princepjng85@gmail.com
            </a>
          </div>
          <div className="bg-slate-200 rounded flex justify-center items-center gap-x-4 h-12 w-60">
            <span className="">
              <MdSendToMobile />
            </span>
            <h1 className="">+917310070056</h1>
          </div>
        </div>
        <center className="">
          <div className="findme">
            <h1 className="text-4xl font-bold mt-10">
              Find{" "}
              <span className="text-yellow-300">
                <i> me</i>
              </span>
            </h1>
          </div>
          <div className="sociallink">
            {socialImage.map((image) => (
              <a href={image.link}>
                <img src={image.img} alt="" />
              </a>
            ))}
          </div>
          <div className="rights mt-12">
            <i>2024 Prince</i>
            <p>All rights reserved</p>
          </div>
        </center>
      </footer>
    </>
  );
};

export default Contact;
