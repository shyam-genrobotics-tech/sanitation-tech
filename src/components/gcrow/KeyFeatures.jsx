"use client"
import {useState, useEffect} from "react";

import headset from "@/assets/products/gcrow/icons/headset.svg";
import gps from "@/assets/products/gcrow/icons/gps.svg";
import asset from "@/assets/products/gcrow/icons/asset.svg";
import hr from "@/assets/products/gcrow/icons/hr.svg";
import report from "@/assets/products/gcrow/icons/report.svg";
import Image from "next/image";

const features = [
  {
    title: "Complaint Registration & Resolution",
    description:
      "Swiftly register manhole complaints and track their resolution status in real-time, ensuring rapid response to citizen needs and enhancing satisfaction.",
    icon: headset,
  },
  {
    title: "Real-time GPS Tracking",
    description:
      "Monitor the live location of your entire robotic fleet and field operators. Use geo-fencing to manage work zones and improve team coordination.",
    icon: gps,
  },
  {
    title: "Asset Management",
    description:
      "Maintain a complete inventory of your sanitation assets. Track usage, schedule maintenance, and optimize the lifecycle of your robotic fleet.",
    icon: asset,
  },
  {
    title: "HR Management & Accountability",
    description:
      "Track operator activities and performance to ensure accountability. Manage teams, schedules, and work logs efficiently from a central dashboard.",
    icon: hr,
  },
  {
    title: "Automated Report Generation",
    description:
      "Generate detailed reports on asset performance, operator productivity, and complaint resolution. Use data-driven insights for better resource allocation.",
    icon: report,
  },
  {
    title: "Resource Optimization",
    description:
      "Monitor fuel consumption and travel logs to optimize routes and reduce operational costs, making your cleantech initiatives more sustainable.",
    icon: headset,
  },
];


function KeyFeatures() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount and when resizing
    function handleResize() {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg: 992px
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show all cards on larger screens; show toggle on mobile/tablet
  const displayedFeatures =
    !isMobile || showAll ? features : features.slice(0, 4);

  return (
    <section className="gcrow_features">
      <div className="container-fluid">
        <div className="lg:px-[2rem] ">
          <div className="title_area">
            <div>
              <h1>Key Features</h1>
              <p>
                Explore the features that makes G Crow the best asset management
                app.
              </p>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              {displayedFeatures.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="gcrow_featurecard card">
                    <div className="card-body">
                      <div className="content_wrapper">
                        <div className="icon_wrapper">
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={0}
                            height={0}
                          />
                        </div>
                        <h5 className="card-title">{feature.title}</h5>
                      </div>
                      <p className="card-text">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {features.length > 4 && isMobile && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="show_more_btn"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
