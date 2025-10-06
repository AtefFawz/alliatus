import { useRef, useEffect, useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  // Logic for Navbar
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section One From Navbar
  const data = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "How it works", path: "works" },
    { name: "Stories", path: "stories" },
    { name: "Events", path: "events" },
    { name: "Pricing", path: "pricing" },
  ];
  console.log(active);
  //   Extracting the names and creating links
  const extract = data.map((item, ind) => {
    return (
      <a
        key={ind}
        href={`#${item.path}`}
        className={`font-bold text-xl md:text-lg lg:text-xl ${
          active === item.path
            ? "text-blue-500 font-bold border-b-2"
            : "text-gray-600"
        }`}
      >
        {item.name}
      </a>
    );
  });

  // Section Two From Navbar

  const extract2 = data.map((item, ind) => {
    return (
      <a
        key={ind}
        href={`#${item.path}`}
        className={`font-bold text-xl ${
          active === item.name
            ? "text-blue-500 font-bold border-b-2"
            : "text-gray-600"
        }`}
      >
        {item.name}
      </a>
    );
  });

  const navRef = useRef(null);
  function showNavbar() {
    navRef.current.classList.toggle("showNav");
  }

  return (
    <div className=" overflow-hidden md:px-3 lg:px-4 md:py-7 bg-white/30 rounded-b-3xl   fixed top-0 left-0 right-0 z-50 md:backdrop-blur-xl container mx-auto ">
      <div className="hidden md:block px-5">
        <header className="flex flex-row justify-between max-w-full gap-x-7 items-center  ">
          <h1 className="shrink text-3xl lg-text-3xl font-extrabold tracking-wide italic bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
            Alliatus
          </h1>
          <nav className="flex flex-row justify-around min-w-fit gap-x-5 lg:gap-x-16 flex-none items-center">
            {extract}
            <button className="font-medium text-xl italic border-1 px-7 py-1 rounded-lg text-gray-600 hover:bg-blue-500 hover:text-white hover:font-bold transition duration-400 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500 hover:border-0 ">
              LOG IN
            </button>
          </nav>
        </header>
      </div>
      {/* Navbar Tow */}
      <header className="md:hidden max-w-full pb-5 z-10 ">
        <nav
          className="md:hidden px-5 pt-5 flex justify-between items-center"
          onClick={showNavbar}
          id="menu"
        >
          <DensityMediumIcon />
          <h1 className=" text-2xl lg-text-3xl font-extrabold italic">
            {" "}
            Alliatus{" "}
          </h1>
        </nav>

        <nav
          ref={navRef}
          id="navhide"
          className="flex flex-col gap-10 items-start px-5  "
        >
          <div ref={navRef} onClick={showNavbar} id="close">
            <CloseIcon />
          </div>
          {/* {extract} */}
          {extract2}
        </nav>
      </header>
    </div>
  );
}
