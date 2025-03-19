import { Mail, MapPin, Phone } from "lucide-react";
import abb from "../assets/logo remove.png";

const Footer = () => {
  return (
    <footer className="bg-[#00A877] text-blue-800 py-10 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Logo */}
        <img
          src={abb}
          alt="Dhulikhel Boutique Hotel Logo"
          className="h-28 w-auto mx-auto mb-4"
        />

        {/* Contact Us Title */}
        

        {/* Contact Info Section */}
        <div className="grid gap-8 text-sm text-center justify-center">
          {/* Location */}
          <div className="flex flex-col items-center font-bold">
            <MapPin className="w-6 h-6 mb-2 text-white" />
            <p><strong>Dhulikhel, Nepal</strong></p>
            <p>30km from Kathmandu, on the way to Sindhupalchok</p>
            <p>Postal Code: 45200</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center font-bold">
            <Mail className="w-6 h-6 mb-2 text-white" />
            <a
              href="mailto:dhulikhelboutiquehotel@gmail.com"
              className="hover:underline break-words"
            >
              dhulikhelboutiquehotel@gmail.com
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col items-center font-bold">
            <Phone className="w-6 h-6 mb-2 text-white" />
            <a href="tel:+9779851096133" className="block hover:underline">
              +977 9851096133
            </a>
            <a href="tel:+9779765997452" className="block hover:underline">
              +977 9765997452
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white opacity-50 my-6" />

        {/* Copyright */}
        <p className="text-sm font-semibold">
          © 2025 Dhulikhel Boutique Hotel. Designed & Developed by Clouds Nepal Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;
