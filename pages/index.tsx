import VolvoExperienceForm from "@/components/VolvoExperienceForm";
import Image from "next/image";
import { useRef } from "react";

import VolvoFaq from "@/components/VolvoFaq";
import Footer from "@/components/Footer";
export default function Home() {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      {/* navbar */}
      <div className="flex justify-center items-center h-16 md:h-20">
        <Image
          alt="logo"
          src="/png/logo.png"
          width={2500}
          height={2500}
          className=" w-28 md:w-36"
        />
      </div>
      {/* hero */}
      <Image
        alt="slider"
        src="/png/Slider.png"
        width={2500}
        height={2500}
        className="w-full"
      />

      {/* Volvo lovers */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center py-10 md:py-20 gap-y-6 px-5 md:px-0 md:max-w-4xl">
          <Image
            alt="slider"
            src="/png/volvolovers.png"
            width={2500}
            height={2500}
            className="w-40 md:w-72"
          />

          <h1 className="text-center text-lg md:text-4xl">
            Prenez le temps de ressentir. <br /> Vivez 3 jours en EX30 100%
            électrique. <br />
            Pas un simple essai… Une véritable rencontre.
          </h1>

          <p className="text-sm md:text-lg text-center">
            Vous aussi, vous pouvez faire l’expérience #VolvoLovers <br />{" "}
            Conduisez une Volvo EX30 pour 3 jours, pour que vous puissiez la
            vivre à votre rythme. <br /> Sans pression, sans engagement… en
            toute liberté
          </p>
          <p className="text-sm md:text-lg text-center">
            Inscrivez-vous, choisissez votre ville,
            <br /> récupérez votre EX30… et laissez parler vos sensations.
          </p>

          <button
            onClick={handleScrollToForm}
            className="font-semibold w-36 md:w-48 h-12 text-md md:text-xl rounded-lg hover:cursor-pointer bg-black text-white"
          >
            Inscription
          </button>
        </div>
      </div>

      {/* Slider 2 */}
      <div className="pb-10">
        <div className="md:px-14 lg:px-28 flex flex-col gap-y-7">
          <div>
            <h2 className="font-semibold text-lg text-center md:text-start md:text-2xl lg:text-4xl">
              Un SUV compact, 100% électrique, <br /> Design épuré. Technologie
              intuitive. <br /> Un plaisir à (re)découvrir au quotidien.
            </h2>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <Image
              alt="Slider2"
              src="/png/Slider2.png"
              width={2500}
              height={2500}
              className="w-full "
            />
            <button className="hidden md:block absolute font-semibold md:top-5 md:right-5 lg:top-10 lg:right-10 md:w-36 lg:w-48 h-12 text-md md:text-xl rounded-lg hover:cursor-pointer bg-white text-black">
              <a href="https://www.volvocars.com/ma/cars/ex30-electric/">
                Découvrir
              </a>
            </button>
            <button className="block md:hidden font-semibold md:top-5 md:right-5 lg:top-10 lg:right-10 w-36 md:w-36 lg:w-48 h-12 text-md md:text-xl rounded-lg hover:cursor-pointer bg-black text-white mt-7">
              <a href="https://www.volvocars.com/ma/cars/ex30-electric/">
                Découvrir
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* form */}
      <div ref={formRef} className="bg-gray-100">
        <VolvoExperienceForm />
      </div>

      {/* FAQ */}
      <div>
        <VolvoFaq />
      </div>

      <Footer />
    </main>
  );
}
