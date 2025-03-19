import { Mail, MapPin, Phone } from "lucide-react";
import abb from "../assets/logo remove.png";

const Footer = () => {
  return (
    <footer className="bg-green-300  text-blue-700 py-10 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Logo */}
        <img
          src={abb}// Replace with actual logo path
          alt="Dhulikhel Boutique Hotel Logo"
          className="h-35 w-48 mx-auto mb-4"
        />

        {/* Contact Us Title */}
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {/* Location */}
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-white" />
            <p>
              <strong>Dhulikhel, Nepal</strong> <br />
              30km from Kathmandu, on the way to Sindhupalchok <br />
              Postal Code: 45200
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-white" />
            <a
              href="mailto:info@dhulikhelboutiquehotel.com"
              className="hover:underline"
            >
              info@dhulikhelboutiquehotel.com
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-white" />
            <div>
              <a href="tel:+9779800000000" className="block hover:underline">
                +977 9800000000
              </a>
              <a href="tel:+9779810000000" className="block hover:underline">
                +977 9810000000
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white opacity-50 my-6" />

        {/* Copyright */}
        <p className="text-sm">
          © 2025 Dhulikhel Boutique Hotel. Designed & Developed by Clouds Nepal Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;
