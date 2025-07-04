"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";
interface FormData {
  villeResidence: string;
  villeRetrait: string;
  nom: string;
  prenom: string;
  profession: string;
  dateNaissance: string;
  permis: string;
  delivreLe: string;
  email: string;
  telephone: string;
  promotion: string[];
}

export default function VolvoExperienceForm() {
  const [formData, setFormData] = useState<FormData>({
    villeResidence: "",
    villeRetrait: "",
    nom: "",
    prenom: "",
    profession: "",
    dateNaissance: "",
    permis: "",
    delivreLe: "",
    email: "",
    telephone: "",
    promotion: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, telephone: value });
  };

  const handlePromotionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => {
      const alreadyChecked = prev.promotion.includes(value);
      const updated = alreadyChecked
        ? prev.promotion.filter((item) => item !== value)
        : [...prev.promotion, value];
      return { ...prev, promotion: updated };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    try {
      await fetch("https://volvo-ex-30.vercel.app/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast.success("Formulaire soumis avec succès !");
      setIsSubmitted(true);
      setFormData({
        villeResidence: "",
        villeRetrait: "",
        nom: "",
        prenom: "",
        profession: "",
        dateNaissance: "",
        permis: "",
        delivreLe: "",
        email: "",
        telephone: "",
        promotion: [],
      });
    } catch (error) {
      console.error("Erreur :", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto px-4 py-10 md:py-16 text-black"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Prêts pour l&apos;expérience ?
        </h2>
        <p className=" text-sm md:text-md mb-6">
          Renseignez ce formulaire pour tenter de vivre 3 jours avec le Volvo
          EX30.
        </p>

        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold">
            Votre lieu de résidence
          </h3>
          <p className="text-sm md:text-md text-gray-600 mb-4">
            Indiquez votre ville de résidence et le showroom Volvo le plus
            proche pour récupérer votre EX30. Nous ferons en sorte de vous
            proposer le créneau le plus adapté.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              name="villeResidence"
              placeholder="Ville de résidence"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />
            <input
              type="text"
              name="villeRetrait"
              placeholder="Ville de retrait véhicule"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Vos coordonnées</h3>
          <p className="text-sm md:text-md text-gray-600 mb-4">
            Volvo vous contactera pour fixer une date et une heure pour
            récupérer votre véhicule électrique.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />
            <label className="text-md text-gray-700">Date de naissance</label>
            <input
              type="date"
              name="dateNaissance"
              onChange={handleChange}
              className="w-[95%] md:w-full h-10 bg-white border border-gray-400 rounded-md p-2 text-black md:h-12 md:placeholder:pl-3"
            />
            <input
              type="text"
              name="permis"
              placeholder="N° Permis de conduire"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />
            <label className="text-md text-gray-700">Délivré le</label>
            <input
              type="date"
              name="delivreLe"
              onChange={handleChange}
              className="w-[95%] md:w-full h-10 border bg-white border-gray-400 rounded-md p-2 text-black md:h-12 md:placeholder:pl-3"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              className="w-full border border-gray-400 bg-white rounded-md p-2 md:h-12 md:placeholder:pl-3"
            />

            <div className="space-y-1">
              <label className="text-sm text-gray-700">Téléphone</label>
              <PhoneInput
                country={"ma"}
                value={formData.telephone}
                onChange={handlePhoneChange}
                inputClass="!w-full !p-5 !pl-20 !text-black"
                buttonClass="!p-3 "
                containerClass="!border-gray-700 !rounded-md"
                dropdownClass="!text-black"
                placeholder="Entrez votre numéro"
              />
            </div>

            <div className="space-y-6 mt-10 text-sm text-gray-800">
              <div>
                <h3 className="font-semibold text-base mb-1">Vie privée</h3>
                <p>
                  En soumettant cette demande, vous consentez au traitement de
                  vos données personnelles.
                </p>
              </div>

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
                      <span className="underline">
                        l&apos;avis d&apos;information
                      </span>
                      .
                    </span>
                  </label>

                  <p>
                    Scandinavian Auto Maroc partagera également vos données à
                    caractère personnel avec le concessionnaire/détaillant que
                    vous avez sélectionné.
                  </p>

                  <p>
                    En sélectionnant un ou plusieurs des moyens de communication
                    ci-dessous, je consens à recevoir des informations et des
                    offres de la part de Scandinavian Auto Maroc et du
                    concessionnaire.
                  </p>

                  <div className="flex gap-4 pt-2">
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        value="E-mail"
                        onChange={handlePromotionChange}
                      />
                      <span>E-mail</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        value="Téléphone"
                        onChange={handlePromotionChange}
                      />
                      <span>Téléphone</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        value="SMS"
                        onChange={handlePromotionChange}
                      />
                      <span>SMS</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-semibold md:top-5 md:right-5 lg:top-10 lg:right-10 w-36 md:w-36 lg:w-48 h-12 text-md md:text-xl rounded-lg hover:cursor-pointer bg-black text-white mt-7 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : isSubmitted ? (
                  "Envoyé"
                ) : (
                  "Inscription"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
