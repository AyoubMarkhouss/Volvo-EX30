"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function VolvoExperienceForm() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10 md:py-16 text-black">
      {/* Top Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Prêts pour l’expérience ?</h2>
      <p className=" text-sm md:text-md mb-6">
        Renseignez ce formulaire pour tenter de vivre 3 jours avec le Volvo
        EX30.
      </p>

      {/* Lieu de résidence */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-semibold">Votre lieu de résidence</h3>
        <p className="text-sm md:text-md text-gray-600 mb-4">
          Indiquez votre ville de résidence et le showroom Volvo le plus proche
          pour récupérer votre EX30. Nous ferons en sorte de vous proposer le
          créneau le plus adapté.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ville de résidence"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />
          <input
            type="text"
            placeholder="Ville de retrait véhicule"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />
        </div>
      </div>

      {/* Coordonnées */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold">Vos coordonnées</h3>
        <p className="text-sm md:text-md text-gray-600 mb-4">
          Volvo vous contactera pour fixer une date et une heure pour récupérer
          votre véhicule électrique.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />
          <input
            type="text"
            placeholder="Prénom"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />
          <input
            type="text"
            placeholder="Profession"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />
          <label className="text-md text-gray-700">Date de naissance</label>
          <input
            type="date"
            className="w-[95%] md:w-full h-10 bg-white border border-gray-400 rounded-md p-2 text-black md:h-12 md:placeholder:pl-3"
          />
          <input
            type="text"
            placeholder="N° Permis de conduire"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />
          <label className="text-md  text-gray-700">Délivré le</label>
          <input
            type="date"
            className="w-[95%] md:w-full h-10 border bg-white border-gray-400 rounded-md p-2 text-black md:h-12 md:placeholder:pl-3"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
          />

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-sm text-gray-700">Téléphone</label>
            <PhoneInput
              country={"ma"} // Morocco as default
              enableSearch
              inputClass="!w-full !p-5 !pl-20 !text-black"
              buttonClass="!p-3 "
              containerClass="!border-gray-700 !rounded-md"
              dropdownClass="!text-black"
              placeholder="Entrez votre numéro"
            />
          </div>

          {/* POLICY */}
          <div className="space-y-6 mt-10 text-sm text-gray-800">
            {/* Vie privée */}
            <div>
              <h3 className="font-semibold text-base mb-1">Vie privée</h3>
              <p>
                En soumettant cette demande, vous consentez au traitement de vos
                données personnelles.
              </p>
            </div>

            {/* Offres et promotions */}
            <div>
              <h3 className="font-semibold text-base mb-2">
                Offres et promotions
              </h3>

              <div className="space-y-2">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    Scandinavian Auto Maroc et la Volvo Car Corporation
                    stockeront et traiteront vos données à caractère personnel
                    conformément à{" "}
                    <span className=" underline">l’avis d'information</span>.
                  </span>
                </label>

                <p>
                  Scandinavian Auto Maroc partagera également vos données à
                  caractère personnel avec le concessionnaire/détaillant que
                  vous avez sélectionné dans l'objectif de traiter votre demande
                  et d’en assurer le suivi.
                </p>

                <p>
                  En sélectionnant un ou plusieurs des moyens de communication
                  ci-dessous, je consens à ce que mes données à caractère
                  personnel soient traitées afin de recevoir à l'avenir, par les
                  moyens choisis, des informations et des offres de la part de
                  Scandinavian Auto Maroc et de la part du
                  concessionnaire/détaillant sélectionné.
                </p>

                {/* Communication options */}
                <div className="flex gap-4 pt-2">
                  <label className="flex items-center gap-1">
                    <input type="checkbox" />
                    <span>E-mail</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="checkbox" />
                    <span>Téléphone</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="checkbox" />
                    <span>SMS</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="font-semibold md:top-5 md:right-5 lg:top-10 lg:right-10 w-36 md:w-36 lg:w-48 h-12 text-md md:text-xl rounded-lg hover:cursor-pointer bg-black text-white mt-7"
            >
              Inscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
