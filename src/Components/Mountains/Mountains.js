import "./mountains.scss";
import SingleMountain from "./SingleMountain";
import WideMountain from "./WideMountain";
import Foreground from "./Foreground";

const Mountains = () => {
  return (
    <div className="mountain-container">
      <div class="cloud-bg"></div>
      <WideMountain />
      <SingleMountain />
      <Foreground />
      <div className="moving-cloud"></div>
      <div className="moving-cloud2"></div>
      <div className="wave"></div>
      <div className="foreground-left"></div>
      <div className="foreground-right"></div>
      <div class="tree"></div>
      <div class="tree2"></div>
    </div>
  );
};

export default Mountains;
