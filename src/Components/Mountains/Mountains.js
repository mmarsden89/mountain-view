import "./mountains.scss";
import SingleMountain from "./SingleMountain";
import Foreground from "./Foreground";

const Mountains = () => {
  return (
    <div className="mountain-container">
      <SingleMountain />
      <Foreground />
      <div className="foreground-left"></div>
      <div className="foreground-right"></div>
    </div>
  );
};

export default Mountains;
