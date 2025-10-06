import About_Image from "../../assets/about/about_image.png";
import { motion } from "framer-motion";

export default function About() {
  const arrayOfObjects = [
    {
      title: "",
      description:
        "Alliatus is a curated mastermind platform that brings together motivated individuals in small groups for deep conversation, honest feedback, and collective accountability.",
      bg: "",
    },
    {
      title: "Small, Handpicked Circles",
      description:
        "You’re matched with 5–6 people who are aligned with your stage, goals, and mindset.",
      bg: "#ffffff",
    },
    {
      title: "Real Conversations",
      description:
        "No fluff. Get feedback, ask for help, and brainstorm challenges in structured calls.",
      bg: "#ffffff",
    },
    {
      title: "Consistent Growth",
      description:
        "Ongoing sessions to help you stay accountable, make bold moves, and reach goals faster.",
      bg: "#ffffff",
    },
  ];
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section id="about" className="container mx-auto w-full h-full ">
      <div className="flex justify-center w-full text-center">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold w-86 ">
          <span className="text-5xl lg:text-4xl font-extrabold">Not</span> Your
          Typical Networking Group
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 py-5 md:py-20 gap-x-13 justify-items-center h-full justify-between">
        <img
          src={About_Image}
          alt="About_Image"
          className="w-full pt-8 h-full "
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-5  w-full h-full"
        >
          {arrayOfObjects.map((item, index) => {
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                style={{ backgroundColor: item.bg }}
                className="lg:p-18 md:p-6 p-7 rounded-xl space-y-8"
              >
                <h1 className="font-medium text-lg md:text-xl">{item.title}</h1>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
