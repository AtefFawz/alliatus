import HowIsIt from "./Who IsIt";
import Woman from "../../assets/work/woman.png";
import { motion } from "framer-motion";

export default function Works() {
  const arrayOfObject = [
    {
      number: "01",
      title: "Apply Online",
      description:
        "Tell us about your goals, background, and what kind of support you’re seeking.",
      type: "card",
      bg: "#FFDD81",
      span: "lg:col-span-2 md:col-span-2",
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "We carefully place you in a mastermind circle of 5–6 aligned members.",
      type: "card",
      bg: "#ffffff",
      span: "lg:col-span-4 md:col-span-3",
    },

    { image: Woman, type: "image", span: "lg:col-span-2 md:col-span-2" },

    {
      number: "03",
      title: "Join Bi-Weekly Sessions",
      description:
        "Meet over Zoom for structured, focused conversations led by a trained host.",
      type: "card",
      bg: "#ffffff",
      span: "lg:col-span-2  md:col-span-3",
    },
    {
      number: "04",
      title: "Grow With Accountability",
      description:
        "Set goals, stay on track, and get continuous feedback from your circle.",
      type: "card",
      bg: "#ffffff",
      span: "lg:col-span-2 md:col-span-3",
    },
    {
      title: "what’s included",
      description:
        "Private online community Goal-tracking and reflection tools Access to session recordings (optional for privacy) Session prep templates & prompts Library of expert resources",
      type: "card",
      span: "lg:col-span-4 md:col-span-5 ",
      bg: "#ffffff",
    },
  ];
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="container mx-auto w-full" id="works">
      <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold pb-16 max-w-120 tracking-wide">
        From Application to Transformation —{" "}
        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold block">
          {" "}
          Step by Step
        </span>
      </h1>
      <motion.div
        variants={containerVariants}
        v
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
        className="p-0 grid grid-cols-1 lg:grid-cols-6 md:grid-cols-5 justify-items-center gap-4   "
      >
        {arrayOfObject.map((item, index) => {
          if (item.type === "image") {
            return (
              <div
                key={index}
                className={`${item.span} row-span-2 rounded-lg w-full `}
              >
                <img
                  src={item.image}
                  alt="Image Works"
                  className={`w-full  h-full  object-cover overflow-hidden`}
                />
              </div>
            );
          } else {
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                style={{ backgroundColor: item.bg }}
                className={`h-full ${item.span} row-span-1 lg:p-8 p-4 rounded-xl flex flex-col  w-full justify-center text-[#303030] tracking-wider `}
              >
                <h1 className=" text-xl md:text-2xl font-medium ">
                  <span className="md:font-bold font-medium text-3xl md:text-5xl text-shadow-gray-600 text-shadow-lg text-[#000000]">
                    {item.number}
                  </span>{" "}
                  {item.title}
                </h1>
                <p className="md:text-lg text-sm mt-6 lg:leading-16 ">
                  {item.description}
                </p>
              </motion.div>
            );
          }
        })}
      </motion.div>
      <HowIsIt />
    </section>
  );
}
