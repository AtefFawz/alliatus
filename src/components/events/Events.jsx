import Amira from "../../assets/events/Image.png";
import Lucas from "../../assets/events/Image2.png";
import Elena from "../../assets/events/Image3.png";
import Jason from "../../assets/events/Image4.png";
import { motion } from "framer-motion";
export default function Events() {
  const arrayOfObjects = [
    {
      imageUrl: Amira,
      title: "Creative Strategist & Group Facilitator",
      name: "Amira Sullivan",
      description:
        "With over a decade of guiding creative professionals, Amira brings clarity, structure, and a spark of inspiration to every session.",
      initial: { opacity: 0, x: -200 },
      whileInView: { opacity: 1, x: 0 },
    },
    {
      imageUrl: Lucas,
      name: "Lucas Varela",
      title: "Accountability Coach & Solopreneur",
      description:
        "Lucas helps members stay focused and follow through with intention. His calm energy and practical tools make progress feel possible.",
      initial: { opacity: 0, y: -200 },
      whileInView: { opacity: 1, y: 0 },
    },
    {
      imageUrl: Elena,
      name: "Elena Morozova",
      title: "Mindset Coach & Community Builder",
      description:
        "Elena supports members through thoughtful reflection and honest conversation. Her strength lies in helping people see the bigger picture.",
      initial: { opacity: 0, y: 200 },
      whileInView: { opacity: 1, y: 0 },
    },
    {
      imageUrl: Jason,
      name: "Jason Kim",
      title: "Startup Mentor & Strategic Thinker",
      description:
        "With a background in tech and coaching, Jason brings sharp insight and a deep belief in peer-led growth. He’s known for asking just the right questions.",
      initial: { opacity: 0, x: 200 },
      whileInView: { opacity: 1, x: 0 },
    },
  ];
  return (
    <section id="events" className="container mx-auto ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center pb-23">
        Meet Your{" "}
        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold block">
          Facilitators
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 ">
        {arrayOfObjects.map((item, index) => {
          return (
            <motion.div
              initial={item.initial}
              whileInView={item.whileInView}
              transition={{ duration: 0.5, delay: 0.4 }}
              key={index}
              className="flex flex-col gap-4"
            >
              <img
                src={item.imageUrl}
                alt={item.imageUrl}
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              />
              <h1 className="font-bold text-xl text-gray-900">{item.name}</h1>
              <h3>{item.title}</h3>
              <p className="text-sm pt-3 text-[#303030]">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
