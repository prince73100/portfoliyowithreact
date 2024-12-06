import images from "../assets/princeprof.png";
import { MdAttachment } from "react-icons/md";
const BodyImage = () => {
  return (
    <>
      <div className="backimage mt-0">
        <h1 className="text-center py-4 text-4xl font-bold text-yellow-300">
          About Me
        </h1>
        <div className="flex justify-center my-5">
          <div className="w-11/12  lg:flex lg:justify-around lg:items-center md:flex md:justify-around md:items-center">
            <div className="image flex justify-center ">
              <img src={images} alt="" className="rounded-2xl" width={350} />
            </div>
            <div className="flex justify-center mt-5 sm:flex sm:justify-center">
              <div className="paragraph rounded-2xl" style={{ width: "350px" }}>
                <p className="text-white">
                  I am a passionate MERN Stack Developer with expertise in
                  building scalable, user-centric web applications. Proficient
                  in ReactJS, Node.js, Express.js, and MongoDB, I specialize in
                  designing and developing full-stack solutions that deliver
                  seamless user experiences.
                </p>
                <br />
                <b className="text-yellow-300">Education-</b>
                <p className="text-white">
                  B.Tech Computer Science and Engineering. Shri Ramswaroop
                  Memorial University,Lucknow. CGPA 7.71
                </p>
              </div>
            </div>
          </div>
        </div>
        <center className="pb-10">
          <button className="btn">
            <a href="image/princeNauReu.pdf">Resume </a>
            <span>
              <MdAttachment />
            </span>
          </button>
        </center>
      </div>
    </>
  );
};

export default BodyImage;
