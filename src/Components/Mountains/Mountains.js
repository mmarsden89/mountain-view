import "./mountains.scss";
import SingleMountain from "./SingleMountain";
import WideMountain from "./WideMountain";
import Foreground from "./Foreground";

const Mountains = () => {
  return (
    <div className="mountain-container">
      <WideMountain />
      <SingleMountain />
      <Foreground />
      <div className="foreground-left"></div>
      <div className="foreground-right"></div>
    </div>
  );
};

export default Mountains;
