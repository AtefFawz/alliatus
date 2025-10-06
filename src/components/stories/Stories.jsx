import { motion } from "motion/react";

export default function Stories() {
  const arrayOfObjects = [
    {
      description:
        "“I joined on a whim, but it’s become a constant in my growth. Everyone brings such honest energy — I leave every session clearer and more focused.”",
      footer: "— Taylor B. / Creative Coach",
    },
    {
      description:
        "“It’s rare to find a space that’s this structured and this human. I’ve made more progress in 3 months than I had in a year alone.”",
      footer: "— Samir R. / Indie Developer",
    },
    {
      description:
        "“The feedback is gold. Supportive, but not sugarcoated. I always feel seen and challenged in the best way.”",
      footer: "— Renee L. / Marketing Strategist",
    },
    {
      description:
        "“I used to overthink every move in my business. Now I have a circle that keeps me grounded, focused, and—honestly—excited to show up.”",
      footer: "— Alex M. / Wellness Entrepreneur",
    },
    {
      description:
        "“This isn’t just another online group — it feels like a team. The accountability and support have helped me stay consistent like never before.”",
      footer: "— Jordan K. / Freelance Illustrator",
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
    <section id="stories" className="container mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <h2 className="md:text-5xl text-4xl text-center md:text-start pb-5 md:pb-0">
          What Our Members
          <span className="md:text-7xl text-6xl font-bold "> Are Saying</span>
        </h2>
        {arrayOfObjects.map((item, index) => {
          return (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -7 }}
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg h-full font-sans"
            >
              <p className="tracking-wide text-md">{item.description}</p>
              <h5 className="pt-12 text-lg">{item.footer}</h5>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
