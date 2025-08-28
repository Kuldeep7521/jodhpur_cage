// import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-10 bg-cover max-sm:bg-center" style={{
          backgroundImage: "url('/images/bg_fream.jpg')", // replace with your image path
        }}>
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Logo */}
        <img
          src="/images/headerLogo.webp" // replace with your logo path
          alt="Logo"
          className="w-16 h-16"
        />

        {/* Tagline */}
        <p className="text-orange-500 font-semibold tracking-wider text-center max-sm:text-[20px]" style={{fontFamily: 'alNevrada'}}>
          TRADITION - TASTE - ROYALTY
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 justify-center items-center gap-5 max-sm:gap-2">
          <a
            href="#"
            className=" hover:bg-orange-500 transition duration-300 flex flex-col justify-center items-center"
          >
             <img src="/images/instagram.svg" alt="" className="h-[3em] w-[3em] max-sm:h-[2em] max-sm:w-[2em]"/> <p className="text-center">Instagram</p>
          </a>
        <a
            href="#"
            className=" hover:bg-orange-500 transition duration-300 flex flex-col justify-center items-center"
          >
             <img src="/images/whatsapp.svg" alt="" className="h-[3em] w-[3em] max-sm:h-[2em] max-sm:w-[2em]"/> <p className="text-center">Whatsapp</p>
          </a>
           <a
            href="#"
            className=" hover:bg-orange-500 transition duration-300 flex flex-col justify-center items-center"
          >
             <img src="/images/social-media.svg" alt="" className="h-[3em] w-[3em] max-sm:h-[2em] max-sm:w-[2em]"/> <p className="text-center">Facebook</p>
          </a>
        </div>
      </div>

      {/* Optional background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('./images/bg_fream.jpg')", // replace with your image path
        }}
      ></div>
    </footer>
  );
}
