const Compare = () => {
  const plans = [
    {
      name: "Not-Infected",
      img: "/NotInfected.jpg",
      isMostPop: true,
    },
    {
      name: "Infected",
      img: "/peumoniaInfected.jpeg",
      isMostPop: true,
    },
  ];

  return (
    <section id="infection">
      <div
        id="get-started"
        className="border-y py-28 sm:my-16"
        style={{
          background:
            "linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0) 100%)",
        }}
      >
        <div className="custom-screen text-gray-600">
          <div className="relative max-w-2xl mx-auto sm:text-center">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Infected vs Non-Infected
            </h2>
            <div className="ml-10 mt-3 max-w-xl">
              <p className="text-center">
                Contrasting outcomes of infection versus non-infection.
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-6 justify-center gap-6 sm:flex sm:space-y-0">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl border shadow-lg ${
                  item.isMostPop ? "bg-gray-800 text-gray-300" : "bg-white"
                }`}
              >
                <div className="h-full p-8 gap-y-4 flex flex-col items-stretch">
                  <span
                    className={`font-medium ${
                      item.isMostPop ? "text-sky-400" : "text-sky-500"
                    }`}
                  >
                    {item.name}
                  </span>
                  <div
                    className={`text-3xl font-semibold ${
                      item.isMostPop ? "text-white" : "text-gray-800"
                    }`}
                  >
                    <img className="rounded-xl" src={item.img} alt="infected" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
