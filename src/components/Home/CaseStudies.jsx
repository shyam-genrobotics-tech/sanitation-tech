"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";


import study1 from "@/assets/case-study/ahmedabad_airport.webp";
import study2 from "@/assets/case-study/robotic_pit_cleaning.webp";
import study3 from "@/assets/case-study/bpcl_chembur.webp";
import study4 from "@/assets/case-study/wilboar_trivandrum.webp";
import study6 from "@/assets/case-study/mrpl_mangalore.webp";
import study7 from "@/assets/case-study/bandicoot_in_leh.webp";
import study8 from "@/assets/case-study/bandicoot_in_rajasthan.webp";
import study9 from "@/assets/case-study/manhole_cleaning_in_chennai.webp";
import study10 from "@/assets/case-study/wilboar_at_leh.webp";
import study11 from "@/assets/case-study/mobility_at_aurangabad.webp";

import * as Lu from "react-icons/lu";
import * as Md from "react-icons/md";

import {
  getSessionStorageItem,
  setSessionStorageItem,
} from "@/utils/ClientUtils";

const caseStudies = [
  {
    id: 1,
    title: "Bandicoot Mobility+ at Ahmedabad Airport",
    description:
      "As one of India’s busiest airports, Ahmedabad faced challenges with frequent manhole blockages and airport-wide drain maintena...",
    image: study1,
    showCase: false,
    file: "../assets/docs/BANDICOOT_MOBILITY_AT_AHMEDABAD_AIRPORT.pdf",
  },
  {
    id: 2,
    title: "Robotic Pit Cleaning",
    description:
      "IOCL required a robotic solution to clean OWS and SWS pits filled with highly viscous sludge, a by product of petroleum refining...",
    image: study3,
    showCase: false,
    file: "../assets/docs/IOCL_PANIPAT_REFINERY.pdf",
  },
  {
    id: 3,
    title: "Robotic Pit Cleaning at BPCL Chembur Refinery",
    description:
      "In high-risk operational zones like OWS (Oil Water Separator), SWS (Sour Water Stripper), and CRWS (Clean Refinery Wastew...",
    image: study2,
    showCase: false,
    file: "../assets/docs/ROBOTIC_PIT_CLEANING_AT_BPCL_CHEMBUR_REFINERY.pdf",
  },
  {
    id: 4,
    title: "Wilboar at Trivandrum International Airport",
    description:
      "Frequent clogging of stormwater and open surface drainage channels posed a recurring challenge at Trivandrum Airport, pa...",
    image: study11,
    showCase: false,
    file: "../assets/docs/CASE STUDY – WILLBOAR AT TRIVANDRUM INTERNATIONAL AIRPORT.pdf",
  },
  {
    id: 5,
    title: "MRPL Manglore Refinery",
    description:
      "In 2021, MRPL encountered a critical issue-unexplained overflow in multiple OWS and SWS manholes. Despite using coventional methods...",
    image: study6,
    showCase: false,
    file: "../assets/docs/CASE STUDY – MRPL MANGALORE REFINERY.pdf",
  },
  {
    id: 6,
    title: "Bandicoot Robot in LEH, Ladakh",
    description:
      " Leh, one of the highest and coldest urban settlements in India, faces unique sanitation challenges: manholes freeze...",
    image: study7,
    showCase: false,
    file: "../assets/docs/Case Study BANDICOOT ROBOT.pdf",
  },
  {
    id: 7,
    title: "Bandicoot Robot Deployment in Rajasthan",
    description:
      "In Rajasthan, frequent blockages in sewer systems and manholes required workers to perform manual entry cleaning under...",
    image: study8,
    showCase: false,
    file: "../assets/docs/Case Study Rajasthan.pdf",
  },
  {
    id: 8,
    title: "Robotic manhole cleaning in Chennai",
    description:
      "Chennai faced increasing challenges in maintaining clean and safe sewer manholes in densely populated areas, compounded ...",
    image: study9,
    showCase: false,
    file: "../assets/docs/Case Study ROBOTIC MANHOLE CLEANING IN CHENNAI.pdf",
  },
  {
    id: 9,
    title: "Wilboar Robot at LEH sewage treatment plant (STP)",
    description:
      " Leh’s sewage treatment infrastructure faced growing challenges with manual tank cleaning  at an altitude of over 11,000 feet...",
    image: study10,
    showCase: false,
    file: "../assets/docs/Case Study WILBOAR ROBOT copy.pdf",
  },
  {
    id: 10,
    title: "Bandicoot Mobility+ at Chhatrapati Sambhaji Nagar (AURANGABAD)",
    description:
      " To address growing sanitation challenges, including frequent sewer blockages and health risks to workers...",
    image: study4,
    showCase: false,
    file: "../assets/docs/CHHATRAPATI SAMBHAJI NAGAR.pdf",
  },
];

function CaseStudies() {
  const [showCaseStudies, setShowCaseStudies] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [caseList, setCaseList] = useState(4);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowModal = (study) => {
    setShowCaseStudies(study);
    setShowModal(true);
    setSessionStorageItem("study", JSON.stringify(study));
  };

  const handleHideModal = () => {
    setShowModal(false);
    setShowCaseStudies(0);
    setUserDetails({
      fullName: "",
      email: "",
      phone: "",
    });
  };

  const handleViewAll = () => {
    if (!caseStudies || caseStudies.length == 0) return;

    if (caseList === caseStudies.length) {
      const section = document.getElementById("caseStudies");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setCaseList(4);
      return;
    }
    setCaseList(caseStudies.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = getSessionStorageItem("userDetails");

    if (!userDetails) {
      setSessionStorageItem("userDetails", JSON.parse(userDetails));
    }

    const study = getSessionStorageItem("study");
    const parsedStudy = JSON.parse(study);

    const pdfUrl = parsedStudy?.file;
    handleHideModal();
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
   <section className="case_studies" id="caseStudies">
      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{showCaseStudies?.title}</Modal.Title>
        </Modal.Header>
        <span className="info_span">
          Please fill in your details to view the complete case study.
        </span>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"    
                name="fullName"
                id="fullName"
                value={userDetails?.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="emailId" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={userDetails?.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                value={userDetails?.phone}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <button type="submit" className="submit_btn">
              View Case Study
            </button>
            <br />
          </form>
        </Modal.Body>
      </Modal>
      <div className="case-study-container md:container-fluid">
        <div className="lg:px-[2rem]">
          <div className="rob_pro_contents">
            <h1>Our Impact and Case Studies</h1>
            <p className="text-base">
              Discover the tangible difference Genrobotics' solutions have made
              across industries, communities, and for the environment. Our case
              studies highlight real-world challenges met with innovative
              robotic solutions.
            </p>
          </div>
          {/* Responsive: horizontal scrollable flex only on mobile, grid/flex wrap on larger screens */}
          <div>
            {/* Mobile: horizontal scrollable cards */}
            <div
              className="flex lg:hidden"
              style={{
                overflowX: "auto",
                gap: "16px",
                paddingBottom: "30px",
                height: "320px"
              }}
            >
              {caseStudies.map((study, index5) => (
                <div
                  key={index5}
                  className="case_card card"
                  style={{
                    minWidth: "220px",
                    maxWidth: "260px",
                    flex: "0 0 auto",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleShowModal(study)}
                >
                  <div
                    className="image_wrapper"
                    style={{
                      height: "165px",
                      borderRadius: "8px 8px 0 0",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={study?.image}
                      alt={study?.title}
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div
                    className="case_content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                      justifyContent: "space-between",
                      flex: 1,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.3",
                        textAlign:"left",
                        flexGrow: 1,
                      }}
                    >
                      {study?.title}
                    </h2>
                    {/* <p style={{ fontSize: "14px", textAlign:"left" }}>{study?.description}</p> */}
                    <p
                      className="text-gray-500"
                      style={{
                        marginTop: "auto",
                        fontSize: "14px",
                        padding: 0,
                        alignSelf: "flex-start",
                        textTransform: "capitalize",
                      }}
                    >
                      Learn More{" "}  <span className="ml-1">→</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop/Tablet: grid */}
            <div
              className="hidden case_card_wrapper lg:grid lg:grid-cols-4 gap-4"
            >
              {caseStudies.slice(0, caseList).map((study, index5) => (
                <div className="mt-3" key={index5}>
                  <div className="case_card card">
                    <div className="image_wrapper">
                      <Image
                        src={study?.image}
                        alt={study?.title}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div className="case_content">
                      <h2>{study?.title}</h2>
                      <p>{study?.description}</p>
                      <button
                        type="button"
                        className="link_btn"
                        onClick={() => handleShowModal(study)}
                      >
                        <span>Get the Case Study</span>
                        <i>
                          <Lu.LuSquareArrowOutUpRight />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <style>{`
              @media (max-width: 767px) {
                .case_card_wrapper.md\\:row { display: none !important; }
              }
            `}</style>
          </div>
        </div>
        <br />
        <button type="button" className="show_all" onClick={handleViewAll}>
          {caseList != caseStudies.length ? (
            <>
              <span> View all </span>
              {/*<span className ="count_span">
                ({caseStudies.length - 4})
                <Md.MdArrowDownward />
              </span>*/}
            </>
          ) : (
            <>
              <span> Show Less </span>
              <i>
                <Md.MdArrowUpward />
              </i>
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default CaseStudies;
