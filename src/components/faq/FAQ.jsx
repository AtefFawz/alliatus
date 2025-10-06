import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FaqImage from "../../assets/faq/26.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
// Component
import Footer from "../footer/Footer";
export default function FAQ() {
  const faq = [
    "Can I join from anywhere?",
    "What if I can’t make a live session?",
    "Is there a long-term commitment?",
    "Who are the other members?",
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
    <section className=" container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="row-span-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-16 row-span-1">
            Frequently Asked
            <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold block py-8">
              Questions
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFDD81] p-10 rounded-xl w-full h-fit row-span-1 col-span-1 "
          >
            <h4 className="flex justify-between text-xl font-bold gap-1">
              How do the group sessions work?{" "}
              <span className="border-1 rounded-2xl text-center p-2">
                <ArrowUpwardIcon />
              </span>
            </h4>
            <p className="text-lg py-8 max-w-lg font-light text-[#303030]">
              Each session takes place on Zoom and follows a guided structure,
              including check-ins, goal sharing, and peer feedback. You’ll
              always know what to expect.
            </p>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src={FaqImage}
          alt="FaqImage"
          className="object-cover w-full h-full row-span-2 rounded-xl"
        />
      </div>
      {/* <div className="py-10"> */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10"
      >
        {faq.map((e, index) => (
          <motion.li
            variants={cardVariants}
            whileHover={{ y: -7, backgroundColor: "#ffdd81", border: "none" }}
            transition={{ duration: 0.3 }}
            key={index}
            className="w-full border-1 min-h-16 max-h-full rounded-xl text-xl md:text-lg lg:text-2xl flex justify-between items-center p-6 gap-2 border-[#303030]"
          >
            {e}{" "}
            <span className="border-1 rounded-xl p-1">
              <ArrowDownwardIcon />
            </span>
          </motion.li>
        ))}
      </motion.ul>
      {/* </div> */}
      <Footer />
    </section>
  );
}
