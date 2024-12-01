import logo from "./logo.svg";
import "./App.css";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ImageSlider />
    </div>
  );
}

export default App;
