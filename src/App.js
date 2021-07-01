import "./App.css";
import {
  Mountains,
  CelestialContainer,
  LoginContainer,
} from "./Components/index";

function App() {
  return (
    <div className="App">
      <CelestialContainer />
      <Mountains />
      {/* <LoginContainer /> */}
    </div>
  );
}

export default App;
