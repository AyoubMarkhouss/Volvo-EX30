import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiGlobeLight } from "react-icons/pi"; // Earth icon
import { BsArrowUp, BsLinkedin } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center text-sm text-gray-600 py-10 px-4 space-y-6">
      {/* Scroll to top */}
      <div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-black font-semibold text-sm flex items-center justify-center gap-1 mx-auto hover:cursor-pointer"
        >
          Retour en haut <BsArrowUp className="mt-0.5" />
        </button>
      </div>

      {/* Contact Links */}
      <div className="space-y-1">
        <div className="flex flex-col items-center gap-1">
          <a
            href="https://www.volvocars.com/ma/v/legal/contact-us/"
            className=" text-gray-400 hover:underline"
          >
            Nous contacter
          </a>
          <a
            href="https://www.volvocars.com/ma/test-drive-booking/"
            className=" text-black hover:underline"
          >
            Réserver un essai
          </a>
        </div>
      </div>

      {/* Country */}
      <div className="flex justify-center items-center gap-1 text-black text-sm font-medium pt-2">
        <CiLocationOn />
        Morocco
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-6 text-black text-xl pt-2">
        <a
          href="https://web.facebook.com/VisitVolvoCarMaroc/?locale=fr_FR&_rdc=1&_rdr#"
          aria-label="Facebook"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.instagram.com/volvocar_maroc/"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/volvo-maroc/"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
      </div>

      {/* Bottom Links */}
      <div className="flex justify-center flex-wrap gap-4 text-xs pt-4">
        <a
          href="https://www.volvocars.com/ma/v/legal/cookies/"
          className="hover:underline"
        >
          Cookies
        </a>
        <a
          href="https://www.volvocars.com/ma/legal/terms/terms-legal-notice/"
          className="hover:underline"
        >
          Mention légales
        </a>
        <a
          href="https://www.volvocars.com/ma/legal/privacy/"
          className="hover:underline"
        >
          Confidentialité
        </a>
        <a
          href="https://www.volvocars.com/ma/v/legal/GDPR-Information-Notice/"
          className="hover:underline"
        >
          Notice d’information
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs pt-2">
        Copyright © 2025 Volvo Car Corporation (or its affiliates or licensors)
      </p>
    </footer>
  );
}
