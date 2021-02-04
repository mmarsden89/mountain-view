import "./CelestialContainer.scss";
import Moon from "./Moon";
import Sun from "./Sun";

const CelestialContainer = () => {
  return (
    <div className="celestial-container">
      <Moon />
      <Sun />
    </div>
  );
};

export default CelestialContainer;
