import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.svg";

import * as Fa6 from "react-icons/fa6";
import * as Bi from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content container">
        <div className="footer_left">
          <div className="logo_wrapper">
            <Image src={Logo} alt="Genrobotics Logo" width={0} height={0} />
          </div>
          <div className="social_icons">
            <a href="https://x.com/GenRobotic"
               aria-label="Twitter"
               aria-labelledby="Genrobotics Twitter page"
               aria-describedby="Opening on a new Window">
              <Fa6.FaXTwitter />
            </a>
            <a href="https://www.facebook.com/genrobotic"
               aria-label="Facebook"
               aria-labelledby="Genrobotics Facebook page"
               aria-describedby="Opening on a new Window">
              <Fa6.FaFacebookF />
            </a>
            <a href="https://www.instagram.com/genroboticinnovations/"
               aria-label="Instagram"
               aria-labelledby="Genrobotics Instagram page"
               aria-describedby="Opening on a new Window">
              <Bi.BiLogoInstagramAlt />
            </a>
            <a href="https://www.linkedin.com/company/13393278/admin/dashboard/"
               aria-label="LinkedIn"
               aria-labelledby="Genrobotics LinkedIn page"
               aria-describedby="Opening on a new Window">
              <Fa6.FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer_right">
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/#solutions">Solutions</Link>
            </li>
            <li>
              <Link href="">News</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden gap-4">
            <a href="https://x.com/GenRobotic"
            className="inline-flex w-9 h-9 bg-[#2b2b2b] text-white rounded-full justify-center items-center"
               aria-label="Twitter"
               aria-labelledby="Genrobotics Twitter page"
               aria-describedby="Opening on a new Window">
              <Fa6.FaXTwitter />
            </a>
            <a href="https://www.facebook.com/genrobotic"
            className="inline-flex w-9 h-9 bg-[#2b2b2b] text-white rounded-full justify-center items-center"
               aria-label="Facebook"
               aria-labelledby="Genrobotics Facebook page"
               aria-describedby="Opening on a new Window">
              <Fa6.FaFacebookF />
            </a>
            <a href="https://www.instagram.com/genroboticinnovations/"
            className="inline-flex w-9 h-9 bg-[#2b2b2b] text-white rounded-full justify-center items-center"
               aria-label="Instagram"
               aria-labelledby="Genrobotics Instagram page"
               aria-describedby="Opening on a new Window">
              <Bi.BiLogoInstagramAlt />
            </a>
            <a href="https://www.linkedin.com/company/13393278/admin/dashboard/"
            className="inline-flex w-9 h-9 bg-[#2b2b2b] text-white rounded-full justify-center items-center"
               aria-label="LinkedIn"
               aria-labelledby="Genrobotics LinkedIn page"
               aria-describedby="Opening on a new Window">
              <Fa6.FaLinkedinIn />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
