import Doctor from "../../public/Doctor.png";

import LayoutEffect from "./Layout";

const Hero = () => {
  return (
    <LayoutEffect
      isInviewState={{
        trueState: "opacity-100 -translate-y-0",
        falseState: "opacity-0 -translate-y-3",
      }}
    >
      <section className="py-28 overflow-hidden duration-300 ease-in">
        <div className="custom-screen items-center gap-12 text-gray-600 md:flex">
          <div className="flex-none mt-12 md:mt-0">
            <img
              src={Doctor}
              alt="Starboard Desktop App"
              className="w-full rounded-xl mix-blend-multiply	md:max-w-2xl"
            />
          </div>
          <div className="flex-none space-y-5 max-w-2xl">
            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
              A Project For Pnemonia
            </h1>
          </div>
        </div>
      </section>
    </LayoutEffect>
  );
};

export default Hero;
