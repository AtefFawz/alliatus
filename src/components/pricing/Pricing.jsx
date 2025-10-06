import { motion } from "motion/react";
export default function Pricing() {
  const price = [
    {
      planName: "Starter",
      price: "€49/mo",
      subTitle: "Perfect for trying things out.",
      features: [
        "2 group sessions/month",
        "Community access",
        "Session summaries",
        "Private messaging",
      ],
      btn: "Join Now",
      isFeatured: false,
      initial: { opacity: 0, x: -200 },
      whileInView: { opacity: 1, x: 0 },
    },
    {
      planName: "Growth",
      price: "€89/mo",
      subTitle: "Our most popular membership.",
      features: [
        "Weekly group sessions ",
        "Goal-tracking tools",
        "Full community access",
        "Access to recordings ",
        "Priority support",
      ],

      btn: "Start Growing",
      isFeatured: true,
      isFeatured: true,
      initial: { opacity: 0, y: -200 },
      whileInView: { opacity: 1, y: 0 },
    },
    {
      planName: "Circle+",
      price: "€149/mo",
      subTitle: "For full support & 1:1 coaching",
      features: [
        "Everything in Growth",
        "Monthly 1:1 coaching",
        "Personalized session recaps",
        "VIP Q&A calls ",
        "Early event access",
      ],

      btn: "Join Circle+",
      isFeatured: false,
      initial: { opacity: 0, x: 200 },
      whileInView: { opacity: 1, x: 0 },
    },
  ];
  return (
    <section id="pricing">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center pb-23">
        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Plans
        </span>{" "}
        That Fit You
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5 w-full gap-y-12`}
      >
        {price.map((item, index) => (
          <motion.div
            initial={item.initial}
            whileInView={item.whileInView}
            transition={{ delay: 0.5, duration: 0.5 }}
            key={index}
            className={`w-full h-full  rounded-xl flex flex-col justify-evenly py-5 items-center md:p-3 lg:p-12 gap-6 text-center ${
              item.isFeatured
                ? "shadow-2xl scale-y-105 bg-[#FFDD81]"
                : "shadow-0 bg-[#ffffff]"
            }`}
          >
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              {item.planName}
            </h1>
            <h3 className="text-xl md:text-xl lg:text-3xl  text-[#303030] font-light">
              {item.subTitle}
            </h3>
            <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold py-5">
              {item.price}
            </span>
            <ul>
              {item.features.map((e, i) => (
                <li
                  key={i}
                  className="text-lg md:text-xl lg:text-2xl py-4 text-[#303030] font-light"
                >
                  {e}
                </li>
              ))}
            </ul>

            <motion.button
              initial={{ scale: 0 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              className="lg:text-2xl text-xl bg-[#303030] text-white text-center w-52 transition duration-50 ease"
            >
              {item.btn}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
