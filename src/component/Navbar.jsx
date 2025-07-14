import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Element } from "react-scroll";

export default function Navbar() {
  const [mobileView, setmobileView] = useState(window.innerWidth < 768);
  const [isShowmenue, setisShowmenue] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setmobileView(window.innerWidth < 768);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setmobileView(window.innerWidth < 768);
      });
  }, []);

  console.log(mobileView);
  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center px-4 py-4">
        <Link
          to={`home`}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Prince
          </h1>
        </Link>

        {!mobileView && (
          <ul className="flex items-center gap-x-10">
            {["Home", "About Us", "Project", "Skills", "Contact Us"]?.map(
              (el, index) => (
                <li key={index} className="pointer">
                  <Link
                    to={`${el.toLowerCase().replace(/\s/g, "")}`}
                    smooth={true}
                    duration={500}
                    offset={-80} // prevent overlap from fixed navbar
                    className="cursor-pointer"
                  >
                    {el}
                  </Link>
                </li>
              )
            )}
          </ul>
        )}

        {mobileView && (
          <FaBars
            size={28}
            className="text-black cursor-pointer"
            onClick={() => setisShowmenue((prev) => !prev)}
          />
        )}
      </div>

      {/* Mobile Menu (unchanged except for correct Tailwind classes) */}
      <div
        className={`fixed inset-0 z-40 bg-black/75 transition-opacity duration-300 ${
          isShowmenue
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setisShowmenue(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-white z-50 p-5 transition-transform duration-300 ease-in-out ${
            isShowmenue ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="mt-[72px] space-y-4">
            {["Home", "About Us", "Project", "Skills", "Contact Us"].map(
              (el, index) => (
                <li key={index} className="text-black font-semibold" onClick={() => setisShowmenue(false)}>
                  <Link to={`${el.toLowerCase().replace(/\s/g, "")}`}>{el}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
