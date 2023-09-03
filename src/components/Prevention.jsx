const Prevention = () => {
  const features = [
    {
      title: "Vaccination",
      desc: "Pneumococcal Vaccine: This vaccine protects against Streptococcus pneumoniae, a common cause of bacterial pneumonia. It is recommended for children, older adults, and individuals with certain health conditions.",
    },
    {
      title: "Good Hygiene",
      desc: "Handwashing: Regularly washing hands with soap and water for at least 20 seconds can help prevent the spread of respiratory infections.Respiratory Hygiene: Cover your mouth and nose when coughing or sneezing, preferably with a tissue or the inside of your elbow. Dispose of tissues properly and wash your hands immediately.",
    },
    {
      title: "Avoid Smoking",
      desc: "Smoking damages the respiratory system and weakens the immune system, making you more susceptible to pneumonia. Avoid smoking, and steer clear of secondhand smoke.",
    },
    {
      title: "Limit Alcohol and Drug Use",
      desc: "Excessive alcohol consumption and drug abuse can weaken your immune system and make you more susceptible to pneumonia. Limit these substances or seek help if needed.",
    },
    {
      title: "Promptly Treat Respiratory Infections",
      desc: "If you develop symptoms of a respiratory infection (e.g., cough, fever, difficulty breathing), seek medical attention promptly. Early treatment can prevent complications like pneumonia.",
    },
    {
      title: "Manage Chronic Conditions",
      desc: "If you have chronic conditions like diabetes, asthma, or heart disease, manage them effectively. These conditions can weaken your immune system and increase your pneumonia risk.",
    },
  ];

  return (
    <section id="prevention">
      <div className="py-20 sm:py-28">
        <div className="custom-screen text-gray-600">
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Find out the Preventive measures on Pneumonia
            </h2>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-5 text-justify">
                  <div className="flex-none w-8 h-8 border rounded-full text-sky-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-800 font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 p-5 border border-5 shadow-2xl">
          <img src="/stats.png" className="py-2" alt="stats" />
        </div>
      </div>
    </section>
  );
};

export default Prevention;
