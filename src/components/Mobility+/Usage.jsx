import React from "react";

import simple from "@/assets/products/mobilityPlus/features/faster_operations.webp";
import faster from "@/assets/products/mobilityPlus/features/integrated_waste_storage.webp";
import detachable from "@/assets/products/mobilityPlus/features/detatchable_bandicoot_unit.webp";
import Image from "next/image";

function Usage() {
  return (
    <section className="useage_sec">
      <div className="container useage_container">
        <h1>Faster | Simple | Convenient</h1>
        <div className="row useage_row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 px-2">
            <div className="card useage_card">
              <div className="useage_content">
                <h2>Faster Operations</h2>
                <p>
                  Reduced setup and transit times mean more manholes cleaned per
                  day, significantly boosting productivity.
                </p>
              </div>
              
              <div className="image_sec">
                <Image src={faster} width={0} height={0} alt="faster" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 px-2">
            <div className="card useage_card">
              <div className="useage_content">
                <h2>Simplified Logistics</h2>
                <p>
                  All-in-one unit eliminates the complexities of transporting
                  separate equipment and managing waste handling manually.
                </p>
              </div>
              <div className="image_sec">
                <Image src={simple} width={0} height={0} alt="simple" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 px-2">
            <div className="card useage_card">
              <div className="useage_content">
                <h2>Enhanced Convenience</h2>
                <p>
                  Automated systems for loading, unloading, and waste dumping
                  make the entire operation highly convenient for the crew.
                </p>
              </div>
              <div className="image_sec">
                <Image src={detachable} width={0} height={0} alt="detachable" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Usage;
