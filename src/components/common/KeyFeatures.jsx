"use client"
import Image from "next/image";
import React, { useState } from "react";

function KeyFeatures({ featuresData, title, subTitle, className=""}) {
    const [showAll, setShowAll] = useState(false);
  
    const displayedFeatures = showAll
      ? featuresData
      : featuresData.slice(0, 4);
      console.log(displayedFeatures);
      

  return (
    <section className={`key_features md:${className || ""}`}  id="key_features">
      <div className="lg:container-fluid feature_container">
        <div>
          <div className="title_area">
            <div>
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: subTitle }} />
            </div>
          </div>
          <div className="feature_large">
            <div className="flex flex-col items-center">
              <div
                className="grid
                 grid-cols-1 
                 md:grid-cols-2 
                 lg:grid-cols-4
                 gap-2 md:gap-4 lg:gap-8"
              >
                {displayedFeatures &&
                  Array.isArray(displayedFeatures) &&
                  displayedFeatures.map((data, idx) => (
                    <div key={idx} className="card feature_card text-center">
                      <div className="image_wrapper">
                        <Image
                          src={data?.image}
                          width={0}
                          height={0}
                          alt="smaple image"
                        />
                      </div>
                      <div className="feature_content">
                        <div className="head_title">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: data?.title.replace(/\n/g, "<br />"),
                            }}
                          />
                        </div>
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {featuresData.length > 4 && (
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
      </div>
    </section>
  );
}

export default KeyFeatures;
