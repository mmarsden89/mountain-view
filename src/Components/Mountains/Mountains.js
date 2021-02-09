import "./mountains.scss";
import SingleMountain from "./SingleMountain";
import WideMountain from "./WideMountain";
import Foreground from "./Foreground";

const Mountains = () => {
  return (
    <div className="mountain-container">
      <div className="cloud-bg"></div>
      <WideMountain />
      <div className="moving-cloud3"></div>
      <SingleMountain />
      <Foreground />
      <div className="moving-cloud"></div>
      <div className="moving-cloud2"></div>
      <div className="moving-cloud3"></div>
      <div className="foreground-left"></div>
      <div className="foreground-right"></div>
      <div className="tree"></div>
      <div className="tree2"></div>
    </div>
  );
};

export default Mountains;
