"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";

import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";

import Logo from "@/assets/genrobotics.webp";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target.closest(".menu-bar") === null
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeout = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionPaths = [
    "/bandicoot",
    "/mobility-plus",
    "/wilboar",
    "/g-mammoth",
    "/g-crow",
  ];

  const servicesPaths = [
    "/services/ugd-operations-digitalisation",
    "/services/consulting-confined-space-management",
    "/services/customised-solutions",
    "/services/emergency-response",
  ];

  console.log(pathname);

  return (
    <header className="w-full fixed top-0 left-0 bg-transparent z-[1000] py-[10px]">
      <div className="px-[20px] md:px-[2rem] xl:px-[60px]">
        <div className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
          <Link href="/" className="logo_wrapper">
            <Image src={Logo} alt="Genrobotics Logo" width={0} height={0} />
          </Link>

          <div className="menu_lists">
            <nav className="md:flex gap-0 md:gap-2 lg:gap-6 text-white text-sm font-medium nav-list">
              <Link
                className={pathname === "/" ? "menu_item active" : "menu_item"}
                href="/"
              >
                Home
              </Link>
              <div className="menu_drop_down">
                <p
                  className={
                    solutionPaths.includes(pathname)
                      ? "menu_item mb-0 active"
                      : "menu_item mb-0"
                  }
                  aria-current={solutionPaths.includes(pathname) ? "page" : undefined}
                  href="/solutions"
                >
                  Solutions
                </p>
                <ul className="dropdown_menu">
                  <li
                    className={
                      pathname === "/mobility-plus" ? "sub_active" : ""
                    }
                  >
                    <a href="/mobility-plus">
                      Bandicoot Mobility+ (Manhole Cleaning with Waste
                      Management)
                    </a>
                  </li>
                  <li className={pathname === "/bandicoot" ? "sub_active" : ""}>
                    <a href="/bandicoot">Bandicoot (Manhole Cleaning)</a>
                  </li>
                  <li className={pathname === "/wilboar" ? "sub_active" : ""}>
                    <a href="/wilboar">
                      Wilboar (Horizontal Confined Space Cleaning)
                    </a>
                  </li>
                  <li className={pathname === "/g-mammoth" ? "sub_active" : ""}>
                    <a href="/g-mammoth">
                      G Mammoth 4-in-1 (Multi-functional UGD tool)
                    </a>
                  </li>
                  <li className={pathname === "/g-crow" ? "sub_active" : ""}>
                    <a href="/g-crow">
                      G Crow (Digital Platform for Asset and Operations
                      Management)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu_drop_down">
                <a
                  className={
                    pathname.startsWith("/services")
                      ? "menu_item active"
                      : "menu_item"
                  }
                >
                  Services
                </a>
                <ul className="dropdown_menu">
                  <li
                    className={
                      pathname === "/services/ugd-operations-digitalisation"
                        ? "sub_active"
                        : ""
                    }
                  >
                    <a href="/services/ugd-operations-digitalisation">
                      Digitalisation of UGD operations with Robotics & AI
                    </a>
                  </li>
                  <li
                    className={
                      pathname ===
                      "/services/consulting-confined-space-management"
                        ? "sub_active"
                        : ""
                    }
                  >
                    <a href="/services/consulting-confined-space-management">
                      Consulting for Confined Space Management
                    </a>
                  </li>
                  <li
                    className={
                      pathname === "/services/customised-solutions"
                        ? "sub_active"
                        : ""
                    }
                  >
                    <a href="/services/customised-solutions">
                      Customised Solutions for Unique Challenges
                    </a>
                  </li>
                  {/* <li>
                    <a href="/services/emergency-response">
                      Emergency Response in Sanitation Accidents & Flood
                    </a>
                  </li> */}
                </ul>
              </div>
              {/* <Link
                className={
                  pathname === "/blog" ? "menu_item active" : "menu_item"
                }
                href="/blog"
              >
                News & Blogs
              </Link> */}
              <Link
                className={
                  pathname === "/careers" ? "menu_item active" : "menu_item"
                }
                href="/careers"
              >
                Careers
              </Link>
              <Link
                className={
                  pathname === "/about" ? "menu_item active" : "menu_item"
                }
                href="/about"
              >
                About us
              </Link>
              <div
                className="hamburger_menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen((prev) => !prev);
                }}
              >
                <Hamburger toggled={isOpen} color="#404040" />
              </div>
            </nav>

            <button
              onClick={() => router.push("/contact")}
              className="contact_us"
            >
              Contact us
            </button>
          </div>

          {/* Responsive Sidebar */}
        </div>
      </div>
      <div
        className={`dropdown_menu_home ${isOpen ? "active" : ""}`}
        ref={menuRef}
      >
        <button
          type="button"
          className="close_sidebar_btn"
          onClick={() => setIsOpen(false)}
        >
          <Md.MdClose />
        </button>
        <Link
          className={pathname === "/" ? "activePath" : ""}
          href="/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        <div className="dropdown-wrapper">
          <h2 className="dropdown-title">
            Solutions{" "}
            <i>
              <Fa.FaChevronDown />
            </i>
          </h2>
          <div className="dropdown-products">
            <Link
              className={pathname === "/mobility-plus" ? "activePath" : ""}
              href="/mobility-plus"
              onClick={() => setIsOpen(false)}
            >
              Bandicoot Mobility+ (Manhole Cleaning with Waste Management)
            </Link>
            <Link
              className={pathname === "/bandicoot" ? "activePath" : ""}
              href="/bandicoot"
              onClick={() => setIsOpen(false)}
            >
              Bandicoot (Manhole Cleaning)
            </Link>
            <Link
              className={pathname === "/wilboar" ? "activePath" : ""}
              href="/wilboar"
              onClick={() => setIsOpen(false)}
            >
              Wilboar (Horizontal Confined Space Cleaning)
            </Link>
            <Link
              className={pathname === "/g-mammoth" ? "activePath" : ""}
              href="/g-mammoth"
              onClick={() => setIsOpen(false)}
            >
              G Mammoth 4-in-1 (Multi-functional)
            </Link>
            <Link
              className={pathname === "/g-crow" ? "activePath" : ""}
              href="/g-crow"
              onClick={() => setIsOpen(false)}
            >
              G Crow (Digital Operations)
            </Link>
          </div>
        </div>

        <div className="dropdown-wrapper">
          <h2 className="dropdown-title">
            Services{" "}
            <i>
              <Fa.FaChevronDown />
            </i>
          </h2>
          <div className="dropdown-products">
            <Link
              href="/services/ugd-operations-digitalisation"
              onClick={() => setIsOpen(false)}
              className={
                pathname === "/services/ugd-operations-digitalisation"
                  ? "activePath"
                  : ""
              }
            >
              Digitalisation of UGD operations with Robotics & AI
            </Link>
            <Link
              href="/services/consulting-confined-space-management"
              onClick={() => setIsOpen(false)}
              className={
                pathname === "/services/consulting-confined-space-management"
                  ? "activePath"
                  : ""
              }
            >
              Consulting for Confined Space Management
            </Link>
            <Link
              href="/services/customised-solutions"
              onClick={() => setIsOpen(false)}
              className={
                pathname === "/services/customised-solutions"
                  ? "activePath"
                  : ""
              }
            >
              Customised Solutions for Unique Challenges
            </Link>
          </div>
        </div>

        {/* <a
          className={pathname === "/blog" ? "activePath" : ""}
          href="/blog"
          onClick={() => setIsOpen(false)}
        >
          News & Blogs
        </a> */}
        <a
          className={pathname === "/careers" ? "activePath" : ""}
          href="/careers"
          onClick={() => setIsOpen(false)}
        >
          Careers
        </a>
        <a
          className={pathname === "/about" ? "activePath" : ""}
          href="/about"
          onClick={() => setIsOpen(false)}
        >
          About us
        </a>
        <a
          className={pathname === "/contact" ? "activePath" : ""}
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        {/* <button type="button" className="talk_us">
          Contact Us
        </button> */}
      </div>
    </header>
  );
}

export default Header;
