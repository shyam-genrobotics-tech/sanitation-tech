import React from "react";
import * as Ri from "react-icons/ri";

function Services({ benefits, title, description, className = "" }) {
  return (
    <section className={`service_sec ${className}`} id="services">
      <div className="md:container-fluid">
        <div className="lg:px-[2rem]">
          <div className="services_wrapper">
            <div className="rob_pro_contents">
              <h1 style={{ color: "#fcd901", marginBottom: "1rem" }}>{title}</h1>
              <p className="text-white" style={{ marginTop: "1.5rem" }}>{description}</p>
            </div>

            {/* Updated alignment: use flexbox for cards alignment */}
            <div
              className="services-cards-wrapper md:row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'stretch'
              }}
            >
              {benefits &&
                Array.isArray(benefits) &&
                benefits.length !== 0 &&
                benefits.map((data, index3) => {
                  const colSize = Math.max(3, Math.floor(12 / benefits.length));
                  return (
                    <div
                      className={`col-lg-${colSize} col-md-6 col-sm-12 px-0`}
                      key={index3}
                      style={{
                        flex: `1 1 ${100 / benefits.length}%`,
                        minWidth: '280px',
                        maxWidth: '360px',
                        marginTop: '1.5rem',
                        display: 'flex'
                      }}
                    >
                      <div
                        className={
                          index3 % 2 === 0
                            ? "card service_card up"
                            : "card service_card down"
                        }
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%'
                        }}
                      >
                        <h2>{data?.title}</h2>
                        <p>{data?.description}</p>
                        {data && data?.linkUrl !== "no" && (
                          <a
                            href={data?.linkUrl ?? "/"}
                            className="learn_more_btn"
                            style={{ marginTop: 'auto' }}
                          >
                            Learn More <Ri.RiArrowRightFill />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
