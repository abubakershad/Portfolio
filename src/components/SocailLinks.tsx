import Link from "next/link";
import { FaGithub, FaLinkedin,  FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function SocialLinks() {
  return (
      <div className="flex justify-center space-x-6 mb-4">

        <Link
          href="https://github.com/abu-bakr-shad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 text-2xl"
        >
          <FaGithub size={24} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/abu-bakr-shad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300 text-2xl"
        >
          <FaLinkedin size={24} />
        </Link>

        <Link href="https://facebook.com/abubakrshad" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300 text-2xl"
        >
          <FaFacebookF size={24} />
        </Link>

        <Link href="https://wa.me/923214033991" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300 text-2xl"

        >
          <FaWhatsapp size={24} />
        </Link>

        <Link href="mailto:abubakrshad111@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400 transition duration-300 text-2xl"
        >
          <MdEmail size={24} />
        </Link>
      </div>
  );
}
