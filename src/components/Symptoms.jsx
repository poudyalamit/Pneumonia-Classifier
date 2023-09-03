import Fever from "../../public/Fever.png";
import Cough from "../../public/Cough.jpg";
import ShortnessofBreath from "../../public/ShortnessofBreath.webp";
import ChestPain from "../../public/ChestPain.jpg";
import ChillsandSweating from "../../public/ChillsandSweating.png";
import LayoutEffect from "./Layout";

const Symptoms = () => {
  const testimonials = [
    {
      avatar: Fever,
      name: "Fever",

      quote:
        "  Pneumonia often causes an elevated body temperature. Fever is thebody's natural response to infection. An elevated temperature helps the immune system fight off the invading microorganisms. The  air sacs may fill with fluid or pus (purulent material), causingcough with phle gm or pus, fever, chills, and difficulty  breathing.A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia.",
    },
    {
      avatar: Cough,
      name: "Coughing",

      quote:
        " A persistent cough is a hallmark symptom of pneumonia. It may start as a dry cough and progress to a productive cough with yellow, green, or bloody mucus. Coughing is the body's way of trying to clear the airways of irritants and infection.",
    },
    {
      avatar: ShortnessofBreath,
      name: "Shortness of Breath",

      quote:
        " Difficulty breathing or shortness of breath can occur because the infection and inflammation in the lungs can interfere with the normal exchange of oxygen and carbon dioxide. This symptom can range from mild to severe and may be more pronounced during physical activity.",
    },
    {
      avatar: ChestPain,
      name: "Chest Pain",

      quote:
        "Chest pain can result from the inflammation of the pleura, the lining around the lungs. It's often described as a sharp or stabbing pain, especially when taking deep breaths or coughing.",
    },
    {
      avatar: ChillsandSweating,
      name: "Chills and Sweating",

      quote:
        " Many people with pneumonia experience chills and excessive sweating, especially during fever spikes. These are typical  responses to infection and temperature changes.",
    },
  ];

  return (
    <section id="symptoms">
      <div className="py-20 sm:py-28">
        <div className="custom-screen">
          <div className="max-w-2xl sm:text-center md:mx-auto">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              What are the Symptoms of Pneumonia?
            </h2>
            <p className="mt-3 text-gray-600">
              These are the most common on every individuals
            </p>
          </div>
          <div className="mt-12">
            <LayoutEffect
              isInviewState={{
                trueState: "opacity-100 translate-y-0",
                falseState: "opacity-0 translate-y-8",
              }}
            >
              <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, idx) => (
                  <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-42"
                        />
                        <div>
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700 text-justify">
                          {item.quote}
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                ))}
              </ul>
            </LayoutEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
