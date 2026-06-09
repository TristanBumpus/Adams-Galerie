import "./App.css";
import Header from "./Header";
import Title from "./Title";
import GalerieInfo from "./GalerieInfo";
import Footer from "./Footer";
import PaintingsHolder from "./PaintingsHolder";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GalerieInfo></GalerieInfo>
      <Title title={"Preview"}></Title>
      <PaintingsHolder></PaintingsHolder>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
