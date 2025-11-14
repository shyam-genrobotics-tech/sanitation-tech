import React from "react";
import mission from "@/assets/products/bandicoot/mission_robo_hole.webp";
import Image from "next/image";

function MissionRobo() {
  return (
    <section className="robo_hole">
      <div className="container">
        {/* --- Default layout (desktop & mobile) --- */}
        <div className="row normal_layout">
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
            <Image
              src={mission}
              alt="Mission Robo hole"
              width={0}
              height={0}
              className="mission_img"
            />
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 mt-4">
            <div className="title_">
              <h1>#MissionRobohole</h1>
              <p>Transforming Manholes to Roboholes</p>
            </div>
            <p>
              #MissionRobohole is our dedicated initiative, in collaboration
              with NSKFDC (National Safai Karamcharis Finance and Development
              Corporation), aimed at completely eradicating the demeaning
              practice of manual scavenging in India. This mission focuses on
              <b> converting hazardous manholes into 'roboholes'</b> – spaces
              cleaned safely and efficiently by robots like Bandicoot. More
              importantly, it's about transforming the lives of sanitation
              workers by upgrading their skills and providing them with
              <b> dignified employment as 'Robotic Operators'</b>. We are
              diligently working to redefine the Indian sanitation system
              through technology and empowerment.
            </p>
          </div>
        </div>

        {/* --- STACKED layout for 769–990px --- */}
        <div className="stacked_layout">
          <div className="stacked_title">
            <h1>#MissionRobohole</h1>
            <p>Transforming Manholes to Roboholes</p>
          </div>

          <Image
            src={mission}
            alt="Mission Robo hole"
            width={0}
            height={0}
            className="mission_img"
          />

          <p className="stacked_text">
            #MissionRobohole is our dedicated initiative, in collaboration with
            NSKFDC (National Safai Karamcharis Finance and Development
            Corporation), aimed at completely eradicating the demeaning practice
            of manual scavenging in India. This mission focuses on
            <b> converting hazardous manholes into 'roboholes'</b> – spaces
            cleaned safely and efficiently by robots like Bandicoot. More
            importantly, it's about transforming the lives of sanitation workers
            by upgrading their skills and providing them with
            <b> dignified employment as 'Robotic Operators'</b>. We are
            diligently working to redefine the Indian sanitation system through
            technology and empowerment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionRobo;




{/*import React from "react";
import mission from "@/assets/products/bandicoot/mission-robo-hole.webp";
import Image from "next/image";

function MissionRobo() {
  return (
    <section className="robo_hole">
      <div className="container">
        <div className="row">
          <div className="title_ md:hidden">
            <h1>#MissionRobohole</h1>
            <p>Transforming Manholes to Roboholes</p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
            <Image
              src={mission}
              alt="Mission Robo hole"
              width={0}
              height={0}
              className="mission_img"
            />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 mt-4">
            <div className="title_ hidden md:block">
              <h1>#MissionRobohole</h1>
              <p>Transforming Manholes to Roboholes</p>
            </div>
            <p>
              #MissionRobohole is our dedicated initiative, in collaboration
              with NSKFDC (National Safai Karamcharis Finance and Development
              Corporation), aimed at completely eradicating the demeaning
              practice of manual scavenging in India. This mission focuses on
              <b> converting hazardous manholes into 'roboholes'</b> – spaces
              cleaned safely and efficiently by robots like Bandicoot. More
              importantly, it's about transforming the lives of sanitation
              workers by upgrading their skills and providing them with
              <b> dignified employment as 'Robotic Operators'</b>. We are
              diligently working to redefine the Indian sanitation system
              through technology and empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionRobo;*/}
