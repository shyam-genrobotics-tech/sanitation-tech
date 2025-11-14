import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";


export const CustomNextArrow = ({ onClick, customId }) => (
  <div onClick={onClick} className="custom-arrow next" id={customId}>
    <CiCircleChevRight />
  </div>
);

export const CustomPrevArrow = ({ onClick, customId }) => (
  <div onClick={onClick} className="custom-arrow prev" id={customId}>
    <CiCircleChevLeft />
  </div>
);
