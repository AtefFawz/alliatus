import Right from "../../assets/work/22.png";
import Left from "../../assets/work/23.png";
import { motion } from "framer-motion";
export default function HowIsIt() {
  const arrayOfObject = [
    {
      title: "This Is for You If...",
      items: [
        "You’re an entrepreneur, solopreneur, or freelancer",
        "You crave honest feedback and outside perspective",
        "You want to help others while evolving yourself",
        "You value real conversations over shallow networking",
      ],
      image: Right,
      style: "bg-[#FFDD81] ",
      order: "order-2",
      initial: { opacity: 0, x: -200 },
      whileInView: { opacity: 1, x: 0 },
    },
    {
      title: "This Is NOT  for You If...",
      items: [
        "You’re just looking to promote your business",
        "You can’t commit to regular attendance",
        "You’re not open to giving or receiving feedback",
        "You prefer passive learning to active participation",
      ],
      image: Left,
      style: "bg-transparent  border-1",
      order: "order-1",
      initial: { opacity: 0, x: 200 },
      whileInView: { opacity: 1, x: 0 },
    },
  ];
  // Debug
  return (
    <div className="md:my-42 my-25 ">
      <h1 className="text-center text-2xl md:text-5xl lg:text-4xl font-medium mb-16 tracking-wide">
        Made for People{" "}
        <span className="block text-3xl md:text-6xl lg:text-7xl font-extrabold pt-5">
          Like You
        </span>
      </h1>
      <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 ">
        {arrayOfObject.map((e, i) => {
          return (
            <motion.div
              initial={e.initial}
              whileInView={e.whileInView}
              transition={{ duration: 0.6 }}
              key={i}
              className={`${e.style} rounded-2xl lg:p-8 p-2 flex flex-col  lg:items-start w-full `}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl py-8">
                {e.title}
              </h1>
              <img
                src={e.image}
                alt="Image How Is It"
                className={`object-cover w-full h-full ${e.order} `}
              />
              {e.items.map((e, i) => {
                return (
                  <p
                    key={i}
                    className="border-1 lg:p-3 py-2 px-4 my-2 rounded-full lg:w-fit lg:text-xl text-sm lg:tracking-wider order-1 bg-[#ffffff] font-sans text-wrap "
                  >
                    {e}
                  </p>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
