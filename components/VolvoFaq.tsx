"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function VolvoFaq() {
  const faqs = [
    {
      question: "Qui peut participer à Volvo Lovers ?",
      answer:
        "Toute personne âgée de 25 ans minimum, résidant au Maroc, et titulaire d’un permis de conduire valide depuis au moins 2 ans, peut vivre l’expérience #VolvoLovers.",
    },
    {
      question: "Est-ce vraiment gratuit ?",
      answer:
        "Oui. Aucun frais caché, aucun engagement. Volvo vous confie l’EX30 pour 3 jours. Juste pour ressentir. Pas pour convaincre.",
    },
    {
      question: "Combien de temps puis-je garder la Volvo EX30 ?",
      answer:
        "Vous disposerez de la Volvo EX30 pendant 72 heures consécutives. De quoi prendre le temps de ressentir… vraiment.",
    },
    {
      question: "Comment récupérer le véhicule ?",
      answer:
        "Lors de votre inscription, vous choisissez le showroom Volvo le plus proche de chez vous. L’équipe vous contactera ensuite pour fixer la date exacte, selon les disponibilités des véhicules.",
    },
    {
      question: "Quels documents dois-je fournir ?",
      answer:
        "Juste votre carte d’identité, votre permis de conduire, et un justificatif de domicile. Simple, clair, rapide.",
    },
    {
      question: "Puis-je choisir la date de mon essai ?",
      answer:
        "Non, la date est fixée en fonction des disponibilités des Volvo EX30 dans le showroom que vous avez sélectionné. L’équipe vous contactera pour convenir du moment le plus proche possible.",
    },
    {
      question: "Dois-je rendre le véhicule avec la batterie chargée ?",
      answer:
        "Non. Mais si vous avez envie de la recharger un peu avant de le rendre, c’est toujours apprécié 😉.",
    },
    {
      question: "Et si je tombe amoureux(se) de la voiture ?",
      answer:
        "C’est souvent le cas. Et c’est là que commence vraiment l’histoire… #VolvoLovers",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 text-black">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-4xl font-bold">Vous vous posez des questions ?</h2>
        <p className=" text-sm md:text-md text-gray-600">
          Voici tout ce qu’il faut savoir sur l’expérience <br />
          <span className="font-semibold text-black">#VolvoLovers.</span>
        </p>
      </div>

      {/* Accordion List */}
      <Accordion type="single" collapsible className="w-full border-t">
        {faqs.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b"
          >
            <AccordionTrigger className="text-left text-lg font-medium py-4 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-700 px-1 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
