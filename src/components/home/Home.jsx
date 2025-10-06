import { duration } from "@mui/material";
import ImageHome from "../../assets/home/ImageHome.png";
import { motion } from "motion/react";
export default function Home() {
  const arrayOfData = [
    {
      rate: "82%",
      description:
        "of members say they gained clarity within the first 2 sessions",
    },
    { rate: "93%", description: "report feeling more accountable" },
    {
      rate: "6%",
      description:
        "6-person circles. The sweet spot for focused, diverse conversations.",
    },
    { rate: "75%", description: "return for a second cycle" },
    { rate: "1,200+", description: "hours of mastermind sessions hosted" },
  ];
  // Debugging

  return (
    <section id="home" className="  mt-32  container mx-auto min-w-full ">
      <div className="bg-[#FFDD81] flex justify-between p-8 rounded-lg left-0 right-0 md:flex-row flex-col items-center gap-10 ">
        <div className="flex-1 space-y-13">
          <div className=" ">
            <span className=" text-4xl lg:text-8xl font-extrabold tracking-wider">
              Level Up
            </span>
            <h1 className="inline font-bold text-3xl lg:text-6xl">
              {" "}
              with a Curated Mastermind Circle
            </h1>
          </div>
          <img
            src={ImageHome}
            alt="Image Home"
            className="flex-1 w-full md:max-w-[50%] object-cover block  md:hidden"
          />

          <p className="font-sans font-medium text-lg lg:text-3xl ">
            Alliatus connects ambitious people into small, handpicked groups for
            honest feedback, strategy sessions, and real accountability.{" "}
          </p>

          <div className="flex gap-5 md:flex-row w-full justify-center md:justify-start items-center font-sans ">
            <motion.button
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              className=" bg-[#404040] text-white w-full  text-sm lg:text-xl  hover:shadow-lg"
            >
              Apply Now
            </motion.button>
            <motion.button
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#404040",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.9 }}
              className=" text-[#404040] w-full text-sm lg:text-xl  bg-transparent border-2 border-[#404040]  text-nowrap hover:shadow-lg"
            >
              Learn How It Works
            </motion.button>
          </div>

          {/* Div Rate */}
          <div className="space-y-5 font-sans">
            <h2 className=" font-bold text-xl lg:text-2xl">
              4.9★ average rating
            </h2>
            <h3 className="lg:text-2xl text-xl ">
              Feedback from real members across sessions.
            </h3>
          </div>
        </div>

        <img
          src={ImageHome}
          alt="Image Home"
          className="flex-1 w-full md:max-w-[50%] object-cover md:block hidden"
        />
      </div>
      {/* Div Data */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-4 grid-cols-3 lg:grid-cols-5 w-full md:gap-7 gap-2 lg:gap-10 border-2 border-[#404040] rounded-2xl p-3 md:px-5 color-[#404040] mt-10 justify-items-center items-center "
      >
        {arrayOfData.map((item, index) => {
          return (
            <div key={index} className="col-span-1">
              <h1 className="md:font-bold font-light lg:font-bold text-2xl md:text-3xl lg:text-5xl ">
                {item.rate}
              </h1>
              <h4 className="font-light py-2 text-gray-600 text-xs md:text-md lg:text-lg">
                {item.description}
              </h4>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
