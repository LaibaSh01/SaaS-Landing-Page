import Link from 'next/link';
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:absolute before:top-2 before:bottom-0 before:w-full before:blur before:bg-gradient-to-r before:from-[#F87BFF] before:via-[#FB92CF] before:via-[#FFDD9B] before:via-[#C2F0B1] before:to-[#2FD8FE]">

        <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
        <a href="/">
            <SocialX />
          </a>
          <a href="https://www.instagram.com/ino.metic/" target="_blank" rel="noopener noreferrer">
            <SocialInsta />
          </a>
          <a href="https://www.linkedin.com/company/inometic/" target="_blank" rel="noopener noreferrer">
            <SocialLinkedIn />
          </a>
          <a href="/">
            <SocialPin />
          </a>
          <a href="/">
            <SocialYoutube />
          </a>
        </div>
        <p className="mt-6">&copy; 2024 Inometic, Inc. All rights reserved.</p>
      </div>
      </footer>
  );
};
