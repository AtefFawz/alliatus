import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
export default function Footer() {
  const obj = {
    pages: [
      "Home",
      "About",
      "Works",
      "Stories",
      "Events",
      "Pricing",
      "FAQ",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
    ],
    icons: [
      TwitterIcon,
      WhatsAppIcon,
      InstagramIcon,
      LinkedInIcon,
      FacebookIcon,
    ],
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full container mx-auto  bg-[#404040] rounded-2xl px-2 text-white  mt-10
    "
    >
      <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl py-10 px-7">
        Alliatus
      </h1>
      {/* Parent Div */}
      <div className="grid md:grid-cols-2 grid-cols-1 w-full p-2 md:p-8 gap-5">
        {/* Section Tow  */}
        <div className="px-2 order-2 md:order-1">
          <ul className="grid grid-cols-3 md:grid-cols-2 md:gap-7 gap-3">
            {obj.pages.map((e, i) => (
              <li key={i} className="text-xl md:text-2xl">
                {e}
              </li>
            ))}
          </ul>
          <div className="pt-10 space-y-5 text-lg font-medium tracking-wider font-sans">
            <h4>© 2025 Alliatus. All rights reserved.</h4>
            <h5>Powered by connection, clarity, and community.</h5>
          </div>
        </div>
        {/* Section Tow */}
        <div className="bg-[#FFDD81] h-fit  rounded-2xl p-4 lg:p-8 md:p-6 text-[#303030] space-y-6 w-full md:order-1 order-1">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-6">
            Let’s Get{" "}
            <span className="font-extrabold text-3xl md:text-4xl lg:text-5xl py-10 ">
              Started!
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Join a supportive circle of minds and start growing with intention.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            There’s a seat at the table waiting for you.
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="bg-[#404040] text-white"
          >
            Join Alliatus
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
