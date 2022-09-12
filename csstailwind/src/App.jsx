import AboutIIG from "./component/AboutIIG";
import "./App.css"
import Footer from "./component/Footer";
import Globel from "./component/Globel";
import Mainbackground from "./component/Mainbackground";
import News from "./component/News";
import { Prodcuts } from "./component/Prodcuts";
function App() {
  return (
    <>
      <div className="font-play">
      {/* <div className="font-jura"> */}
        <Mainbackground />
        <AboutIIG />
        <Prodcuts />
        <Globel />
        <News />
        <Footer />
      </div>
    </>
  );
}

export default App;
